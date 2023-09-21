import React from 'react';
import styles from './selectDropDownContainer.module.scss';

const SelectdropDownContainer = ({ values, onChange, selectListClassName }) => {

  const handleOnSelect = (val) => {
    onChange(val);
  }

  return (
    <div className={`${styles.selectdropDowncontainerContainer} ${selectListClassName}`}>
      <ul >
        {
          values.map((value, key) =>
            <li onClick={() => handleOnSelect(value)} key={key}>{value}</li>
          )
        }
      </ul>
    </div>
  )
}

export default SelectdropDownContainer