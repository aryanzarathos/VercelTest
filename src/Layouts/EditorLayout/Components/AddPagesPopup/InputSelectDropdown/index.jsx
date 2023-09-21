import React from 'react'
import { useState } from 'react'
import styles from './selectDropDown.module.scss';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDetectOutsideClick } from '../../../../../CommonComponents/DetectOutsideClick/useDetectOutsideClick';
import InputSelectdropDownContainer from './SelectDropdownContainer/SelectdropDownContainer';
import InputSelectDropDownButton from './SelectDropdownButton/SelectDropDownButton';


const InputSelectDropDown = ({ values, handleSelect, showValue, disabled, deafultValue, className, selectClassName, selectListClassName }) => {
  const clickOutsideRef = useRef(null)
  const [openDropdown, setOpenDropDown] = useDetectOutsideClick(clickOutsideRef, false);
  const [selectedValue, setSelectedValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    if (showValue) {
      setSelectedValue(showValue);
    }
  }, [showValue])

  const setopenDropDown = () => {
    setOpenDropDown(!openDropdown)
  }

  const handleOnChange = (val, valueObj) => {
    setSelectedValue(val)
    setOpenDropDown(!openDropdown)
    handleSelect(val, valueObj)
  }

  const onChangeHandle = (event) => {
    const inputValue = event.target.value;
    setSelectedValue(inputValue);

    const filtered = values.filter((category) => {
      const categoryNameMatch = category?.categoryName?.toLowerCase()?.includes(inputValue?.toLowerCase());
      const subcategoriesNameMatch = category?.data?.some((subcategory) =>
        subcategory?.subCategoryName?.toLowerCase()?.includes(inputValue?.toLowerCase())
      );
      const subSubCategoryNameMatch = category?.data?.some((subcategory) =>
        subcategory?.data?.some((subsubcategory) =>
          subsubcategory?.subSubCategoryName?.toLowerCase()?.includes(inputValue?.toLowerCase())
        )
      );
      return categoryNameMatch || subcategoriesNameMatch || subSubCategoryNameMatch;
    });

    setFilteredOptions(filtered);
  }

  return (
    <div className={`${styles.selectDropDownContainer} ${className}`} ref={clickOutsideRef} aria-disabled={disabled}>
      <InputSelectDropDownButton onChangeHandle={onChangeHandle} selectClassName={selectClassName} deafultValue={deafultValue} value={openDropdown} setopenDropDown={setopenDropDown} selectedValue={selectedValue} />
      {
        openDropdown &&
        <InputSelectdropDownContainer selectListClassName={selectListClassName} values={values} onChange={handleOnChange} />
      }
    </div>
  )
}

export default InputSelectDropDown