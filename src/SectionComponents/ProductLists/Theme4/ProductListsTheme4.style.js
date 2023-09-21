import styled from "styled-components";

export const MainSection = styled.section`
  min-width: 1px;
  background: ${({ item }) => item.desktop.background};
  padding: ${({ item }) => item?.desktop?.padding?.paddingTop};
`;
export const MainContent = styled.div`
    display: ${({ itemProp }) => itemProp.desktop.display};
    grid-template-columns: repeat(${({ gridCount }) => gridCount.desktop.gridCount},1fr);
    gap: ${({ itemProp }) => itemProp.desktop.gridGap};
    justify-content: ${({ itemProp }) => itemProp.desktop.justifyContent};
    width: ${({ itemProp }) => itemProp.desktop.width};
    // margin: ${({ itemProp }) => itemProp.desktop.margin};
    @media screen and (max-width:1024px) {
      grid-template-columns: repeat(${({ gridCount }) => gridCount.tablet.gridCount},1fr);  
    }
    @media screen and (max-width:767px) {
      grid-template-columns: repeat(${({ gridCount }) => gridCount.mobile.gridCount},1fr);  
    }

  `;
export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    
    width: ${({ itemProp }) => itemProp.desktop.width};
    background:${({ itemProp }) => itemProp?.desktop?.background};
    padding: ${({ itemProp }) => itemProp?.desktop?.padding?.paddingTop};
    border-style : ${({ itemProp }) => itemProp?.desktop?.borderStyle};
    border-width : ${({ itemProp }) => itemProp?.desktop?.borderWidth};
    border-color: ${({ itemProp }) => itemProp?.desktop?.borderColor};

  `;

export const OfferWrap = styled.div`
display: ${({ itemProp }) => itemProp?.desktop?.display};
align-items: ${({ itemProp }) => itemProp?.desktop?.alignItems};
gap: ${({ itemProp }) => itemProp?.desktop?.gap};
margin-bottom: ${({ itemProp }) => itemProp?.desktop?.marginBottom};
`
export const PercentangeWraper = styled.div`
    display: flex;
    gap: 10px;
  `
// export const Paragraph = styled.p`
//   text-transform: ${({ itemProp }) => itemProp.desktop.textTransform};
//   letter-spacing: ${({ itemProp }) => itemProp.desktop.letterSpacing};
//   word-spacing: ${({ itemProp }) => itemProp.desktop.wordSpacing};
//   margin-top: ${({ itemProp }) => itemProp.desktop.marginTop};
//   font-family: ${({ itemProp }) => itemProp.desktop.fontFamily};
//   font-style: ${({ itemProp }) => itemProp.desktop.fontStyle};
//   font-weight: ${({ itemProp }) => itemProp.desktop.fontWeight};
//   font-size: ${({ itemProp }) => itemProp.desktop.fontSize};
//   line-height: ${({ itemProp }) => itemProp.desktop.lineHeight};
//   color: ${({ itemProp }) => itemProp.desktop.color};
//   `;
// export const Heading = styled.h5`
//   text-transform: ${({ itemProp }) => itemProp.desktop.textTransform};
//   font-family: ${({ itemProp }) => itemProp.desktop.fontFamily};
//   font-style: ${({ itemProp }) => itemProp.desktop.fontStyle};
//   font-weight: ${({ itemProp }) => itemProp.desktop.fontWeight};
//   font-size: ${({ itemProp }) => itemProp.desktop.fontSize};
//   line-height: ${({ itemProp }) => itemProp.desktop.lineHeight};
//   color: ${({ itemProp }) => itemProp.desktop.color};
//   letter-spacing: ${({ itemProp }) => itemProp.desktop.letterSpacing};
//   word-spacing: ${({ itemProp }) => itemProp.desktop.wordSpacing};
//   text-align: ${({ itemProp }) => itemProp.desktop.textAlign};
//   margin-top: ${({ itemProp }) => itemProp.desktop.marginTop};
//   width: ${({ itemProp }) => itemProp.desktop.width};
//   overflow: ${({ itemProp }) => itemProp.desktop.overflow};
//   text-overflow: ${({ itemProp }) => itemProp.desktop.textOverflow};
//   white-space: ${({ itemProp }) => itemProp.desktop.whiteSpace};
//   `;

export const MainImage = styled.div`
    height: ${({ itemProp }) => itemProp.desktop.height};
    width: ${({ itemProp }) => itemProp.desktop.width};
    max-width: ${({ itemProp }) => itemProp.desktop.maxWidth};
    @media screen and (max-width:1024px){
      height: ${({ itemProp }) => itemProp?.tablet?.height};
    }
    @media screen and (max-width:767px){
      height: ${({ itemProp }) => itemProp?.mobile?.height};
    }
    
  `;
export const SliderWrapper = styled.div`
.swiper-slide{
  height: auto;
}
`
export const ModalBody = styled.div`
 padding:0 ;
`
export const Button = styled.button`
    padding-top: ${({ itemProp }) => itemProp.desktop.paddingTop};
    padding-bottom: ${({ itemProp }) => itemProp.desktop.paddingBottom};
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
      background: ${({ itemProp }) => itemProp.desktop.hover.background};
      color: ${({ itemProp }) => itemProp.desktop.hover.color};
    }
  `;
