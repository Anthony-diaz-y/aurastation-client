"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { evaluateBpm } from "../utils/bpmEvaluator";
import { BpmResult } from "../interfaces/midiendo.interfaces";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

const MEASURE_DURATION_MS = 9000;

interface UseMidiendoReturn {
  measuring: boolean;
  result: BpmResult | null;
}

export function useMidiendo(): UseMidiendoReturn {
  const searchParams = useSearchParams();
  const rawBpm = searchParams.get("bpm");
  const queryClient = useQueryClient();

  const bpmValue = useMemo(() => {
    if (!rawBpm) return null;
    const parsed = parseInt(rawBpm, 10);
    if (isNaN(parsed) || parsed < 0 || parsed > 300) return null;
    return parsed;
  }, [rawBpm]);

  const [measuring, setMeasuring] = useState(bpmValue !== null);

  useEffect(() => {
    if (bpmValue === null) return;
    const timer = setTimeout(() => setMeasuring(false), MEASURE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [bpmValue]);

  useEffect(() => {
    if (!measuring && bpmValue !== null) {
      const saveBpm = async () => {
        try {
          const API_URL =
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/";

          await axios.patch(
            `${API_URL}users/me`,
            { lastBpm: bpmValue },
            { withCredentials: true },
          );

          const localDate = new Date().toLocaleDateString("sv");

          const localTime = new Date().toLocaleTimeString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
          });

          const evaluation = evaluateBpm(bpmValue);

          await axios.post(
            `${API_URL}calendar`,
            {
              date: localDate,
              bpm: bpmValue,
              stressLevel: evaluation.level,
              registrationTime: localTime,
            },
            { withCredentials: true },
          );

          queryClient.invalidateQueries({ queryKey: ["calendar-logs"] });
        } catch (error) {
          console.error(
            "Error saving measured BPM to database/calendar:",
            error,
          );
        }
      };
      saveBpm();
    }
  }, [measuring, bpmValue, queryClient]);

  if (bpmValue === null) {
    return { measuring: false, result: null };
  }

  return {
    measuring,
    result: measuring ? null : evaluateBpm(bpmValue),
  };
}
