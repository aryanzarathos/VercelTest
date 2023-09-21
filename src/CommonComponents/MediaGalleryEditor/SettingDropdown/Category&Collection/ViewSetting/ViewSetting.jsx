import React, { useState } from 'react'
import styles from "./ViewSetting.module.scss";
import SliderSettingTab from './TabComponent/Slider/SliderSettingTab';
import GridTab from './TabComponent/Grid/GridTab';

const ViewSetting = () => {

  const [selectedLayout, setSelectedLayout] = useState("Grid")
  let LayoutObjectValue = [
    "Grid", "Slider"
  ]
  const SectionLayoutSettings = (val) => {
    setSelectedLayout(val)
  }


  return (
    <React.Fragment>
      {
        selectedLayout === "Grid" ?
          <GridTab SectionLayoutSettings={SectionLayoutSettings} LayoutObjectValue={LayoutObjectValue} /> :
          selectedLayout === "Slider" ?
            <SliderSettingTab SectionLayoutSettings={SectionLayoutSettings} LayoutObjectValue={LayoutObjectValue} /> :
            ""
      }
    </React.Fragment>
  )
}

export default ViewSetting