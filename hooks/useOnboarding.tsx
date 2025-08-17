import { router } from "expo-router";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CharacterClass = "Fighter" | "Rogue";
export type Background = "Noble" | "Street Urchin" | "Soldier";

export type AbilityScores = {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
};

export type OnboardingStep =
  | "class"
  | "stats"
  | "background"
  | "confirm"
  | "idle";

export type CharacterDraft = {
  class: CharacterClass | null;
  background: Background | null;
  abilities: AbilityScores;
  pointsRemaining: number;
};

const DEFAULT_ABILITY_SCORES: AbilityScores = {
  str: 8,
  dex: 8,
  con: 8,
  int: 8,
  wis: 8,
  cha: 8,
};

const DEFAULT_POINTS = 27; // 27-point buy

export type OnboardingContextValue = {
  isActive: boolean;
  step: OnboardingStep;
  draft: CharacterDraft;
  start: () => void;
  cancel: () => void;
  goToClass: () => void;
  goToStats: () => void;
  goToBackground: () => void;
  goToConfirm: () => void;
  setClass: (value: CharacterClass) => void;
  setBackground: (value: Background) => void;
  setAbility: (key: keyof AbilityScores, value: number) => void;
  adjustAbility: (key: keyof AbilityScores, delta: number) => void;
  canContinueFromStats: boolean;
};

const OnboardingContext = createContext<OnboardingContextValue | undefined>(
  undefined
);

function calculatePointBuyCost(score: number): number {
  // Standard 5e point-buy costs
  // 8:0, 9:1, 10:2, 11:3, 12:4, 13:5, 14:7, 15:9
  const costTable: Record<number, number> = {
    8: 0,
    9: 1,
    10: 2,
    11: 3,
    12: 4,
    13: 5,
    14: 7,
    15: 9,
  };
  return costTable[score] ?? Infinity;
}

function calculatePointsRemaining(abilities: AbilityScores): number {
  const base = DEFAULT_POINTS;
  const totalCost = (Object.values(abilities) as number[])
    .map((score) => calculatePointBuyCost(score))
    .reduce((sum, cost) => sum + cost, 0);
  return base - totalCost;
}

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState<OnboardingStep>("idle");
  const [draft, setDraft] = useState<CharacterDraft>(() => ({
    class: null,
    background: null,
    abilities: { ...DEFAULT_ABILITY_SCORES },
    pointsRemaining: DEFAULT_POINTS,
  }));

  const isActive = step !== "idle";

  const recalc = useCallback((next: Partial<CharacterDraft> = {}) => {
    setDraft((prev) => {
      const abilities = next.abilities ?? prev.abilities;
      const pointsRemaining = calculatePointsRemaining(abilities);
      return { ...prev, ...next, abilities, pointsRemaining };
    });
  }, []);

  const start = useCallback(() => {
    setStep("class");
  }, []);

  const cancel = useCallback(() => {
    setStep("idle");
    setDraft({
      class: null,
      background: null,
      abilities: { ...DEFAULT_ABILITY_SCORES },
      pointsRemaining: DEFAULT_POINTS,
    });
  }, []);

  const goToClass = useCallback(() => setStep("class"), []);
  const goToStats = useCallback(() => {
    setStep("stats");
    router.push("/(drawer)/(tabs)/stats");
  }, []);
  const goToBackground = useCallback(() => setStep("background"), []);
  const goToConfirm = useCallback(() => setStep("confirm"), []);

  const setClass = useCallback(
    (value: CharacterClass) => {
      recalc({ class: value });
    },
    [recalc]
  );

  const setBackground = useCallback(
    (value: Background) => {
      recalc({ background: value });
    },
    [recalc]
  );

  const setAbility = useCallback(
    (key: keyof AbilityScores, value: number) => {
      const clamped = Math.max(8, Math.min(15, Math.floor(value)));
      recalc({ abilities: { ...draft.abilities, [key]: clamped } });
    },
    [draft.abilities, recalc]
  );

  const adjustAbility = useCallback(
    (key: keyof AbilityScores, delta: number) => {
      setAbility(key, draft.abilities[key] + delta);
    },
    [draft.abilities, setAbility]
  );

  const canContinueFromStats = useMemo(
    () => draft.pointsRemaining === 0,
    [draft.pointsRemaining]
  );

  const value: OnboardingContextValue = useMemo(
    () => ({
      isActive,
      step,
      draft,
      start,
      cancel,
      goToClass,
      goToStats,
      goToBackground,
      goToConfirm,
      setClass,
      setBackground,
      setAbility,
      adjustAbility,
      canContinueFromStats,
    }),
    [
      adjustAbility,
      cancel,
      canContinueFromStats,
      draft,
      goToBackground,
      goToClass,
      goToConfirm,
      goToStats,
      isActive,
      setAbility,
      setBackground,
      setClass,
      start,
      step,
    ]
  );

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding(): OnboardingContextValue {
  const ctx = useContext(OnboardingContext);
  if (!ctx)
    throw new Error("useOnboarding must be used within OnboardingProvider");
  return ctx;
}
