import React from 'react';
import { Timer, Hash, Infinity } from 'lucide-react';
import type { PracticeMode } from '../types/practice';

interface PracticeModeSelectorProps {
  mode: PracticeMode;
  onChange: (mode: PracticeMode) => void;
}

export const PracticeModeSelector: React.FC<PracticeModeSelectorProps> = ({ mode, onChange }) => {
  return (
    <div className="flex gap-4 justify-center mb-8">
      <button
        onClick={() => onChange('timed')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          mode === 'timed' 
            ? 'bg-custom-main text-custom-bg' 
            : 'bg-custom-sub-alt text-custom-text hover:bg-opacity-80'
        }`}
      >
        <Timer className="w-5 h-5" />
        Timed
      </button>
      <button
        onClick={() => onChange('count')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          mode === 'count' 
            ? 'bg-custom-main text-custom-bg' 
            : 'bg-custom-sub-alt text-custom-text hover:bg-opacity-80'
        }`}
      >
        <Hash className="w-5 h-5" />
        Word Count
      </button>
      <button
        onClick={() => onChange('infinite')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          mode === 'infinite' 
            ? 'bg-custom-main text-custom-bg' 
            : 'bg-custom-sub-alt text-custom-text hover:bg-opacity-80'
        }`}
      >
        <Infinity className="w-5 h-5" />
        Infinite
      </button>
    </div>
  );
};