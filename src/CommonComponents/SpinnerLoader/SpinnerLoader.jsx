import React from 'react';
import loaderImage from "../../Assets/SiteEditor/images/loaderImage.gif";
import styles from "./spinnerLoader.module.scss";
import Image from 'next/image';


const SpinnerLoader = ({ className, ImageClass, text, textClass, width, height, style }) => {
    return (
        <>
            <div className={`${styles.spinnerLoaderWrapper} ${className}`} style={style}>
                <Image src={loaderImage} alt="spiner loader" width={width ? width : 72} height={height ? height : 72} className={ImageClass} />
                <p className={textClass}>{text ? text : "Loading..."}</p>
            </div>
        </>
    )
}

export default SpinnerLoader
