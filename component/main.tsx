import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Spirit from "./spirit";

const MainComponent: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [waterColor, setWaterColor] = useState("#0af");
  const [bgColor, setBgColor] = useState("#0af");
  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setBgColor(waterColor);
          const waterSpanElement = document.querySelector("#base-water");
          if (waterSpanElement === undefined) {
            console.log("error");
          } else {
            if (clicked) {
              waterSpanElement?.classList.remove("wave-clicked");
              // waterSpanElement?.classList.add("wave-unclicked");
              setClicked(false);
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
      <input
        value={waterColor}
        onChange={(event) => {
          setWaterColor(event.target.value);
        }}
      ></input>
      <div>
        <Spirit />
      </div>
    </div>
  );
};

export default MainComponent;
