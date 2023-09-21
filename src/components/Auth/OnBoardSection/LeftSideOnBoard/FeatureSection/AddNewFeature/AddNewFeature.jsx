import React from "react";
import styles from "./AddNewFeature.module.scss";
import CheckboxInput from "../../../../../../CommonComponents/Form/CheckboxInput";

const AddNewFeature = (props) => {
  const { items, check, setCheck } = props;
  const CheckHandle = (value) => {
    setCheck([value]);
  };
  return (
    <label
      className={`${styles.mainAddFeature}`}
      htmlFor={items?.id}
      onClick={() => CheckHandle(items?.id)}
    >
      {/* to show div active use ${styles.active} class in main div */}

      <CheckboxInput
        className={styles.mainAddFeature__check}
        id={items?.id}
        // checked={check === items?.id ? true : false}
      />

      <div className={styles.mainAddFeature__content}>
        <h5 className={styles.mainAddFeature__content__heading}>
          {items?.heading}
        </h5>
        <p className={styles.mainAddFeature__content__paragraph}>
          {items?.paragraph}
        </p>
      </div>
    </label>
  );
};

export default AddNewFeature;
