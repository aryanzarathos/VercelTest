import React from 'react'
// import MenuComponentLayout from '../RightSidebar/MenuComponentLayout'
// import ProductSectionLayout from '../RightSidebar/ProductSectionLayout'
import styles from "./LeftSidebar.module.scss"
import { OPEN_LEFTSIDEBAR } from '../../../../store/reducers/SiteEditor'
import { useDispatch, useSelector } from 'react-redux';
// import data from "./leftPanel.json"
import SectionPages from './Components/SectionPages';
import SitePages from './Components/SitePages';
import LevelOneDropdown from './Dropdown/LevelOneDropdown';
import LevelTwoDropdown from './Dropdown/LevelTwoDropdown';

const LeftSidebar = ({ ClassName, leftSidebarActive }) => {
  const dispatch = useDispatch();

  const { heading, RenderLeftComponent, level1Active, level2Active } = useSelector((state) => state.editor.leftSidebar);
  const handleState = () => {
    dispatch(OPEN_LEFTSIDEBAR({ leftSidebarActive: false, level2Active: false, RenderLeftComponent: "", level1Active: false }))
  }
  return (
    <React.Fragment>
      <aside className={`${styles.LeftAside} ${leftSidebarActive === true ? styles.Active_Sidebar : ""} ${styles[ClassName]}`}>
        <div className={styles.LeftAsideInnerWrap}>
          <div className={styles.HeadWrapper}>
            <h3 className={styles.Heading}>{heading}</h3>
            <button type="button" className={styles.CloseButton} onClick={handleState} />
          </div>
          {
            RenderLeftComponent === "SectionPages" ? <SectionPages /> : <SitePages />
          }
        </div>
      </aside>

      <LevelOneDropdown level1Active={level1Active} />
    </React.Fragment>
  )
}

export default LeftSidebar