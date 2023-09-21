import React from 'react'
import styles from "./GridTab.module.scss";
import SelectDropDown from '../../../../../../SelectDropdown';

const GridTab = ({ SectionLayoutSettings, LayoutObjectValue }) => {

    let NoOfRowValue = [
        "2", "3", "4", "5", "6", "7", "8"
    ]

    const updateSectionDataSettings = () => {

    }
    return (
        <React.Fragment>
            <div className={styles.GridTab_Wrap}>
                <div className={styles.GridTab_Item}>
                    <p className="base text-2xs w-500">Object View</p>
                    <SelectDropDown showValue={"Grid"} values={LayoutObjectValue} handleSelect={(val) => { SectionLayoutSettings(val, "backgroundSize") }} />
                </div>
                <div className={styles.GridTab_Item}>
                    <p className="base text-2xs w-500">No. of items in a row</p>
                    <SelectDropDown showValue={"4"} values={NoOfRowValue} handleSelect={(val) => updateSectionDataSettings(val, "backgroundPostion")} />
                </div>
            </div>
            <div className={styles.GridTab_button_group}>
                <button className="button btn-xs text-gray btn-o-silver btn-oval">Cancel</button>
                <button className="button btn-xs button-primary btn-oval">Save</button>
            </div>
        </React.Fragment>
    )
}

export default GridTab