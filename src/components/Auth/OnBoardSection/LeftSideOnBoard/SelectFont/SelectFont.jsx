import React from "react";
import FontCard from "./FontCard/FontCard";
import styles from "./SelectFont.module.scss";

const SelectFont = () => {
  const FontData = [
    {
      id: 1,
      heading: "This is a Heading",
      parargraph: "This is a paragraph. The descriptions will be in this font.",
      istfont: "Gilroy",
      iindFont: "Montserrat",
    },
    {
      id: 2,
      heading: "This is a Heading",
      parargraph: "This is a paragraph. The descriptions will be in this font.",
      istfont: "Gilroy",
      iindFont: "Montserrat",
    },
    {
      id: 3,
      heading: "This is a Heading",
      parargraph: "This is a paragraph. The descriptions will be in this font.",
      istfont: "Gilroy",
      iindFont: "Montserrat",
    },
    {
      id: 4,
      heading: "This is a Heading",
      parargraph: "This is a paragraph. The descriptions will be in this font.",
      istfont: "Gilroy",
      iindFont: "Montserrat",
    },
    {
      id: 5,
      heading: "This is a Heading",
      parargraph: "This is a paragraph. The descriptions will be in this font.",
      istfont: "Gilroy",
      iindFont: "Montserrat",
    },
    {
      id: 6,
      heading: "This is a Heading",
      parargraph: "This is a paragraph. The descriptions will be in this font.",
      istfont: "Gilroy",
      iindFont: "Montserrat",
    },
    {
      id: 7,
      heading: "This is a Heading",
      parargraph: "This is a paragraph. The descriptions will be in this font.",
      istfont: "Gilroy",
      iindFont: "Montserrat",
    },
    {
      id: 8,
      heading: "This is a Heading",
      parargraph: "This is a paragraph. The descriptions will be in this font.",
      istfont: "Gilroy",
      iindFont: "Montserrat",
    },
    {
      id: 9,
      heading: "This is a Heading",
      parargraph: "This is a paragraph. The descriptions will be in this font.",
      istfont: "Gilroy",
      iindFont: "Montserrat",
    },
  ];
  return (
    <>
      {/* ===== desktop view === */}
      <div className={styles.mainFont}>
        <h1 className={styles.mainFont__heading}>Select Font Styles</h1>
        <div className={styles.mainFont__card}>
          {FontData?.map((value, index) => {
            return <FontCard data={value} key={index} />;
          })}
        </div>

        <button
          className={`${styles.mainFont__continueBtn} button button-primary`}
        >
          Continue
        </button>
      </div>
      {/* ===== desktop view === */}

      {/* ==== mobile view ==== */}

      {/* ==== mobile view ==== */}
    </>
  );
};

export default SelectFont;
