import React, { useState } from "react";
import CheckboxInput from "../../../../../CommonComponents/Form/CheckboxInput";
import AddNewFeature from "./AddNewFeature/AddNewFeature";
import styles from "./FeatureSection.module.scss";

const FeatureSection = () => {
  const [check, setCheck] = useState([]);

  const FeatureData = [
    {
      id: 1,
      heading: "Bookings",
      paragraph: "Let clients schedule appointments on your site.",
    },
    {
      id: 2,
      heading: "Blog",
      paragraph: "Create and display your menu online.",
    },
  ];
  return (
    <div className={`${styles.mainFeature}`}>
      <h1 className={styles.mainFeature__heading}>
        Add features to your website.
      </h1>
      <div className={styles.mainFeature__content}>
        <div className={styles.mainFeature__content__data}>
          {/* ======= default checkbox start ==== */}
          <div className={styles.mainFeature__content__default}>
            <input
              type={"checkbox"}
              className={styles.mainFeature__content__default__checkbox}
            />
            <div className={styles.mainFeature__content__default__cont}>
              <h5
                className={styles.mainFeature__content__default__cont__heading}
              >
                Online Store
              </h5>
              <p
                className={
                  styles.mainFeature__content__default__cont__paragraph
                }
              >
                Find customers and sell products online
              </p>
            </div>
          </div>
          {/* ======= default checkbox end ==== */}
          {/* ======= Add New Feature ===== */}

          {FeatureData?.map((value, index) => {
            return (
              <AddNewFeature
                items={value}
                key={index}
                setCheck={setCheck}
                check={check}
              />
            );
          })}
          {/* ======= Add New Feature ===== */}
        </div>
        <button
          className={`${styles.mainFeature__content__continueBtn} button button-primary`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default FeatureSection;
