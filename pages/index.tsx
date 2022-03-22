import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [clicked, setClicked] = useState(false);
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
          style={{ background: "#0af" }}
        ></span>
      </button>
    </div>
  );
};

export default Home;
