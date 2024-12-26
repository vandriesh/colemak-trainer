import React from 'react';
import { type Hand, leftHandKeys, rightHandKeys } from '../data/colemakLayout';

interface KeyboardLayoutProps {
  activeKeys: string[];
  hand: Hand;
}

export const KeyboardLayout: React.FC<KeyboardLayoutProps> = ({ activeKeys, hand }) => {
  const rows = [
    ['q', 'w', 'f', 'p', 'g', 'j', 'l', 'u', 'y', ';'],
    ['a', 'r', 's', 't', 'd', 'h', 'n', 'e', 'i', 'o'],
    ['z', 'x', 'c', 'v', 'b', 'k', 'm', ',', '.', '/']
  ];

  return (
    <div className="mb-8 select-none">
      <div className="inline-block bg-custom-sub-alt rounded-lg p-4 shadow-md">
        {rows.map((row, i) => (
          <div key={i} className="flex gap-1 mb-1 last:mb-0">
            {row.map((key) => {
              const isLeft = leftHandKeys.includes(key);
              const isRight = rightHandKeys.includes(key);
              const isActive = activeKeys.includes(key);
              const isCurrentHand = (hand === 'left' && isLeft) || (hand === 'right' && isRight);

              return (
                <div
                  key={key}
                  className={`
                    w-10 h-10 flex items-center justify-center rounded
                    ${isCurrentHand ? 'border-2 border-custom-main' : 'border border-custom-sub'}
                    ${isActive ? 'bg-custom-main text-custom-bg' : 'bg-custom-bg text-custom-text'}
                    ${!isCurrentHand ? 'opacity-30' : ''}
                    font-mono text-sm
                  `}
                >
                  {key.toUpperCase()}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};