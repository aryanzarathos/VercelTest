import styled from "styled-components";

export const CategoryFirst = styled.div`

display:${({ itemProp }) => itemProp.desktop.display} ;
margin: ${({ itemProp }) => itemProp.desktop.margin};
gap: ${({ itemProp }) => itemProp.desktop.gap};
grid-template-columns: repeat(${({ gridCount }) => gridCount?.desktop?.gridCount},1fr);
@media (max-width:1024px) {
    grid-template-columns: repeat(${({ gridCount }) => gridCount?.tablet?.gridCount},1fr);
}
@media (max-width:767px) {
    grid-template-columns: repeat(${({ gridCount }) => gridCount?.mobile?.gridCount},1fr);
}
`;
export const ImageContainer1 = styled.div`
  position: ${({ itemProp }) => itemProp.desktop.position};

background: ${({ itemProp }) => itemProp?.desktop?.background} ;
    padding: ${({ itemProp }) => itemProp?.desktop?.padding?.paddingTop} ;
    border-style:  ${({ itemProp }) => itemProp?.desktop?.borderStyle} ;
    border-width:${({ itemProp }) => itemProp?.desktop?.borderWidth};
    border-color:${({ itemProp }) => itemProp?.desktop?.borderColor} ;

/* img {
  max-width: ${({ itemProp }) => itemProp.desktop.maxWidth};
  display: ${({ itemProp }) => itemProp.desktop.display};
  object-fit: ${({ itemProp }) => itemProp.desktop.objectFit};
  width: ${({ itemProp }) => itemProp.desktop.width};
  max-height: ${({ itemProp }) => itemProp.desktop.maxHeight};
  height: ${({ itemProp }) => itemProp.desktop.height};
} */

/* h2 {
  font-size: ${({ itemProp }) => itemProp.desktop.fontSize};
  font-weight: ${({ itemProp }) => itemProp.desktop.fontWeight};
  line-height: ${({ itemProp }) => itemProp.desktop.lineHeight};
  color: ${({ itemProp }) => itemProp.desktop.color};
  position: ${({ itemProp }) => itemProp.desktop.position};
  bottom: ${({ itemProp }) => itemProp.desktop.bottom};
  left: ${({ itemProp }) => itemProp.desktop.left};
  right: ${({ itemProp }) => itemProp.desktop.right};
  bottom: ${({ itemProp }) => itemProp.desktop.bottom};
  padding: ${({ itemProp }) => itemProp.desktop.padding};
  text-align: ${({ itemProp }) => itemProp.desktop.textAlign};
  background: ${({ itemProp }) => itemProp.desktop.background};
} */
`;
export const MainImage = styled.div`
position: ${({ itemProp }) => itemProp.desktop.position};
  height:  ${({ itemProp }) => itemProp.desktop.height};
  width:  ${({ itemProp }) => itemProp.desktop.width};
  @media screen and (max-width:767px) {
    height:  ${({ itemProp }) => itemProp?.mobile?.height};
  }`;
export const MainCategoryWrapper = styled.div`
position: ${({ item }) => item?.desktop?.position};
min-width: 1px;
background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
`;
