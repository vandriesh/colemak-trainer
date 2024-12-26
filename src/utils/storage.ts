import type { UserProgress, PracticeStats } from '../types/practice';

const STORAGE_KEY = 'colemak-practice-progress';

export const saveProgress = (stats: PracticeStats, hand: string, length: number) => {
  const progress = loadProgress();
  const key = `${hand}-${length}`;

  // Update personal best if applicable
  if (!progress.personalBests[key] || stats.wpm > progress.personalBests[key].wpm) {
    progress.personalBests[key] = stats;
  }

  // Add to recent scores
  progress.recentScores.push(stats);
  if (progress.recentScores.length > 100) {
    progress.recentScores.shift();
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const loadProgress = (): UserProgress => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return {
      personalBests: {},
      recentScores: []
    };
  }
  return JSON.parse(stored);
};