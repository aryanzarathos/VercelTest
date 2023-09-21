import styled from "styled-components";

export const MainSection = styled.section`
  min-width: 1px;
  background: ${({ item }) => item.desktop.background};
  padding: ${({ item }) => item?.desktop?.padding?.paddingTop};
`;
export const MainContent = styled.div`
    display: ${({ itemProp }) => itemProp.desktop.display};
    grid-template-columns: repeat(${({ itemProp1 }) => itemProp1.desktop.gridCount},1fr);
    gap: ${({ itemProp }) => itemProp.desktop.gridGap};
    justify-content: ${({ itemProp }) => itemProp.desktop.justifyContent};
    width: ${({ itemProp }) => itemProp.desktop.width};
    @media screen and (max-width: 1040px) {
      grid-template-columns: repeat(${({ itemProp1 }) => itemProp1.mobile.gridCount},1fr);  
    }
    
  `;

export const OfferWrap = styled.div`
display: ${({ itemProp }) => itemProp?.desktop?.display};
align-items: ${({ itemProp }) => itemProp?.desktop?.alignItems};
gap: ${({ itemProp }) => itemProp?.desktop?.gap};
margin-bottom: ${({ itemProp }) => itemProp?.desktop?.marginBottom};
text-align: ${({ itemProp }) => itemProp?.desktop?.textAlign};
justify-content: ${({ itemProp }) => itemProp?.desktop?.justifyContent};
`
export const ProductContent = styled.div`
    display: ${({ itemProp }) => itemProp.desktop.display};
    grid-template-columns: ${({ itemProp }) => itemProp.desktop.gridTemplateColumns};
    gap: ${({ itemProp }) => itemProp.desktop.gap};
    width: ${({ itemProp }) => itemProp.desktop.width};
    background:${({ itemProp }) => itemProp?.desktop?.background};
    padding: ${({ itemProp }) => itemProp?.desktop?.padding?.paddingTop};
    border-style : ${({ itemProp }) => itemProp?.desktop?.borderStyle};
    border-width : ${({ itemProp }) => itemProp?.desktop?.borderWidth};
    border-color: ${({ itemProp }) => itemProp?.desktop?.borderColor};
    @media screen and (max-width: 767px) {
      grid-template-columns: ${({ itemProp }) => itemProp.mobile.gridTemplateColumns};
    }
    
  `;

export const MainImage = styled.div`
    width: ${({ itemProp }) => itemProp.desktop.width};
    height: ${({ itemProp }) => itemProp.desktop.height};
    
  `;
export const Button = styled.button`
    padding-top: ${({ itemProp }) => itemProp?.desktop?.padding?.paddingTop};
    padding-bottom: ${({ itemProp }) => itemProp?.desktop?.padding?.paddingBottom};
    font-family: ${({ itemProp }) => itemProp.desktop.fontFamily};
    font-style: ${({ itemProp }) => itemProp.desktop.fontStyle};
    font-weight: ${({ itemProp }) => itemProp.desktop.fontWeight};
    font-size: ${({ itemProp }) => itemProp.desktop.fontSize};
    line-height: ${({ itemProp }) => itemProp.desktop.lineHeight};
    color: ${({ itemProp }) => itemProp.desktop.color};
    letter-spacing: ${({ itemProp }) => itemProp.desktop.letterSpacing};
    word-spacing: ${({ itemProp }) => itemProp.desktop.wordSpacing};
    width: ${({ itemProp }) => itemProp.desktop.width};
    text-transform: ${({ itemProp }) => itemProp.desktop.textTransform};
    margin-top: ${({ itemProp }) => itemProp.desktop.marginTop};
    border: ${({ itemProp }) => itemProp.desktop.border};
    outline: ${({ itemProp }) => itemProp.desktop.outline};
    background: ${({ itemProp }) => itemProp.desktop.background};
    cursor: ${({ itemProp }) => itemProp.desktop.cursor};
    transition: ${({ itemProp }) => itemProp.desktop.transition};
    &:hover {
      background: ${({ itemProp }) => itemProp.desktop.hover.backgroundColor};
      color: ${({ itemProp }) => itemProp.desktop.hover.color};
    }

    @media screen and (max-width: 767px) {
      width: ${({ itemProp }) => itemProp.mobile.width};
    }
    
  `;

export const MainHeader = styled.div`
    
  `;
export const PrdoductDescription = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;
export const ProductWrap = styled.div``;
