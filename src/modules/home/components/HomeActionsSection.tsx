import { type HomeActionsSectionProps } from "../interfaces/home.interfaces";
import HomeLogo from "./HomeLogo";
import MeasureActions from "./MeasureActions";
import QuickStats from "./QuickStats";

export default function HomeActionsSection({
  lastBpm,
  streak,
}: HomeActionsSectionProps) {
  return (
    <section className="flex shrink-0 flex-col items-center bg-white px-5 pb-4 pt-4">
      <HomeLogo />
      <MeasureActions />
      <QuickStats lastBpm={lastBpm} streak={streak} />
    </section>
  );
}
