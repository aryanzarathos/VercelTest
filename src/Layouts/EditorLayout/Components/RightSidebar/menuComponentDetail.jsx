import React, { useState } from 'react'
import Managefooter from './ManageFooter/Managefooter';
// import SocialMedia from '../../SocialMedia/SocialMedia';
// import ThemeSetting from '../../ThemeSetting/index';
// import NameAndLogo from '../../WebsiteSetting/NameAndLogo';
import styles from "./menuComponent.module.scss";
import SocialMedia from './SocialMedia/SocialMedia';
import ThemeSetting from './ThemeSetting';
import NameAndLogo from './WebsiteSetting/NameAndLogo';
import DeleteSection from './DeletedSection';
import WebsiteType from './WebsiteSetting/WebsiteType';
import BusinessDetail from './WebsiteSetting/BusinessDetail';
import HeaderLayout from './WebsiteStructure/HeaderLayout';
import Switchtemplate from './DesignTemplate/Switchtemplate';
import TopHeader from './HeaderStructure/TopHeader';
import MainHeader from './HeaderStructure/MainHeader';
import { useSelector } from 'react-redux';
import Footer from './HeaderStructure/Footer';
import CopyRightFooter from './HeaderStructure/CopyrightFooter';

const MenuComponentDetails = ({ refProp, handleState, menuBackButton }) => {

  const { heading, innerHeading, RenderComponent, activeItemList } = useSelector((state) => state.editor.rightSidebar)

  return (
    <React.Fragment>

      <div className={`${styles.MenuComponentDetail} ${activeItemList ? styles.Hide : styles.Open}`}>

        <div className={styles.MenuComponentDetailHead}>
          <div className={styles.MenuBackButtonWrap}>
            {
              RenderComponent === "ThemeFont" ?
                ""
                :
                <button className={styles.MenuBackButton} onClick={() => menuBackButton()}></button>
            }
            <h4>{heading}</h4>
          </div>
          {innerHeading && <h4>{innerHeading}</h4>}

          <button type="button" className={styles.CloseButton} onClick={handleState}>
          </button>
        </div>
        <div className={styles.MenuComponentDetailBody}>
          {
            // ChildComponentsType === "BusinessDetails" ? <DeleteSection /> : 
            // ChildComponentsType === "WebsiteType" ? <Managefooter /> :
            RenderComponent === "ChangeDesign" ? <Switchtemplate /> :
              RenderComponent === "TopHeader" ? <TopHeader /> :
                RenderComponent === "MainHeader" ? <MainHeader /> :
                  RenderComponent === "footer" ? <Footer /> :
                    RenderComponent === "copyRightFooter" ? <CopyRightFooter /> :
                      RenderComponent === "WebsiteStructure" ? <HeaderLayout /> :
                        RenderComponent === "BusinessDetails" ? <BusinessDetail /> :
                          RenderComponent === "WebsiteType" ? <WebsiteType /> :
                            RenderComponent === "ThemeFont" ? <ThemeSetting /> :
                              RenderComponent === "WebsiteNameLogo" ? <NameAndLogo /> :
                                RenderComponent === "SocialMedia" ? <SocialMedia /> : ""
          }
        </div>
        {/* <div className={styles.MenuComponentDetailFooter}>
            <button type='button' className={styles.FooterButton}>Save</button>
            <button type='button' className={styles.FooterButton}>Cancel</button>
          </div> */}
      </div>

    </React.Fragment>
  )
}

export default MenuComponentDetails