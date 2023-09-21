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
    padding-top: ${({ style }) => style?.desktop?.padding?.paddingTop};
    padding-bottom: ${({ style }) => style?.desktop?.padding?.paddingBottom};
    font-family: ${({ style }) => style?.desktop?.fontFamily};
    font-style: ${({ style }) => style?.desktop?.fontStyle};
    font-weight: ${({ style }) => style.desktop.fontWeight};
    font-size: ${({ style }) => style.desktop.fontSize};
    line-height: ${({ style }) => style.desktop.lineHeight};
    color: ${({ style }) => style.desktop.color};
    letter-spacing: ${({ style }) => style.desktop.letterSpacing};
    word-spacing: ${({ style }) => style.desktop.wordSpacing};
    width: ${({ style }) => style.desktop.width};
    text-transform: ${({ style }) => style.desktop.textTransform};
    margin-top: ${({ style }) => style.desktop.marginTop};
    border: ${({ style }) => style.desktop.border};
    outline: ${({ style }) => style.desktop.outline};
    background: ${({ style }) => style.desktop.background};
    cursor: ${({ style }) => style.desktop.cursor};
    transition: ${({ style }) => style.desktop.transition};
    &:hover {
      background: ${({ style }) => style.desktop.hover.backgroundColor};
      color: ${({ style }) => style.desktop.hover.color};
    }
    
  `;

export const MainHeader = styled.div`
    
  `;
export const PrdoductDescription = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
`;
export const ProductWrap = styled.div``;
