import Radar from "../../components/radar/Radar";
import StatsInfo from "../../components/stats-info/StatsInfo";
import TestRadar from "../../components/test-radar/TestRadar";
export default function RadarSection() {
  return (
    <div>
      {/* <TestRadar /> */}
      <Radar />
      <StatsInfo />
    </div>
  );
}
