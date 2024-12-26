import React from 'react';
import { type Hand } from '../data/colemakLayout';
import { getKeyInfo } from '../utils/fingerMappings';
import { cn } from '../utils/cn';

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

  const getFingerBorder = (key: string) => {
    const keyInfo = getKeyInfo(key);
    if (!keyInfo) return 'border-custom-sub';

    return {
      pinky: 'border-pink-400',
      ring: 'border-purple-400',
      middle: 'border-blue-400',
      pointer: 'border-green-400',
      thumb: 'border-custom-sub'
    }[keyInfo.finger];
  };

  return (
    <div className="mb-8 select-none">
      <div className="inline-block bg-custom-sub-alt rounded-lg p-4 shadow-md">
        {rows.map((row, i) => (
          <div key={i} className="flex gap-1 mb-1 last:mb-0">
            {row.map((key) => {
              const isActive = activeKeys.includes(key);
              const keyInfo = getKeyInfo(key);
              const isCurrentHand = keyInfo && (keyInfo.hand === hand || hand === 'both');

              return (
                <div
                  key={key}
                  className={cn(
                    'w-10 h-10 flex items-center justify-center rounded transition-all duration-150',
                    'bg-custom-bg',
                    isActive ? 'bg-custom-main' : '',
                    'border-2',
                    isCurrentHand ? getFingerBorder(key) : 'border-custom-sub opacity-30',
                    isActive ? 'text-custom-bg' : 'text-custom-text',
                    'font-mono text-sm'
                  )}
                >
                  {key.toUpperCase()}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex justify-center gap-6 text-sm text-custom-text">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-pink-400"></div>
          <span>Pinky</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-purple-400"></div>
          <span>Ring</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-blue-400"></div>
          <span>Middle</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2 border-green-400"></div>
          <span>Pointer</span>
        </div>
      </div>
    </div>
  );
};