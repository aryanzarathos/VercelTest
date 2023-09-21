import React, { useState } from "react";
import styles from "./FontCardMobile.module.scss";
import ThemeRadio from "../../../../../../../Assets/SiteEditor/Icons/themeRadio.svg";
import ColorCheck from "../../../../../../../Assets/SiteEditor/Icons/colorCheck.svg";
import Image from "next/image";

const FontCardMobile = (props) => {
  const [active, setActive] = useState(false);
  const handleChange = () => {
    return setActive(true);
  };
  const { data } = props;
  return (
    <div
      className={`${styles.mainThemeFontCard} ${
        active ? `${styles.active}` : ""
      }`}
      onClick={handleChange}
    >
      {/* <Image
        src={active ? <ColorCheck /> : <ThemeRadio />}
        alt="themeRadio"
        height={16}
        width={16}
      /> */}
      <div className={styles.mainThemeFontCard__image}>
        {active ? <ColorCheck /> : <ThemeRadio />}
      </div>
      <div className={styles.mainThemeFontCard__Content}>
        <h5 className={styles.mainThemeFontCard__Content__heading}>
          {data?.heading}
        </h5>
        <p className={styles.mainThemeFontCard__Content__para}>
          {data?.parargraph}
        </p>
      </div>
      <div className={styles.mainThemeFontCard__font}>
        <div className={styles.mainThemeFontCard__font__ist}>
          {data?.istfont}
        </div>
        <div className={styles.mainThemeFontCard__font__iind}>
          {data?.iindFont}
        </div>
      </div>
    </div>
  );
};

export default FontCardMobile;
