import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import VactorIcon from "../../Assets/SiteEditor/Icons/Icon-Vector.svg"
import { useDetectOutsideClick } from '../DetectOutsideClick/useDetectOutsideClick';
import { activeMark, addMarkData, isBlockActive, isMarkActive, toggleBlock, toggleMark } from '../EditorWork/SlateEditor/utils/SlateUtilityFunctions';
import { useSlate } from 'slate-react';
import { activateFontFamily } from '@/store/actions/websiteTemplate';

const FontSizeDropdownWrapper = styled.div`
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
            white-space: nowrap;
            &.open{
                rotate:180deg;
            }
        }
    }
`

const FontDropdown = styled.ul`
list-style:none;
background-color: #202020;
width:40px;
padding:8px 0;
`
const FontDropdownWrap = styled.div`
position:absolute;
top: 34px;
left:0;
`;

const InputWrap = styled.div`
position: relative;
margin: 2px 0px;
    input{
        color: #000;
        font-family: 'Poppins',sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 11px; 
        padding: 10px 24px 10px 6px ;
        border-radius: 4px;
        width: 53px;
        border-radius: 4px;
        background: #FFF;
        height: 24px;
        border: none;
    }
`;

const Text = styled.p`
    font-size: 12px;
    color:#787878;
    position: absolute;
    top: top;
    top: 50%;
    transform: translateY(-50%);
    right: 6px;
    line-height: 14px;
`;


const List = styled.li`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
    text-align:center;
    color: #FFFFFF;
    list-style-type:none !important;
    &:hover{
        background:#0184FF;   
    }
    &.active{
        background:#0184FF;   
    }
    `

const FontSizeDropdown = ({ valuesData, manage }) => {
    const editor = useSlate();
    const clickOutsideRef = useRef(null);
    const [DropdownOpen, setDropdownOpen] = useDetectOutsideClick(clickOutsideRef, false);

    const [selectedValue, setSelectedValue] = useState("Auto");
    const [inputVal, setInputVal] = useState("auto");

    const [ActiveFont, setActiveFont] = useState()
    const SelectFontsizehandle = () => {
        setDropdownOpen(!DropdownOpen)
        setActiveFont(activeMark(editor, "fontSize"))
    }

    const handleOnChange = (value) => {
        addMarkData(editor, { format: "fontSize", value: `${value}px` })
        setSelectedValue(value)
        setDropdownOpen(!DropdownOpen)

        SelectFontsizehandle()
    }
    const handleInput = (e) => {
        addMarkData(editor, { format: "fontSize", value: `${e.target.value}px` })
        setSelectedValue(e.target.value)
        setInputVal(e.target.value)
    }

    const CheckActive = () => {
        let vla = 0
        for (let i = 0; i < valuesData.length; i++) {
            if (activeMark(editor, "fontSize")) {
                vla = vla + 1
            }
        }
        return vla
    }
    useEffect(() => {
        if (typeof activeMark(editor, "fontSize") === "number") {
            setSelectedValue(activeMark(editor, "fontSize"))
            setInputVal(activeMark(editor, "fontSize"))
        } else {
            setSelectedValue(activeMark(editor, "fontSize")?.replace("px", ""))
            setInputVal(activeMark(editor, "fontSize")?.replace("px", ""))
        }

    }, [activeMark(editor, "fontSize")])

    return (
        <FontSizeDropdownWrapper ref={clickOutsideRef} aria-disabled={selectedValue ? false : true}>
            <button onClick={() => setDropdownOpen(!DropdownOpen)}><span>{activeMark(editor, "fontSize")}</span><span className={DropdownOpen ? "open" : ""}><VactorIcon /></span></button>
            {
                DropdownOpen && (
                    <FontDropdownWrap>

                        <InputWrap>
                            <input type="text" value={inputVal} onChange={(e) => handleInput(e)} maxLength={3} />
                            <Text>px</Text>
                        </InputWrap>
                        <FontDropdown>
                            {
                                valuesData.map((value, key) => (
                                    <List format={"fontSize"} active={activeMark(editor, "fontSize") ? activeMark(editor, "fontSize") : "Auto"} className={isBlockActive(editor, value) === value ? "active" : ""} onClick={() => handleOnChange(value)} key={key}>{value}</List>
                                ))
                            }
                        </FontDropdown>
                    </FontDropdownWrap>
                )
            }
        </FontSizeDropdownWrapper>
    )
}

export default FontSizeDropdown