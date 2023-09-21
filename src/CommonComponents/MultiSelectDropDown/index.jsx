import React, { useRef } from 'react'
import { useState } from 'react';
import CheckboxInput from '../Form/CheckboxInput';
import { useDetectOutsideClick } from '../DetectOutsideClick/useDetectOutsideClick';
import style from './MultiSelect.module.scss'
import SearchControl from '../SearchControl';
import ValidationFile from '@/Classes/ValidationFile';
const MultiSelectDropdown = ({ values, BorderRadius, heading, className, selectedValues, defaultValue, selectedName, label, value, handleSelect, arrayType, showApplyBtn, handleApplyBtn, showAll, handleAllSelect, showValue }) => {

    const outSideclickRef = useRef(null)
    const [activeTab, setactiveTab] = useDetectOutsideClick(outSideclickRef, false);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        let inputValue = e.target.value;
        let value = ValidationFile.spaceNotAccept(inputValue);
        setSearchTerm(value);
    }

    return (
        <React.Fragment>
            <div className={`${style.multiSelectCollection_Container} ${className}`} ref={outSideclickRef}>
                <div className={style.addProduct_container}>
                    <div className={style.e_commerce_wrap}>
                        {heading && <p className={`${style.label_heading} mb-10`}>
                            {heading}
                        </p>}
                        <button className={`${style.collection_drop_wrap}   ${BorderRadius ? style.Collection_radius : ""} position-relative cursor`} onClick={() => setactiveTab(!activeTab)}>
                            <p className={`${style.sidebar_heading} w-400 base`} >
                                {values?.length && selectedValues?.length && values?.length === selectedValues?.length ? "All selected" : selectedValues?.length > 1 ? `${selectedValues?.length} selected` : selectedValues?.length === 1 ? selectedName : selectedName || defaultValue}</p>
                            <i className={`${style.iconDown}  ${activeTab ? style.iconRotate : ""}`}></i>
                        </button>
                        {activeTab ?
                            <div className={`${style.sidebar_collection_wrap} ${style.side_padding}`}>
                                <SearchControl
                                    className={style.searchbar}
                                    placeholder={"Search..."}
                                    border={true}
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    reset={() => setSearchTerm("")}

                                />
                                <div className={`${style.sidebar_collection_checkbox_wrap} mt-10 mb-10`}>
                                    {arrayType === "String" ?
                                        <React.Fragment>
                                            {showAll ?
                                                <CheckboxInput
                                                    name=""
                                                    id={"aa"}
                                                    label={"All"}
                                                    LabelClass={`${style.label_heading} ${style.eComm_checkbox_center}`}
                                                    className={`${style.eComm_checkbox} ${style.check_box_wrap}`}
                                                    // value={item}
                                                    // key={key}
                                                    checked={selectedValues && values.length === selectedValues?.length}
                                                    onChange={(e) => handleAllSelect(e)}
                                                />
                                                : ""
                                            }
                                            {values && values.length > 0 && values.map((item, key) => {
                                                return (
                                                    <div className={style.collection_latest_wrap} key={key}>
                                                        <CheckboxInput
                                                            name=""
                                                            id={key}
                                                            label={item}
                                                            LabelClass={`${style.label_heading} ${style.eComm_checkbox_center}`}
                                                            className={`${style.eComm_checkbox} ${style.check_box_wrap}`}
                                                            value={item}
                                                            key={key}
                                                            checked={selectedValues?.includes(item)}
                                                            onChange={(e) => handleSelect(e, item)}
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </React.Fragment> :
                                        values && values.length > 0 && values.filter((item) => {
                                            return (
                                                item[label]?.toLowerCase()
                                                    .includes(searchTerm?.toLowerCase())
                                            )
                                        })
                                            .map((item, key) => {
                                                return (
                                                    <div className={style.collection_latest_wrap} key={key}>
                                                        <CheckboxInput
                                                            name=""
                                                            id={key}
                                                            label={item[label]}
                                                            LabelClass={`${style.label_heading} ${style.eComm_checkbox_center}`}
                                                            className={`${style.eComm_checkbox} ${style.check_box_wrap}`}
                                                            value={item[value]}
                                                            key={key}
                                                            checked={selectedValues?.includes(item[value])}
                                                            onChange={(e) => handleSelect(e, item[value])}
                                                        />
                                                    </div>
                                                );
                                            })
                                    }
                                </div>
                                {showApplyBtn ? <div className={`${style.btn_wrap} inline`}>
                                    <button className={`button btn-oval button-primary ${style.btn_apply}`}
                                        onClick={() => {
                                            handleApplyBtn();
                                            setactiveTab(false)
                                        }}>Apply</button>
                                </div> : ""}
                            </div> : ""}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default MultiSelectDropdown