import React, { useState } from 'react'
import styles from "./SliderSettingTab.module.scss"
import SwitchButton from '../../../../../../SwitchButton';
import SelectDropDown from '../../../../../../SelectDropdown';
import ColorPalette from '../../../../../../ColorPalette';
import InputColorPicker from '../../../../../../ColorPicker';

const SliderSettingTab = ({ SectionLayoutSettings, LayoutObjectValue }) => {

    const [isSelectedColor, setIsSelectedColor] = useState(false)
    // let NoOfRowValue = [
    //     "2", "3", "4", "5", "6", "7", "8"
    // ]
    const SliderSize = ["Small", "Medium", "Large", "Extra Large"]
    const NavigationValue = ["Arrows & Dots", "Arrows", " Dots", "None"]

    const seleteSizeHandle = () => {

    }
    const handleColorWrap = () => {
        setIsSelectedColor(true)
    }

    return (
        <React.Fragment>
            <div className={styles.SliderSettingTab_Wrapper}>
                <div className={styles.SliderSettingTab}>
                    <div className={styles.SliderSettingTab_Item}>
                        <p className={styles.title}>Object View</p>
                        <SelectDropDown
                            className={styles.Select_Wrapper}
                            showValue={"Slider"}
                            values={LayoutObjectValue}
                            handleSelect={(val) => SectionLayoutSettings(val)}
                        />
                    </div>
                </div>
                <div className={styles.SliderSettingTab}>
                    <div className={styles.SliderSettingTab_Item}>
                        <p className={styles.title}>Navigation</p>
                        <SelectDropDown
                            className={styles.Select_Wrapper}
                            showValue={"Arrows & Dots"}
                            values={NavigationValue}
                            handleSelect={(val) => seleteSizeHandle(val)}
                        />
                    </div>
                    <div className={styles.SliderSettingTab_Item}>
                        <p className={styles.title}>Arrow Color</p>
                        <ColorPalette colorCode="#202020" paletteHandle={() => handleColorWrap(true)} />
                    </div>
                    <div className={styles.SliderSettingTab_Item}>
                        <p className={styles.title}>Dots Color</p>
                        <ColorPalette colorCode="#202020" paletteHandle={() => handleColorWrap(true)} />
                    </div>
                </div>
                <div className={styles.SliderSettingTab}>
                    <div className={styles.SliderSettingTab_Item}>
                        <p className={styles.title}>AutoPlay</p>
                        <SwitchButton layout={true} />
                    </div>
                    <div className={styles.SliderSettingTab_Item}>
                        <p className={styles.title}>AutoPlay Speed</p>
                        <div className={styles.AutoSpeedWrapper}>
                            <input
                                type='number'
                                placeholder="5000"
                                className={styles.FormInputFields}
                            />
                            <span className={styles.measure}>ms</span>
                        </div>
                    </div>
                </div>
                <div className={styles.SliderSettingTab}>
                    <div className={styles.SliderSettingTab_Item}>
                        <p className={styles.title}>Pause on Hover</p>
                        <SwitchButton layout={true} />
                    </div>
                </div>
            </div>
            <div className={styles.button_group}>
                <button className={`button btn-o-silver btn-xs btn-oval`}>Cancel</button>
                <button className={`button button-primary btn-xs btn-oval`}>Save</button>
            </div>
            {
                isSelectedColor && (
                    <div className={styles.SliderSetting_ColorPicker}>
                        <InputColorPicker title="" onclose={() => setIsSelectedColor(false)} />
                    </div>
                )
            }
        </React.Fragment>
    )
}

export default SliderSettingTab