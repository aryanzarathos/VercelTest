import React, { useState } from 'react'
import { Input, InputWrap, Label, MainInputWrapper } from './InputBox.style';
import LabelErrorIcon from "../../../Assets/SiteEditor/Icons/labelErrorIcon.svg"
import Tooltip from '@/CommonComponents/ToolTip/ToolTip';

const InputBox = ({ label, type = "text", placeholder, className, toolTipText, placement, toolTipWrapperClass, toolTipPosition, toolTipDownClass, error, onChange, ...props }) => {
    // const [error, setError] = useState(false)
    return (
        <>
            <MainInputWrapper className={className}>
                {label ? <Label>
                    {label}
                </Label> : ""}
                <InputWrap>
                    <Input type={type} placeholder={placeholder} onChange={onChange} className={error ? "error" : ""} {...props} />
                    {
                        error &&
                        <Tooltip text={toolTipText} placement={placement}
                            className={toolTipWrapperClass}
                            toolTipClass={toolTipPosition}
                            toolTipDownClass={toolTipDownClass}>
                            <LabelErrorIcon />
                        </Tooltip>
                    }
                </InputWrap>
            </MainInputWrapper>
        </>
    )
}

export default InputBox
