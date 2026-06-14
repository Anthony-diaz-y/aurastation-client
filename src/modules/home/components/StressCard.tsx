import { defaultStressData } from "../constants/home.constants";
import { LineChartPoint } from "../interfaces/home.interfaces";
import ChartPanel from "./ChartPanel";
import LineChart from "./LineChart";

type StressCardProps = {
  className?: string;
  data?: LineChartPoint[];
};

export default function StressCard({
  className = "",
  data = defaultStressData,
}: StressCardProps) {
  return (
    <ChartPanel title="Estrés de hoy" subtitle="Moderado" className={className}>
      <LineChart data={data} ariaLabel="Gráfico semanal de estrés" />
    </ChartPanel>
  );
}
