import { handCombinations, Hand, CombinationLength } from '../data/colemakLayout';

export const getRandomCombinations = (
  hand: Hand,
  length: CombinationLength,
  count: number
): string[] => {
  const availableCombinations = handCombinations[hand][length];
  const result: string[] = [];
  
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * availableCombinations.length);
    result.push(availableCombinations[randomIndex]);
  }
  
  return result;
};