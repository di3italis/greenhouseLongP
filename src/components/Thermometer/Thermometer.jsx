import ReactSlider from "react-slider";
import { useEffect } from 'react';
import { useClimate } from "../../context/ClimateContext";
import "./Thermometer.css";

function Thermometer() {
  const { temp, setTemp } = useClimate();
  const [currTemp, newTemp] = useState(0)

  const tempTimer = (currTemp, newTemp) => {

    useEffect(() => {
      const timer = setTimeout(() => {

      }, 1000);
    })
  }

  console.log(temp);

// setTimeout function

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temp}°F</div>
      <ReactSlider
        value={temp}
        onAfterChange={(value) => {
          setTemp(value);
        }}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
