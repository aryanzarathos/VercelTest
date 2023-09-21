import React, { useEffect, useState } from 'react'
import SwitchButton from '../../../../../SwitchButton';
import styles from "./VideoTab.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { useDebounceFunction } from '../../../../../../CommonFunctions/debounce';
import { updateSliderGrid } from '@/store/actions/appearanceSettings';
import { UPDATE_SLIDER } from '@/store/reducers/websiteTemplate';
import { UPDATE_SLIDER_GRID } from '@/store/reducers/SiteEditor';

const VideoTab = () => {
 const {eventData}=useSelector((state)=>{
        return{
            eventData:state.editor.selectedIndexAndId
        }
    })
    const dispatch = useDispatch()
     const debounce = useDebounceFunction(
      (callback) => callback(),
      1000
    );
  const [settingValues,setSettingValues]=useState({
        autoPlay:false,
        muted:false,
        loop:false
    })
    const handleVideoSettings=(val,type)=>{
    setSettingValues({...settingValues,[type]:val})
        
    let gridPayload = { ...eventData?.gridData };
    gridPayload["sliderVideoStyle"] = {
      ...gridPayload["sliderVideoStyle"],
      desktop:{
        ...gridPayload["sliderVideoStyle"].desktop,
        [type]: val
      },
    };
    debounce(() =>
      dispatch(
        updateSliderGrid({
          pageId: eventData?.pageId,
          gridId: eventData?.gridId,
          body: { sliderVideoStyle: gridPayload["sliderVideoStyle"] },
        })
      )
    );
    dispatch(
      UPDATE_SLIDER({
        mainContainerIndex: eventData?.mainContainerIndex,
        subcontainerIndex: eventData?.subcontainerIndex,
        gridIndex: eventData?.gridIndex,
        selectedElementIndex: eventData?.selectedElementIndex,
        sectionIndex: eventData?.sectionIndex,
        data: gridPayload,
      })
    );
    dispatch(UPDATE_SLIDER_GRID({ data: gridPayload }));
    }
  
 useEffect(() => {
    if (eventData?.gridData?.sliderVideoStyle?.desktop) {
      setSettingValues(eventData?.gridData?.sliderVideoStyle?.desktop)
    }
  }, [eventData?.gridData?.sliderVideoStyle?.desktop]);

  return (
    <div className={styles.VideoSetting_Wrapper}>
      {/* <div className={styles.VideoSetting_Item}>
        <p className={`base text-2xs w-500 ${styles.title}`}>Video AutoPlay</p>
        <SwitchButton layout={true} checked={settingValues['autoPlay']} onChange={(e)=>handleVideoSettings(e.target.checked,"autoPlay")} />
      </div> */}
      <div className={styles.VideoSetting_Item}>
        <p className={`base text-2xs w-500 ${styles.title}`}>Mute Audio</p>
        <SwitchButton layout={true}  checked={settingValues['muted']==="false"||settingValues['muted']===false?false:true} onChange={(e)=>handleVideoSettings(e.target.checked,"muted")} />
      </div>
      <div className={styles.VideoSetting_Item}>
        <p className={`base text-2xs w-500 ${styles.title}`}>Play in Loop</p>
        <SwitchButton layout={true} checked={settingValues['loop']} onChange={(e)=>handleVideoSettings(e.target.checked,"loop")} />
      </div>
      {/* <div className={styles.VideoSetting_Item}>
        <p className={`base text-2xs w-500 ${styles.title}`}>Player Control</p>
        <SwitchButton layout={true} onChange={ActiveHandle} />
      </div>
      <div className={styles.VideoSetting_Item}>
        <p className={`base text-2xs w-500 ${styles.title}`}>Open in Lightbox</p>
        <SwitchButton layout={true} onChange={ActiveHandle} />
      </div> */}

      
    </div>
  )
}

export default VideoTab