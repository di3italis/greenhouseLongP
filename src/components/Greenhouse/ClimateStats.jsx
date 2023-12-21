import { useClimate } from "../../context/ClimateContext";
import "./ClimateStats.css";

function ClimateStats() {
  const { temp, humid } = useClimate();
  return (
    <div className="climate-stats">
      <div className="temperature">Temperature {temp}°F</div>
      <div className="humidity">Humidity {humid}%</div>
    </div>
  );
}

export default ClimateStats;
