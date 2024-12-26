import { Tab } from '@headlessui/react';
import { cn } from '../../utils/cn';

interface TabsProps {
  tabs: {
    label: string;
    content: React.ReactNode;
  }[];
}

export function Tabs({ tabs }: TabsProps) {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-2 rounded-lg bg-custom-sub-alt p-1 mb-8">
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
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
            {tab.label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabs.map((tab) => (
          <Tab.Panel key={tab.label}>{tab.content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}