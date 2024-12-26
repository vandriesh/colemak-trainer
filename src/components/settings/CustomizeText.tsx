import { useState } from 'react';
import { X } from 'lucide-react';
import { Tab } from '@headlessui/react';
import { cn } from '../../utils/cn';
import { baseVocabulary } from '../../data/vocabulary';
import { generateCombinations } from '../../utils/combinations';
import type { Hand, CombinationLength } from '../../data/colemakLayout';

export function CustomizeText() {
  const [selectedHand, setSelectedHand] = useState<Hand>('left');
  const [customWords, setCustomWords] = useState<string[]>([]);
  const [wordList, setWordList] = useState('');

  const combinations = {
    2: generateCombinations(selectedHand, 2),
    3: generateCombinations(selectedHand, 3),
    4: generateCombinations(selectedHand, 4)
  };

  const handleWordListChange = (text: string) => {
    setWordList(text);
    const words = text.toLowerCase()
      .split(/[\n,\s]+/)
      .map(word => word.trim())
      .filter(word => /^[a-z]+$/.test(word));

    setCustomWords([...new Set([...customWords, ...words])].sort());
  };

  const handleRemoveWord = (word: string) => {
    setCustomWords(customWords.filter(w => w !== word));
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-custom-text mb-4">Base Vocabulary</h3>
        <div className="bg-custom-sub-alt p-4 rounded-lg">
          <p className="text-custom-text mb-4">
            Words used to generate practice combinations:
          </p>
          <div className="flex flex-wrap gap-2">
            {baseVocabulary.map(word => (
              <span key={word} className="inline-block px-2 py-1 bg-custom-sub bg-opacity-20 rounded text-sm">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-custom-text mb-4">Hand Selection</h3>
        <div className="flex gap-2 mb-4">
          {(['left', 'both', 'right'] as const).map((hand) => (
            <button
              key={hand}
              onClick={() => setSelectedHand(hand)}
              className={cn(
                'px-4 py-2 rounded-lg transition-all',
                selectedHand === hand
                  ? 'bg-custom-main text-custom-bg'
                  : 'bg-custom-sub-alt text-custom-text hover:bg-opacity-80'
              )}
            >
              {hand.charAt(0).toUpperCase() + hand.slice(1)} Hand
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-custom-text mb-4">Generated Combinations</h3>
        <Tab.Group>
          <Tab.List className="flex space-x-2 rounded-lg bg-custom-sub-alt p-1 mb-4">
            {[2, 3, 4].map((length) => (
              <Tab
                key={length}
                className={({ selected }) =>
                  cn(
                    'w-full rounded-md py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-custom-bg focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-custom-main text-custom-bg shadow'
                      : 'text-custom-text hover:bg-custom-sub/[0.12]'
                  )
                }
              >
                {length} Letters ({combinations[length as CombinationLength].length})
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {[2, 3, 4].map((length) => (
              <Tab.Panel key={length}>
                <div className="flex flex-wrap gap-2">
                  {combinations[length as CombinationLength].map((combo) => (
                    <div
                      key={combo}
                      className="flex items-center gap-2 bg-custom-sub-alt text-custom-text px-3 py-1 rounded-lg"
                    >
                      <span className="font-mono">{combo}</span>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-custom-text mb-4">Add Custom Words</h3>
        <textarea
          value={wordList}
          onChange={(e) => handleWordListChange(e.target.value)}
          placeholder="Add your own words to generate additional combinations..."
          className="w-full h-32 p-4 bg-custom-sub-alt text-custom-text border border-custom-sub border-opacity-10 rounded-lg resize-y mb-4"
        />
        {customWords.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {customWords.map((word) => (
              <div
                key={word}
                className="flex items-center gap-2 bg-custom-sub-alt text-custom-text px-3 py-1 rounded-lg"
              >
                <span>{word}</span>
                <button
                  onClick={() => handleRemoveWord(word)}
                  className="text-custom-sub hover:text-custom-error"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}