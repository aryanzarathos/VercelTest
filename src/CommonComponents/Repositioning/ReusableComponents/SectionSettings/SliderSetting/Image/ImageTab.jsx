import React, { useEffect, useState } from 'react'
import SelectDropDown from '../../../../../SelectDropdown';
import styles from "./ImageTab.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { useDebounceFunction } from '../../../../../../CommonFunctions/debounce';
import { UPDATE_SLIDER } from '@/store/reducers/websiteTemplate';
import { updateSliderGrid } from '@/store/actions/appearanceSettings';
import { UPDATE_SLIDER_GRID } from '@/store/reducers/SiteEditor';
const ImageTab = () => {
  const [style, setStyle] = useState({
    objectPosition: "",
    objectFit: ""
  })
  const [objectPosition, setObjectPosition] = useState("")
  const ObjectValue = ["Auto", "Cover", "Contain"]
  const PositionValue = ["Center Center", "Center Left", "Center Right", "Top Center", "Top Left", "Top Right", "Bottom Center", "Bottom Left", "Bottom Right"]
  const dispatch = useDispatch()
  const { eventData } = useSelector((state) => {
    return {
      eventData: state.editor.selectedIndexAndId
    }
  })
  const debounce = useDebounceFunction(
    (callback) => callback(),
    1000
  );

  const updateSectionSettings = (val, type) => {
    setStyle({
      ...style,
      [type]: val
    })
    let gridPayload = { ...eventData?.gridData };
    gridPayload["sliderImageStyle"] = {
      ...gridPayload["sliderImageStyle"],
      desktop: {
        ...gridPayload["sliderImageStyle"].desktop,
        [type]: val
      },
    };
    debounce(() =>
      dispatch(
        updateSliderGrid({
          pageId: eventData?.pageId,
          gridId: eventData?.gridId,
          body: { sliderImageStyle: gridPayload["sliderImageStyle"] },
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
    if (eventData?.gridData?.sliderImageStyle?.desktop) {
      setStyle(eventData?.gridData?.sliderImageStyle?.desktop)
    }
  }, [eventData?.gridData?.sliderImageStyle?.desktop]);

  return (
    <div className={styles.ImageSetting_wrapper}>
      <div className={styles.ImageSetting_Item}>
        <p className={styles.title}>Object Fit</p>
        <SelectDropDown
          className={styles.Select_Wrapper}
          showValue={style?.objectFit}
          values={ObjectValue}
          handleSelect={(val) => updateSectionSettings(val, "objectFit")}
        />
      </div>
      <div className={styles.ImageSetting_Item}>
        <p className={styles.title}>Position</p>
        <SelectDropDown
          className={styles.Select_Wrapper}
          showValue={style?.objectPosition}
          values={PositionValue}
          handleSelect={(val) => updateSectionSettings(val, "objectPosition")}
        />
      </div>

    </div>
  )
}

export default ImageTab