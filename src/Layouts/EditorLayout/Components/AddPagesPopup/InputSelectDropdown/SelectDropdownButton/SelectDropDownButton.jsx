import React from 'react';
import styles from './selectDropDownButton.module.scss';

const InputSelectDropDownButton = ({ value, showSearch, setopenDropDown, onChangeHandle, buttonType, selectedValue, deafultValue, selectClassName }) => {

  return (
    <div className={`${styles.selectdropdownButtonContainer}`}>
      <button className={`${styles.selectDropDownButtonWrap} ${selectClassName} ${buttonType === 'oval' ? `${styles.btnOvalShape}` : ''}`} onClick={setopenDropDown}>
        {showSearch ?
          <input type="text" className={styles.formControl} value={selectedValue ? selectedValue : deafultValue ? deafultValue : ""}
            defaultValue={selectedValue ? selectedValue : deafultValue ? deafultValue : ""}
            placeholder="Select category to add as page" onChange={onChangeHandle} />
          :
          <span>{selectedValue ? selectedValue : deafultValue ? deafultValue : ""}</span>
        }
        <span>
          <i className={`${styles.iconDown} ${value ? `${styles.iconRotate}` : ''}`} ></i>
        </span>
      </button>
    </div>
  )
}

export default InputSelectDropDownButton