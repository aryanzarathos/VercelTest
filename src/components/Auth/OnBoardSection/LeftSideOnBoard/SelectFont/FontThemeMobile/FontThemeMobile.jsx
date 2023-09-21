import React, { useRef } from "react";
import styles from "./FontThemeMobile.module.scss";
import themeImg from "../../../../../../Assets/images/img/themeImg.png";
import Image from "next/image";
import { isBrowser } from "../../../../../../CommonFunctions/isBrowser";
import Drawer from "../../../../../../CommonComponents/Drawer";
import FontCardMobile from "./FontCardMobile/FontCardMobile";
const FontThemeMobile = () => {
  const drawerRef = useRef(null);
  const HandleClick = () => {
    drawerRef.current.open();
  };
  const Font = [
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
      <div className={styles.mainThemePreview}>
        <div className={styles.mainThemePreview__image}>
          <Image src={themeImg} alt="themeImg" />
        </div>
        <div className={styles.mainThemePreview__btns}>
          <button className={styles.mainThemePreview__btns__btn1}>
            Previous
          </button>
          <button
            className={`${styles.mainThemePreview__btns__btn2}  button button-primary`}
            onClick={HandleClick}
          >
            Select Theme & Fonts
          </button>
        </div>
      </div>

      {/* ==== theme drawer start ====== */}
      {isBrowser() && (
        <Drawer ref={drawerRef} className={styles.drawerWrapper}>
          {/* ====== upr section start ======= */}
          <div className={styles.drawerWrapper__uprside}>
            <button className={styles.drawerWrapper__uprside__backBtn}>
              Back
            </button>
            <button className={styles.drawerWrapper__uprside__skipBtn}>
              Skip
            </button>
          </div>
          {/* ====== upr section end ======= */}

          {/* ===== font theme start ====== */}
          <div className={styles.drawerWrapper__content}>
            <h4 className={styles.drawerWrapper__content__headingTheme}>
              Select Fonts
            </h4>

            <div className={styles.drawerWrapper__content__fontBox}>
              {Font?.map((value, index) => {
                return <FontCardMobile data={value} key={index} />;
              })}
            </div>
          </div>
          {/* ===== font theme end ====== */}

          {/* === continue btn ==== */}
          <div className={styles.drawerWrapper__footer}>
            <button
              className={`${styles.drawerWrapper__footer__continueBtn} button button-primary`}
            >
              Continue
            </button>

            <div className={styles.drawerWrapper__footer__downSide}>
              <ul className={styles.drawerWrapper__footer__downSide__list}>
                <li
                  className={`${styles.drawerWrapper__footer__downSide__list__item} ${styles.active}`}
                ></li>
                <li
                  className={styles.drawerWrapper__footer__downSide__list__item}
                ></li>
                <li
                  className={styles.drawerWrapper__footer__downSide__list__item}
                ></li>
                <li
                  className={styles.drawerWrapper__footer__downSide__list__item}
                ></li>
              </ul>
            </div>
          </div>
          {/* ===== down dots start===== */}
          {/* ===== down dots start===== */}

          {/* ===== down dots start===== */}
          {/* === continue btn ==== */}
        </Drawer>
      )}
    </>
  );
};

export default FontThemeMobile;
