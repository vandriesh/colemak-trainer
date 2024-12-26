import { handCombinations } from './colemakLayout';

// Combine all combinations from different hands into a single set for each length
export const getDefaultCombinations = () => {
  const result: Record<2 | 3 | 4, string[]> = {
    2: [],
    3: [],
    4: []
  };

  // Add combinations from each hand type
  ['left', 'right', 'both'].forEach(hand => {
    Object.entries(handCombinations[hand]).forEach(([length, combinations]) => {
      result[length as 2 | 3 | 4].push(...combinations);
    });
  });

  // Remove duplicates and sort
  return {
    2: [...new Set(result[2])].sort(),
    3: [...new Set(result[3])].sort(),
    4: [...new Set(result[4])].sort()
  };
};