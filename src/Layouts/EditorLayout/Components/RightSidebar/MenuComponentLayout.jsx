import React, { useState, useRef } from 'react'
import MenuComponentDetails from './menuComponentDetail';
import styles from "./rightSidebar.module.scss";
import SwitchButton from '../../../../CommonComponents/SwitchButton';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_RIGHTSIDEBAR } from '../../../../store/reducers/SiteEditor';
// import { useDetectOutsideClick } from "../../../../../Common/DetectOutsideClick/useDetectOutsideClick";
const MenuComponentLayout = ({ handleState }) => {
  const dropdownRef = useRef(null);
  const dispatch = useDispatch()
  const { heading, RenderComponent, active, activeItemList, RenderItemList } = useSelector((state) => state.editor.rightSidebar)

  const manageMenuComponentDetail = (item, heading) => {
    dispatch(OPEN_RIGHTSIDEBAR({ heading: heading, activeItemList: false, RenderComponent: item }))

  }
  const menuBackButton = () => {
    dispatch(OPEN_RIGHTSIDEBAR({ activeItemList: true, heading: 'Header & Footer' }))
  }
  return (
    <React.Fragment>

      {activeItemList && <div className={`${styles.MenuContentWrapper} ${activeItemList ? styles.Hide : ""}`}>

        <div className={styles.MenuContentHead}>

          <h4>{heading}</h4>
          <button type="button" className={styles.CloseButton} onClick={handleState}>
          </button>
        </div>
        <div className={styles.MenuContentBody}>
          {
            RenderItemList === "ActiveColorPalet" ? (
              <>
                <ul className={styles.MenuList}>
                  <li className={styles.MenuListItem} onClick={() => manageMenuComponentDetail("ThemeFont", 'Theme & Font')}>Theme & Font</li>
                  <li className={styles.MenuListItem} onClick={() => manageMenuComponentDetail("WebsiteStructure", 'Website Structure')}>Website Structure</li>
                  <li className={styles.MenuListItem} onClick={() => manageMenuComponentDetail("ChangeDesign", 'Change Design templates')}>Change Design templates</li>
                </ul>

              </>
            ) : RenderItemList === "ActiveSetting" ? (
              <ul className={styles.MenuList}>
                <li className={styles.MenuListItem} onClick={() => manageMenuComponentDetail("WebsiteNameLogo", 'Website name & Logo')}>Website name & Logo</li>
                <li className={styles.MenuListItem} onClick={() => manageMenuComponentDetail("SocialMedia", 'Social Media')}>Social Media</li>
                <li className={styles.MenuListItem} onClick={() => manageMenuComponentDetail("WebsiteType", 'Website Type')}>Website Type</li>
                <li className={styles.MenuListItem} onClick={() => manageMenuComponentDetail("BusinessDetails", 'Business Details')}>Business Details</li>
              </ul>
            ) : RenderItemList === "HeaderFooter" ? (
              <ul className={styles.MenuList}>
                <li className={`${styles.MenuListItem} ${styles.desiabled}`}>Manage header</li>
                <li className={styles.MenuListItem} onClick={() => manageMenuComponentDetail("TopHeader", 'Top Header')}>Top Header</li>
                <li className={styles.MenuListItem} onClick={() => manageMenuComponentDetail("MainHeader", 'Main Header')}>Main Header</li>
                <li className={`${styles.MenuListItem} ${styles.desiabled}`}>Manage Footer</li>
                <li className={styles.MenuListItem} onClick={() => manageMenuComponentDetail("footer", 'Footer')}>Footer</li>
                <li className={styles.MenuListItem} onClick={() => manageMenuComponentDetail("copyRightFooter", 'Copyright Strip')}>Copyright Strip</li>
              </ul>
            ) : ""
          }
        </div>
      </div>
      }
      <MenuComponentDetails handleState={handleState} refProp={dropdownRef} ClassName={!activeItemList ? "Open" : "hide"} menuBackButton={() => menuBackButton()} />
    </React.Fragment>
  )
}

export default MenuComponentLayout;