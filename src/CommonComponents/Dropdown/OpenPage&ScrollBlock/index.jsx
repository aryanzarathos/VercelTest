import React from 'react'
import { useState } from 'react'
import styles from './selectDropDown.module.scss';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDetectOutsideClick } from '../../DetectOutsideClick/useDetectOutsideClick';
import SelectDropDownButton from './SelectDropdownButton/SelectDropDownButton';
import SelectdropDownContainer from './SelectDropdownContainer/SelectdropDownContainer';


const SelectDropDownRandom = ({ values, handleSelect,value,label, showValue, disabled,deafultValue ,className,selectClassName,selectListClassName}) => {
  const clickOutsideRef = useRef(null)
  const [openDropdown, setOpenDropDown] = useDetectOutsideClick(clickOutsideRef, false);
  const [selectedValue, setSelectedValue] = useState("");
  const [title,setTitle]=useState("")
  useEffect(() => {
    if (showValue) {
      setSelectedValue(showValue);
      if(values?.length>0){

       let data= values.find((item)=>item[value]===showValue)
     
       if(data){
       setTitle(data[label])
       }else{
        setTitle("")
       }
      }
    }
  }, [label, showValue, value, values])

  const setopenDropDown = () => {
    setOpenDropDown(!openDropdown)
  }

  const handleOnChange = (val,title) => {
    setSelectedValue(val)
    setTitle(title)
    setOpenDropDown(!openDropdown)
    handleSelect(val)

  }

  return (
    <div className={`${styles.selectDropDownContainer} ${className}`  } ref={clickOutsideRef} aria-disabled={disabled}>
      <SelectDropDownButton selectClassName={selectClassName} deafultValue={deafultValue} value={openDropdown} setopenDropDown={setopenDropDown} selectedValue={title} />
      {
        openDropdown &&
        <SelectdropDownContainer selectListClassName={selectListClassName} value={value} label={label} values={values} onChange={(val,title)=>handleOnChange(val,title)} />
      }
    </div>
  )
}

export default SelectDropDownRandom