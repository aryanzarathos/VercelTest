import styled from "styled-components";
export const MainTeamWrapper = styled.div`
min-width: 1px;
background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
`
export const ContainerFirst = styled.div`
display: ${({ item }) => item?.desktop?.display};
grid-template-columns: repeat( ${({ gridCount }) => gridCount?.desktop?.gridCount},1fr) ;
gap: ${({ item }) => item?.desktop?.gap};
@media screen and (max-width: 1024px){
  grid-template-columns: repeat( ${({ gridCount }) => gridCount?.tablet?.gridCount},1fr) ;
}
@media screen and (max-width: 767px){
  grid-template-columns: repeat( ${({ gridCount }) => gridCount?.mobile?.gridCount},1fr) ;
}
`

export const OurTeamImgContainerFirst = styled.div`
  display: block;
  background: ${({ itemProp }) => itemProp?.desktop?.background} ;
    padding: ${({ itemProp }) => itemProp?.desktop?.padding?.paddingTop} ;
    border-style:  ${({ itemProp }) => itemProp?.desktop?.borderStyle} ;
    border-width:${({ itemProp }) => itemProp?.desktop?.borderWidth};
    border-color:${({ itemProp }) => itemProp?.desktop?.borderColor} ;
  @media screen and (max-width: 767px){
    padding:  ${({ itemProp }) => itemProp?.mobile?.padding};
}
  
`;
export const ImgContainer = styled.figure`
height: ${({ itemProp }) => itemProp?.desktop?.height};
width: ${({ itemProp }) => itemProp?.desktop?.width};
`;

export const TeamAboutSection = styled.div`
width:  ${({ itemProp }) => itemProp?.desktop?.width};
height:  ${({ itemProp }) => itemProp?.desktop?.height};
padding:  ${({ itemProp }) => itemProp?.desktop?.padding};
// background:  ${({ itemProp }) => itemProp?.desktop?.background};
`;

