import React from 'react';
import { Activity, Target } from 'lucide-react';
import { StatCard } from './StatCard';

interface StatsProps {
  wpm: number;
  accuracy: number;
}

export const Stats: React.FC<StatsProps> = ({ wpm, accuracy }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 px-4">
      <StatCard
        label="Words per Minute"
        value={wpm}
        icon={Activity}
        color="text-custom-main"
      />
      <StatCard
        label="Accuracy"
        value={accuracy}
        unit="%"
        icon={Target}
        color="text-custom-main"
      />
    </div>
  );
};