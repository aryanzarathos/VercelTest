import React from 'react'
import { useRef } from 'react'
import { styled } from 'styled-components'

const GridInputConainer = styled.div`
 position: relative;

 .inputField {
    height: 33px;
    border-radius: 4px;
    border: 1.5px solid #ECECEC;
    width:100%;
    border-radius: 6px;
    padding: 6px 39px 6px 12px;
    font-size: 16px;
    color: #202020;
    font-family: 'Poppins',sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
 }

 

`


const Text = styled.p`
  font-size: 12px;
  color:#787878;
  position: absolute;
  top: top;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  line-height: 14px;
`

const GridInput = ({ className, inputClass, inputType, inputTypeText, ...props }) => {


  return (
    <GridInputConainer className={className}>
      <input className={`inputField ${inputClass}`} type={inputType || "text"} {...props} >

      </input>
      {
        inputTypeText ? (
          <Text>px </Text>
        ) : ""
      }
    </GridInputConainer>
  )
}

export default GridInput