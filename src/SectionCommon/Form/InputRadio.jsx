import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Label = styled.label`
display: ${({ itemLabel }) => itemLabel.desktop.display};
align-items:  ${({ itemLabel }) => itemLabel.desktop.alignItems};
gap:  ${({ itemLabel }) => itemLabel.desktop.gap};
width: ${({ itemLabel }) => itemLabel.desktop.width};
cursor:  ${({ itemLabel }) => itemLabel.desktop.cursor};
position:  ${({ itemLabel }) => itemLabel.desktop.position};
`
const RadioInput = styled.input`
width: ${({ itemRadio }) => itemRadio?.desktop?.width};
height: ${({ itemRadio }) => itemRadio?.desktop?.height};
border: ${({ itemRadio }) => itemRadio.desktop.border};
cursor: ${({ itemRadio }) => itemRadio.desktop.cursor};
accent-color: ${({ itemRadio }) => itemRadio?.desktop?.accentColor};
`






const InputRadio = ({ name, id, label,type, RadioStyle, labelStyle , ...props }) => {


    return (
        <>
            <RadioInput type={type} itemRadio={RadioStyle} id={id}  />
                {/* <LabelText itemLabel={labelStyle}>{label}</LabelText> */}
            
        </>
    )
}

export default InputRadio