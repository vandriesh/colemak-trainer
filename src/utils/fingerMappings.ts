import type { Hand } from '../data/colemakLayout';

export interface FingerKey {
  key: string;
  finger: 'pinky' | 'ring' | 'middle' | 'pointer' | 'thumb';
  hand: Hand | 'both';
}

export const fingerMappings: FingerKey[] = [
  // Left hand
  { key: 'q', finger: 'pinky', hand: 'left' },
  { key: 'a', finger: 'pinky', hand: 'left' },
  { key: 'z', finger: 'pinky', hand: 'left' },
  
  { key: 'w', finger: 'ring', hand: 'left' },
  { key: 'r', finger: 'ring', hand: 'left' },
  { key: 'x', finger: 'ring', hand: 'left' },
  
  { key: 'f', finger: 'middle', hand: 'left' },
  { key: 's', finger: 'middle', hand: 'left' },
  { key: 'c', finger: 'middle', hand: 'left' },
  
  { key: 'p', finger: 'pointer', hand: 'left' },
  { key: 't', finger: 'pointer', hand: 'left' },
  { key: 'v', finger: 'pointer', hand: 'left' },
  
  { key: 'g', finger: 'pointer', hand: 'left' },
  { key: 'd', finger: 'pointer', hand: 'left' },
  { key: 'b', finger: 'pointer', hand: 'left' },

  // Right hand
  { key: ';', finger: 'pinky', hand: 'right' },
  { key: 'o', finger: 'pinky', hand: 'right' },
  { key: '/', finger: 'pinky', hand: 'right' },
  
  { key: 'y', finger: 'ring', hand: 'right' },
  { key: 'i', finger: 'ring', hand: 'right' },
  { key: '.', finger: 'ring', hand: 'right' },
  
  { key: 'u', finger: 'middle', hand: 'right' },
  { key: 'e', finger: 'middle', hand: 'right' },
  { key: ',', finger: 'middle', hand: 'right' },
  
  { key: 'l', finger: 'pointer', hand: 'right' },
  { key: 'n', finger: 'pointer', hand: 'right' },
  { key: 'm', finger: 'pointer', hand: 'right' },
  
  { key: 'j', finger: 'pointer', hand: 'right' },
  { key: 'h', finger: 'pointer', hand: 'right' },
  { key: 'k', finger: 'pointer', hand: 'right' },
];

export const getKeyInfo = (key: string): FingerKey | undefined => {
  return fingerMappings.find(mapping => mapping.key === key);
};