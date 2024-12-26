import { Tabs } from '../components/settings/Tabs';
import { GeneralSettings } from '../components/settings/GeneralSettings';
import { CustomizeText } from '../components/settings/CustomizeText';

export function Settings() {
  const tabs = [
    {
      label: 'General',
      content: <GeneralSettings />
    },
    {
      label: 'Customize Text',
      content: <CustomizeText />
    }
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-custom-text mb-8">Settings</h2>
      <Tabs tabs={tabs} />
    </div>
  );
}