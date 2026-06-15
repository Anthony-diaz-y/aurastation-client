"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import BottomNav from "@/src/shared/BottomNav";
import HomeHeader from "../components/HomeHeader";
import HomeLogo from "../components/HomeLogo";
import MeasureActions from "../components/MeasureActions";
import QuickStats from "../components/QuickStats";
import StressCard from "../components/StressCard";

interface UserProfile {
  avatarId?: string;
  lastBpm?: number | null;
  streak?: number;
}

export default function HomeContainer() {
  const [user, setUser] = useState<UserProfile | null>(() => {
    if (typeof window !== "undefined") {
      const cachedAvatar = localStorage.getItem("user_avatar_id");
      if (cachedAvatar) {
        return { avatarId: cachedAvatar };
      }
    }
    return null;
  });

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/";
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_URL}auth/me`);
        if (response.data) {
          setUser(response.data);
          if (response.data.avatarId) {
            localStorage.setItem("user_avatar_id", response.data.avatarId);
          }
        }
      } catch (error) {
        console.error("Error fetching user profile in HomeContainer:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="min-h-dvh bg-[#e9eef6] sm:flex sm:justify-center">
      <main className="relative flex min-h-dvh w-full max-w-105 flex-col overflow-hidden bg-white sm:shadow-[0_16px_48px_rgba(29,87,187,0.12)]">
        <HomeHeader avatarId={user?.avatarId} />

        <section className="flex shrink-0 flex-col items-center bg-white px-5 pb-4 pt-4">
          <HomeLogo />
          <MeasureActions />
          <QuickStats lastBpm={user?.lastBpm ?? null} streak={user?.streak ?? 1} />
        </section>

        <section className="flex min-h-0 flex-1 flex-col">
          <StressCard className="min-h-0 flex-1" />
        </section>

        <BottomNav />
      </main>
    </div>
  );
}
