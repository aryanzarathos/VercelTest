import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import useTemplateData from '@/CustomHooks/useTemplateData';
import { useDebounceFunction } from '@/CommonFunctions/debounce';
import SwitchButton from '@/CommonComponents/SwitchButton';
import { updateGridSettings } from '@/store/actions/updateGridSetting';

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
    const dispatch = useDispatch()
     const debouncedAppearance = useDebounceFunction(
      (callback) => callback(),
      1000
    );
    const [settingValues,setSettingValues]=useState({
        autoPlay:false,
        muted:false,
        loop:false,
        lightBox:false,
        controls:false
    })
    const handleVideoSettings=(val,type)=>{
        setSettingValues({...settingValues,[type]:val})
        let gridPayload = { ...gridData };
    gridPayload["videoSetting"] = {
      ...settingValues,
      [type]:val,
    };
    dispatch(updateGridSettings({
      pageId: pageId,
      gridId: gridId,
      body: { videoSetting: gridPayload['videoSetting'] },
      indexesData: {
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        sectionIndex: sectionIndex,
        gridIndex: gridIndex
      }
    }))
    }
    useEffect(()=>{
        if(gridData){
            if(gridData?.videoSetting){
                setSettingValues(gridData?.videoSetting)
            }else{
                setSettingValues({
        autoPlay:false,
        muted:false,
        loop:false,
        lightBox:false,
        controls:false
    })
            }
        }
    },[gridData])
    
    return (
        <React.Fragment>
            <VideoSizeWrap>
                <p className="base text-2xs w-500">Video AutoPlay</p>
                <SwitchButton layout={true} checked={settingValues['autoPlay']} onChange={(e)=>handleVideoSettings(e.target.checked,"autoPlay")}/>
            </VideoSizeWrap>
            <VideoSizeWrap>
                <p className="base text-2xs w-500">Mute Audio</p>
                <SwitchButton layout={true} onChange={(e)=>handleVideoSettings(e.target.checked,"muted")} checked={settingValues['muted']==="false"||settingValues['muted']===false?false:true}/>
            </VideoSizeWrap>
            <VideoSizeWrap>
                <p className="base text-2xs w-500">Play in Loop</p>
                <SwitchButton layout={true} onChange={(e)=>handleVideoSettings(e.target.checked,"loop")} checked={settingValues['loop']}/>
            </VideoSizeWrap>
            <VideoSizeWrap>
                <p className="base text-2xs w-500">Player Control</p>
                <SwitchButton layout={true}  onChange={(e)=>handleVideoSettings(e.target.checked,"controls")} checked={settingValues['controls']}/>
            </VideoSizeWrap>
            <VideoSizeWrap>
                <p className="base text-2xs w-500">Open in Lightbox</p>
                <SwitchButton layout={true}  onChange={(e)=>handleVideoSettings(e.target.checked,"lightbox")} checked={settingValues['lightbox']} />
            </VideoSizeWrap>

        </React.Fragment>
    )
}

export default VideoSetting