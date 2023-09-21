import React, { useRef, useState, useEffect } from 'react';
// import './currencySelector.scss';
// import Flag from '../../assets/images/indianFlag.png'
import DropDownList from './DropDownList/DropDownList';
import { useDetectOutsideClick } from '../../../../CommonComponents/DetectOutsideClick/useDetectOutsideClick';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrency } from '../../../../store/actions/currency/currency';
import styles from "./currencySelector.module.scss";
import style from "../../../../CommonComponents/CountryFlag/CountryFlag.module.scss";
import flag from "../../../../CommonComponents/CountryFlag/flags.module.scss";
import CurrencyArrow from "../../../../Assets/SectionComponent/Icons/currencyArrow.svg"
import Link from 'next/link';
// import FlagStyle from "../../../../CommonComponents/CountryFlag/flags.scss"
// import Style from "./currencySelector.scss"
// import "../../../../CommonComponents/CountryFlag/flags.scss"
// import styled from 'styled-components';
// import Storage from '../../../../Classes/Storage';
// import SessionStorage from '../../../../Classes/SessionStorage';

// const ApplyButton= styled.button`
//    background:  ${({ theme }) => theme.HeaderRibbon.Background};
//    color:  ${({ theme }) => theme.HeaderRibbon.CurrencyDropdown.button.Background};
//    border-color: transparent;
// `

const CurrencySelector = ({ type }) => {
  // console.log(style.flag, "style")
  const [currencyList, setCurrencyList] = useState([]);

  const { currency, selectedCurrency, primaryCurrency, defaultCurrency } = useSelector((state) => {
    return {
      currency: state.currencyList,
      selectedCurrency: state.currencyList.selectedCurrency,
      primaryCurrency: state.currencyList.primaryCurrency,
      defaultCurrency: state.currencyList.defaultCurrency,
    };
  });

  // console.log('currency', currency);

  const dropRef = useRef()
  const dispatch = useDispatch();
  const [innerWindow, setWindow] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindow({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.addEventListener("resize", handleResize);
  }, [])

  useEffect(() => {
    let curr = [];
    if (currency.primaryCurrency && currency.primaryCurrency.success) {
      if (currency.primaryCurrency.data) curr.push(currency.primaryCurrency.data);
    }
    if (currency.secondaryCurrency && currency.secondaryCurrency.success) {
      if (currency.secondaryCurrency.data) curr = [...curr, ...currency.secondaryCurrency.data];
    }
    curr.length && setCurrencyList([...curr]);
  }, [currency]);

  const [shopDropdown, setshopDropdown] = useDetectOutsideClick(dropRef, false);
  const handleShowDropdown = () => {
    setshopDropdown(!shopDropdown);
  }

  const currRef = useRef();
  // // console.log(SessionStorage.alive("__CURR__")&&SessionStorage.getJson("__CURR__"))
  useEffect(() => {
    if (sessionStorage.getItem("__CURR__")) {
      // // console.log(JSON.parse(sessionStorage.getItem("__CURR__")),"line 70")
      currRef.current = JSON.parse(sessionStorage.getItem("__CURR__"));
      dispatch(selectCurrency(JSON.parse(sessionStorage.getItem("__CURR__"))));
    } else {
      currRef.current = (selectedCurrency || defaultCurrency) &&
        (selectedCurrency.data || defaultCurrency.data) &&
        (selectedCurrency.data.ISOCode || defaultCurrency.data.ISOCode) &&
        (selectedCurrency.data || defaultCurrency.data);
    }
  }, [])

  currRef.current = (selectedCurrency || defaultCurrency) &&
    (selectedCurrency.data || defaultCurrency.data) &&
    (selectedCurrency.data.ISOCode || defaultCurrency.data.ISOCode) &&
    (selectedCurrency.data || defaultCurrency.data);

  // // console.log(selectedCurrency.data , defaultCurrency.data,currRef?.current)

  const selectCurrencyHandler = (val) => {
    currRef.current = val;
    // // console.log(val,"line 82")
    sessionStorage.setItem("__CURR__", JSON.stringify(val))
    dispatch(selectCurrency(val));
    handleShowDropdown();
  };
  const currencyApplyHandler = () => {
    dispatch(selectCurrency(currRef?.current));
    handleShowDropdown();
  }

  const FindCurrencyLogo = () => {
    let data = (selectedCurrency.data.ISOCode || defaultCurrency.data.ISOCode).slice(0, 2).toLowerCase();
    return `flag.Flag${data}`
  }

  return (
    <div className={`${styles.currencySelectorContainer}`} ref={dropRef}>
      <button className={styles.currentSelectButton} onClick={handleShowDropdown}>
        <div className={styles.dropdownContentWrap}>
          <p className={styles.dropDownContentText}>
            {
              (selectedCurrency || defaultCurrency) &&
                (selectedCurrency.data || defaultCurrency.data) &&
                (selectedCurrency.data.ISOCode || defaultCurrency.data.ISOCode) ?
                <i className={`${flag.flag}  ${flag[`Flag${(selectedCurrency.data.ISOCode || defaultCurrency.data.ISOCode).slice(0, 2).toLowerCase()}`]}`}></i>
                :
                <i className={`${flag.flag} ${flag.Flagin}`}></i>
            }
            {' '}
            {
              (selectedCurrency || defaultCurrency) &&
                (selectedCurrency.data || defaultCurrency.data) &&
                (selectedCurrency.data.ISOCode || defaultCurrency.data.ISOCode) ?
                (selectedCurrency.data.ISOCode || defaultCurrency.data.ISOCode) :
                `INR`
            }
            {' '}
            {
              (selectedCurrency || defaultCurrency) &&
                (selectedCurrency.data || defaultCurrency.data) &&
                (selectedCurrency.data.symbol || defaultCurrency.data.symbol) ?
                (`(${selectedCurrency.data.symbol || defaultCurrency.data.symbol})`) :
                `(₹)`
            }
          </p>
          <CurrencyArrow fill={"#000"} />
        </div>
      </button>

      {
        shopDropdown &&
        (
          <div className={styles.showDropdownContainer}>
            <div className={styles.currencyWrap}>
              <DropDownList type="currency" label={'Currency'} curr={currRef?.current} list={currencyList} selectionMaker={(val) => { selectCurrencyHandler(val) }} />
            </div>
            {
              type === "dynamic" ?
                <div className={styles.btnWrap}>
                  <button className={styles.btnApply} onClick={currencyApplyHandler}>Apply</button>
                </div>
                : <div className={styles.btnWrap}>
                  <button className={styles.btnApply} onClick={currencyApplyHandler}>Apply</button>
                </div>
            }
          </div>
        )
      }

    </div>
  )
}

export default CurrencySelector