import React, { useState } from 'react';
import LogoImgae from './logoImage.png';
import styles from './uploadSection.module.scss';
import Image from 'next/image';
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';

const UploadSection = ({ ResetFavIcon, openUploader, remove, src }) => {

   const ResetHandle = () => {
      ResetFavIcon(false)
   }
   const [logoTemp, setlogoTemp] = useState(
      {
         src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5938&q=80 5938w"
      }
   )
   return (
      <div className={`mt-10 ${styles.websiteLogoImageContainer}`}>
         <div className={`${styles.websiteLogoImageWrap} ${src ? '' : styles.noLogo}`}>
            {src ? <>
               <div className={styles.imageWrap}>
                  <ImageElement src={src} defaultImage={logoTemp.src} />
               </div>
               <div className={styles.iconCrossCircle} onClick={() => { remove() }}>
                  <i className={`ed-icon white ${styles.iconCross}`}></i>
               </div>
            </>
               :
               <div className={styles.uploadeIconWrap} onClick={openUploader}>
                  <i className={styles.uploadeIcon}></i>
               </div>
            }
         </div>

         {/* <div className={styles.editIconWrap} onClick={openUploader}>
            <i className={`ed-icon i-xs base ${styles.iconPencial}`}></i>
         </div> */}
      </div>
   )
}

export default UploadSection