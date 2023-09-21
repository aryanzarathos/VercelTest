import React from 'react';
import styles from './selectDropDownButton.module.scss';
import EditorDownIcon from "../../../Assets/SiteEditor/Icons/editorDownIcon.svg";

const SelectDropDownButton = ({ value, setopenDropDown, buttonType, selectedValue, deafultValue, selectClassName, BorderRadius, dropDownCustom, showMore }) => {

  return (
    <div className={`${styles.selectdropdownButtonContainer}`}>
      <button className={`${BorderRadius ? styles.selectDropDownButtonWrapRadius : styles.selectDropDownButtonWrap} ${selectClassName} ${buttonType === 'oval' ? `${styles.btnOvalShape}` : ''}`} onClick={setopenDropDown}>
        <span className='text-2xs w-400 base'>{selectedValue ? selectedValue : deafultValue ? deafultValue : "Select Value"}
        </span>
        {showMore && <span>
          <i className={`${dropDownCustom ? styles.iconCustomDown : styles.iconDown} ${value ? `${styles.iconRotate}` : ''}`} ></i>
        </span>}
      </button>
    </div>
  )
}

export default SelectDropDownButton