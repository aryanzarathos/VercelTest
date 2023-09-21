import styled from "styled-components";

export const ContainerMain = styled.div`
  background: ${({ item }) => item.desktop.background};
  padding: ${({ item }) => item?.desktop?.padding?.paddingTop};
min-width: 1px ;
.swiper-wrapper{
  padding: 20px 0;
    .swiper-slide{
    height: auto; 
    padding: 10px
  }
}
`

export const CardWrapper = styled.div`
display: ${({ item }) => item?.desktop?.display};
grid-template-columns: repeat(${({ itemProp1 }) => itemProp1.desktop.gridCount},1fr);
gap: ${({ item }) => item?.desktop?.gap};
margin-top: ${({ item }) => item?.desktop?.marginTop};
align-items: flex-start;
@media screen and (max-width: 1024px) {
  grid-template-columns: repeat(${({ itemProp1 }) => itemProp1.tablet.gridCount},1fr);
}
@media screen and (max-width: 767px) {
  grid-template-columns: repeat(${({ itemProp1 }) => itemProp1.mobile.gridCount},1fr);
}

`;
export const CardWrap = styled.div`
position: ${({ item }) => item?.desktop?.position};
// padding: ${({ item }) => item?.desktop?.padding};
border-radius: ${({ item }) => item?.desktop?.borderRadius};
box-shadow: ${({ item }) => item?.desktop?.boxShadow};
    min-width: 1px;
    /* height: 100%; */
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

export const ProfileWrapper = styled.div`
display: ${({ item }) => item?.desktop?.display};
margin-bottom: ${({ item }) => item?.desktop?.marginBottom};
align-items: ${({ item }) => item?.desktop?.alignItems};
.logo{
  height: ${({ item1 }) => item1?.desktop?.height};
  width: ${({ item1 }) => item1?.desktop?.width};
  fill: ${({ item1 }) => item1?.desktop?.fill};
  flex-grow: ${({ item1 }) => item1?.desktop?.flexGrow};
}
`;

export const CardImgWrapper = styled.figure`
width:  ${({ item }) => item?.desktop?.width};
height:  ${({ item }) => item?.desktop?.height};
border-radius:  ${({ item }) => item?.desktop?.borderRadius};
margin-right:  ${({ item }) => item?.desktop?.marginRight};
overflow:  ${({ item }) => item?.desktop?.overflow};
`;
export const NameWrapper = styled.div`
display: ${({ item }) => item?.desktop?.display};
flex-direction: ${({ item }) => item?.desktop?.flexDirection};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
width: ${({ item }) => item?.desktop?.width};
`
