import React from 'react';
import styles from './selectDropDownContainer.module.scss';

const SelectdropDownContainer = ({ values,value, onChange,label, selectListClassName }) => {

  const handleOnSelect = (val,title) => {
    onChange(val,title);
    
  }

  return (
    <div className={`${styles.selectdropDowncontainerContainer} ${selectListClassName}`}>
      <ul >
        {
          values.map((item, key) =>
            <li onClick={() => handleOnSelect(item[value],item?.[label])} key={key}>{item?.[label]}</li>
          )
        }
      </ul>
    </div>
  )
}

export default SelectdropDownContainer