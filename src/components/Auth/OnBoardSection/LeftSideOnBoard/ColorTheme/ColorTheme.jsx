import React from "react";
import ColorPattern from "./ColorPattern/ColorPattern";
import styles from "./ColorTheme.module.scss";

const ColorTheme = () => {
  const ColorData = [
    {
      id: 1,
      theme: "Theme 1",
      istColor: "#1F3259",
      iindColor: "#428BC1",
      iiirdColor: "#6AA9FF",
      fourthColor: "#000000",
      fifthColor: "#ffffff",
    },
    {
      id: 2,
      theme: "Theme 2",
      istColor: "#1F3259",
      iindColor: "#428BC1",
      iiirdColor: "#6AA9FF",
      fourthColor: "#000000",
      fifthColor: "#ffffff",
    },
    {
      id: 3,
      theme: "Theme 3",
      istColor: "#1F3259",
      iindColor: "#428BC1",
      iiirdColor: "#6AA9FF",
      fourthColor: "#000000",
      fifthColor: "#ffffff",
    },
    {
      id: 4,
      theme: "Theme 4",
      istColor: "#1F3259",
      iindColor: "#428BC1",
      iiirdColor: "#6AA9FF",
      fourthColor: "#000000",
      fifthColor: "#ffffff",
    },
    {
      id: 5,
      theme: "Theme 5",
      istColor: "#1F3259",
      iindColor: "#428BC1",
      iiirdColor: "#6AA9FF",
      fourthColor: "#000000",
      fifthColor: "#ffffff",
    },
    {
      id: 6,
      theme: "Theme 6",
      istColor: "#1F3259",
      iindColor: "#428BC1",
      iiirdColor: "#6AA9FF",
      fourthColor: "#000000",
      fifthColor: "#ffffff",
    },
    {
      id: 7,
      theme: "Theme 7",
      istColor: "#1F3259",
      iindColor: "#428BC1",
      iiirdColor: "#6AA9FF",
      fourthColor: "#000000",
      fifthColor: "#ffffff",
    },
    {
      id: 8,
      theme: "Theme 8",
      istColor: "#1F3259",
      iindColor: "#428BC1",
      iiirdColor: "#6AA9FF",
      fourthColor: "#000000",
      fifthColor: "#ffffff",
    },
    {
      id: 9,
      theme: "Theme 9",
      istColor: "#1F3259",
      iindColor: "#428BC1",
      iiirdColor: "#6AA9FF",
      fourthColor: "#000000",
      fifthColor: "#ffffff",
    },
    {
      id: 10,
      theme: "Theme 10",
      istColor: "#1F3259",
      iindColor: "#428BC1",
      iiirdColor: "#6AA9FF",
      fourthColor: "#000000",
      fifthColor: "#ffffff",
    },
    {
      id: 11,
      theme: "Theme 11",
      istColor: "#1F3259",
      iindColor: "#428BC1",
      iiirdColor: "#6AA9FF",
      fourthColor: "#000000",
      fifthColor: "#ffffff",
    },
    {
      id: 12,
      theme: "Theme 12",
      istColor: "#1F3259",
      iindColor: "#428BC1",
      iiirdColor: "#6AA9FF",
      fourthColor: "#000000",
      fifthColor: "#ffffff",
    },
  ];
  return (
    <div className={styles.mainColorTheme}>
      <h1 className={styles.mainColorTheme__heading}>Select Color Theme</h1>
      {/* ===== color start ===== */}
      <div className={styles.mainColorTheme__colorBox}>
        {ColorData?.map((value, index) => {
          return <ColorPattern data={value} key={index} />;
        })}
      </div>
      {/* ===== color end ===== */}
      <button
        className={`${styles.mainColorTheme__continueBtn} button button-primary`}
      >
        Continue
      </button>
    </div>
  );
};

export default ColorTheme;
