import { forwardRef } from "react"
import React from 'react'
import styled from "styled-components"

const FormGroup = styled.div`
position: ${({ itemFormGroup }) => itemFormGroup?.desktop?.position ? itemFormGroup?.desktop?.position : "relative"};
width: ${({ itemFormGroup }) => itemFormGroup?.desktop?.width ? itemFormGroup?.desktop?.width : "100%"};
input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    margin: 0;
  }
 

`
const Input = styled.input`
    border-radius: ${({ itemInput }) => itemInput?.desktop?.borderRadius ? itemInput?.desktop?.borderRadius : "4px"};
    border:${({ itemInput }) => itemInput?.desktop?.border ? itemInput?.desktop?.border : "1px solid rgba(32, 32, 32, 0.2)"}; 
    height: ${({ itemInput }) => itemInput?.desktop?.height ? itemInput?.desktop?.height : "40px"};
    padding-top:${({ itemInput }) => itemInput?.desktop?.padding?.paddingTop ? itemInput?.desktop?.padding?.paddingTop : "10px"};
    padding-right:${({ itemInput }) => itemInput?.desktop?.padding?.paddingRight ? itemInput?.desktop?.padding?.paddingRight : "20px"};
    padding-bottom:${({ itemInput }) => itemInput?.desktop?.padding?.paddingBottom ? itemInput?.desktop?.padding?.paddingBottom : "10px"};
    padding-left:${({ itemInput }) => itemInput?.desktop?.padding?.paddingLeft ? itemInput?.desktop?.padding?.paddingLeft : "20px"};
    width: ${({ itemInput }) => itemInput?.desktop?.width ? itemInput?.desktop?.width : "100%"};
    color: ${({ itemInput }) => itemInput?.desktop?.color ? itemInput?.desktop?.color : "#202020"};
    accent-color: ${({ itemInput }) => itemInput?.desktop?.accentColor ? itemInput?.desktop?.accentColor : ""};
    text-align: ${({ itemInput }) => itemInput?.desktop?.textAlign ? itemInput?.desktop?.textAlign : ""};
    line-height: ${({ itemInput }) => itemInput?.desktop?.lineHeight ? itemInput?.desktop?.lineHeight : "20px"};
    outline: ${({ itemInput }) => itemInput?.desktop?.outline ? itemInput?.desktop?.outline : "none"};
    box-shadow: ${({ itemInput }) => itemInput?.desktop?.boxShadow ? itemInput?.desktop?.boxShadow : "none"};
    resize: ${({ itemInput }) => itemInput?.desktop?.resize ? itemInput?.desktop?.resize : "none"};
    background: ${({ itemInput }) => itemInput?.desktop?.background ? itemInput?.desktop?.background : "transparent"};
    position: ${({ itemInput }) => itemInput?.desktop?.position ? itemInput?.desktop?.position : "relative"};
    font-family: ${({ itemInput }) => itemInput?.desktop?.fontFamily ? itemInput?.desktop?.fontFamily : "'Gilroy-Regular',sans-serif"};
    font-size:${({ itemInput }) => itemInput?.desktop?.fontSize ? itemInput?.desktop?.fontSize : "14px"};
    margin-top:${({ itemInput }) => itemInput?.desktop?.margin?.marginTop ? itemInput?.desktop?.margin?.marginTop : "0px"};
    margin-right:${({ itemInput }) => itemInput?.desktop?.margin?.marginRight ? itemInput?.desktop?.margin?.marginRight : "0px"};
    margin-bottom:${({ itemInput }) => itemInput?.desktop?.margin?.marginBottom ? itemInput?.desktop?.margin?.marginBottom : "0px"};
    margin-left:${({ itemInput }) => itemInput?.desktop?.margin?.marginLeft ? itemInput?.desktop?.margin?.marginLeft : "0px"};
    font-weight: ${({ itemInput }) => itemInput?.desktop?.fontWeight};
    &:focus {
        border-color: ${({ itemInput }) => itemInput?.desktop?.focus?.borderColor ? itemInput?.desktop?.focus?.borderColor : "#0184ff"};
    }

    &:active {
        border-color: ${({ itemInput }) => itemInput?.desktop?.active?.borderColor ? itemInput?.desktop?.active?.borderColor : "relative"};

  }
  

  &::placeholder{
    font-size: ${({ itemInput }) => itemInput?.desktop?.placeholder?.fontSize};
        line-height: ${({ itemInput }) => itemInput?.desktop?.placeholder?.lineHeight};
        color: ${({ itemInput }) => itemInput?.desktop?.placeholder?.color};
        font-family: ${({ itemInput }) => itemInput?.desktop?.placeholder?.fontFamily};
        font-weight: ${({ itemInput }) => itemInput?.desktop?.placeholder?.fontWeight};
        font-style: ${({ itemInput }) => itemInput?.desktop?.placeholder?.fontStyle};
  }
  @media screen and (max-width:767px){
    height: ${({ itemInput }) => itemInput?.mobile?.height ? itemInput?.mobile?.height : "40px"};
    width: ${({ itemInput }) => itemInput?.mobile?.width ? itemInput?.mobile?.width : "100%"};
    font-size: ${({ itemInput }) => itemInput?.mobile?.fontSize ? itemInput?.mobile?.fontSize : ""};


  }
`
const Label = styled.label`
    font-weight: ${({ itemLabel }) => itemLabel?.desktop?.fontWeight ? itemLabel?.desktop?.fontWeight : 500};
    font-size: ${({ itemLabel }) => itemLabel?.desktop?.fontSize ? itemLabel?.desktop?.fontSize : ""};
    line-height: ${({ itemLabel }) => itemLabel?.desktop?.lineHeight ? itemLabel?.desktop?.lineHeight : ""};
    color: ${({ itemLabel }) => itemLabel?.desktop?.color ? itemLabel?.desktop?.color : ""};
    display: ${({ itemLabel }) => itemLabel?.desktop?.display ? itemLabel?.desktop?.display : "block"};
    font-style: ${({ itemLabel }) => itemLabel?.desktop?.display ? itemLabel?.desktop?.fontStyle : ""};
    font-family: ${({ itemLabel }) => itemLabel?.desktop?.fontFamily ? itemLabel?.desktop?.fontFamily : ""};
    margin-bottom: ${({ itemLabel }) => itemLabel?.desktop?.margin?.marginBottom ? itemLabel?.desktop?.margin?.marginBottom : ""};
    @media screen and (max-width:1024px) {
        font-size: ${({ itemLabel }) => itemLabel?.tablet?.fontSize ? itemLabel?.tablet?.fontSize : ""};
    }
`;


const FormInput = ({ type, id, label, value, height, LabelStyle, FormGroupStyle, PlaceHolder, InputStyle, defaultValue, ...props }, ref) => {
  return (
    <FormGroup itemFormGroup={FormGroupStyle}>
      {
        label &&
        <Label classname='active' itemLabel={LabelStyle}> {label}</Label>
      }
      <Input
        type={type}
        height={height}
        id={id}
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        itemInput={InputStyle}
        placeholder={PlaceHolder}
        {...props}
      />

    </FormGroup>
  )
}

export default forwardRef(FormInput)