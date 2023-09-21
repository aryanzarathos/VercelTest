import React, { useRef } from 'react'
import Modals from '@/CommonComponents/Modals';
import ModalsBody from "../../../../../CommonComponents/Modals/ModalsBody";
import ModalsHeader from "../../../../../CommonComponents/Modals/ModalsHeader";
import styles from "./siteUrlPopUp.module.scss"
import Link from 'next/link';
import siteUrlPopUp from "../../../../../Assets/SiteEditor/images/siteUrlPopUp.png"
import Image from 'next/image';
import CustomDomain from '../CustomDomain/CustomDomain';

const SiteUrlPopUp = ({ liveRef, ActionHandleClose, getTemplateData }) => {

    const customRef = useRef(null);

    const closeModal = () => {
        ActionHandleClose();
    }

    const openCustomPopUp = () => {
        customRef.current.open();
        ActionHandleClose();
    };

    const closeCustomPopUp = () => {
        customRef.current.close();
    };

    return (
        <>
            <Modals
                ref={liveRef}
                Position="center"
                ClosePopUp={() => closeModal()}
                ModalsSize={"modalS"}
                ClassName={styles.modalWrapper}
            >
                <ModalsHeader className={styles.modalHead}>
                    <p className={styles.congContent}>Congratulation! Your site is live</p>
                    <div className={styles.urlWrapper}>
                        <ul className={styles.dots}>
                            <li className={styles.dotsItem}></li>
                            <li className={styles.dotsItem}></li>
                            <li className={styles.dotsItem}></li>
                        </ul>
                        <div className={styles.urlName}>
                            <p className={styles.urlContent}>
                                https://
                                <span>
                                    {getTemplateData?.businessData?.business_subdomain}
                                    {/* mysite3zsv0 */}
                                </span>
                                .webneed.com</p>
                            <a href={`https://${getTemplateData?.businessData?.business_subdomain}.webneed.com/`} target="_blank" className={styles.viewSite}>View Site</a>
                        </div>
                    </div>
                </ModalsHeader>
                <ModalsBody>
                    <div className={styles.mainContent}>
                        <div className={styles.leftContent}>
                            <p className={styles.nextStep}>SUGGESTED NEXT STEP</p>
                            <h5 className={styles.connectText}>Connect to a
                                custom domain</h5>
                            <p className={styles.makeIt}>
                                Make it easier for customers to find
                                your website by attaching a domain
                                that’s unique to your business.
                            </p>
                            <button className={styles.contactBtn} onClick={openCustomPopUp}>Contact Us</button>
                        </div>
                        <div className={styles.rightContent}>
                            <Image src={siteUrlPopUp} alt="pop up image" />
                        </div>
                    </div>
                </ModalsBody>
            </Modals >
            <CustomDomain customRef={customRef} closeCustomPopUp={closeCustomPopUp} />
        </>
    )
}

export default SiteUrlPopUp
