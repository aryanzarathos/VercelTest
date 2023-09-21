import Image from 'next/image';
import React, { useState } from 'react'
import Tabs from '../../../../../CommonComponents/Tabs/Tabs';
import styles from  './tabTemplate.module.scss';

const TabTemplate = ({ tabs, pageType, templateCount }) => {
  const [active, setActive] = useState("Page Templates");
  return (
    <div className={styles.tabTemplateContainer}>
      <div className={styles.tabTemplateLeftSide}>
        <Tabs
          valueState={true}
          activeTitle={(val) => setActive(val)}
          TabWrapperClass={styles.tabTemplateWrapper}
          TabButtonClass={`button ${styles.tabtemplateBtn}  btn-2xs `}
          ActiveTabClass={`${styles.tabTemplateBtnActive}`}
          tabs={tabs}
        />
      </div>
      <div className='v-hr'></div>
      <div className={styles.tabTemplateRightSide}>
        <div className={`${styles.templateSectionContainer} ${pageType === `${styles.dynanicpages}` ? `${styles.dynamicPagesContiner}` : ''}`}>
          {
            templateCount.map((temp,key) => (
              //    when template is selected add 'templateSelected' class
              <div className={styles.templateSectionWrapper} key={key}>
                {/* <iframe src="https://harneed.com/" className='tempate-iframe'  style={{border:'none'}} title="Iframe" /> */}
                <Image src={temp} alt="template" />
                {/* <Header /> */}
                {/* <div className='overlay-iframe'></div> */}
              </div>
            ))

          }
        </div>


        <div className={`${styles.addPageBtnWrapper} text-right`}>
          <button className='button btn-2xs button-primary'>Add Page</button>
        </div>
      </div>
    </div>
  )
}

export default TabTemplate