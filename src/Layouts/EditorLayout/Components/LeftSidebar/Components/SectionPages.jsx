import React, { useEffect, useState } from 'react'
import styles from "./SectionPages.module.scss"
import data from "../leftPanel.json"
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_LEFTSIDEBAR } from '../../../../../store/reducers/SiteEditor';

const SectionPages = () => {
    const [activeList, setActiveList] = useState(-1);
    const dispatch = useDispatch()
    const { data, success, loading } = useSelector((state) => state.editor.sectionsData);
    const { leftSidebarActive, level1Active } = useSelector((state) => state.editor.leftSidebar);
    const SectionPageHandle = (item, index) => {
        setActiveList(item._id);
        dispatch(OPEN_LEFTSIDEBAR({
            level1Active: true,
            level1Data: item,
            level2Active: false,
            IndexLevel2: "",
            IndexLevel1: index,
            level1Heading: item.section_name,
            level1Component: item.section_name,
        }))
    }
    useEffect(() => {
        if (leftSidebarActive === false || level1Active === false) {
            setActiveList('');
        }
    }, [leftSidebarActive, level1Active])

    return (
        <div className={styles.Main_ListWrap}>
            <ul className={styles.ListWrap}>
                {
                    data.length && data.map((item, key) => (
                        <li key={key} className={`${styles.List} ${activeList === item._id ? `${styles.Active}` : ""}`} onClick={() => SectionPageHandle(item, key)}>
                            <div className={styles.HeadingWrap}>
                                <i className={styles[item.icon]}></i>
                                <h3 className={styles.Title}>{item.section_name}</h3>
                            </div>
                            <button type="button" className={styles.RightArrow}>&#10095;</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SectionPages