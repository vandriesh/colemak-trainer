import React from 'react';
import { CombinationLength } from '../utils/practice';

interface LengthSelectorProps {
  value: CombinationLength;
  onChange: (length: CombinationLength) => void;
}

export const LengthSelector: React.FC<LengthSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="flex gap-2 justify-center mb-8">
      {[2, 3, 4].map((length) => (
        <button
          key={length}
          onClick={() => onChange(length as CombinationLength)}
          className={`px-4 py-2 rounded-lg transition-all ${
            value === length
              ? 'bg-custom-main text-custom-bg'
              : 'bg-custom-sub-alt text-custom-text hover:bg-opacity-80'
          }`}
        >
          {length} Letters
        </button>
      ))}
    </div>
  );
};