import React, { useRef } from "react";
import styles from "./ColorThemeMobile.module.scss";
import themeImg from "../../../../../../Assets/images/img/themeImg.png";
import Image from "next/image";
import { isBrowser } from "../../../../../../CommonFunctions/isBrowser";
import Drawer from "../../../../../../CommonComponents/Drawer";
import ThemeColor from "./ColorCardMobile/ColorCardMobile";
import ColorCardMobile from "./ColorCardMobile/ColorCardMobile";
const ColorThemeMobile = () => {
  const drawerRef = useRef(null);
  const HandleClick = () => {
    drawerRef.current.open();
  };
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

          {/* ====== color theme start ==== */}
          <div className={styles.drawerWrapper__content}>
            <h4 className={styles.drawerWrapper__content__headingTheme}>
              Select Themes
            </h4>

            <div className={styles.drawerWrapper__content__colorBox}>
              {ColorData?.map((value, index) => {
                return <ColorCardMobile data={value} key={index} />;
              })}
            </div>
          </div>
          {/* ====== color theme end ==== */}

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

export default ColorThemeMobile;
