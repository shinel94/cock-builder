import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import IngredientComponent from "./Ingredient";
import SpiritComponent from "./spirit";

const DEFAULT_WATER_COLOR = "#0af";

const MainComponent: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [bgColor, setBgColor] = useState<string>(DEFAULT_WATER_COLOR);

  const changeColor = (color: string) => {
    setBgColor(color);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          const waterSpanElement = document.querySelector("#base-water");
          if (waterSpanElement === undefined) {
            console.log("error");
          } else {
            if (clicked) {
              waterSpanElement?.classList.remove("wave-clicked");
              // waterSpanElement?.classList.add("wave-unclicked");
              setClicked(false);
              setBgColor(DEFAULT_WATER_COLOR);
            } else {
              // waterSpanElement?.classList.remove("wave-unclicked");
              waterSpanElement?.classList.add("wave-clicked");
              setClicked(true);
            }
          }
        }}
      >
        <span
          id="base-water"
          className="wave"
          style={{ background: bgColor }}
        ></span>
      </button>
      <div>
        <SpiritComponent colorChange={changeColor} />
        <IngredientComponent colorChange={changeColor} />
      </div>
    </div>
  );
};

export default MainComponent;
