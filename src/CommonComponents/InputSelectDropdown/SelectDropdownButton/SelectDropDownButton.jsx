import React, { useEffect, useState } from "react";
import styles from "./selectDropDownButton.module.scss";

const SelectDropDownButton = ({
  value,
  setopenDropDown,
  buttonType,
  selectedValue,
  deafultValue,
  selectClassName,
  showInputValue,
  ChangeValue,
}) => {
  const [inputTyped,setInputTyped]=useState(false)
   const symbolsArr = ["e","+","-","E","."]
  const inputValue = () => {

    if (selectedValue&&!inputTyped) {
      if (selectedValue.toString().includes("px")) {
        return selectedValue.toString().replace("px", "");
      } else {
        return selectedValue;
      }
    }else if (showInputValue) {
      if (showInputValue.toString().includes("px")) {
        return showInputValue.toString().replace("px", "");
      } else {
        return showInputValue;
      }
    }  else {
      ("Select value");
    }
  };
  useEffect(()=>{
    return()=>{
      setInputTyped(false)
    }
  },[])
  return (
    <div className={`${styles.selectdropdownButtonContainer}`}>
      <button
        className={`${styles.selectDropDownButtonWrap} ${selectClassName} ${
          buttonType === "oval" ? `${styles.btnOvalShape}` : ""
        }`}
        onClick={setopenDropDown}
      >
        <input
          type="text"
          className={`text-2xs w-400 base ${styles.InputFields}`}
          placeholder={
            inputValue()
          }
          value={
           inputValue()
          }
          onChange={ChangeValue}
          onKeyDown={(e)=>
            {symbolsArr.includes(e.key)&&e.preventDefault();
            setInputTyped(true)
          }
          }
        />
        <span>
          <i
            className={`${styles.iconDown} ${
              value ? `${styles.iconRotate}` : ""
            }`}
          ></i>
        </span>
      </button>
    </div>
  );
};

export default SelectDropDownButton;
