import React, { useEffect, useRef, useState } from 'react'
import FormInput from '../../../../../../../../CommonComponents/Form/FormInput'
import Image from 'next/image';
import styles from "./OGMeta.module.scss";
import dummy from "./CardDummy.jpg";
import Upload from "../../../../../../../../Assets/SiteEditor/Icons/Upload.svg"
import FormTextArea from '../../../../../../../../CommonComponents/Form/FormTextArea';
import ValidationFile from '@/Classes/ValidationFile';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import { useDispatch } from 'react-redux';
import ValidationUtils from '@/Classes/ValidationUtils';
import { editPageData } from '@/store/actions/siteEditor';
import Uploader from '@/CommonComponents/ImageUploader';
import FormError from '@/CommonComponents/Form/FormError';

const OGMeta = ({ OG_title, OG_titleError, OG_desc, OG_image,RemoveImagehandle, handleonChange, uploadThumbnail }) => {

    // const dispatch = useDispatch();
    const imageUrl = useRef(null);

    // const [OG_title, setOG_title] = useState("");
    // const [OG_titleError, setOG_titleError] = useState(false);
    // const [OG_desc, setOG_desc] = useState("");
    // const [OG_image, setOG_image] = useState("");

    // useEffect(() => {
    //     if (item) {
    //         setOG_title(item?.page_og_title);
    //         setOG_desc(item?.page_og_description);
    //         setOG_image(item?.page_og_img);
    //     }
    // }, [item])

    // const handleonChange = (e, type) => {
    //     let inputvalue = e.target.value;
    //     let value = ValidationFile.spaceNotAccept(inputvalue);
    //     switch (type) {
    //         case "title":
    //             setOG_title(value);
    //             setOG_titleError(ValidationUtils.isNotEmpty(value))
    //             break;
    //         case "desc":
    //             setOG_desc(value);
    //             break;
    //         default:
    //             break;
    //     }
    // }

    // const uploadThumbnail = (data) => {
    //     let imgData = data?.src;
    //     setOG_image(imgData);
    // }

    // const handleDoneBtn = () => {
    //     if (OG_titleError) {
    //         dispatch(editPageData({
    //             id: user?.user_business, pageId: item?._id,
    //             body: {
    //                 page_og_title: OG_title,
    //                 page_og_description: OG_desc,
    //                 page_og_img: OG_image,
    //             }, navigation
    //         }));
    //         closeModal();
    //     }
    // }

    // const RemoveImagehandle = () => {
    //     setOG_image("")
    // }

    // // console.log(OG_titleError && !OG_title, "OG_image")
    // const imageUrl = `https://images.unsplash.com/photo-1685495975736-d2a34edbe638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80`
    return (
        <React.Fragment>
            <div className={styles.OgMeta_Wrapper}>
                <div className={styles.OGLeftPanel}>
                    <div className={styles.OGLeftPanel_Wrap}>
                        <h3 className={styles.title}>OG Banner Image</h3>
                        <p className={styles.discription}>Recommended dimension : 1200x630 or more for optimal results</p>
                        {
                            OG_image ?
                                <div className={styles.FormField_Wrap}>
                                    <button className={styles.Close_button} onClick={() => RemoveImagehandle()}>
                                        <i className={styles.closeIcon}></i>
                                    </button>
                                    <Image src={OG_image ? OG_image : dummy} className={styles.OG_Image} alt="" layout="responsive" width="246" height="630" />
                                </div>
                                :
                                <div className={styles.FormField_Wrap}>
                                    <button className={styles.Upload_button} onClick={() => imageUrl?.current?.open()}>
                                        <i className={styles.upload_Icon}></i>
                                    </button>
                                    <Uploader size={5}
                                        accept="image/png, image/jpeg, image/jpg, image/PNG, image/webp, image/WEBP"
                                        onclose={() => imageUrl?.current?.close()}
                                        multiSelect={false} discartRef={imageUrl} onUploaded={(val) => uploadThumbnail(val)} uploadLimit={1} />
                                </div>
                        }
                        <div className={styles.FormField_Wrap}>
                            <FormInput
                                value={OG_title}
                                type="text"
                                labelPosition="top"
                                label="Meta Title "
                                placeholder="Home"
                                maxlength={60}
                                LabelclassName={styles.label}
                                className={styles.FormControl}
                                onChange={(e) => handleonChange(e, "og_title")}
                            />
                            <FormError show={OG_titleError && !OG_title} error="Meta Title required." />
                        </div>
                        <div className={styles.FormField_Wrap}>
                            <FormTextArea
                                value={OG_desc}
                                type="text"
                                labelPosition="top"
                                label="Meta Description"
                                placeholder="K8 School is India’s First and Only Recognised Online School. K8 School in partnership with Discovery Education is the world’s most affordable online School."
                                LabelClassName={styles.label}
                                className={styles.FormControl}
                                rows={5}
                                maxlength={160}
                                onChange={(e) => handleonChange(e, "og_desc")}
                            />
                        </div>
                    </div>
                    {/* <div className={styles.ButtonGroup}>
                        <button type="button" className="button btn-o-primary btn-oval btn-xs" onClick={closeModal}>Cancel</button>
                        <button type="button" className="button button-primary btn-oval btn-xs" onClick={handleDoneBtn}>Done</button>
                    </div> */}
                </div>
                <div className={styles.OGRightPanel}>
                    <h4 className={styles.title}>Sample Format</h4>
                    <div className={styles.card}>
                        <Image src={OG_image ? OG_image : dummy} alt="" layout="responsive" width="246" height="135" />
                        <div className={styles.Cardbody}>
                            <a href={AppLinkUrl.getHost() ? `https://${AppLinkUrl.getHost()}` : `https://${AppLinkUrl.subdomain()}.webneed.com`}
                                target="_blank" className={`${styles.Link}`}>
                                {AppLinkUrl.getHost() ?
                                    `https://${AppLinkUrl.getHost()}`
                                    :
                                    `https://${AppLinkUrl.subdomain()}.webneed.com`
                                }
                            </a>
                            <h5 className={styles.title}>
                                {OG_title}
                                {/* India&#10076;s First  Recognised Online School I Your Child Deserves */}
                            </h5>
                            <p className={styles.discription}>
                                {OG_desc}
                                {/* K8 School is India’s First and Only Recognised Online School. K8 School in partnership with Discovery 
                                Education is the world’s most affordable online School. */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OGMeta