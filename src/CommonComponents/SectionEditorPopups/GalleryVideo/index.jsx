import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import styles from './GalleryVideo.module.scss'
import CheckboxInput from '@/CommonComponents/Form/CheckboxInput';
import VideoThumb from './VideoThumb';
import useTemplateData from '../../../CustomHooks/useTemplateData';
import { useDispatch, useSelector } from 'react-redux';
import { updateVideoManagePopup } from '../../../store/actions/managePopups';
import DeleteIcon from '../../../Assets/Icons/Trash-icon.svg';
import { useOutsideClick } from 'rooks';

const data = ['Video 1', 'Video 2', 'Video 3', 'Video 4']

const GalleryVideo = ({ children }) => {
    const { modalState } = useSelector((state) => state.commonStates);
    const ref = children.ref;
    const dispatch = useDispatch();

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
        selectedElementData, pageId] = useTemplateData();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setselectedItems] = useState([]);
    const [selectedVideo, setselectedVideo] = useState("");
    const [selectedVideoKey, setselectedVideoKey] = useState("");
    const closePopup = () => {
        setIsOpen(false)
    }
    const openPopup = () => {
        setIsOpen(true)
    }
    useImperativeHandle(ref, () => ({
        open: () => openPopup(),
        close: closePopup,
        isOpen: isOpen
    }), [isOpen]
    );

    const handleCheckboxChange = (e, id) => {
        let inputChecked = e.target.checked;
        let array = selectedItems;
        if (inputChecked) {
            array.push(id);
        }
        else {
            let index = array.indexOf(id);
            array.splice(index, 1);
        }
        setselectedItems([...array]);
        setselectedVideo("");
    }

    const HandleSelectedVideo = (item, key) => {
        setselectedVideo(item);
        setselectedVideoKey(key);
    }

    const handleAddSlideBtn = () => {
        let data =
        {
            id: Math.random(),
            video: {
                alt: "ALT TEXT",
                src: "https://static.vecteezy.com/system/resources/previews/018/762/601/valentine-heart-neon-display-background-free-video.webm"
            }
        }
        let array = [...gridData?.data];
        array.push(data);
        dispatch(
            updateVideoManagePopup({
                body: { data: array },
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
        setselectedVideo("");
        setselectedVideoKey("");
    }

    const handleDeleteBtn = () => {
        let array = gridData?.data;
        let newData = array.filter((item) => !selectedItems.includes(item?.id));
        setselectedItems([]);
        setselectedVideo("");
        setselectedVideoKey("");
        dispatch(
            updateVideoManagePopup({
                body: { data: newData },
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
    let data = document.getElementById("media_gallery_editor")
    useOutsideClick({ current: data }, () => {
        if (isOpen && !modalState) setIsOpen(false)
    });
    return (isOpen && (
        <div ref={children.ref} className={styles.gallery_Container_Vid} id="vid_gallery_mng">
            <div className={styles.gallery_subcontainer} >
                <div className={styles.gallery_header_wrap}>
                    <p className={styles.header_txt}>Customize Slides</p>
                    <span className={`cursor`} onClick={() => { closePopup() }}>&#10006;</span>
                </div>
                <React.Fragment>
                    <div className={styles.slider_wrap_Container}>
                        {gridData && gridData?.data && gridData?.data?.length ?
                            gridData?.data?.map((item, key) => (
                                <div className={children?.showSelectedData ? `${styles.SliderWrapper} ${styles.borderNone}` : `${styles.SliderWrapper}`}
                                    key={key} onClick={() => HandleSelectedVideo(item, key)}>
                                    <div className='inline'>
                                        {children?.showSelectedData ? "" :
                                            <CheckboxInput
                                                checked={selectedItems.includes(item?.id)}
                                                onChange={(e) => handleCheckboxChange(e, item?.id)}
                                                // label={`Video ${key + 1}`}
                                                LabelClass={styles.Label}
                                                className={styles.FormCheckbox}
                                            />
                                        }
                                        <p onClick={() => HandleSelectedVideo(item, key)}>{`Video ${key + 1}`}</p>
                                    </div>
                                    {selectedItems.length ? "" :
                                        <button
                                            className={styles.Arrow_button}
                                            onClick={() => HandleSelectedVideo(item, key)}
                                        >
                                            &#10095;
                                        </button>
                                    }
                                </div>
                            )) : ""}
                    </div>

                    {selectedItems?.length ?
                        <button
                            className={`button btn-xs btn-oval mt-15 ${styles.AddSlides_button} ${styles.Delete_button} `}
                            onClick={handleDeleteBtn}
                        >
                            <DeleteIcon /> <p>Delete</p>
                        </button>
                        :
                        <>
                            {children?.showSelectedData ? "" :
                                <button
                                    className={`button btn-o-primary btn-xs btn-oval mt-15 ${styles.AddSlides_button}`}
                                    onClick={handleAddSlideBtn}
                                >
                                    &#43; Add Video Slide
                                </button>
                            }
                        </>
                    }

                </React.Fragment>
                {
                    selectedVideo && <VideoThumb selectedThumb={selectedVideo} showSelectedData={children?.showSelectedData}
                        setselectedThumb={setselectedVideo} videoKey={selectedVideoKey} />
                }
            </div>
        </div>
    )
    )
}

export default forwardRef(GalleryVideo)