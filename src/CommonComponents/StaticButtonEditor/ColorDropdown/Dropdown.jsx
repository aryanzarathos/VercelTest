import React, { forwardRef, useState } from 'react'
import Tabs from '../../Tabs/Tabs';
import styles from "./Dropdown.module.scss"
import styled from 'styled-components';
import Normal from './TabComponents/Normal';
import Hover from './TabComponents/Hover';
import ReactDom from 'react-dom'

const TabRenderWrap = styled.div`
    padding: 12px 2px 12px 6px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`
const DropdownWrapper = styled.div`
    position: absolute;
    top: 36px;
    left: 0;
    padding:6px;
    background: #FCFCFC;
    box-shadow: 2px 5px 10px rgba(32, 32, 32, 0.15);
    border-radius: 4px;
    isolation: isolate;
    width: 253px;
    &:after{
        content: " ";
        left: 0;
        bottom: 0;
        border-top: 20px solid  transparent;
        border-right: 19px solid transparent;
        border-left: 19px solid transparent;    
        border-bottom: none;
        z-index: -1;
    }
`

const Dropdown = forwardRef(({ selectedElementData, sliderKey }, ref) => {
    const [active, setActive] = useState("Normal");

    return (
        <DropdownWrapper ref={ref}>
            <Tabs
                valueState={true}
                defaultValue="Normal"
                clearState={true}

                activeTitle={(val) => setActive(val)}
                TabWrapperClass={styles.BannerEditorDropdown}
                TabButtonClass={`${styles.EditorBtns}`}
                ActiveTabClass={styles.ActiveBtn}
                tabs={["Normal", "Hover"]}
            />
            <TabRenderWrap>
                {
                    active === "Normal" ? <Normal selectedElementData={selectedElementData} sliderKey={sliderKey} /> :
                        active === "Hover" ? <Hover selectedElementData={selectedElementData} sliderKey={sliderKey} /> : ""
                }
            </TabRenderWrap>
        </DropdownWrapper>
    )
})
Dropdown.displayName = "Dropdown"

export default Dropdown