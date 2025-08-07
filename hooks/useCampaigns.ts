import { useCallback, useState } from "react";

export interface Campaign {
  id: string;
  name: string;
  lastMessageAt: string;
  setting?: string;
  currentLocation?: string;
}

interface UseCampaignsReturn {
  campaigns: Campaign[];
  isLoading: boolean;
  error: string | null;
  loadCampaigns: () => Promise<void>;
  createCampaign: (name: string, setting?: string) => Promise<Campaign>;
  selectCampaign: (campaignId: string) => Campaign | undefined;
}

export function useCampaigns(): UseCampaignsReturn {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    // Mock data for now - in real implementation this would come from Convex
    {
      id: "1",
      name: "The Dragon's Lair",
      lastMessageAt: "2 hours ago",
      setting: "Fantasy Medieval",
      currentLocation: "Goblin Cave",
    },
    {
      id: "2",
      name: "Space Pirates Adventure",
      lastMessageAt: "1 day ago",
      setting: "Sci-Fi Space",
      currentLocation: "Asteroid Base",
    },
    {
      id: "3",
      name: "Mystery in Waterdeep",
      lastMessageAt: "3 days ago",
      setting: "Urban Fantasy",
      currentLocation: "Tavern District",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadCampaigns = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // TODO: Replace with actual Convex query
      // const campaigns = await convex.query(api.campaigns.list);
      // setCampaigns(campaigns);

      // For now, just simulate loading
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to load campaigns";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createCampaign = useCallback(
    async (name: string, setting?: string): Promise<Campaign> => {
      setIsLoading(true);
      setError(null);

      try {
        // TODO: Replace with actual Convex mutation
        // const newCampaign = await convex.mutation(api.campaigns.create, { name, setting });

        const newCampaign: Campaign = {
          id: Date.now().toString(),
          name,
          setting,
          lastMessageAt: "Just now",
        };

        setCampaigns((prev) => [newCampaign, ...prev]);
        return newCampaign;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to create campaign";
        setError(errorMessage);
        throw new Error(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const selectCampaign = useCallback(
    (campaignId: string): Campaign | undefined => {
      return campaigns.find((campaign) => campaign.id === campaignId);
    },
    [campaigns]
  );

  return {
    campaigns,
    isLoading,
    error,
    loadCampaigns,
    createCampaign,
    selectCampaign,
  };
}
