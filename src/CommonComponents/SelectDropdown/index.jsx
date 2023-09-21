import React from 'react'
import { useState } from 'react'
import styles from './selectDropDown.module.scss';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDetectOutsideClick } from '../DetectOutsideClick/useDetectOutsideClick';
import SelectDropDownButton from './SelectDropdownButton/SelectDropDownButton';
import SelectdropDownContainer from './SelectDropdownContainer/SelectdropDownContainer';
import FormError from '@/SectionCommon/Form/FormError';
import { styled } from 'styled-components';


const SelectDropDownContainer = styled.div`
  position: relative;
  width: ${({ width }) => width ? "48.5%" : "100%"};
  @media(max-width:768px) {
    width: 100%;
}

`

const Label = styled.label`
line-height: 18px;
margin-bottom: 8px;
display: block;
font-size: calc(var(--global-typography-fontSizeP) - 1px );
font-weight: var(--global-typography-fontWightMedium);
color: var(--global-color-quaternary);
font-family: var(--global-typography-fontFamilyP);
`;

const SelectDropDown = ({ values, handleSelect, HandleOnChange, value, showValue, disabled, deafultValue, className, selectClassName, selectListClassName, BorderRadius, submit, label, ObjectData, fullWidthChecked, dropDownCustom, showMore }) => {
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

  const handleOnChangeVal = (val) => {
    setSelectedValue(val)
    setOpenDropDown(!openDropdown)
    handleSelect(val)
    if (HandleOnChange) {
      HandleOnChange(val)
    }
  }

  return (
    <>
      <SelectDropDownContainer width={fullWidthChecked} className={`${styles.selectDropDownContainer} ${className}`} ref={clickOutsideRef} aria-disabled={disabled}>
        {
          dropDownCustom ?
            <Label>{label}</Label>
            : <p>{label}</p>


        }
        <SelectDropDownButton selectClassName={selectClassName} BorderRadius={BorderRadius} deafultValue={deafultValue} value={value} setopenDropDown={setopenDropDown} dropDownCustom={dropDownCustom} selectedValue={selectedValue} showMore={showMore} />
        {
          openDropdown && showMore &&
          <SelectdropDownContainer selectListClassName={selectListClassName} values={values} onChange={handleOnChangeVal} />
        }
        <FormError show={submit && !value && ObjectData?.mandate} error={`${label} is Required.`} />
      </SelectDropDownContainer>
    </>
  )
}

SelectDropDown.defaultProps = {
  showMore: true
}

export default SelectDropDown