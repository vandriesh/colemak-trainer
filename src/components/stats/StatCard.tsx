import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: number;
  unit?: string;
  icon: LucideIcon;
  color: string;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  label, 
  value, 
  unit = '', 
  icon: Icon,
  color 
}) => {
  return (
    <div className="bg-custom-sub-alt p-4 rounded-lg shadow-lg border border-custom-sub border-opacity-10">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded ${color} bg-opacity-10`}>
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        <div>
          <p className="text-sm text-custom-sub mb-1">{label}</p>
          <p className="text-2xl font-bold text-custom-text">
            {value}{unit}
          </p>
        </div>
      </div>
    </div>
  );
};