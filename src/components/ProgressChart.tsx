import React from 'react';
import type { PracticeStats } from '../types/practice';

interface ProgressChartProps {
  recentScores: PracticeStats[];
}

export const ProgressChart: React.FC<ProgressChartProps> = ({ recentScores }) => {
  if (recentScores.length === 0) return null;

  const maxWpm = Math.max(...recentScores.map(s => s.wpm));
  const height = 150;
  const scores = recentScores.slice(-10); // Show last 10 scores

  return (
    <div className="bg-custom-sub-alt p-6 rounded-lg shadow-lg mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-custom-text">Progress</h3>
        <div className="text-sm text-custom-sub">
          Best: {maxWpm} WPM
        </div>
      </div>
      
      <div className="relative h-[150px]">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="w-full h-px bg-custom-sub opacity-20"
            />
          ))}
        </div>

        {/* Bars */}
        <div className="absolute inset-0 flex items-end justify-between gap-1">
          {scores.map((score, i) => (
            <div key={i} className="group relative flex-1">
              <div
                className="w-full bg-custom-main bg-opacity-20 rounded-t transition-all duration-300 hover:bg-opacity-30"
                style={{
                  height: `${(score.wpm / maxWpm) * height}px`,
                }}
              >
                <div 
                  className="absolute w-full h-2 bottom-0 bg-custom-main rounded-t"
                  style={{
                    height: `${Math.max((score.wpm / maxWpm) * height, 2)}px`,
                  }}
                />
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-custom-main px-2 py-1 rounded text-xs text-custom-bg whitespace-nowrap">
                  {score.wpm} WPM • {score.accuracy}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between mt-2">
        {scores.map((_, i) => (
          <div key={i} className="text-xs text-custom-sub">
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};