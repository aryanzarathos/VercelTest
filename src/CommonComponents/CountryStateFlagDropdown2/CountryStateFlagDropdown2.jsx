import { useSelector, useDispatch } from "react-redux";
// import { findState } from "../../store/actions/sitePreview/countries/index";
import { string, func, bool } from "prop-types";
import { useEffect, useState } from "react";
import { useRef } from "react";
// import { useDetectOutsideClick } from "../DetectOutsideClick/useDetectOutsideClick";
import React from 'react'
import "./flags.module.scss"
import style from "./CountryFlag.module.scss"
import SearchControl from './../SearchControl/index';
import ValidationFile from "../../Classes/ValidationFile";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import countriesData from "./countriesData.json"
import { findState } from "@/store/actions/countries";

function CountryStateFlagDropdown2({ name, selectedValue, onSelect, selectedCountry, selectedFlag = '', SearchOption, label, className, CountryName = true, CountryCode = false, CountryFlag = true, CaretFill, position, ...props }) {
    const countries = countriesData
    // const [countryList, setCountryList] = useState([])
    const dispatch = useDispatch()
    const [selected, setselected] = useState("")
    const dropdownRefShare = useRef(null);
    const [openDropdown, SetOpenDropdown] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [FlagValue, setFlagValue] = useState("");

    const handleOpenDropdown = data => {
        setselected(data.countryName)
        onSelect(data.countryName);
        SetOpenDropdown(false)
    }

    const FilterCountryFlag = (selected) => {
        let data = countries.countries.country.find((item) => item.countryName === selected)
        return data
    }

    useEffect(() => {
        if (selectedCountry) {
            if (selectedFlag) {
                setselected(selectedCountry)
            } else {
                const flag = countries.countries.country.find((item) => item.countryName === selectedCountry)
                setFlagValue(flag?.countryName?.toLowerCase())
                if (flag) setselected(selectedCountry)
            }
        } else {
            setselected("")
        }
        if (selectedCountry) {
            dispatch(findState(selectedCountry))
        }
    }, [countries, dispatch, selectedCountry, selectedFlag])

    const handleSearch = (e) => {
        let inputValue = e.target.value
        let value = ValidationFile.spaceNotAccept(inputValue);
        setSearchTerm(value);
    }

    const handleDropdown = () => {
        SetOpenDropdown(true)
    }
    return (
        <>
            <div className={style.flag_dropdown_wrapper}>
                <button type='button' className={`${className} ${CaretFill ? style.caret_fill : style.caret_stroke} ${openDropdown && style.active}`} onClick={() => handleDropdown()}>
                    <span className={style.button_content}>
                        {(selected && CountryFlag) && <i className={`${style.flag} ${style[`Flag${FilterCountryFlag(selected).countryCode.toLowerCase()}`]}`}></i>}
                        {(selected && CountryName) ? <span className={style.country_name}>{selected}</span> : label ? label : "Select Country"}
                        {(selected && CountryCode) && <span className={style.country_code}>  &nbsp; {FilterCountryFlag(selected).countryCode}</span>}
                    </span>
                </button>
                <ul className={`${style.data_list} ${position === 'top' ? style.dropDowntop : ''} ${openDropdown && style.show}  `} ref={dropdownRefShare}>
                    <div className={style.search_div}>
                        <SearchControl
                            value={searchTerm}
                            placeholder="Search..."
                            onChange={handleSearch}
                            reset={() => setSearchTerm("")}
                            classNameWrappper={'searchbox-class'}
                        />
                    </div>

                    {countries?.countries?.country?.filter((item) => {
                        return (
                            item.countryName
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                        );
                    }).map((data, index) => {
                        return (
                            <li className={style.data_list_item} key={index} onClick={() => handleOpenDropdown(data)} title={`${data.countryName} - ${data.countryCode}`}>
                                <div className={style.dt_item_content}>
                                    {CountryFlag && <i className={`${style.flag} ${style[`Flag${data.countryCode.toLowerCase()}`]}`}></i>}
                                    {CountryName && <span className={style.country_name}>{data.countryName}</span>}
                                    {CountryCode && <span className={style.country_code}>({data.countryCode})</span>}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    )
}

CountryStateFlagDropdown2.defaultProps = {
    autoevent: false,
    name: "country",
    value: "",
    onSelect: () => { },
    onEvent: () => { }
}

CountryStateFlagDropdown2.propTypes = {
    autoevent: bool,
    name: string.isRequired,
    value: string,
    onSelect: func.isRequired,
    onEvent: func
}

export default CountryStateFlagDropdown2