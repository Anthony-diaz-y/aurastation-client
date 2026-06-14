import BottomNav from "@/src/shared/BottomNav";
import HomeHeader from "../components/HomeHeader";
import HomeLogo from "../components/HomeLogo";
import MeasureActions from "../components/MeasureActions";
import QuickStats from "../components/QuickStats";
import StressCard from "../components/StressCard";

export default function HomeContainer() {
  return (
    <div className="min-h-dvh bg-[#e9eef6] sm:flex sm:justify-center">
      <main className="relative flex min-h-dvh w-full max-w-105 flex-col overflow-hidden bg-white sm:shadow-[0_16px_48px_rgba(29,87,187,0.12)]">
        <HomeHeader />

        <section className="flex shrink-0 flex-col items-center bg-white px-5 pb-4 pt-4">
          <HomeLogo />
          <MeasureActions />
          <QuickStats />
        </section>

        <section className="flex min-h-0 flex-1 flex-col">
          <StressCard className="min-h-0 flex-1" />
        </section>

        <BottomNav />
      </main>
    </div>
  );
}
