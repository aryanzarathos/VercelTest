import React, { useEffect, useRef, useState } from 'react'
import styles from './GalleryThumb.module.scss'
import SwitchButton from '@/CommonComponents/SwitchButton'
import AddNewElement from '@/CommonComponents/UploadElements/AddNewElement'
import Uploader from '@/CommonComponents/ImageUploader'
import VideoIcon from '../../../Assets/SectionComponent/Icons/video-camera.svg'
import ImageIcon from '../../../Assets/SiteEditor/Icons/cameraIcon.svg'
import PenIcon from '../../../Assets/SiteEditor/Icons/pencilIcon.svg'
import Image1 from '../../../Assets/images/img/caring.png'
import Image from 'next/image'
import useTemplateData from '../../../CustomHooks/useTemplateData'
import { updateVideoManagePopup } from '../../../store/actions/managePopups'
import { useDispatch } from 'react-redux'
// import Video from 'next/video';

const VideoThumb = ({ selectedThumb, setselectedThumb, videoKey, showSelectedData }) => {

    const dispatch = useDispatch();

    const ref = useRef();
    const cropperRef = useRef();
    const [videoSrc, setVideoSrc] = useState("");
    const [thumbnailSwitch, setThumbnailSwitch] = useState(false);
    const [videoThumbnail, setVideoThumbnail] = useState(false);

    const [mainContainerId,
        mainContainerIndex,
        mainContainerData,
        subcontainerId,
        subcontainerIndex,
        subcontainerData,
        sectionId,
        sectionIndex,
        sectionData,
        gridId,
        gridIndex,
        gridData,
        selectedElementId,
        selectedElementIndex,
        selectedElementData, pageId] = useTemplateData()

    useEffect(() => {
        if (selectedThumb) {
            setVideoSrc(selectedThumb?.video?.src ? `${selectedThumb?.video?.src}#t=0.1` : "");
            setThumbnailSwitch(selectedThumb?.video?.videoPosterToggle ? selectedThumb?.video?.videoPosterToggle : false);
            setVideoThumbnail(selectedThumb?.video?.poster ? selectedThumb?.video?.poster : "");
        }
    }, [selectedThumb])

    const closePopup = () => {
        setselectedThumb(false)
    }

    const uploadVideoSrc = (data) => {
        setVideoSrc(data?.src);
        let gridPayload = JSON.parse(JSON.stringify([...gridData.data]));
        if (showSelectedData) {
            gridPayload[videoKey]['src'] = data?.src;
        } else {
            gridPayload[videoKey]['video']['src'] = data?.src;
        }
        dispatch(
            updateVideoManagePopup({
                body: { data: gridPayload },
                pageId: pageId,
                grid: gridData?._id,
                indexesData: {
                    mainContainerIndex: mainContainerIndex,
                    subcontainerIndex: subcontainerIndex,
                    sectionIndex: sectionIndex,
                    gridIndex: gridIndex,
                },
            })
        );
    }

    const HandleSwitch = (val) => {
        setThumbnailSwitch(val);
        let gridPayload = JSON.parse(JSON.stringify([...gridData.data]));
        gridPayload[videoKey]['video']['videoPosterToggle'] = val;
        dispatch(
            updateVideoManagePopup({
                body: { data: gridPayload },
                pageId: pageId,
                grid: gridData?._id,
                indexesData: {
                    mainContainerIndex: mainContainerIndex,
                    subcontainerIndex: subcontainerIndex,
                    sectionIndex: sectionIndex,
                    gridIndex: gridIndex,
                },
            })
        );
    }

    const uploadVideoThumbnail = (data) => {
        setVideoThumbnail(data?.src);
        let gridPayload = JSON.parse(JSON.stringify([...gridData.data]));
        gridPayload[videoKey]['video']['poster'] = data?.src;
        dispatch(
            updateVideoManagePopup({
                body: { data: gridPayload },
                pageId: pageId,
                grid: gridData?._id,
                indexesData: {
                    mainContainerIndex: mainContainerIndex,
                    subcontainerIndex: subcontainerIndex,
                    sectionIndex: sectionIndex,
                    gridIndex: gridIndex,
                },
            })
        );
    }



    return (
        <div className={styles.gallery_thumb_conatiner}>
            <div className={styles.gallery_thumb_subcontainer}>
                <div className={styles.gallery_header_wrap}>
                    <p className={styles.header_txt}>{`Video ${videoKey + 1}`}</p>
                    <span className={`cursor`} onClick={() => closePopup()}>&#10006;</span>
                </div>
                <div className={styles.media_wrap}>
                    <video src={videoSrc || "./dummy.mp4"} controls autoPlay loop />

                    <div className={styles.overlay_wrap}>
                        {/* <div className={styles.icon_wrap}>
                            <PenIcon className={`cursor`} />
                        </div> */}
                        <VideoIcon />
                    </div>
                </div>
                <div className={styles.uploade_Section}>
                    <AddNewElement
                        title={"Upload Media"}
                        Layout={true}
                        onClick={() => ref?.current?.open()}
                    />
                </div>
                <Uploader size={5}
                    validationProp={"onlyVideo"}
                    onclose={() => ref?.current?.close()}
                    multiSelect={false} discartRef={ref} uploadLimit={1} onUploaded={(val) => uploadVideoSrc(val)} />


                <div className={styles.thumbNail_wrap}>
                    <p>Add Video Thumbnail</p>
                    <SwitchButton layout={true} onChange={(e) => HandleSwitch(e.target.checked)} checked={thumbnailSwitch} />
                </div>
                {thumbnailSwitch &&
                    <>
                        <div className={styles.media_wrap}>
                            <Image src={videoThumbnail || Image1} alt="img" width={100} height={100} />
                            {/* <div className={styles.overlay_wrap}>
                                <div className={styles.icon_wrap} onClick={() => cropperRef?.current?.open()}>
                                    <PenIcon className={`cursor`} />
                                </div>
                                <ImageIcon />
                            </div> */}
                        </div>
                        <div className={styles.uploade_Section}>
                            <AddNewElement
                                title={"Upload Media"}
                                Layout={true}
                                onClick={() => cropperRef?.current?.open()}
                            />
                        </div>
                        <Uploader size={5}
                            accept="image/png, image/jpeg, image/jpg, image/PNG, image/webp, image/WEBP"
                            onclose={() => cropperRef?.current?.close()}
                            multiSelect={false} discartRef={cropperRef} onUploaded={(val) => uploadVideoThumbnail(val)} uploadLimit={1} />
                    </>
                }
            </div>
            {/* <div className={styles.btn_wrap}>
                <button className={`button btn-o-gray btn-xs btn-oval gray`} onClick={() => closePopup()}>Cancel</button>
                <button className={`button button-primary btn-xs btn-oval primary`}>Save</button>
            </div> */}
        </div>
    )
}

export default VideoThumb