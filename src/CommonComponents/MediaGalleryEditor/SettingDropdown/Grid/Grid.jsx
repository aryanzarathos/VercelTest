import React from 'react';
import { SettingItemWrap, SettingItems } from "./GridStyles"
import SelectDropDown from '../../../SelectDropdown';
import SwitchButton from '../../../SwitchButton';

const Grid = ({SeleteGridType,Gridvalue}) => {
    const GridItemValue = ["1", "2", "3", "4","5","6","7","8","9","10"]

    const SeleteGridItemHandle = (val) => {
    } 
    return (
        <React.Fragment>
            <SettingItemWrap>
                <SettingItems>
                    <p>Object View</p>
                    <SelectDropDown className={`select_dropdown`} showValue={"Grid"} values={Gridvalue} handleSelect={SeleteGridType} />
                </SettingItems>
                <SettingItems>
                    <p>No. of items per row</p>
                    <SelectDropDown className={`select_dropdown`} showValue={"2"} values={GridItemValue} handleSelect={SeleteGridItemHandle} />
                </SettingItems>
            </SettingItemWrap>
            {/* <SettingItemWrap>
                <SettingItems>
                    <p>Hide Video Title</p>
                    <SwitchButton layout={true} />
                </SettingItems>
                <SettingItems>
                    <p>Hide Video Description</p>
                    <SwitchButton layout={true} />
                </SettingItems>
            </SettingItemWrap>
            <SettingItemWrap>
                <SettingItems>
                    <p>Open in Lightbox</p>
                    <SwitchButton layout={true} />
                </SettingItems>
                <SettingItems>
                    <button className="button btn-o-silver btn-oval btn-xs">Cancel</button>
                    <button className="button button-primary btn-oval btn-xs">Save</button>
                </SettingItems>
            </SettingItemWrap> */}
        </React.Fragment>
    )
}

export default Grid