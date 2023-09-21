import React from 'react';
import styles from "./TemplateLoader.module.scss"
import Image from 'next/image';
import Icon_Loader from "../../../Assets/SiteEditor/Icons/Loader.gif"

const TemplateLoader = ({ fullScreen, text = "Please wait while we set up your editor..." }) => {
    return (
        <div className={`${styles.Loader_wrapper} ${fullScreen ? `${styles.Active}` : ""}`}>
            <div className={styles.Loader}>
                <div className={styles.Brand_Loader}>
                    <Image src={Icon_Loader} alt="Icon_Loader" layout='fill' />
                </div>
                <p className={styles.title}>{text}</p>
            </div>
        </div>
    )
}

export default TemplateLoader