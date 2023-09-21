import FormError from '@/CommonComponents/Form/FormError';
import React from 'react'
import { styled } from 'styled-components'
const MainRadioButton = styled.div`
width: ${({ width }) => width ? "48.5%" : "100%"};
display:flex;
gap:10px;
flex-direction: column;
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
accent-color: ${((item) =>item.item)} ;
margin-top: 4px;
`;

const EditorRadioButton = ({ className, id, HandleOnChange, inputClass, value, labelClass, radioButtonData, label, ObjectData,checkboxColor, submit, fullWidthChecked }) => {
    return (
        <MainRadioButton className={className} width={fullWidthChecked}>
             <CheckBoxHeading>{label}</CheckBoxHeading>
             <CheckboxWrapper> 
            {
                radioButtonData && radioButtonData.length > 0 ? (
                    <>
                        {
                            radioButtonData.map((item, key) => {
                                return (
                                    <CheckBoxContainer key={key}>
                                        <Input type={"radio"} checked={value.includes(item)} name={label} id={key+label} onChange={() => HandleOnChange(item)} item={checkboxColor} className={inputClass} />
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
            <FormError show={submit && !value && ObjectData?.mandate} error={`${label} is Required.`} />
            </CheckboxWrapper>
        </MainRadioButton>
    )
}

export default EditorRadioButton
