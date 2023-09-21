import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import SwitchButton from '../../../../SwitchButton';
import SelectDropDown from '../../../../SelectDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { updateMainContainerAppearance } from '../../../../../store/actions/appearanceSettings';
import { useDebounceFunction } from '../../../../../CommonFunctions/debounce';
import useTemplateData from '@/CustomHooks/useTemplateData';

const VideoSizeWrap = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    
    &:not(:last-child){
      margin-bottom:16px;
    }
    p{
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
    }
`
const BannerSizeWrap = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    padding-bottom:12px;
    border-bottom:1px solid #EAEAEA;
    margin-bottom:12px;
    p{
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
    }
    .DropdownWrap{
        width:152.23px;
    }
`

const ButtonGroup = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap:8px;
`

const VideoSetting = ({sectionType}) => {
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
    selectedElementData,pageId] =useTemplateData()
    const [bannerSize,setBannerSize]=useState("")
    const dispatch = useDispatch()
     const debouncedAppearance = useDebounceFunction(
      (callback) => callback(),
      1000
    );
    const BannerValues = ["Small","Medium","Large","Extra Large"];
    const [settingValues,setSettingValues]=useState({
        autoPlay:false,
        mute:false,
        loop:false
    })
    const handleVideoSettings=(val,type)=>{
        setSettingValues({...settingValues,[type]:val})
         let mainContainerDataa = { ...mainContainerData };
          let data = {
        ...mainContainerData.style,
        desktop: {
          ...mainContainerData.style.desktop,
          video:{
            ...mainContainerData.style.desktop.video,
            [type]:val
          }
        },
        mobile: {
          ...mainContainerData.style.mobile,
          video:{
            ...mainContainerData.style.mobile.video,
            [type]:val
          }
        },
        tablet: {
          ...mainContainerData.style.tablet,
          video:{
            ...mainContainerData.style.tablet.video,
            [type]:val
          }
        },
      };
       const updatedObject = { ...mainContainerDataa, style: data };
       debouncedAppearance(() =>
        dispatch(
          updateMainContainerAppearance({
            pageId: pageId,
            mainContainerId: mainContainerId,
            mainContainerIndex: mainContainerIndex,
            data: updatedObject,
          })
        )
      );
    }
    const updateBannerSize = (val)=>{
      setBannerSize(val)
        let size = val==="Small"?"375px":val==="Medium"?"475px":val==="Large"?"575px":val==="Extra Large"?"675px":""
         let mainContainerDataa = { ...mainContainerData };
          let data = {
        ...mainContainerData.style,
        desktop: {
          ...mainContainerData.style.desktop,
          height:size
        },
        mobile: {
          ...mainContainerData.style.mobile,
         height:size
        },
        tablet: {
          ...mainContainerData.style.tablet,
         height:size
        },
      };
       const updatedObject = { ...mainContainerDataa, style: data };
       debouncedAppearance(() =>
        dispatch(
          updateMainContainerAppearance({
            pageId: pageId,
            mainContainerId: mainContainerId,
            mainContainerIndex: mainContainerIndex,
            data: updatedObject,
          })
        )
      );
    }
    useEffect(()=>{
        if(mainContainerData?.style?.["desktop"]?.video){
            setSettingValues({...mainContainerData?.style?.["desktop"]?.video})
        }
        if(mainContainerData?.style?.["desktop"]?.height){
          let height = mainContainerData?.style?.["desktop"]?.height
          let size = height==="375px"?"Small":height==="475px"?"Medium":height==="575px"?"Large":height==="675px"?"Extra Large":""
          setBannerSize(size)
        }
    },[mainContainerData])
    return (
        <React.Fragment>
           {sectionType==="Banner"&& <BannerSizeWrap>
                <p className="base text-2xs w-500">Banner Size</p>
                <SelectDropDown className="DropdownWrap" handleSelect={(val)=>updateBannerSize(val)} showValue={bannerSize} values={BannerValues} onCh/>
            </BannerSizeWrap>}
            {/* <VideoSizeWrap>
                <p className="base text-2xs w-500">Video AutoPlay</p>
                <SwitchButton layout={true} checked={settingValues['autoPlay']} onChange={(e)=>handleVideoSettings(e.target.checked,"autoPlay")}/>
            </VideoSizeWrap> */}
            <VideoSizeWrap>
                <p className="base text-2xs w-500">Mute Audio</p>
                <SwitchButton layout={true} onChange={(e)=>handleVideoSettings(e.target.checked,"mute")} checked={settingValues['mute']==="false"||settingValues['mute']===false?false:true}/>
            </VideoSizeWrap>
            <VideoSizeWrap>
                <p className="base text-2xs w-500">Play in Loop</p>
                <SwitchButton layout={true} onChange={(e)=>handleVideoSettings(e.target.checked,"loop")} checked={settingValues['loop']}/>
            </VideoSizeWrap>
            {/* <VideoSizeWrap>
                <p className="base text-2xs w-500">Player Control</p>
                <SwitchButton layout={true} />
            </VideoSizeWrap>
            <VideoSizeWrap>
                <p className="base text-2xs w-500">Open in Lightbox</p>
                <SwitchButton layout={true} />
            </VideoSizeWrap> */}

        </React.Fragment>
    )
}

export default VideoSetting