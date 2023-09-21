import FormError from '@/CommonComponents/Form/FormError';
import React from 'react'
import { styled } from 'styled-components'
const MainCheckBox = styled.div`
display:flex;
/* gap:10px; */
flex-direction: column;
width: ${({ width }) => width ? "48.5%" : "100%"};

position: relative;

@media(max-width:768px) {
    width: 100%;
}
`;

const CheckBoxHeading = styled.p`

line-height: 18px;
margin-bottom: 8px;
display: block;
font-size: calc(var(--global-typography-fontSizeP) - 1px );
font-weight: var(--global-typography-fontWightMedium);
color: var(--global-color-quaternary);
font-family: var(--global-typography-fontFamilyP);


`

const CheckboxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:12px;
  row-gap: 6px;
`
const CheckBoxContainer = styled.div`
     display: flex;
     gap: 7px;
     align-items: flex-start;
`

const Label = styled.label`
font-family: "Poppins";
font-size: 14px;
font-weight: 400;
line-height: 20px;
color: rgba(32, 32, 32, 1);
`;
const Input = styled.input`
accent-color: ${((item) => item.item)} ;
// accent-color:#000;
margin-top: 4px;

`;

const EditorCheckBox = ({ className, id, placeholder, HandleOnChange, inputClass, labelClass, label, value, checkBoxData, checkboxColor, ObjectData, submit, fullWidthChecked }) => {

    const validateData = () => {
        return checkBoxData.every((currentValue) => value.includes(currentValue));
    };
    const isValid = validateData();
    
    return (
        <MainCheckBox className={className} width={fullWidthChecked} >
            <CheckBoxHeading>{label}</CheckBoxHeading>
            <CheckboxWrapper>
                {
                    checkBoxData && checkBoxData.length > 0 ? (
                        <>
                            {
                                checkBoxData.map((item, key) => {
                                    return (
                                        <CheckBoxContainer key={key}>
                                            <Input type={"checkbox"} checked={value.includes(item)} placeholder={placeholder} id={`contact_${key}`} name={`contact_${key}`} item={checkboxColor} onChange={() => HandleOnChange(item)} className={inputClass} />
                                            <Label onClick={() => HandleOnChange(item)} htmlFor={id} className={labelClass}>{item}</Label>
                                        </CheckBoxContainer>

                                    )
                                })
                            }
                        </>
                    ) : (
                        ""
                    )
                }
                <FormError show={submit && !isValid && ObjectData?.mandate} error={`${label} is Required.`} />
            </CheckboxWrapper>
        </MainCheckBox>
    )
}

export default EditorCheckBox
