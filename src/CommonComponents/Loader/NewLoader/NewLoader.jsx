import React from 'react'
import styles from "./newLoader.module.scss";
import webneedIcon from "../../../Assets/SiteEditor/images/webneedIcon.png"
import Image from 'next/image';

const NewLoader = () => {
    return (
        <>
            <div className={styles?.newLoaderWrapper} style={{ height: "100vh" }}>
                <div className={styles?.logoLoader}>

                    <div className={styles?.loader}>
                        <Image src={webneedIcon} alt="webneedIcon" />
                    </div>
                    {/* === svg start === */}
                    <svg height={352} width={352} className={styles?.spinner}>
                        <circle cx={175} cy={175} r={170} stroke="rgba(55, 88, 249, 1)" strokeWidth={10} fill="none" />
                        Sorry, your browser does not support inline SVG.
                    </svg>
                </div>
                {/* === svg end === */}
                {/* === text start === */}
                <p className={styles?.logoContent}>Creating something special</p>
                {/* === text end === */}

            </div>
        </>
    )
}

export default NewLoader
