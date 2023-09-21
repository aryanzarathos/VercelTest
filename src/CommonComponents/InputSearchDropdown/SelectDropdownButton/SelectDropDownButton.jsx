import React from 'react';
import styles from './selectDropDownButton.module.scss';
import FormInput from '../../Form/FormInput';

const InputSearchDropDownButton = ({ inputRef, value, showSearch, onChangeHandle, setopenDropDown, buttonType, selectedValue, deafultValue, selectClassName }) => {

  return (
    <div className={`${styles.InputSearchButtonContainer}`}>
      <button className={`${styles.InputSearchButtonWrap} ${selectClassName} ${buttonType === 'oval' ? `${styles.btnOvalShape}` : ''}`} onClick={setopenDropDown}>
        {showSearch ?
          <input
            type="search"
            className={styles.FormInputFields}
            placeholder="Search..."
            value={selectedValue}
            onChange={onChangeHandle}
            ref={inputRef}
          />
          :
          <span className='text-2xs w-400 base'>{selectedValue ? selectedValue : deafultValue ? deafultValue : "Select Value"}</span>
        }
        {

        }
        <span><i className={`${styles.iconDown} ${value ? `${styles.iconRotate}` : ''}`} ></i></span>
      </button>
    </div>
  )
}

export default InputSearchDropDownButton