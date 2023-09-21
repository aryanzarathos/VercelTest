import React, { useState } from "react";
import styles from "./FontCard.module.scss";
import { ThemeRadio } from "../../../../../../Assets/SiteEditor/Icons/themeRadio.svg";
// import ColorCheck from "../../../../../../Assets/SiteEditor/Icons/colorCheck.svg";
import { ColorCheck } from "../../../../../../Assets/SiteEditor/Icons/colorCheck.svg";
import Image from "next/image";

const FontCard = (props) => {
  const [active, setActive] = useState(false);
  const handleChange = () => {
    return setActive(true);
  };
  const { data } = props;
  return (
    <div
      className={`${styles.mainFontCard} ${active ? `${styles.active}` : ""}`}
      onClick={handleChange}
    >
      {/* <Image
        src={active ? <ColorCheck /> : <ThemeRadio />}
        alt="themeRadio"
        height={16}
        width={16}
      /> */}
      <div className={styles.mainFontCard__image}>
        {active ? <ColorCheck /> : <ThemeRadio />}
      </div>

      <div className={styles.mainFontCard__Content}>
        <h5 className={styles.mainFontCard__Content__heading}>
          {data?.heading}
        </h5>
        <p className={styles.mainFontCard__Content__para}>{data?.parargraph}</p>
      </div>
      <div className={styles.mainFontCard__font}>
        <div className={styles.mainFontCard__font__ist}>{data?.istfont}</div>
        <div className={styles.mainFontCard__font__iind}>{data?.iindFont}</div>
      </div>
    </div>
  );
};

export default FontCard;
