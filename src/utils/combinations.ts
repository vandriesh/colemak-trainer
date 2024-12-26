import { baseVocabulary } from '../data/vocabulary';
import { leftHandKeys, rightHandKeys } from '../data/colemakLayout';
import type { Hand, CombinationLength } from '../data/colemakLayout';

// Get all possible n-length combinations from a word
const getWordCombinations = (word: string, length: number): string[] => {
  const combinations: string[] = [];
  for (let i = 0; i <= word.length - length; i++) {
    combinations.push(word.slice(i, i + length));
  }
  return combinations;
};

// Check if a combination belongs to a specific hand
const getCombinationHand = (combination: string): Hand | null => {
  const letters = combination.split('');
  const isLeft = letters.every(letter => leftHandKeys.includes(letter));
  const isRight = letters.every(letter => rightHandKeys.includes(letter));
  
  if (isLeft) return 'left';
  if (isRight) return 'right';
  if (letters.some(letter => leftHandKeys.includes(letter)) && 
      letters.some(letter => rightHandKeys.includes(letter))) {
    return 'both';
  }
  return null;
};

// Generate combinations from vocabulary for a specific hand and length
export const generateCombinations = (
  hand: Hand,
  length: CombinationLength
): string[] => {
  const allCombinations = baseVocabulary
    .flatMap(word => getWordCombinations(word.toLowerCase(), length))
    .filter(combo => getCombinationHand(combo) === hand);

  return [...new Set(allCombinations)].sort();
};