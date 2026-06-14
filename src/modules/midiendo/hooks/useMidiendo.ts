"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { evaluateBpm } from "../utils/bpmEvaluator";
import { BpmResult } from "../interfaces/midiendo.interfaces";

const MEASURE_DURATION_MS = 9000;

interface UseMidiendoReturn {
  measuring: boolean;
  result: BpmResult | null;
}

export function useMidiendo(): UseMidiendoReturn {
  const searchParams = useSearchParams();
  const rawBpm = searchParams.get("bpm");

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

  if (bpmValue === null) {
    return { measuring: false, result: null };
  }

  return {
    measuring,
    result: measuring ? null : evaluateBpm(bpmValue),
  };
}
