import React, { useState, useEffect, useCallback } from 'react';
import { Square } from 'lucide-react';
import type { PracticeMode } from '../types/practice';

interface TypingAreaProps {
  combinations: string[];
  onComplete: (wpm: number, accuracy: number) => void;
  onKeysUpdate: (keys: string[]) => void;
  mode: PracticeMode;
}

export const TypingArea: React.FC<TypingAreaProps> = ({ 
  combinations, 
  onComplete, 
  onKeysUpdate,
  mode 
}) => {
  const [input, setInput] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [errors, setErrors] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(true);

  const text = combinations.join(' ');

  const resetState = useCallback(() => {
    setInput('');
    setCurrentIndex(0);
    setStartTime(null);
    setErrors(0);
    setTimeLeft(60);
    setIsActive(true);
  }, []);

  useEffect(() => {
    const currentWord = combinations[Math.floor(currentIndex / 3)];
    onKeysUpdate(currentWord ? currentWord.split('') : []);
  }, [currentIndex, combinations, onKeysUpdate]);

  useEffect(() => {
    if (mode === 'timed' && startTime && isActive) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [mode, startTime, isActive]);

  const handleComplete = () => {
    if (!startTime || !isActive) return;
    
    const endTime = Date.now();
    const timeInMinutes = (endTime - startTime) / 60000;
    const wordsTyped = text.length / 5;
    const wpm = Math.round(wordsTyped / timeInMinutes);
    const accuracy = Math.round(((text.length - errors) / text.length) * 100);
    
    onComplete(wpm, accuracy);
    resetState();
  };

  const handleStop = () => {
    setIsActive(false);
    handleComplete();
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isActive) return;
    
    const value = e.target.value;
    
    if (!startTime) {
      setStartTime(Date.now());
    }

    if (value.length > input.length) {
      if (value[value.length - 1] !== text[value.length - 1]) {
        setErrors(errors + 1);
      }
    }

    setInput(value);
    setCurrentIndex(value.length);

    if (value.length === text.length) {
      handleComplete();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        {mode === 'timed' && startTime && (
          <span className="text-2xl font-bold text-custom-text">{timeLeft}s</span>
        )}
        {startTime && isActive && (
          <button
            onClick={handleStop}
            className="flex items-center gap-2 px-4 py-2 bg-custom-error text-custom-bg rounded-lg hover:opacity-90 transition-opacity ml-auto"
          >
            <Square className="w-5 h-5" />
            Stop
          </button>
        )}
      </div>
      
      <div className="relative mb-8 p-6 bg-custom-sub-alt rounded-lg shadow-lg">
        <p className="text-2xl font-mono leading-relaxed tracking-wide">
          {text.split('').map((char, index) => {
            let className = 'transition-colors duration-150 ';
            if (index < currentIndex) {
              className += input[index] === char ? 'text-custom-main' : 'text-custom-error';
            } else if (index === currentIndex) {
              className += 'bg-custom-main text-custom-bg';
            } else {
              className += 'text-custom-text';
            }
            return (
              <span key={index} className={className}>
                {char}
              </span>
            );
          })}
        </p>
      </div>
      
      <input
        type="text"
        value={input}
        onChange={handleInput}
        className="w-full p-4 text-xl font-mono bg-custom-sub-alt text-custom-text border-2 border-custom-sub rounded-lg focus:border-custom-main focus:outline-none"
        placeholder="Start typing..."
        autoFocus
        disabled={!isActive || (mode === 'timed' && timeLeft === 0)}
      />
    </div>
  );
};