import React from 'react';
import styles from './selectDropDownContainer.module.scss';

const InputSearchDropdownContainer = ({ values, value, onChange, label, selectListClassName }) => {

  const handleOnSelect = (val, title, obj) => {
    onChange(val, title, obj);

  }

  return (
    <div className={`${styles.InputSearchDropdownContainer} ${selectListClassName}`}>
      <ul className={styles.InputSearchDropdownWrapper}>
        {values && values?.length ?
          values.map((item, key) =>
            <li onClick={() => handleOnSelect(item[value], item[label], item)} key={key}>{item[label]}</li>
          )
          :
          <p className={styles.NotFound}>{"No Record Found"}</p>
        }
      </ul>
    </div>
  )
}

export default InputSearchDropdownContainer;