import React from "react";
import { styled } from "styled-components";
import { rgbaToHex, useGlobalVariable } from "../../CommonFunctions/changeColorType";
import useGlobalTheme from '../../CustomHooks/useGlobalTheme'
const ColorPaletteWrappper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FCFCFC;
  border: 1.5px solid #ECECEC;
  border-radius: 6px;
  padding: 6px 8px;
  gap: 8px;
`;
const ColorCodeType = styled.span`
  font-weight: 300;
  font-size: 10px;
  line-height: 20px;
  letter-spacing: -0.4px;
  color: rgba(32, 32, 32, 0.8);
  padding-right: 8px;
  border-right: 1px solid #ECECEC;
`;
const ColorCode = styled.span`
  font-weight: 400;
  font-size: 11px;
  line-height: 20px;
  letter-spacing: -0.4px;
  color: #202020;
`;
const Color = styled.span`
  width: 20px;
  height: 20px;
  background: ${({ item }) => item};
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  cursor: pointer;
`;
const ColorPaletteWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ColorPalette = ({ colorType, colorCode, paletteHandle, className }) => {
  const [globalVariable] = useGlobalVariable()
  return (
    <ColorPaletteWrappper className={className ? className : ''}>
      <ColorPaletteWrap>
        <ColorCodeType>{colorType ? colorType : "Hex"}</ColorCodeType>
        <ColorCode>{rgbaToHex(globalVariable(colorCode))}</ColorCode>
      </ColorPaletteWrap>
      <Color item={colorCode} onClick={paletteHandle} />
    </ColorPaletteWrappper>
  );
};

export default ColorPalette;
