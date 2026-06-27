"use client";

import BottomNav from "@/src/shared/BottomNav";
import { useCalendar } from "@/src/modules/calendar/hooks/useCalendar";
import HomeActionsSection from "../components/HomeActionsSection";
import HomeHeader from "../components/HomeHeader";
import StressCard from "../components/StressCard";
import { useChartData } from "../hooks/useChartData";
import { useUserProfile } from "../hooks/useUserProfile";

export default function HomeContainer() {
  const { user } = useUserProfile();
  const { logs } = useCalendar();
  const { chartData, periodLabel, latestStress } = useChartData(logs);

  return (
    <main className="relative flex min-h-dvh flex-col bg-white">
      <div className="mx-auto flex w-full max-w-lg flex-col min-h-dvh overflow-hidden">
        <HomeHeader avatarId={user?.avatarId} />

        <HomeActionsSection
          lastBpm={user?.lastBpm ?? null}
          streak={user?.streak ?? 1}
        />

        <section className="flex min-h-0 flex-1 flex-col">
          <StressCard
            className="min-h-0 flex-1"
            chartData={chartData}
            periodLabel={periodLabel}
            latestStress={latestStress}
          />
        </section>

        <BottomNav />
      </div>
    </main>
  );
}
