import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { KeyboardLayout } from '../components/KeyboardLayout';
import { TypingArea } from '../components/TypingArea';
import { Stats } from '../components/stats/Stats';
import { HandSelector } from '../components/HandSelector';
import { LengthSelector } from '../components/LengthSelector';
import { PracticeModeSelector } from '../components/PracticeModeSelector';
import { ProgressChart } from '../components/ProgressChart';
import { getRandomCombinations } from '../utils/practice';
import { loadProgress, saveProgress } from '../utils/storage';
import { useSettings } from '../store/settings';

export function Practice() {
  const { hand, combinationLength, practiceMode, setHand, setCombinationLength, setPracticeMode } = useSettings();
  const [combinations, setCombinations] = useState(() => 
    getRandomCombinations(hand, combinationLength, 10)
  );
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const [stats, setStats] = useState<{ wpm: number; accuracy: number } | null>(null);
  const progress = loadProgress();

  const handleComplete = (wpm: number, accuracy: number) => {
    setStats({ wpm, accuracy });
    saveProgress(
      { wpm, accuracy, timestamp: Date.now() },
      hand,
      combinationLength
    );
  };

  const handleReset = () => {
    setCombinations(getRandomCombinations(hand, combinationLength, 10));
    setStats(null);
  };

  const handleHandChange = (newHand: typeof hand) => {
    setHand(newHand);
    setCombinations(getRandomCombinations(newHand, combinationLength, 10));
    setStats(null);
  };

  const handleLengthChange = (newLength: typeof combinationLength) => {
    setCombinationLength(newLength);
    setCombinations(getRandomCombinations(hand, newLength, 10));
    setStats(null);
  };

  const handleModeChange = (newMode: typeof practiceMode) => {
    setPracticeMode(newMode);
    setStats(null);
  };

  return (
    <div>
      <div className="mb-8 space-y-8">
        <section>
          <h3 className="text-lg font-semibold text-custom-text mb-4">Hand Preference</h3>
          <HandSelector value={hand} onChange={handleHandChange} />
        </section>
{/* 
        <section>
          <h3 className="text-lg font-semibold text-custom-text mb-4">Combination Length</h3>
          <LengthSelector value={combinationLength} onChange={handleLengthChange} />
        </section>

        <section>
          <h3 className="text-lg font-semibold text-custom-text mb-4">Practice Mode</h3>
          <PracticeModeSelector mode={practiceMode} onChange={handleModeChange} />
        </section> */}
      </div>

      <KeyboardLayout activeKeys={activeKeys} hand={hand} />
      
      {stats && (
        <div className="mb-8">
          <Stats wpm={stats.wpm} accuracy={stats.accuracy} />
          <ProgressChart recentScores={progress.recentScores} />
        </div>
      )}

      <TypingArea 
        combinations={combinations}
        onComplete={handleComplete}
        onKeysUpdate={setActiveKeys}
        mode={practiceMode}
      />

      <div className="text-center mt-8">
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-3 bg-custom-main text-custom-bg rounded-lg hover:opacity-90 transition-opacity"
        >
          <RefreshCw className="w-5 h-5" />
          New Practice Set
        </button>
      </div>
    </div>
  );
}