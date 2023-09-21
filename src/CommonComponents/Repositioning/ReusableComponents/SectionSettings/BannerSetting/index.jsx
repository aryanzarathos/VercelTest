import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import SelectDropDown from '../../../../SelectDropdown'
import { useDispatch, useSelector } from 'react-redux'
import { useDebounceFunction } from '../../../../../CommonFunctions/debounce'
import { updateMainContainerAppearance } from '../../../../../store/actions/appearanceSettings'
import { updateMainContainer } from '@/store/reducers/SiteEditor'
import useTemplateData from '@/CustomHooks/useTemplateData'


const BannerSizeWrap = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid #EAEAEA;
    padding-bottom:16px;
    margin-bottom:12px;
    &:last-child{
        border:none;
    }
    p{
        font-family:"Poppins", sans-serif;
    }
`

const ButtonGroup = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap:8px;
`

const BannerSetting = ({ sectionType }) => {
  const dispatch = useDispatch()
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
  const [defaultValues, setDefaultValues] = useState({
    bannerSize: "",
    backgroundPostion: "",
    backgroundSize: ""
  })
  const debouncedAppearance = useDebounceFunction(
    (callback) => callback(),
    1000
  );
  let bannerSizeValue = [
    "Small", "Medium", "Large", "Extra Large"
  ]
  let BannerObjectValue = [
    "Auto", "Cover", "Contain"
  ]
  let BannerPositionValue = [
    "Center Center", "Center Left", "Center Right", "Top Center", "Top Left", "Top Right", "Bottom Center", "Bottom Left", "Bottom Right"
  ]

  const selectBannerSizeHandle = (val) => {
    let size = val === "Small" ?
      "375px" : val === "Medium" ? "475px" : val === "Large" ? "575px" : val === "Extra Large" ? "675px" : ""
    setDefaultValues({ ...defaultValues, bannerSize: val })
    let mainContainerDataa = { ...mainContainerData };
    let data = {
      ...mainContainerData.style,
      desktop: {
        ...mainContainerData.style.desktop,
        height: size
      },
  
    }
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
    dispatch(
      updateMainContainer(updatedObject)
    )
  }


  const updateSectionSettings = (val, type) => {
    let mainContainerDataa = { ...mainContainerData };
    setDefaultValues({ ...defaultValues, [type]: val })
    let data = {
      ...mainContainerData.style,
      desktop: {
        ...mainContainerData.style.desktop,
        backgroundImage: {
          ...mainContainerData.style.desktop?.backgroundImage,
          [type]: val
        }
      },
      mobile: {
        ...mainContainerData.style.mobile,
        backgroundImage: {
          ...mainContainerData.style.mobile?.backgroundImage,
          [type]: val
        }
      },
      tablet: {
        ...mainContainerData.style.tablet,
        backgroundImage: {
          ...mainContainerData.style.tablet?.backgroundImage,
          [type]: val
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
    dispatch(
      updateMainContainer(updatedObject)
    )
  }

  useEffect(() => {
    if (mainContainerData?.style?.["desktop"]?.height) {
      let height = mainContainerData?.style?.["desktop"]?.height
      let size = height === "375px" ?
        "Small" : height === "475px" ? "Medium" : height === "575px" ? "Large" : height === "675px" ? "Extra Large" : ""
      if (mainContainerData?.style?.["desktop"]?.backgroundImage) {
        let backgroundImage = mainContainerData?.style?.["desktop"]?.backgroundImage

        setDefaultValues({ ...defaultValues, bannerSize: size, backgroundSize: backgroundImage.backgroundSize, backgroundPostion: backgroundImage.backgroundPostion })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainContainerData?.style])

  console.log(mainContainerData,'mainContainerDatamainContainerData')
  return (
    <React.Fragment>
      {sectionType === "Banner" ?
        <BannerSizeWrap>
          <p className="base text-2xs w-500">Banner Size</p>
          <SelectDropDown showValue={defaultValues?.bannerSize} deafultValue={'Medium'} values={bannerSizeValue} handleSelect={(val) => selectBannerSizeHandle(val)} />
        </BannerSizeWrap>
        : ""}

      <BannerSizeWrap>
        <p className="base text-2xs w-500">Object Fit</p>
        <SelectDropDown showValue={defaultValues?.backgroundSize} deafultValue={'Cover'} values={BannerObjectValue} handleSelect={(val) => updateSectionSettings(val, "backgroundSize")} />
      </BannerSizeWrap>
      <BannerSizeWrap>
        <p className="base text-2xs w-500">Position</p>
        <SelectDropDown showValue={defaultValues.backgroundPostion} deafultValue={'Center Center'} values={BannerPositionValue} handleSelect={(val) => updateSectionSettings(val, "backgroundPostion")} />
      </BannerSizeWrap>
      {/* <ButtonGroup>
                <button className="button btn-xs text-gray btn-o-silver btn-oval">Cancel</button>
                <button className="button btn-xs button-primary btn-oval">Save</button>
            </ButtonGroup> */}
    </React.Fragment>
  )
}

export default BannerSetting