import React from 'react';
import styles from "./ImageSetting.module.scss";
import SelectDropDown from '../../../../SelectDropdown';

const ImageSetting = () => {

  let bannerSizeValue = [
    "Small", "Medium", "Large", "Extra Large"
  ]
  let BannerObjectValue = [
    "Fill", "Cover", "Contain"
  ]
  let BannerPositionValue = [
    "center", "right top", "left bottom"
  ]


  const updateSectionDataSettings = () => {

  }
  return (
    <React.Fragment>
      <div className={styles.ImageSetting_Wrap}>
        <div className={styles.ImageSetting_Item}>
          <p className="base text-2xs w-500">Object Fit</p>
          <SelectDropDown showValue={"Fill"} values={BannerObjectValue} handleSelect={(val) => updateSectionDataSettings(val, "backgroundSize")} />
        </div>
        <div className={styles.ImageSetting_Item}>
          <p className="base text-2xs w-500">Position</p>
          <SelectDropDown showValue={"center"} values={BannerPositionValue} handleSelect={(val) => updateSectionDataSettings(val, "backgroundPostion")} />
        </div>
      </div>
      <div className={styles.ImageSetting_button_group}>
        <button className="button btn-xs text-gray btn-o-silver btn-oval">Cancel</button>
        <button className="button btn-xs button-primary btn-oval">Save</button>
      </div>
    </React.Fragment>
  )
}

export default ImageSetting