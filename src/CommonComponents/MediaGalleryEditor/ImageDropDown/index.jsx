import React, { useEffect, useState } from 'react'
import { ObjectFitWrapper, ObjectFitWrapperP, PositionWrapper, PositionWrapperP, SwitchWrap } from './ImageDropDownStyle'
import SelectDropDown from '@/CommonComponents/SelectDropdown'
import { useDispatch, useSelector } from 'react-redux';
import { updateGridSettings } from '@/store/actions/updateGridSetting';
import useTemplateData from '@/CustomHooks/useTemplateData';
import SwitchButton from '@/CommonComponents/SwitchButton';

const ImageDropDown = () => {
  const Values = ["Contain", "Cover", "Fill"];
  const dispatch = useDispatch()
  const [lightBox, setLightBox] = useState(false)
  const PositionValue = ["Center Center", "Center Left", "Center Right", "Top Center", "Top Left", "Top Right", "Bottom Center", "Bottom Left", "Bottom Right"]
  //   const {eventData}=useSelector((state)=>{
  //     return{
  // eventData:state.editor.selectedIndexAndId
  //     }
  //   })
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
  const [imageSetting, setImageSettings] = useState({
    objectFit: "",
    objectPosition: ""
  })
  const handleSetting = (val, type) => {
    setImageSettings({ ...imageSetting, [type]: val })
    let gridPayload = JSON.parse(JSON.stringify(gridData.custom_section_editable))
    let updatedArray = gridPayload.filter((item) => item.tagType === "img" || item.tagType === "image")
    updatedArray = updatedArray.map((item) => {
      return {
        ...item,
        style: {
          ...item.style,
          desktop: {
            ...item.style.desktop,
            [type]: val
          }
        }
      }
    })
    const latestArray = gridPayload.map((obj) => {
      const updatedObj = updatedArray.find((updated) => updated.tagType === obj.tagType);
      if (updatedObj) {
        return { ...obj, ...updatedObj };
      }
      return obj;
    });
    dispatch(updateGridSettings({
      pageId: pageId,
      gridId: gridId,
      body: { custom_section_editable: latestArray },
      indexesData: {
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        sectionIndex: sectionIndex,
        gridIndex: gridIndex
      }
    }))
  }
  const handleLightbox = (val) => {
    setLightBox(val)
    dispatch(updateGridSettings({
      pageId: pageId,
      gridId: gridId,
      body: { lightBox: val },
      indexesData: {
        mainContainerIndex: mainContainerIndex,
        subcontainerIndex: subcontainerIndex,
        sectionIndex: sectionIndex,
        gridIndex: gridIndex
      }
    }))
  }
  useEffect(() => {
    if (gridData.custom_section_editable) {
      let updatedObj = gridData?.custom_section_editable?.find((item) => item.tagType === "img" || item.tagType === "image")
      setImageSettings({
        objectFit: updatedObj?.["style"]?.["desktop"].objectFit,
        objectPosition: updatedObj?.["style"]?.["desktop"].objectPosition
      })
    }
    if (gridData?.lightBox) {
      setLightBox(gridData.lightBox)
    }
  }, [gridData.custom_section_editable, gridData.lightBox])

  return (
    <>
      <ObjectFitWrapper>
        <ObjectFitWrapperP>Object Fit</ObjectFitWrapperP>
        <SelectDropDown deafultValue={'cover'} showValue={imageSetting?.objectFit} values={Values} handleSelect={(val) => handleSetting(val, "objectFit")} />
      </ObjectFitWrapper>
      <PositionWrapper>
        <PositionWrapperP>Position</PositionWrapperP>
        <SelectDropDown deafultValue={'Center Center'} showValue={imageSetting?.objectPosition} values={PositionValue} handleSelect={(val) => handleSetting(val, "objectPosition")} />
      </PositionWrapper>
      {gridData?.section_name === "Gallery" && <PositionWrapper>
        <ObjectFitWrapperP>Open in Lightbox</ObjectFitWrapperP>
        <SwitchWrap>
          <SwitchButton layout={true} onChange={(e) => handleLightbox(e.target.checked, "lightBox")} />
        </SwitchWrap>
      </PositionWrapper>}
    </>
  )
}

export default ImageDropDown