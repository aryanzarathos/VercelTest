// import { useSelector, useDispatch } from "react-redux";
// import { findState } from "../../store/actions/countries";
// import { string, func, bool } from "prop-types";
// import { useEffect, useState } from "react";
// import { useRef } from "react";
// import { useDetectOutsideClick } from "../DetectOutsideClick/useDetectOutsideClick";
// import React from 'react'
// import "./flags.scss"
// // import "./CountryFlag.scss"
// import { useNavigate } from "react-router-dom";
// import SearchControl from './../SearchControl/index';
// import ValidationFile from "../../Classes/ValidationFile";
// import style from "./CountryFlag.module.scss"

// function CountryStateFlagDropdown({ name, selectedValue, onSelect, selectedCountry, selectedFlag = '', SearchOption, label, className, CountryName = true, CountryCode = true, CountryFlag = true, CaretFill, position, ...props }) {
//   const countries = useSelector(state => state.countries.list);
//   const { existingStates } = useSelector((state) => {
//     return {
//       existingStates: state.shipping.existingStates.data
//     }
//   })
//   const [countryList, setCountryList] = useState([])
//   const dispatch = useDispatch()
//   const [selected, setselected] = useState("")
//   const dropdownRefShare = useRef(null);
//   const [openDropdown, SetOpenDropdown] = useDetectOutsideClick(dropdownRefShare, false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const history = useNavigate();

//   const handleOpenDropdown = data => {
//     setselected(data)
//     onSelect(data)
//     dispatch(findState(data.country))
//     SetOpenDropdown(false)
//     setSearchTerm("");
//   }

//   useEffect(() => {
//     if (selectedCountry) {
//       if (selectedFlag) {
//         setselected({ country: selectedCountry, value: selectedFlag ? selectedFlag : "IN" })
//       } else {
//         const flag = countryList.find((item) => item.country === selectedCountry)
//         if (flag) setselected({ country: selectedCountry, value: flag.value ? flag.value : "IN" })
//       }
//     } else {
//       setselected("")
//     }
//     if (selectedCountry) {
//       dispatch(findState(selectedCountry))
//     }
//   }, [countryList, dispatch, selectedCountry, selectedFlag])

//   const filterByReference = (arr1, arr2) => {
//     let res = [];
//     res = arr1.filter(el => {
//       return !arr2.find(element => {
//         return element._id === el.country && el?.states?.length === element?.state?.length;
//       });
//     });
//     return res;
//   }
//   useEffect(() => {
//     if (existingStates.length > 0) {
//       setCountryList(filterByReference(countries, existingStates))
//     } else {
//       setCountryList(countries)
//     }
//   }, [countries, existingStates])

//   const handleSearch = (e) => {
//     let inputValue = e.target.value
//     let value = ValidationFile.spaceNotAccept(inputValue);
//     setSearchTerm(value);
//   }

//   return <>
//     <div className={style.flagDropdownWrapper}>
//       <button type='button' className={`${CaretFill ? "caret-fill" : "caret-stroke"} ${openDropdown && "active"}`} onClick={() => SetOpenDropdown(!openDropdown)}>
//         <span className="button-content">
//           {(selected && CountryFlag) && <i className={`flag ${`flag-${selected.value.toLowerCase()}`}`}></i>}
//           {(selected && CountryName) ? <span className="country-name">{selected.country}</span> : label ? label : "Select Country"}
//           {(selected && CountryCode) && <span className="country-code">  &nbsp; {selected.value}</span>}
//         </span>
//       </button>
//       <ul className={`data-list ${position === 'top' ? 'dropDowntop' : ''} ${openDropdown && "show"}  `} ref={dropdownRefShare}>
//           <div className="search-div">
//             <SearchControl
//               value={searchTerm}
//               placeholder="Search..."
//               onChange={handleSearch}
//               reset={() => setSearchTerm("")}
//             />
//           </div>
//         {countryList.filter((item) => {
//           return (
//             item.country
//               .toLowerCase()
//               .includes(searchTerm.toLowerCase())
//           );
//         }).map((data, index) => {
//           return (
//             <li className="data-list-item" key={index} onClick={() => handleOpenDropdown(data)} title={`${data.country} - ${data.value}`}>
//               <div className="dt-item-content">
//                 {CountryFlag && <i className={`flag ${`flag-${data.value.toLowerCase()}`}`}></i>}
//                 {CountryName && <span className="country-name">{data.country}</span>}
//                 {CountryCode && <span className="country-code">({data.value})</span>}
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   </>
// }

// CountryStateFlagDropdown.defaultProps = {
//   autoevent: false,
//   name: "country",
//   value: "",
//   onSelect: () => { },
//   onEvent: () => { }
// }

// CountryStateFlagDropdown.propTypes = {
//   autoevent: bool,
//   name: string.isRequired,
//   value: string,
//   onSelect: func.isRequired,
//   onEvent: func
// }

// export default CountryStateFlagDropdown