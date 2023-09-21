import React from 'react';
import styles from "./emptySection.module.scss";
import PlusIcon from "../../Assets/Icons/plusIcon.svg"
import { useDispatch } from 'react-redux';
import { OPEN_LEFTSIDEBAR } from '@/store/reducers/SiteEditor';

const EmptySection = ({ heading }) => {
    const dispatch = useDispatch()
    const handleAddVariation=()=>{
        dispatch(
      OPEN_LEFTSIDEBAR({
        leftSidebarActive: true,
        level1Active: false,
        IndexLevel2: "",
        heading: "Add Section",
        RenderLeftComponent: "SectionPages",
      })
    );
    }
    return (
        <div className={styles.emptySectionWrapper} onClick={handleAddVariation}>
            <div className={styles.sectionRow}>
                <PlusIcon />
                <div className={styles.textWrapper}>
                    <h3 className={styles.textHeading}>{heading}</h3>
                </div>
            </div>
        </div>
    )
}

export default EmptySection