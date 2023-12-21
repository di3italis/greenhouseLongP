import ReactSlider from "react-slider";
import { useState, useEffect, useContext } from "react";
import { ClimateContext } from "../../context/ClimateContext";
import "./Hygrometer.css";

function Hygrometer() {
  const { hum, setHum } = useContext(ClimateContext); // set humidity
  const [newHum, setNewHum] = useState(hum) // set new humidity

  useEffect(() => {
    console.log('humidity:', hum);
    console.log('newHum:', newHum);

    if (hum === newHum) return; // exit if same

    if (Math.abs(newHum - hum) <= 1) hum = newHum;

    const humTimer = setTimeout(() => {
      setHum(prevHum => prevHum + (hum < newHum ? 2 : -2));
    }, 1000);

    return () => {
      clearTimeout(humTimer); // recursive cleanup func
    }
  }, [hum, newHum, setHum]); // include setHum as dependency

  console.log(hum);

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {hum}%</div>
      <ReactSlider
        value={hum}
        onAfterChange={(value) => {
          setNewHum(value);
        }}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
