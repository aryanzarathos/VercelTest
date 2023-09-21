import React from 'react'
import styles from "./SubdomainLoader.module.scss"
import Image from 'next/image';
import webneedLoaderImg from "../../../Assets/images/webneedLoaderImg.gif"
const SubdomainLoader = ({text}) => {
    return (
            <div className={styles.Loader_wrapper}>
                <div className={styles.Loader}>
                    <div className={styles.Brand_Loader}>
                        <Image src={webneedLoaderImg} alt="webneedLoaderImg" layout='fill' />
                    </div>
                    <p className={styles.title}> {text?text:''}</p>
                </div>
            </div>
    )
}

export default SubdomainLoader
