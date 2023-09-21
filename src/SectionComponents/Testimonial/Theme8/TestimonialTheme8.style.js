import styled from "styled-components";

export const ContainerMain = styled.div`
background: ${({ item }) => item?.desktop?.background};
padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop}; 
min-width: 1px;
`
export const Span = styled.span`
font-weight: ${({ item }) => item.desktop.span.fontWeight};
color:${({ item }) => item.desktop.span.color} ;
`

export const CardWrapper = styled.div`
display: ${({ item }) => item?.desktop?.display};
grid-template-columns: repeat(${({ itemProp1 }) => itemProp1?.desktop?.gridCount},1fr);
gap: ${({ item }) => item?.desktop?.gap};
align-items: flex-start;
/* margin-top: ${({ item }) => item?.desktop?.marginTop}; */
@media screen and (max-width: 1024px) {
  grid-template-columns: repeat(${({ itemProp1 }) => itemProp1?.tablet?.gridCount},1fr);
}
@media screen and (max-width: 767px) {
  grid-template-columns: repeat(${({ itemProp1 }) => itemProp1?.mobile?.gridCount},1fr);
}
`;
export const CardWrap = styled.div`
// padding: ${({ item }) => item?.desktop?.padding};
border-radius: ${({ item }) => item?.desktop?.borderRadius};
box-shadow:${({ item }) => item?.desktop?.boxShadow};
text-align: ${({ item }) => item?.desktop?.textAlign};
margin: ${({ item }) => item?.desktop?.margin};
position: relative;
width: ${({ item }) => item.desktop.width};
background:${({ item }) => item?.desktop?.background};
padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
border-style : ${({ item }) => item?.desktop?.borderStyle};
border-width : ${({ item }) => item?.desktop?.borderWidth};
border-color: ${({ item }) => item?.desktop?.borderColor};
`;
export const ProfileContainer2 = styled.div`
display: ${({ item }) => item?.desktop?.display};
flex-direction: ${({ item }) => item?.desktop?.flexDirection};
align-items: ${({ item }) => item?.desktop?.alignItems};
text-align: ${({ item }) => item?.desktop?.textAlign};
position: ${({ item }) => item?.desktop?.position};
bottom: ${({ item }) => item?.desktop?.bottom};
`;
export const CardImgcontainer2 = styled.figure`
width: ${({ item }) => item?.desktop?.width};
height: ${({ item }) => item?.desktop?.height};
border-radius: ${({ item }) => item?.desktop?.borderRadius};
overflow: ${({ item }) => item?.desktop?.overflow};
display: ${({ item }) => item?.desktop?.display};

`;
export const TextWrap = styled.div`
  position:${({ item }) => item?.desktop?.position};
  bottom: ${({ item }) => item?.desktop?.bottom};
`