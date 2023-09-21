import React, { useRef, useState } from "react";
import styles from './ImageUploader.module.scss'
import Image from "next/image";
import image1 from '../../../../../../../Assets/images/img/caring.png'
import SelectDropDown from "../../../../../../../CommonComponents/SelectDropdown";
import Uploader from "../../../../../../../CommonComponents/ImageUploader";
import removeImageIcon from "../../../../../../../Assets/SiteEditor/Icons/removeImageIcon.png";


const ImageUploade = ({ object_data,closeImageHandle, selectedHandle }) => {

    const ref = useRef();

    const valuefit = ['contain', 'cover', "auto"]
    const valueposition = ['top', 'center', 'bottom', 'left', 'right']

    const uploadThumbnail = (data) => {
        let imgData = data?.src;
        selectedHandle("image_url", imgData);
    }
    console.log(object_data, "object_data")

    return (
        <React.Fragment>
            <div className={styles.ImageUploadWrap}>
                {
                    object_data?.image_url ?
                        <div className={styles.uploadeImage}>
                            <Image src={object_data?.image_url || image1} alt="image" width={150} height={150} className={styles.imgClass} />
                            <button className={styles.closeIcon} onClick={closeImageHandle}>
                                <Image src={removeImageIcon} alt="remove image" />
                            </button>
                        </div>
                        :
                        <div className={styles.uploadeImageupload} onClick={() => ref?.current?.open()} >
                            <i className={styles.uploadeIcon} />
                        </div>
                }

                <div className={styles.propertyImg}>
                    <div className={styles.objectfitWrap}>
                        <p className={styles.objectFitTxt}>Object Fit</p>
                        <SelectDropDown handleSelect={(val) => selectedHandle("object_fit", val)} showValue={object_data?.object_fit}
                            deafultValue={object_data?.object_fit} className={styles.dropdownobject} values={valuefit} />
                    </div>
                    <div className={styles.objectfitWrap}>
                        <p className={styles.objectFitTxt}>Position</p>
                        <SelectDropDown handleSelect={(val) => selectedHandle("position", val)} showValue={object_data?.position}
                            deafultValue={object_data?.position} className={styles.dropdownobject} values={valueposition} />
                    </div>
                </div>

            </div>

            <Uploader size={5}
                accept="image/png, image/jpeg, image/jpg, image/PNG, image/webp, image/WEBP"
                onclose={() => ref?.current?.close()}
                multiSelect={false} discartRef={ref} onUploaded={(val) => uploadThumbnail(val)} uploadLimit={1} />
        </React.Fragment>
    )
}

export default ImageUploade;