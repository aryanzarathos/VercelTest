import React, { useRef, useState } from "react";
import styles from './ImageUploade.module.scss'
import Image from "next/image";
import Image1 from '../../../Assets/images/img/caring.png'
import Uploader from "@/CommonComponents/ImageUploader";



const ImageUploadeTestimonial = ({ object_data, selectedHandle }) => {

    const ref = useRef();

    const uploadThumbnail = (data) => {
        let imgData = data;
        selectedHandle(imgData);
    }

    const removeThumbnail = () => {
        let imgData = "";
        selectedHandle(imgData);
    }


    return (
        <React.Fragment>
            <div className={styles.ImageUploadWrap}>
                {
                    object_data?.src ?
                        <div className={styles.uploadeImage}>
                            <Image src={object_data?.src || Image1} alt="image" width={150} height={150} />
                            <div className={styles.delete_wrap}>
                                <i className={styles.Delete_icon} onClick={removeThumbnail} />
                            </div>
                        </div>
                        :
                        <div className={styles.uploadeImageupload} onClick={() => ref?.current?.open()} >
                            <i className={styles.uploadeIcon} />
                        </div>
                }
            </div>

            <Uploader size={5}
                accept="image/png, image/jpeg, image/jpg, image/PNG, image/webp, image/WEBP"
                onclose={() => ref?.current?.close()}
                multiSelect={false} discartRef={ref} onUploaded={(val) => uploadThumbnail(val)} uploadLimit={1} />
        </React.Fragment>
    )
}

export default ImageUploadeTestimonial;