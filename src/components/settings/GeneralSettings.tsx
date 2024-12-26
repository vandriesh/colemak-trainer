import { HandSelector } from '../HandSelector';
import { LengthSelector } from '../LengthSelector';
import { PracticeModeSelector } from '../PracticeModeSelector';
import { ProgressChart } from '../ProgressChart';
import { loadProgress } from '../../utils/storage';
import { useSettings } from '../../store/settings';

export function GeneralSettings() {
  const progress = loadProgress();
  const { hand, combinationLength, practiceMode, setHand, setCombinationLength, setPracticeMode } = useSettings();
  
  return (
    <div>
      <section className="mb-12">
        <h3 className="text-lg font-semibold text-custom-text mb-4">Hand Preference</h3>
        <HandSelector value={hand} onChange={setHand} />
      </section>

      <section className="mb-12">
        <h3 className="text-lg font-semibold text-custom-text mb-4">Combination Length</h3>
        <LengthSelector value={combinationLength} onChange={setCombinationLength} />
      </section>

      <section className="mb-12">
        <h3 className="text-lg font-semibold text-custom-text mb-4">Practice Mode</h3>
        <PracticeModeSelector mode={practiceMode} onChange={setPracticeMode} />
      </section>

      <section>
        <h3 className="text-lg font-semibold text-custom-text mb-4">Progress</h3>
        <ProgressChart recentScores={progress.recentScores} />
      </section>
    </div>
  );
}