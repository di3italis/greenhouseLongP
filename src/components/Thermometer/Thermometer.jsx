import ReactSlider from "react-slider";
import { useState, useEffect, useContext } from 'react';
import { ClimateContext } from "../../context/ClimateContext";
import "./Thermometer.css";

function Thermometer() {
  const { temp, setTemp } = useContext(ClimateContext);
  const [newTemp, setNewTemp] = useState(temp)

  useEffect(() => {
    console.log('temp:', temp);
    console.log('newTemp:', newTemp);

    if (temp === newTemp) return; //Exit if the actual temp equals the desired temp

    const tempTimer = setTimeout(() => {
      setTemp(prevTemp => prevTemp + (temp < newTemp ? 1 : -1));
    }, 1000);

    return () => {
      clearTimeout(tempTimer); //Cleanup function
    };
  }, [temp, newTemp, setTemp]);  // include setTemp as a dependency
 
  console.log(temp);


  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temp}°F</div>
      <ReactSlider
        value={temp} // use newTemp as Slider value
        onAfterChange={(val) => { setNewTemp(val); }} update newTemp on slider change
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
