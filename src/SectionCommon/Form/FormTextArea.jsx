import React, { forwardRef } from 'react'
import styled from 'styled-components'

const FormGroup = styled.div`
position: relative;
`
const Label = styled.label`
    font-weight: ${({ itemFormLabel }) => itemFormLabel?.desktop?.fontWeight ? itemFormLabel?.desktop?.fontWeight : 500};
    font-size: ${({ itemFormLabel }) => itemFormLabel?.desktop?.fontSize ? itemFormLabel?.desktop?.fontSize : "16px"};
    line-height: ${({ itemFormLabel }) => itemFormLabel?.desktop?.lineHeight ? itemFormLabel?.desktop?.lineHeight : "24px"};
    color: ${({ itemFormLabel }) => itemFormLabel?.desktop?.color ? itemFormLabel?.desktop?.color : "#202020"};
    font-family: ${({ itemFormLabel }) => itemFormLabel?.desktop?.fontFamily ? itemFormLabel?.desktop?.fontFamily : "'Gilroy-Regular',sans-serif"};
`
const TextArea = styled.textarea`
  border-radius: 4px;
  border: 1px solid rgba(32, 32, 32, 0.2);
  /* padding: 10px 20px; */
  padding-top:${({ itemFormTextArea }) => itemFormTextArea?.desktop?.padding?.paddingTop ? itemFormTextArea?.desktop?.padding?.paddingTop : "10px"};
  padding-right:${({ itemFormTextArea }) => itemFormTextArea?.desktop?.padding?.paddingRight ? itemFormTextArea?.desktop?.padding?.paddingRight : "20px"};
  padding-bottom:${({ itemFormTextArea }) => itemFormTextArea?.desktop?.padding?.paddingBottom ? itemFormTextArea?.desktop?.padding?.paddingBottom : "10px"};
  padding-left:${({ itemFormTextArea }) => itemFormTextArea?.desktop?.padding?.paddingLeft ? itemFormTextArea?.desktop?.padding?.paddingLeft : "20px"};
  width: 100%;
  font-weight: ${({ itemFormTextArea }) => itemFormTextArea?.desktop?.fontWeight};
  // position: relative;
  font-size: ${({ itemFormTextArea }) => itemFormTextArea?.desktop?.fontSize};
  line-height: ${({ itemFormTextArea }) => itemFormTextArea?.desktop?.lineHeight};
  color: #202020;
  outline: 0;
  outline: none;
  box-shadow: none;
  font-family:'Gilroy-Regular',sans-serif ;
  resize: none;
    margin-top:${({ itemFormTextArea }) => itemFormTextArea?.desktop?.margin?.marginTop ? itemFormTextArea?.desktop?.margin?.marginTop : ""};
  margin-right:${({ itemFormTextArea }) => itemFormTextArea?.desktop?.margin?.marginRight ? itemFormTextArea?.desktop?.margin?.marginRight : ""};
  margin-bottom:${({ itemFormTextArea }) => itemFormTextArea?.desktop?.margin?.marginBottom ? itemFormTextArea?.desktop?.margin?.marginBottom : ""};
  margin-left:${({ itemFormTextArea }) => itemFormTextArea?.desktop?.margin?.marginLeft ? itemFormTextArea?.desktop?.margin?.paddingLeft : ""};

  &:focus {
    border-color: #0184ff;
  }

  &:active {
    border-color: #0184ff;
  }
  &::placeholder{
    font-size: ${({ itemFormTextArea }) => itemFormTextArea?.desktop?.placeholder?.fontSize};
        line-height: ${({ itemFormTextArea }) => itemFormTextArea?.desktop?.placeholder?.lineHeight};
        color: ${({ itemFormTextArea }) => itemFormTextArea?.desktop?.placeholder?.color};
        font-family: ${({ itemFormTextArea }) => itemFormTextArea?.desktop?.placeholder?.fontFamily};
        font-weight: ${({ itemFormTextArea }) => itemFormTextArea?.desktop?.placeholder?.fontWeight};
        font-style: ${({ itemFormTextArea }) => itemFormTextArea?.desktop?.placeholder?.fontStyle};
  }
`

const FormTextArea = ({ name, rows, maxlength, id,value, label, placeholder, TextareaBtmTxt, className, styleFormGroup, styleFormLabel, styleFormTextArea, ...props }, ref) => {


  return (
    <FormGroup itemFormGroup={styleFormGroup}>
      {
        label &&
        <Label itemFormLabel={styleFormLabel} classname='active'> {label}</Label>
      }
      <TextArea placeholder={placeholder} name={name} rows={rows} maxLength={maxlength} ref={ref} value={value} itemFormTextArea={styleFormTextArea} {...props} />
    </FormGroup>
  )
}

export default forwardRef(FormTextArea)