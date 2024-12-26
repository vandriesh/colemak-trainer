export interface PracticeStats {
  wpm: number;
  accuracy: number;
  timestamp: number;
}

export interface UserProgress {
  personalBests: {
    [key: string]: PracticeStats; // Format: "hand-length" e.g., "left-2"
  };
  recentScores: PracticeStats[];
}

export type PracticeMode = 'timed' | 'count' | 'infinite';