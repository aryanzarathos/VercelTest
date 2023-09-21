import React from "react";
import PleaseWaitSection from "../PleaseWaitSection/PleaseWaitSection";
import BussinessSection from "./BussinessSection/BussinessSection";
import ColorTheme from "./ColorTheme/ColorTheme";
import FeatureSection from "./FeatureSection/FeatureSection";
import styles from "./LeftSideOnBoard.module.scss";
import SelectFont from "./SelectFont/SelectFont";
import WebsiteCreation from "./WebsiteCreation/WebsiteCreation";

const LeftSideOnBoard = () => {
  const settings = {
    dots: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.mainLeftSide}>
      <div className={styles.mainLeftSide__content}>
        {/* ====== back button start ===== */}
        <div className={styles.mainLeftSide__uprside}>
          <button className={styles.mainLeftSide__uprside__backBtn}>
            Back
          </button>
          <button className={styles.mainLeftSide__uprside__skipBtn}>
            Skip
          </button>
        </div>
        {/* ====== back button end ===== */}

        {/* ==== webiste type start ==== */}
        {/* <WebsiteCreation /> */}
        {/* ==== webiste type end ==== */}

        {/* ======Bussiness deatils start ==== */}
        {/* <BussinessSection /> */}
        {/* ======Bussiness deatils end ==== */}

        {/* ======  Featurs section start ====== */}
        <FeatureSection />
        {/* ======  Featurs section end ====== */}

        {/* ======= Color Theme start ===== */}
        {/* <ColorTheme /> */}
        {/* ======= Color Theme end ===== */}

        {/* ======= font select start ===== */}
        {/* <SelectFont /> */}
        {/* ======= font select end ===== */}

        {/* ===== down dots start===== */}
        <div className={styles.mainLeftSide__downSide}>
          <ul className={styles.mainLeftSide__downSide__list}>
            <li
              className={`${styles.mainLeftSide__downSide__list__item} ${styles.active}`}
            ></li>
            <li className={styles.mainLeftSide__downSide__list__item}></li>
            <li className={styles.mainLeftSide__downSide__list__item}></li>
            <li className={styles.mainLeftSide__downSide__list__item}></li>
          </ul>
        </div>
        {/* ===== down dots start===== */}
      </div>
    </div>
  );
};
export default LeftSideOnBoard;
