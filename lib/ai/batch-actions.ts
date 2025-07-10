// Batch multiple dice rolls or quick actions
const batchedActions = await Promise.all([
  rollDice(20),
  rollDice(6),
  updateCharacterHP(characterId, -damage),
]);
