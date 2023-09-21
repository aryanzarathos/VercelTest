import React, { useEffect, useRef } from 'react'
import Modals from '@/CommonComponents/Modals';
import ModalsBody from "../../../../../CommonComponents/Modals/ModalsBody";
import Icon_Loader from "../../../../../Assets/SiteEditor/Icons/Loader.gif";
import Sad from "../../../../../Assets/SiteEditor/Icons/sad.png";
import styles from "./publishPopUp.module.scss"
import Image from 'next/image';
import SiteUrlPopUp from '../SiteUrlPopUp/SiteUrlPopUp';
import { useSelector } from 'react-redux';


const PublishPopUp = ({ ModalsRef, onClose }) => {

    const liveRef = useRef(null);

    const { getTemplateData, publishSiteSuccess, publishSiteData, publishSiteLoading } = useSelector((state) => {
        return {
            getTemplateData: state.websiteTemplate.getTemplate.data,
            publishSiteSuccess: state.editor.publishSite.success,
            publishSiteData: state.editor.publishSite.data,
            publishSiteLoading: state.editor.publishSite.loading,
        }
    })

    useEffect(() => {
        if (publishSiteSuccess && publishSiteData && publishSiteData?.data) {
            ActionHandleOpen();
        }
    }, [publishSiteSuccess, publishSiteData])

    const ActionHandleOpen = () => {
        liveRef.current.open();
        onClose();
    };

    const ActionHandleClose = () => {
        liveRef.current.close();
    };

    const closeModal = () => {
        onClose();
    }
    return (
        <>
            <Modals
                ref={ModalsRef}
                Position="center"
                ClosePopUp={() => closeModal()}
                ModalsSize={"modalXS"}
                ClassName={styles.modalContentWidth}
            >
                <ModalsBody>
                    {
                        publishSiteLoading ?
                            <>
                                <div className={styles.mainImage}>
                                    <Image src={Icon_Loader} alt="loder" />
                                </div>
                                <p className={styles.publishContent}>Publishing Website</p>
                                <p className={styles.justContent}>Just a moment...</p>
                                {/* <button onClick={ActionHandleOpen}>Open</button> */}
                            </>
                            :
                            publishSiteSuccess && !publishSiteData?.data ?
                                <>
                                    <div className={styles.mainImageSad}>
                                        <Image src={Sad} alt="loder" />
                                    </div>
                                    <p className={styles.publishContent}>Something unusual happened.</p>
                                    <p className={styles.justContentTry}>Sorry we couldn’t publish your site. Please try again.</p>
                                    <button className={styles.tryBtn} onClick={() => location.reload()} >Try Again</button>
                                </>
                                :
                                ""
                        // <>
                        //     <div className={styles.mainImageSad}>
                        //         <Image src={Sad} alt="loder" />
                        //     </div>
                        //     <p className={styles.publishContent}>Something unusual happened.</p>
                        //     <p className={styles.justContentTry}>Sorry we couldn’t publish your site. Please try again.</p>
                        //     <button className={styles.tryBtn} onClick={() => location.reload()} >Try Again</button>
                        // </>


                    }

                </ModalsBody>
            </Modals>
            <SiteUrlPopUp liveRef={liveRef} ActionHandleClose={ActionHandleClose} getTemplateData={getTemplateData} />
        </>
    )
}

export default PublishPopUp
