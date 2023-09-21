import React, { useState } from 'react'
import Tabs from '../../../../../CommonComponents/Tabs/Tabs';
import GeneralPages from '../GeneralPages/GeneralPages';
import DynamicSection from './DynamicSection';
// import Applink from "../../../../../../Common/BrandLogo/"
import TabStyles from "../TabTemplate/tabTemplate.module.scss";

const DynamicPage = ({ tabs, pageType, DynamicPageCount }) => {
  const [active, setActive] = useState("Page Templates");
  return (
    <div className={TabStyles.tabTemplateContainer}>
      <div className={TabStyles.tabTemplateLeftSide}>
        <Tabs
          valueState={true}
          activeTitle={(val) => setActive(val)}
          TabWrapperClass={TabStyles.tabTemplateWrapper}
          TabButtonClass={`button ${TabStyles.tabtemplateBtn}  btn-2xs `}
          ActiveTabClass={`${TabStyles.tabTemplateBtnActive} aa`}
          tabs={tabs}
        />
      </div>
      <div className='v-hr'></div>
      <div className={TabStyles.dynamicRightSide}>
        <div className={`${TabStyles.DynamicSectionContainer} ${pageType === `${TabStyles.dynamicpages}` ? `${TabStyles.dynamicPagesContiner}` : ''}`}>
          {
            DynamicPageCount.map((temp,key) => {
              return (
                <div className={TabStyles.DynamicSection} key={key}>
                  {active === "Shop" ? <DynamicSection/> :
                    active === "Bookings" ? <GeneralPages/> :
                      active === "Blogs" ?  <DynamicSection/>:<DynamicSection/>
                        }
                </div>
              )
            })

          }
        </div>


        <div className={`${TabStyles.addPageBtnWrapper} text-right`}>

          <button className='button btn-2xs button-primary'>Add Page</button>

        </div>
      </div>
    </div>
  )
}

export default DynamicPage