import FormError from '@/CommonComponents/Form/FormError';
import React from 'react'
import { styled } from 'styled-components'
const MainInput = styled.div`
width: 100%;
width: ${({ width }) => width ? "48.5%" : "100%"};
@media(max-width:768px) {
    width: 100%;
}
`;
const Label = styled.label`

line-height: 18px;
margin-bottom: 8px;
display: block;
font-size: calc(var(--global-typography-fontSizeP) - 1px );
font-weight: var(--global-typography-fontWightMedium);
color: var(--global-color-quaternary);
font-family: var(--global-typography-fontFamilyP);


`;
const Input = styled.input`
padding: 9px 15px;
background: #fff;
border: 1px solid rgba(32, 32, 32, 0.2);
font-family: "Poppins";
font-size: 12px;
font-weight: 500;
line-height: 18px;
width: 100%;
color: rgba(0, 0, 0, 1);
display: block;
border-radius: 6px;

&::placeholder{
font-family: "Poppins";
font-size: 10px;
font-weight: 400;
line-height: 16px;
color: rgba(32, 32, 32, 0.4);

}

`;

const EditorFormInput = ({ className, label, labelClassName, type = "text", inputClass, value, placeholder, HandleOnChange, ObjectData, submit, fullWidthChecked }) => {

    return (
        <MainInput className={className} width={fullWidthChecked}>

            {label ?
                <Label className={labelClassName}>
                    {label}
                </Label> : ""
            }
            <Input type={type} className={inputClass} value={value} onChange={(e) => HandleOnChange(e.target.value)} placeholder={placeholder} />
            <FormError show={submit && !value && ObjectData?.mandate} error={`${label} is Required.`} />
            <FormError show={submit && value && !ObjectData.isValid && ObjectData?.mandate} error={`${label} should be valid.`} />
        </MainInput>
    )
}

export default EditorFormInput
