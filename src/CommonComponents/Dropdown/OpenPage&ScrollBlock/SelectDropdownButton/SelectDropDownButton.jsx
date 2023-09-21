import React from 'react';
import styles from './selectDropDownButton.module.scss';

const SelectDropDownButton = ({ value, setopenDropDown, buttonType, selectedValue, deafultValue, selectClassName }) => {

  return (
    <div className={`${styles.selectdropdownButtonContainer}`}>
      <button className={`${styles.selectDropDownButtonWrap} ${selectClassName} ${buttonType === 'oval' ? `${styles.btnOvalShape}` : ''}`} onClick={setopenDropDown}>
        <span className='text-2xs w-400 base'>{selectedValue ? selectedValue : deafultValue ? deafultValue : "Select Value"}
        </span>
        <span><i className={`${styles.iconDown} ${value ? `${styles.iconRotate}` : ''}`} ></i></span>
      </button>
    </div>
  )
}

export default SelectDropDownButton