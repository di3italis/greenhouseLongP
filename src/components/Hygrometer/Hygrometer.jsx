import ReactSlider from "react-slider";
import { useState, useEffect, useContext } from "react";
import { ClimateContext } from "../../context/ClimateContext";
import "./Hygrometer.css";

function Hygrometer() {
  let { hum, setHum } = useContext(ClimateContext); // set humidity
  const [newHum, setNewHum] = useState(hum) // set new humidity

    // this is the new way, after refactored, see thermometer for old

  useEffect(() => {
    console.log('humidity:', hum);
    console.log('newHum:', newHum);

    if (hum === newHum) return; // exit if same

    const adjustHumidity = () => {
      if (Math.abs(newHum - hum) <= 1) { 
        setHum(newHum); // accounts for odd count missing below
      } else {
        setHum(prevHum => prevHum + (hum < newHum ? 2 : -2));
      }
    };

    const humTimer = setTimeout(adjustHumidity, 1000);

      return () => {
        clearTimeout(humTimer); // recursive cleanup func
      };
    }, [hum, newHum]); // include setHum as dependency

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
