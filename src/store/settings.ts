import { create } from 'zustand';
import type { Hand, CombinationLength } from '../data/colemakLayout';
import type { PracticeMode } from '../types/practice';

interface SettingsState {
  hand: Hand;
  combinationLength: CombinationLength;
  practiceMode: PracticeMode;
  setHand: (hand: Hand) => void;
  setCombinationLength: (length: CombinationLength) => void;
  setPracticeMode: (mode: PracticeMode) => void;
}

export const useSettings = create<SettingsState>((set) => ({
  hand: 'left',
  combinationLength: 2,
  practiceMode: 'count',
  setHand: (hand) => set({ hand }),
  setCombinationLength: (length) => set({ combinationLength: length }),
  setPracticeMode: (mode) => set({ practiceMode: mode })
}));