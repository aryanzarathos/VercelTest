import React from 'react';
import styles from "./Loader.module.scss"
import Image from 'next/image';
import Icon_Loader from "../../../Assets/SiteEditor/Icons/Loader.gif"
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import SpinnerLoader from '@/CommonComponents/SpinnerLoader/SpinnerLoader';

const Loader = () => {
    return (
        AppLinkUrl.isPreview() ? (
            <SpinnerLoader style={{ height: "100vh" }} />
        ) : (
            <div className={styles.Loader_wrapper}>
                <div className={styles.Loader}>
                    <div className={styles.Brand_Loader}>
                        <Image src={Icon_Loader} alt="Icon_Loader" layout='fill' />
                    </div>
                    <p className={styles.title}>Please wait while we set up your editor...</p>
                </div>
            </div>
        )
    )
}

export default Loader