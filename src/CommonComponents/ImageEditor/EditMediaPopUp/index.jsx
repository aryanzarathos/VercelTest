import SelectDropDown from '@/CommonComponents/SelectDropdown';
import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components';
import demoImage from "../../../Assets/SiteEditor/images/demoImage.png";
import Image from 'next/image';
import CameraIcon from "../../../Assets/SiteEditor/Icons/cameraIcon.svg";
import VideoIcon from "../../../Assets/SiteEditor/Icons/videoIcon.svg";
import AddNewElement from '@/CommonComponents/UploadElements/AddNewElement';
import PencilIcon from "../../../Assets/SiteEditor/Icons/pencilIcon.svg";
import SwitchButton from '@/CommonComponents/SwitchButton';
import Uploader from '@/CommonComponents/ImageUploader';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_BUTTON_DATA } from '@/store/reducers/websiteTemplate';
import { UPDATE_SELECTED_ELEMENT } from '@/store/reducers/SiteEditor';
import { updateButtonElement } from '@/store/actions/siteEditor';
import useTemplateData from '@/CustomHooks/useTemplateData';
import Location from '../../../Assets/SectionComponent/Icons/ep_location.svg'
import SearchLocationPopup from '@/CommonComponents/SearchLocationPopup';


const MainEditPopUp = styled.div`
padding:16px;
background:#fff;
width:316px;
position: absolute;
z-index: 4;
border-radius: 8px;
top: 60px;
max-height: 380px;
overflow: auto;
`;
const ChangeImageWrapper = styled.div`
position: relative;
margin-top: 12px;
`;
const MainImage = styled.div`
height:170px;
width: 100%;
position: relative;
border-radius: 6px;
overflow: hidden;

.image{
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: center !important;
}
video{
     width: 100%;
    height: 100%;
    object-fit: cover;
}
&:before{
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background: rgba(32, 32, 32, 0.4);
    top: 0px;
    left: 0px;
};
svg{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
`;
const UploadElement = styled.div`
margin-top:12px;
`;
const ManageLocation = styled.button`
    color: #3758F9;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; 
    width: 100%;
    padding: 10px 40px;
    border-radius: 6px;
    border: 1px solid #3758F9;
    cursor: pointer;
    background-color: #FFF;
`
const PenIcon = styled.button`
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 12px;
    right: 12px;
    border: none;
    outline: none;
`;
const MainThubnail = styled.div`
margin-top:12px;

border-width: 1px 0px;
border-style: solid;
border-color: rgba(234, 234, 234, 1);
padding: 12px 0px;
`;
const TumbnailSwitch = styled.div`
display: flex;
justify-content: space-between;
gap: 10px;
width: 100%;
align-items: center;
p{
    font-family: "Poppins";
font-size: 12px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0em;
text-align: left;

}
`;
const VideoPoster = styled.div`
height:170px;
width: 100%;
position: relative;
border-radius: 6px;
overflow: hidden;
margin-top: 12px;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
video{
     width: 100%;
    height: 100%;
    object-fit: cover;
}
&:before{
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background: rgba(32, 32, 32, 0.4);
    top: 0px;
    left: 0px;
};
svg{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
`;
const EditMediaPopUp = () => {
    const LocationRef = useRef();
    const ref = useRef();
    const cropperRef = useRef();
    const dispatch = useDispatch();

    const Values = ["image", "video", "map"]
    const [selectValue, setSelectValue] = useState("image");
    const [image, setImage] = useState("");
    const [videoimage, setVideoImage] = useState("");
    const [thumbnail, setThumbnail] = useState(false);
    const [videoposter, setVideoPoster] = useState(false);
    const [mapSrc, setMapSrc] = useState("")
    const [mapValue, setMapValue] = useState("")
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

    useEffect(() => {
        if (selectedElementData) {
            setSelectValue(selectedElementData?.tagType);
            setImage(selectedElementData?.src);
            setVideoImage(selectedElementData?.videoSrc ? `${selectedElementData?.videoSrc}#t=0.1` : "");
            setThumbnail(selectedElementData?.videoPosterToggle);
            setVideoPoster(selectedElementData?.poster);
            setMapSrc(selectedElementData?.mapSrc)
            setMapValue(selectedElementData?.mapValue)
        }
    }, [selectedElementData])


    const onChangeHandle = (val) => {
        setSelectValue(val);
        let gridPayload = JSON.parse(JSON.stringify([...gridData?.data]));
        gridPayload[selectedElementIndex]['tagType'] = val;
        dispatch(
            UPDATE_BUTTON_DATA({
                mainContainerIndex: mainContainerIndex,
                subcontainerIndex: subcontainerIndex,
                gridIndex: gridIndex,
                selectedElementIndex: selectedElementIndex,
                sectionIndex: sectionIndex,
                data: gridPayload[selectedElementIndex],
            })
        );
        dispatch(UPDATE_SELECTED_ELEMENT({ elementData: gridPayload[selectedElementIndex], gridData: gridPayload }))
        dispatch(
            updateButtonElement({
                pageId: pageId,
                gridId: gridId,
                body: { data: gridPayload },
            })
        );
    }

    const uploadThumbnail = (data) => {
        // console.log(data?.src, "line no 14777", data);
        setVideoImage(`${data?.src}#t=0.1`);
        let gridPayload = JSON.parse(JSON.stringify([...gridData.data]));
        gridPayload[selectedElementIndex]['videoSrc'] = data?.src;
        dispatch(
            UPDATE_BUTTON_DATA({
                mainContainerIndex: mainContainerIndex,
                subcontainerIndex: subcontainerIndex,
                gridIndex: gridIndex,
                selectedElementIndex: selectedElementIndex,
                sectionIndex: sectionIndex,
                data: gridPayload[selectedElementIndex],
            })
        );
        dispatch(UPDATE_SELECTED_ELEMENT({ elementData: gridPayload[selectedElementIndex], gridData: gridPayload }))
        dispatch(
            updateButtonElement({
                pageId: pageId,
                gridId: gridId,
                body: { data: gridPayload },
            })
        );
    }

    const switchHandle = (value) => {
        setThumbnail(value);
        let gridPayload = JSON.parse(JSON.stringify([...gridData.data]));
        gridPayload[selectedElementIndex]['videoPosterToggle'] = value;

        dispatch(
            UPDATE_BUTTON_DATA({
                mainContainerIndex: mainContainerIndex,
                subcontainerIndex: subcontainerIndex,
                gridIndex: gridIndex,
                selectedElementIndex: selectedElementIndex,
                sectionIndex: sectionIndex,
                data: gridPayload[selectedElementIndex],
            })
        );
        dispatch(UPDATE_SELECTED_ELEMENT({ elementData: gridPayload[selectedElementIndex], gridData: gridPayload }))
        dispatch(
            updateButtonElement({
                pageId: pageId,
                gridId: gridId,
                body: { data: gridPayload },
            })
        );
    }

    const uploadVideoImage = (data) => {
        setVideoPoster(data?.src);
        let gridPayload = JSON.parse(JSON.stringify([...gridData.data]));
        gridPayload[selectedElementIndex]['poster'] = data?.src;
        dispatch(
            UPDATE_BUTTON_DATA({
                mainContainerIndex: mainContainerIndex,
                subcontainerIndex: subcontainerIndex,
                gridIndex: gridIndex,
                selectedElementIndex: selectedElementIndex,
                sectionIndex: sectionIndex,
                data: gridPayload[selectedElementIndex],
            })
        );
        dispatch(UPDATE_SELECTED_ELEMENT({ elementData: gridPayload[selectedElementIndex], gridData: gridPayload }))
        dispatch(
            updateButtonElement({
                pageId: pageId,
                gridId: gridId,
                body: { data: gridPayload },
            })
        );
    }

    const uploadImage = (data) => {
        setImage(data?.src);
        let gridPayload = JSON.parse(JSON.stringify([...gridData.data]));
        gridPayload[selectedElementIndex]['src'] = data?.src;
        // console.log(gridPayload, "line no 1766");
        dispatch(
            UPDATE_BUTTON_DATA({
                mainContainerIndex: mainContainerIndex,
                subcontainerIndex: subcontainerIndex,
                gridIndex: gridIndex,
                selectedElementIndex: selectedElementIndex,
                sectionIndex: sectionIndex,
                data: gridPayload[selectedElementIndex],
            })
        );
        dispatch(UPDATE_SELECTED_ELEMENT({ elementData: gridPayload[selectedElementIndex], gridData: gridPayload }))
        dispatch(
            updateButtonElement({
                pageId: pageId,
                gridId: gridId,
                body: { data: gridPayload },
            })
        );
    }
    const HandleLocation = () => {
        LocationRef.current.open()
    }
    const CloseLocation = () => {
        LocationRef.current.close()
    }
    const handleSave = (url, value) => {
        setMapSrc(url)
        setMapValue(value)
        let gridPayload = JSON.parse(JSON.stringify([...gridData.data]));
        gridPayload[selectedElementIndex]['mapSrc'] = url;
        gridPayload[selectedElementIndex]['mapValue'] = value;
        // console.log(gridPayload, "line no 1766");
        dispatch(
            UPDATE_BUTTON_DATA({
                mainContainerIndex: mainContainerIndex,
                subcontainerIndex: subcontainerIndex,
                gridIndex: gridIndex,
                selectedElementIndex: selectedElementIndex,
                sectionIndex: sectionIndex,
                data: gridPayload[selectedElementIndex],
            })
        );
        dispatch(
            updateButtonElement({
                pageId: pageId,
                gridId: gridId,
                body: { data: gridPayload },
            })
        );
        LocationRef.current.close()
    }
    return (
        <MainEditPopUp>
            <SelectDropDown showValue={selectValue} values={Values} handleSelect={onChangeHandle} />
            {
                selectValue === "video" ?

                    <ChangeImageWrapper>
                        <MainImage>
                            <video src={videoimage} autoPlay={false} muted={true} loop={false} type="video/mp4" />
                            <VideoIcon />
                        </MainImage>
                        <UploadElement>
                            <AddNewElement
                                title={"Upload Media"}
                                Layout={true}
                                onClick={() => ref?.current?.open()}
                            />
                        </UploadElement>
                        <Uploader size={5}
                            validationProp={"onlyVideo"}
                            onclose={() => ref?.current?.close()}
                            multiSelect={false} discartRef={ref} onUploaded={(val) => uploadThumbnail(val)} uploadLimit={1} />
                        {/* === add thumbnail === */}
                        <MainThubnail>
                            <TumbnailSwitch>
                                <p>Add Video Thumbnail</p>
                                <SwitchButton layout={true} onChange={(e) => switchHandle(e.target.checked)} checked={thumbnail} />
                            </TumbnailSwitch>
                            {
                                thumbnail &&
                                <>
                                    <div>
                                        <VideoPoster>
                                            <Image src={videoposter || demoImage} alt="demo image" width={100} height={100} />
                                            <CameraIcon />
                                            {/* <PenIcon onClick={() => cropperRef?.current?.open()}>
                                            <PencilIcon />
                                        </PenIcon> */}
                                        </VideoPoster>
                                    </div>

                                    <div className='mt-10'>
                                        <AddNewElement
                                            title={"Upload Media"}
                                            Layout={true}
                                            onClick={() => cropperRef?.current?.open()}
                                        />
                                    </div>
                                </>

                            }
                            <Uploader size={5}
                                accept="image/png, image/jpeg, image/jpg, image/PNG, image/webp, image/WEBP"
                                onclose={() => cropperRef?.current?.close()}
                                multiSelect={false} discartRef={cropperRef} onUploaded={(val) => uploadVideoImage(val)} uploadLimit={1} />

                        </MainThubnail>
                    </ChangeImageWrapper>
                    :
                    selectValue === "map" ?
                        <>
                            <ChangeImageWrapper>
                                <MainImage>
                                    <Location />
                                    {
                                        mapSrc ?
                                            <iframe src={mapSrc} /> : <div width={100} height={100} />

                                    }

                                </MainImage>
                                <UploadElement>
                                    <ManageLocation onClick={() => HandleLocation()}>Manage Location</ManageLocation>
                                </UploadElement>
                                <SearchLocationPopup ref={LocationRef} handleSave={(url, value) => handleSave(url, value)} defaultValue={mapValue} closeModal={CloseLocation} />
                            </ChangeImageWrapper>
                        </> :
                        <ChangeImageWrapper>
                            <MainImage>
                                {
                                    image ?
                                        <Image className='image' src={image?.src ? image?.src : image} alt="updaledImage" height={100} width={170} /> :

                                        <Image className='image' src={demoImage} alt="demoimage " height={100} width={170} />
                                }

                                <CameraIcon />
                                {/* <PenIcon>
                                <PencilIcon />
                            </PenIcon> */}
                            </MainImage>
                            <UploadElement>
                                <AddNewElement
                                    title={"Upload Media"}
                                    Layout={true}
                                    onClick={() => cropperRef?.current?.open()}
                                />
                            </UploadElement>
                            <Uploader size={5}
                                accept="image/png, image/jpeg, image/jpg, image/PNG, image/webp, image/WEBP"
                                onclose={() => cropperRef?.current?.close()}
                                multiSelect={false} discartRef={cropperRef} onUploaded={(val) => uploadImage(val)} uploadLimit={1} />
                        </ChangeImageWrapper>

            }

        </MainEditPopUp>
    )
}

export default EditMediaPopUp
