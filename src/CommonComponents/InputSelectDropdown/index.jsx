import React from 'react'
import { useState } from 'react'
import styles from './selectDropDown.module.scss';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDetectOutsideClick } from '../DetectOutsideClick/useDetectOutsideClick';
import SelectDropDownButton from './SelectDropdownButton/SelectDropDownButton';
import SelectdropDownContainer from './SelectDropdownContainer/SelectdropDownContainer';


const InputSelectDropDown = ({ values, handleSelect,showInputValue, showValue, disabled,deafultValue ,ChangeValue,className,selectClassName,selectListClassName}) => {
  const clickOutsideRef = useRef(null)
  const [openDropdown, setOpenDropDown] = useDetectOutsideClick(clickOutsideRef, false);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (showValue) {
      setSelectedValue(showValue);
    }
  }, [showValue])

  const setopenDropDown = () => {
    setOpenDropDown(!openDropdown)
  }

  const handleOnChange = (val) => {
    setSelectedValue(val)
    setOpenDropDown(!openDropdown)
    handleSelect(val)
  }

  return (
    <div className={`${styles.selectDropDownContainer} ${className}`  } ref={clickOutsideRef} aria-disabled={disabled}>
      <SelectDropDownButton selectClassName={selectClassName} deafultValue={deafultValue} value={openDropdown} ChangeValue={ChangeValue} setopenDropDown={setopenDropDown} selectedValue={selectedValue} showInputValue={showInputValue} />
      {
        openDropdown &&
        <SelectdropDownContainer selectListClassName={selectListClassName} values={values} onChange={handleOnChange} />
      }
    </div>
  )
}

export default InputSelectDropDown