import React, { useState } from 'react'
// import FormInput from '../../../../Common/Form/FormInput';
import styles from './nameAndLogo.module.scss';
import LogoImage from './logoImage.png'
import UploadSection from './UploadSection';
import faviconTitleBar from '../../../../../Assets/SiteEditor/images/Icons/faviconTitleBar.png'
import Image from 'next/image';
import FormInput from '../../../../../CommonComponents/Form/FormInput';

const NameAndLogo = () => {
   const [faviconTitle, setFaviconTitle] = useState('Jushop Jushop');
   const [LogoUpload, setLogoUpload] = useState(false);
   const [faviconUpload, setFaviconUpload] = useState(false);


   const UploadFavIconHandle =  (val) => {
      if(val === "favIcon"){
         setFaviconUpload(true)
      }else if(val=== "Logo"){
         setLogoUpload(true)
      }else{
         setLogoUpload(false)
         setFaviconUpload(false)
      }
   }
   return (
      <div className={styles.nameAndLogoContainer}>
         <div className={`${styles.websiteNameWrapper} formFieldwrap`}>
            <FormInput
               label={'Website Name'}
               labelPosition='top'
               placeholder="Enter Website Name"
               LabelClassName={`${styles.FontStylesLable}`}
               className="mt-10"
            />
         </div>
         <div className={`${styles.websiteLogoWrap} formFieldwrap`}>
            <label className={`text-2xs base ${styles.labelLogo}`}>Website Logo </label>
            {
               LogoUpload ? (
                  <UploadSection ResetFavIcon={setLogoUpload}/>
               ) : (
                  <div className='websitelogo-btn mt-10'>
                     <button className='button btn-2xs btn-o-primary' onClick={() => UploadFavIconHandle("Logo")}>+ Upload Logo</button>
                  </div>
               )
            }
         </div>

         <div className={`formFieldwrap ${styles.websiteFavicon}`}>
            <label className={`text-2xs base ${styles.labelLogo}`}>Website Favicon</label>
            <div className={styles.websiteFaviconWrap}>
               {
                  faviconUpload ? (
                     <React.Fragment>
                        <UploadSection ResetFavIcon={setFaviconUpload}/>
                        <div className={styles.faviconTitleBarContainer}>
                           <div className={styles.favicontitleBarWrap}>
                              <Image src={faviconTitleBar} alt="faviconTitlebar" />
                              <div className={styles.faviconImageWrap}>
                                 <Image src={LogoImage} alt="logoimage" />
                              </div>
                              <div className={styles.faviconTitleWrap}>
                                 <p className={`text-2xs w-400 white`}>{faviconTitle.slice(0,)}</p>
                              </div>
                              <div className={styles.faviconTitleCross}>
                                 <i className={styles.iconCross}></i>
                              </div>
                           </div>
                           <p className={`text-3xs w-400 ${styles.faviconTextInfo}`}>This Icon will be shown on browser tab.</p>

                        </div>
                     </React.Fragment>
                  ) : (
                     <div className={` mt-10 ${styles.websitelogoBtn}`}>
                        <button className='button btn-2xs btn-o-primary'  onClick={()=> UploadFavIconHandle("favIcon")}>+ Upload Favicon</button>
                     </div>
                  )
               }

            </div>
         </div>
      </div>
   )
}

export default NameAndLogo