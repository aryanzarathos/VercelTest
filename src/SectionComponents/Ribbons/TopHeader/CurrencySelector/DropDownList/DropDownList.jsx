import React from 'react';
import { useState } from 'react';
// import './dropDownList.scss';
// import Flag from '../../../assets/images/indianFlag.png'
// import { useRaf } from 'rooks';
import { useRef } from 'react';
import { useDetectOutsideClick } from '../../../../../CommonComponents/DetectOutsideClick/useDetectOutsideClick';
import { useSelector } from 'react-redux';
import { useLayoutEffect } from 'react';
// import {styles} from "../../../../../Common/CountryFlag/CountryFlag.module.scss";
import styles from "../../../../../CommonComponents/CountryFlag/CountryFlag.module.scss"
import style from "./dropDownList.module.scss";
import CurrencyArrow from "../../../../../Assets/SectionComponent/Icons/currencyArrow.svg";
import flag from "../../../../../CommonComponents/CountryFlag/flags.module.scss";


const DropDownList = ({ type, label, curr, list, selectionMaker }) => {
  const [symbol, setSymbol] = useState(`(₹)`);
  const [currency, setCurrency] = useState(`Indian Rupee`);
  const [ISO, setISO] = useState(`INR`);

  const { selectedCurrency, primaryCurrency } = useSelector((state) => {
    return {
      selectedCurrency: state.currencyList.selectedCurrency,
      primaryCurrency: state.currencyList.primaryCurrency,
    };
  });

  const dropRef = useRef(null);

  // const [openDropDown, setOpenDropDown] = useDetectOutsideClick(dropRef, false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const handleOpenDrop = () => {
    setOpenDropDown(!openDropDown)
  }

  useLayoutEffect(() => {
    setSymbol(
      (selectedCurrency || primaryCurrency) &&
        (selectedCurrency.data || primaryCurrency.data) &&
        (selectedCurrency.data.symbol || primaryCurrency.data.symbol) ?
        (selectedCurrency.data.symbol || primaryCurrency.data.symbol) :
        `(₹)`
    );
    setCurrency(
      (selectedCurrency || primaryCurrency) &&
        (selectedCurrency.data || primaryCurrency.data) &&
        (selectedCurrency.data.currency || primaryCurrency.data.currency) ?
        (selectedCurrency.data.currency || primaryCurrency.data.currency) :
        `Indian Rupee`
    );
    setISO(
      (selectedCurrency || primaryCurrency) &&
        (selectedCurrency.data || primaryCurrency.data) &&
        (selectedCurrency.data.ISOCode || primaryCurrency.data.ISOCode) ?
        (selectedCurrency.data.ISOCode || primaryCurrency.data.ISOCode) :
        `INR`
    );
  }, [selectedCurrency, primaryCurrency]);

  const currencyHandler = (v) => {
    selectionMaker(v);
    setSymbol(v.symbol);
    setCurrency(v.currency);
    setISO(v.ISOCode);
    handleOpenDrop()
  }

  return (
    <div className={style.currencyDropDownContainer}>
      <div className={style.categoryDropdown}>
        <div className={style.labelDropdown}>
          <p className={style.lableDropdownText}>{label}</p>
        </div>
        <button className={style.categoryDropDpwnBtn}
          onClick={handleOpenDrop} >
          <div className={style.dropDownBtnContent}>
            {
              <React.Fragment>
                {/* for currency  */}
                <p className={style.dropDownContent}>
                  {/* className={`${flag.flag}  ${flag[`Flag${(selectedCurrency.data.ISOCode || defaultCurrency.data.ISOCode).slice(0, 2).toLowerCase()}`]}`} */}
                  <span> <i className={`${flag.flag}  ${flag[`Flag${(selectedCurrency.data.ISOCode)?.slice(0, 2).toLowerCase()}`]}`}></i></span>
                  <span>{ISO}</span>
                  <span>{`(${symbol})`}
                  </span>
                </p>
              </React.Fragment>
            }
          </div>  <CurrencyArrow fill={"#000"} /> </button>
        <ul className={`${style.dropdownContent} ${openDropDown ? `${style.displayShow}` : " "}`} ref={dropRef}>

          {
            list && list.length ? list.map((v, key) => {
              return (
                <li className={style.dropDownContentLi} onClick={() => currencyHandler(v)} key={key}>
                  <div className={style.dropDownContentsList}>
                    {
                      <React.Fragment>
                        <div className={style.textWrap} title={`${v.currency} - ${v.ISOCode} - ${v.symbol}`}>
                          <p>
                            <span>
                              <i className={`${flag?.flag}  ${flag[`Flag${(v?.ISOCode)?.slice(0, 2)?.toLowerCase()}`]}`}></i>
                            </span>
                            <span>{v.currency}</span>
                            <span>{v.ISOCode}</span>
                            <span>({v.symbol})</span>
                          </p>
                        </div>
                      </React.Fragment>
                    }
                  </div>

                </li>
              )
            }) :
              <li className={style.dropDownContentLi}>
                <div className={style.dropDownContentsList}>
                  {
                    <React.Fragment>
                      {/* <img src={Flag} alt="" className='flag-image' /> */}
                      <span> <i className={`${flag?.flag}  ${flag[`Flag${(selectedCurrency?.data?.ISOCode)?.slice(0, 2)?.toLowerCase()}`]}`}>122</i></span>
                      <div className={style.textWrap}>
                        <p>{`Indian rupee - INR (₹)`}</p>
                      </div>
                    </React.Fragment>
                  }
                </div>

              </li>
          }
        </ul>
      </div>
    </div >
  )
}

export default DropDownList