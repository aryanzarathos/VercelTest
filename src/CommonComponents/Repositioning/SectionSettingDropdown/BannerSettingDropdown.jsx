import React, { forwardRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import SelectDropDown from '../../SelectDropdown'
import SwitchButton from '../../SwitchButton'
import BannerSetting from '../ReusableComponents/SectionSettings/BannerSetting'
import VideoSetting from '../ReusableComponents/SectionSettings/VideoSetting'
import SliderSetting from '../ReusableComponents/SectionSettings/SliderSetting'
import { useSelector } from 'react-redux'
import useTemplateData from '@/CustomHooks/useTemplateData'

const SettingDropdownWrap = styled.div`
    min-width:316px;
    background: #FFFFFF;
    border: 1px solid rgba(32, 32, 32, 0.2);
    border-radius: 8px;
    padding:16px;
    position: absolute;
    top: 45px;
    left: 0;
`
const HeadWrap = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:20px;
    border-bottom: 1px solid #EAEAEA;
    padding-bottom:16px;
    margin-bottom:12px;
`

const CrossButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`
const Heading = styled.h5`
    font-family:"Poppins", sans-serif; 
`


const BannerSettingDropdown = forwardRef(({ sectionType, setSectionSetting }, ref) => {
    const [backgroundType, setBackgroundType] = useState("")
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
        selectedElementData] = useTemplateData()
    useEffect(() => {
        if (mainContainerData?.style?.["desktop"]?.backgroundType) {
            setBackgroundType(mainContainerData?.style?.["desktop"].backgroundType)
        }
    }, [mainContainerData])


    const CloseHandleState = () => {
        setSectionSetting(false)
    }

    return (
        <SettingDropdownWrap ref={ref}>
            <HeadWrap>
                <Heading className="base w-500 text-xs">Section Settings</Heading>
                <CrossButton
                    onClick={CloseHandleState}
                >
                    &#10005;
                </CrossButton>
            </HeadWrap>

            {
                sectionType === "Slider" ?
                    <SliderSetting /> :
                    <React.Fragment>
                        {
                            backgroundType === "video" ?
                                <VideoSetting sectionType={sectionType} /> : <BannerSetting sectionType={sectionType} />
                        }
                    </React.Fragment>
            }
        </SettingDropdownWrap>
    )
})

BannerSettingDropdown.displayName = "BannerSettingDropdown"
export default BannerSettingDropdown