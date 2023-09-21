import React, { useState } from 'react'
import MenuComponentLayout from './MenuComponentLayout';
import styles from "./rightSidebar.module.scss";
// import DeleteSection from './DeletedSection';
// import ManageFooter from './ManageFooter/Managefooter';
// import SocialMedia from "./SocialMedia/SocialMedia"
// import ThemeSetting from "./ThemeSetting/index"
// import NameAndLogo from "./WebsiteSetting/NameAndLogo"
// import UploadSection from "./WebsiteSetting/UploadSection"
import ProductSectionLayout from './ProductSectionLayout';
import { useDispatch } from 'react-redux';
import { OPEN_RIGHTSIDEBAR } from '../../../../store/reducers/SiteEditor';
// import AboutTheme1 from '../../../../SectionComponents/AboutUs/Theme1/Theme1';
// import AboutTheme4 from '../../../../SectionComponents/AboutUs/Theme4/Theme4';
// import BannerTheme1 from '../../../../SectionComponents/Banner/Theme1';
// import BlogCategories from '../../../../SectionComponents/BolgCategories';


const RightSidebar = ({ ClassName,active }) => {
 const dispatch = useDispatch()
  const handleState = () => {
    // close action
    dispatch(OPEN_RIGHTSIDEBAR({heading:"",activeItemList:false,RenderItemList:"",active:false,}))
  }
  // //// console.log(activeSectionLayout, "activeSectionLayout")

  return (
    <aside className={`${styles.RightAside} ${active === true ? styles.Active_Right_Sidebar : ""} ${styles[ClassName]}`}>
      <div className={styles.AsideInnerWrap}>
       
        <MenuComponentLayout handleState={handleState}/>
        {
          //  false ?  <SocialMedia/> : <NameAndLogo/> 
          // false ? <DeleteSection /> : <ManageFooter />
        }
      </div>
     

    </aside>
  )
}

export default RightSidebar