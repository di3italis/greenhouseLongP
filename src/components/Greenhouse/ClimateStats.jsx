import { useClimate } from "../../context/ClimateContext";
import "./ClimateStats.css";

function ClimateStats() {
  const { temp, hum } = useClimate();
  return (
    <div className="climate-stats">
      <div className="temperature">Temperature {temp}°F</div>
      <div className="humidity">Humidity {hum}%</div>
    </div>
  );
}

export default ClimateStats;
