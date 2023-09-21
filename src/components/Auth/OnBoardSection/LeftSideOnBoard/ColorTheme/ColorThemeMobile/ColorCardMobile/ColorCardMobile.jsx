import React, { useState } from "react";
import styles from "./ColorCardMobile.module.scss";
import { ThemeRadio } from "../../../../../../../Assets/SiteEditor/Icons/themeRadio.svg";
import { ColorCheck } from "../../../../../../../Assets/SiteEditor/Icons/colorCheck.svg";
import Image from "next/image";
const ColorCardMobile = (props) => {
  const [active, setActive] = useState(false);
  const { data } = props;
  const GetActive = () => {
    setActive(true);
  };

  return (
    <div
      className={`${styles.mainColorPattern} ${
        active ? `${styles.active}` : ""
      } `}
      onClick={GetActive}
    >
      {/* ====== active theme start ======== */}
      <div className={styles.mainColorPattern__ImageContent}>
        {/* <Image
          src={active ? <ColorCheck /> : <ThemeRadio />}
          alt="themeRadio"
          height={16}
          width={16}
        /> */}
        {active ? <ColorCheck /> : <ThemeRadio />}
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

export default ColorCardMobile;
