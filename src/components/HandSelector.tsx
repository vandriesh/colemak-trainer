import React from 'react';
import { Hand } from '../data/colemakLayout';
import { PanelLeftClose, PanelRightClose, Keyboard } from 'lucide-react';

interface HandSelectorProps {
  value: Hand;
  onChange: (hand: Hand) => void;
}

export const HandSelector: React.FC<HandSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="flex gap-4 justify-center mb-8">
      <button
        onClick={() => onChange('left')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          value === 'left'
            ? 'bg-custom-main text-custom-bg'
            : 'bg-custom-sub-alt text-custom-text hover:bg-opacity-80'
        }`}
      >
        <PanelLeftClose className="w-5 h-5" />
        Left Hand
      </button>
      <button
        onClick={() => onChange('both')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          value === 'both'
            ? 'bg-custom-main text-custom-bg'
            : 'bg-custom-sub-alt text-custom-text hover:bg-opacity-80'
        }`}
      >
        <Keyboard className="w-5 h-5" />
        Both Hands
      </button>
      <button
        onClick={() => onChange('right')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          value === 'right'
            ? 'bg-custom-main text-custom-bg'
            : 'bg-custom-sub-alt text-custom-text hover:bg-opacity-80'
        }`}
      >
        <PanelRightClose className="w-5 h-5" />
        Right Hand
      </button>
    </div>
  );
};