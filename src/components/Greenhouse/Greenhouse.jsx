import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import "./Greenhouse.css";
import { useTheme } from "../../context/ThemeContext";

import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";

function Greenhouse() {
  const { themeName } = useTheme("");
  // console.log("theme name: ", themeName, "useTheme", useTheme);

  let srcImage;
  if (themeName === "day") {
    srcImage = dayImage;
  } else {
    srcImage = nightImage;
  }

  return (
    <section>
      <img
        className="greenhouse-img"
        src={srcImage}
        alt="greenhouse"
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
