import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Label = styled.label`
display: ${({ item }) => item.desktop.display};
align-items:  ${({ item }) => item.desktop.alignItems};
justify-content: ${({ labelPostion }) => labelPostion === 'left' ? 'space-between' : 'flex-start'};
gap:  ${({ item }) => item.desktop.gap};
width: ${({ item }) => item.desktop.width};
cursor:  ${({ item }) => item.desktop.cursor};
position:  ${({ item }) => item.desktop.position};
`
const CheckBoxInput = styled.input`
order: ${({ item }) => item.desktop.order};
flex-basis: ${({ item }) => item.desktop.flexBasis};
width: ${({ checkBoxDimensions }) => `${checkBoxDimensions}px`};
height: ${({ checkBoxDimensions }) => `${checkBoxDimensions}px`};
border: ${({ item }) => item.desktop.border};
cursor: ${({ item }) => item.desktop.cursor};
`
const LabelText = styled.span`
font-family: ${({ item }) => item.desktop.fontFamily};
font-size: ${({ labelFontSize }) => `${labelFontSize}px`};
color: ${({ item }) => item.desktop.color};
flex-basis: ${({ item }) => item.desktop.flexBasis};
order: ${props => props.labelPostion === "left" ? 1 : 4};
position: ${({ item }) => item.desktop.position};
margin-top: ${({ item }) => item.desktop.marginTop};
margin-bottom: ${({ item }) => item.desktop.margiBottom};

`





const InputCheckbox = ({ name, id, type, labelPostion, checkBoxSize, labelFontSize = 12, label, LabelClass, checkboxItem, ...props }) => {

  const [checkBoxDimensions, setCheckBoxDimensions] = useState(null)

  useEffect(() => {
    switch (checkBoxSize) {
      case 'xxs': {
        setCheckBoxDimensions(10)
        break;
      }

      case 'xs': {
        setCheckBoxDimensions(12);
        break;
      }

      case 's': {
        setCheckBoxDimensions(14);
        break;
      }

      case 'sm': {
        setCheckBoxDimensions(16);
        break;
      }

      case 'md': {
        setCheckBoxDimensions(18);
        break;
      }

      case 'lg': {
        setCheckBoxDimensions(20);
        break;
      }

      case 'xlg': {
        setCheckBoxDimensions(30);
        break;
      }
      default:
        setCheckBoxDimensions(14);
    }
  }, [checkBoxSize])

  return (
    <Label item={checkboxItem.label} labelPostion={labelPostion} >
      <CheckBoxInput item={checkboxItem.Input} type={'checkbox'} checkBoxDimensions={checkBoxDimensions} {...props}/>
      {
        label &&
        <LabelText item={checkboxItem.Span} labelPostion={labelPostion} labelFontSize={labelFontSize}>{label}</LabelText>
      }
    </Label>
  )
}

export default InputCheckbox