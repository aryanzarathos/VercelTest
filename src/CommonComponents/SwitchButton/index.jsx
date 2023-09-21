import React from "react";
import styles from "./switch-button.module.scss";

const SwitchButton = ({ onChange, checked, disabled, label, stroke, layout }) => {
  return (
    <>
      {
        layout ? (
          <label className={`${label && stroke ? `${styles.switchStrokedLabelVariation}` : stroke ? `${styles.switchStrokedVariation}` : label ? `${styles.switchLabeledVariation}` : `${styles.switchVariation}`}`}>
            <input type="checkbox" onChange={(e) => onChange(e)} checked={checked} disabled={disabled} />
            <span className={`${styles.switchBtnSliderVariation} ${styles.roundVariation}`}></span>
          </label>
        ) : (
          <label className={`${label && stroke ? `${styles.switchStrokedLabel}` : stroke ? `${styles.switchStroked}` : label ? `${styles.switchLabeled}` : `${styles.switch}`}`}>
            <input type="checkbox" onChange={(e) => onChange(e)} checked={checked} disabled={disabled} />
            <span className={`${styles.switchBtnSlider} ${styles.round}`}></span>
          </label>
        )
      }
    </>
  );
};

export default SwitchButton;
