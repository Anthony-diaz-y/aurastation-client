export type LineChartPoint = {
  day: string;
  value: number | null;
  dot?: string;
  active?: boolean;
  stressLevel?: string;
};

export type ChartPoint = {
  x: number;
  y: number;
};

export interface UserProfile {
  avatarId?: string;
  lastBpm?: number | null;
  streak?: number;
}

export interface HomeHeaderProps {
  avatarId?: string;
}

export interface QuickStatsProps {
  className?: string;
  lastBpm: number | null;
  streak: number;
}

export interface HomeActionsSectionProps {
  lastBpm: number | null;
  streak: number;
}

export interface StressCardProps {
  className?: string;
  chartData: LineChartPoint[];
  periodLabel: string;
  latestStress?: string;
}

export interface LineChartProps {
  data: LineChartPoint[];
  ariaLabel: string;
  max?: number;
  className?: string;
}
