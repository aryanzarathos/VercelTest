import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import VactorIcon from "../../Assets/SiteEditor/Icons/Icon-Vector.svg"
import { useDetectOutsideClick } from '../DetectOutsideClick/useDetectOutsideClick';
import { activeMark, addMarkData, isBlockActive, isMarkActive, toggleBlock, toggleMark } from '../EditorWork/SlateEditor/utils/SlateUtilityFunctions';
import { useSlate } from 'slate-react';

const FontFamilyDropdownWrapper = styled.div`
    background-color: #202020;
    cursor: pointer;
    position:relative;
    
    &:hover{
        svg,stroke{
            fill: #0184FF;
        }
    }
    button{
        text-align:center;
        height: 24px;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        text-transform: capitalize;
        color: #FFFFFF;
        cursor: pointer;
        transition:all .2s ease-in-out;
        background: transparent;
        border:none;
        [aria-disabled="true"] {
            opacity: 0.2;
            pointer-events: none;
        }
        &:hover{
        color:#0184FF;
        }
        display:flex;
        align-items:center;
        gap: 6px;
        span{
            &.open{
                rotate:180deg;
            }
        }
    }
`

const FontFamilyDropdownStyle = styled.ul`
list-style:none;
position:absolute;
top: 32px;
left:0;
width:40px;
background-color: #202020;
padding:8px 0;
`
const List = styled.li`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
    text-align:center;
    color: #FFFFFF;
    &:hover{
        background:#0184FF;   
    }
    &.active{
        background:#0184FF;   
    }
`

const FontFamilyDropdown = ({ valuesData }) => {
    const editor = useSlate();
    const clickOutsideRef = useRef(null);
    const [DropdownOpen, setDropdownOpen] = useDetectOutsideClick(clickOutsideRef, false);

    const [selectedValue, setSelectedValue] = useState();

    const SelectFontsizehandle = () => {
        setDropdownOpen(!DropdownOpen)
    }

    const handleOnChange = (value) => {
        addMarkData(editor, { format: "fontFamily", value: value })
        setSelectedValue(value)
        setDropdownOpen(!DropdownOpen)
        SelectFontsizehandle()
    }



    return (
        <FontFamilyDropdownWrapper ref={clickOutsideRef} aria-disabled={selectedValue ? false : true}>
            <button onClick={setDropdownOpen}><span>{activeMark(editor, "fontFamily") ? activeMark(editor, "fontFamily") : ""}</span><span className={DropdownOpen ? "open" : ""}><VactorIcon /></span></button>
            {
                DropdownOpen && (
                    <FontFamilyDropdownStyle>
                        {
                            valuesData.map((value, key) => (
                                <List format={"fontFamily"} active={activeMark(editor, "fontFamily") === value ? "active" : ""} className={activeMark(editor, "fontFamily") === value ? "active" : ""} onClick={() => handleOnChange(value)} key={key}>{value}</List>
                            ))
                        }
                    </FontFamilyDropdownStyle>
                )
            }
        </FontFamilyDropdownWrapper>
    )
}

export default FontFamilyDropdown