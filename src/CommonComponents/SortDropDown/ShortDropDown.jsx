import React, { useRef, useState } from 'react';
import styles from './ShortDropDown.module.scss';
import { useDetectOutsideClick } from '../DetectOutsideClick/useDetectOutsideClick';
import SortImg from "../../Assets/SectionComponent/Icons/sort.svg"
import Check from "../../Assets/SectionComponent/Icons/icons_check_blue.svg"
import CheckBlue from "../../Assets/SectionComponent/Icons/icons_check.svg"



const ShortDropDown = ({ values, defaultValue, disabled, onChange }) => {
    const dropdownRef = useRef();
    const [SortbyRef, SetSortbyRef] = useDetectOutsideClick(dropdownRef, false);
    const [list, Setlist] = useState()
    const HandleshowSortbyRef = () => {
        SetSortbyRef(!SortbyRef)
    }

    const HandleList = (val) => {
        Setlist(val);
        onChange(val);
    }

    return (
        <div className={styles.Short_DropDown_Container} aria-disabled={disabled} ref={dropdownRef}>
            <button className={styles.Sort_by_btn} onClick={() => HandleshowSortbyRef()}>{defaultValue ? defaultValue : "Sort by"}
                <SortImg /></button>
            {SortbyRef ?
                (<div className={styles.list_body} >
                    {values.map((value, key) =>
                        <div className={styles.list_wrap} key={key} onClick={() => HandleList(value)}>
                            {list === value ? <CheckBlue /> : <Check />}
                            <p className={styles.list_txt} >{value}</p>
                        </div>
                    )}
                </div>) : ""
            }

        </div>
    )
}

export default ShortDropDown