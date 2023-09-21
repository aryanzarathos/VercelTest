import React, { forwardRef, useRef, useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { styled } from 'styled-components';
import EditorTimeIcon from "../../Assets/SiteEditor/Icons/editorTimeIcon.svg";
import EditorDownIcon from "../../Assets/SiteEditor/Icons/editorDownIcon.svg";
import FormError from '@/CommonComponents/Form/FormError';
import { useDetectOutsideClick } from '@/CommonComponents/DetectOutsideClick/useDetectOutsideClick';


const MainDatePickerWrapper = styled.div`
width: ${({ width }) => width ? "48.5%" : "100%"};
@media(max-width:768px) {
    width: 100%;
}
`

const MainDatePicker = styled.div`
position: relative;
width: 100%;
.dateIcon{
    position: absolute;
    top: 50%;
    transform: translateY(-55%);
    left: 8px;
}
.downIcon{
    position: absolute;
    top: 50%;
    transform: translateY(-55%);
    right: 8px;
}
.react-datepicker-wrapper{
    width: 100%;
    input{
        padding: 8px 15px 8px 32px;
        width: 100%;
        border: 1px solid rgba(32, 32, 32, 0.2);
        font-family: "Poppins";
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        width: 100%;
        color: rgba(0, 0, 0, 1);
        display: block;
        background: transparent;
        position: relative;
        z-index: 1;
        border-radius: 6px;
        cursor: pointer;
        &::placeholder{
            font-family: "Poppins";
            font-size: 10px;
            font-weight: 400;
            line-height: 16px;
            color: rgba(32, 32, 32, 0.4);
        }
    }
}

.react-datepicker__tab-loop{
    .react-datepicker-popper{
        .react-datepicker{
            .react-datepicker__triangle{
                transform: translate(72px, 0px) !important;
            }
        }
    }
}
`;
const Label = styled.p`

line-height: 18px;
margin-bottom: 8px;
display: block;
font-size: calc(var(--global-typography-fontSizeP) - 1px );
font-weight: var(--global-typography-fontWightMedium);
color: var(--global-color-quaternary);
font-family: var(--global-typography-fontFamilyP);

`

const EditorTimePicker = ({ className, HandleOnChange, value, label, ObjectData, submit, fullWidthChecked }) => {
    const PickerRef = useRef(null);

    const [isActive, setIsActive] = useDetectOutsideClick(PickerRef, false);

    const OpenCloseHandle = () => {
        setIsActive(!isActive)
    }
    return (
        <MainDatePickerWrapper ref={PickerRef} width={fullWidthChecked}>
            {label && <Label>
                {label}
            </Label>
            }
            <MainDatePicker className={className} onClick={OpenCloseHandle}>
                <EditorTimeIcon className="dateIcon" />
                <EditorDownIcon className="downIcon" />
                <DatePicker
                    selected={value}
                    open={isActive}
                    autoFocus={false}
                    onChange={(date) => HandleOnChange(date)}
                    placeholderText='Select Time'
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                />
            </MainDatePicker>
            <FormError show={submit && !value && ObjectData?.mandate} error={`${label} is Required.`} />
        </MainDatePickerWrapper>
    )
}

export default EditorTimePicker
