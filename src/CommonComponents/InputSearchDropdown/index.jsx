import React from 'react'
import { useState } from 'react'
import styles from './selectDropDown.module.scss';
import { useRef } from 'react';
import { useEffect } from 'react';
import SelectDropDownButton from './SelectDropdownButton/SelectDropDownButton';
import SelectdropDownContainer from './SelectDropdownContainer/SelectdropDownContainer';
import { useDetectOutsideClick } from '../DetectOutsideClick/useDetectOutsideClick';


const InputSearchDropDown = ({ values, handleSelect, value, label, showValue, disabled, deafultValue, className, selectClassName, selectListClassName }) => {
  const clickOutsideRef = useRef(null)
  const inputRef = useRef(null);
  const [openDropdown, setOpenDropDown] = useDetectOutsideClick(clickOutsideRef, false);
  // const [selectedValue, setSelectedValue] = useState("");
  const [title, setTitle] = useState("")

  const [filteredOptions, setFilteredOptions] = useState(values);


  useEffect(() => {
  
    if (showValue) {
      // setSelectedValue(showValue);
      if (values.length > 0) {
      
        let data = values.find((item) => item[value] === showValue)
  
        if (data) {
          setTitle(data[label])
        } else {
          setTitle("")
        }
      }
    }
  }, [label, showValue, value, values])

  const setopenDropDown = () => {
    setOpenDropDown(!openDropdown)
    setFilteredOptions(values);
  }

  const handleOnChange = (val, title, obj) => {
    // setSelectedValue(val)
    setTitle(val)
    setOpenDropDown(!openDropdown)
    handleSelect(val, obj)
  }


  useEffect(() => {
    if (openDropdown && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openDropdown]);

  const onChangeHandle = (event) => {
    const value = event.target.value;
    setTitle(value);
    const filtered = values.filter((item) =>
      item[label].toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  }

  return (
    <div ref={clickOutsideRef} className={`${styles.InputSearchDropDownContainer} ${className}`} aria-disabled={disabled}>
      <SelectDropDownButton inputRef={inputRef} onChangeHandle={onChangeHandle} selectClassName={selectClassName} deafultValue={deafultValue} value={openDropdown} setopenDropDown={setopenDropDown} selectedValue={title} showSearch={openDropdown}/>
      {
        openDropdown &&
        <SelectdropDownContainer selectListClassName={selectListClassName} value={value} label={label} values={filteredOptions} onChange={(val, title, obj) => handleOnChange(val, title, obj)} />
      }
    </div>
  )
}

export default InputSearchDropDown