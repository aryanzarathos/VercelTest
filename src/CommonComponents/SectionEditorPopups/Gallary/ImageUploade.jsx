/* eslint-disable react/display-name */
import React, { forwardRef, useRef, useState } from "react";
import styles from './ImageUploade.module.scss'
import Uploader from "@/CommonComponents/ImageUploader";



const ImageUploadeGallery = forwardRef(({ HandleUpload,uploadLimit,multiSelect }, ref) => {

    const uploadThumbnail = (data) => {

        HandleUpload(data);
    }
    const HandleImageUpload = () => {
        if(uploadLimit==="noLimit"){
        ref?.current?.open()
        }else if(uploadLimit!==0){
        ref?.current?.open()
        }
    }
    return (
        <React.Fragment>
            <div className={styles.ImageUploadWrap_gallery}>
                <div className={styles.uploadeImageupload} onClick={() => HandleImageUpload()} >
                    <i className={styles.uploadeIcon} />
                </div>
            </div>

            <Uploader size={5}
                accept="image/png, image/jpeg, image/jpg, image/PNG, image/webp, image/WEBP"
                onclose={() => ref?.current?.close()}
                multiSelect={multiSelect} discartRef={ref} onUploaded={(val) => uploadThumbnail(val)} uploadLimit={uploadLimit}/>
        </React.Fragment>
    )
})

export default ImageUploadeGallery;