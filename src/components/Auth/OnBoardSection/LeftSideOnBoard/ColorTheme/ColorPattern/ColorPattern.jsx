import Image from "next/image";
import React, { useState } from "react";
import styles from "./ColorPattern.module.scss";
import ThemeRadio from "../../../../../../Assets/SiteEditor/Icons/themeRadio.svg";
import ColorCheck from "../../../../../../Assets/SiteEditor/Icons/colorCheck.svg";

const ColorPattern = (props) => {
  const [active, setActive] = useState();
  const handleChange = (value) => {
    setActive(value);
  };
  const { data, className } = props;
  return (
    <div
      className={`${styles.mainColorPattern} ${
        active === data?.id ? `${styles.active}` : ""
      } ${className}`}
      onClick={() => handleChange(data?.id)}
    >
      {/* ====== active theme start ======== */}
      <div className={styles.mainColorPattern__ImageContent}>
        {/* <Image
          src={active === data?.id ? <ColorCheck /> : <ThemeRadio />}
          alt="themeRadio"
          height={16}
          width={16}
        /> */}
        <div className={styles.mainFontCard__image}>
          {active ? <ColorCheck /> : <ThemeRadio />}
        </div>
        <p className={styles.mainColorPattern__ImageContent__para}>
          {data?.theme}
        </p>
      </div>
      {/* ====== active theme end ======== */}
      {/* ======== color plates start ======= */}
      <div className={styles.mainColorPattern__color}>
        <div
          className={styles.mainColorPattern__color__item}
          style={{ background: `${data?.istColor}` }}
        ></div>
        <div
          className={styles.mainColorPattern__color__item}
          style={{ background: `${data?.iindColor}` }}
        ></div>
        <div
          className={styles.mainColorPattern__color__item}
          style={{ background: `${data?.iiirdColor}` }}
        ></div>
        <div
          className={styles.mainColorPattern__color__item}
          style={{ background: `${data?.fourthColor}` }}
        ></div>
        <div
          className={styles.mainColorPattern__color__item}
          style={{ background: `${data?.fifthColor}` }}
        ></div>
      </div>
      {/* ======== color plates end ======= */}
    </div>
  );
};

export default ColorPattern;
