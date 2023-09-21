import styled from "styled-components";

export const ContainerMain = styled.div`
  margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
  min-width: 1px;
  
background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
  `
export const HeadingWrapper = styled.div`
background: ${({ item }) => item?.desktop?.background};
  /* h1{
    font-family: 'Gilroy-Bold',sans-serif;
    font-size: 40px;
    line-height: 47px;
    text-transform: capitalize;
    color: #003459;
    text-align: center; */

    /* @media screen and (max-width: 600px) {
      font-size: 30px;
    }
  } */
`
export const CardWrapper = styled.div`
display: ${({ item }) => item?.desktop?.display};
grid-template-columns: repeat(${({ gridCount }) => gridCount?.desktop?.gridCount},1fr);
gap: ${({ item }) => item?.desktop?.gap};
padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
align-items: baseline;
@media screen and (max-width: 1024px) {
  grid-template-columns: repeat(${({ gridCount }) => gridCount?.tablet?.gridCount},1fr);
  padding-top: ${({ item }) => item?.tablet?.padding?.paddingTop};
  padding-right: ${({ item }) => item?.tablet?.padding?.paddingRight};
  padding-bottom: ${({ item }) => item?.tablet?.padding?.paddingBottom};
  padding-left: ${({ item }) => item?.tablet?.padding?.paddingLeft};
}
@media screen and (max-width: 767px) {
  grid-template-columns: repeat(${({ gridCount }) => gridCount?.mobile?.gridCount},1fr);
  padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};




}
/* @media screen and (max-width: 600px) {
  grid-template-columns: auto;
} */
`;
export const CardWrap = styled.div`
display: ${({ item }) => item?.desktop?.display};
flex-direction: ${({ item }) => item?.desktop?.flexDirection};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
align-items: ${({ item }) => item?.desktop?.alignItems};
margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom} ;
margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
background: ${({ item }) => item?.desktop?.background} ;
    padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
    border-style:  ${({ item }) => item?.desktop?.borderStyle} ;
    border-width:${({ item }) => item?.desktop?.borderWidth};
    border-color:${({ item }) => item?.desktop?.borderColor} ;
`;
export const ImageWrapper = styled.figure`
display: ${({ item }) => item?.desktop?.display};
width: ${({ item }) => item?.desktop?.width};
height: ${({ item }) => item?.desktop?.height};
border-radius: ${({ item }) => item?.desktop?.borderRadius};
position: ${({ item }) => item?.desktop?.position};
margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
`;

// export const Img = styled.img`
// max-width: 100%;
// display: block;
// `;
// export const Colon = styled.img`
// padding: 12px 10px 12px 10px;
// border-radius: 50px;
// background-color: #000000;
// z-index: 1;
// position: absolute;
// bottom: 5px;
// right: 0px;
// border: 1px solid #FFFFFF;
// `;
export const AboutWraper = styled.div`
text-align: ${({ item }) => item?.desktop?.textAlign};

`
// export const ClientName = styled.h3`
//   font-size: 16px;
//   line-height: 21px;
//   color: #000000;
//   margin-bottom: 8px;
//   font-weight: 500;
//   font-family: 'Futura',sans-serif;
//   font-style: normal;
// `
// export const Desc = styled.p`
//  font-size: 14px;
//   line-height: 19px;
//   text-align: center;
//   color: #000000;
//   font-weight: 500;
//   font-family: 'Futura',sans-serif;
//   font-style: normal;
//   @media screen and (max-width: 400px) {
//     text-align: start;
//   }
// `

export const QuatationMarkContainer = styled.div`
position: ${({ item }) => item?.desktop?.position};
top:${({ item }) => item?.desktop?.top};
right: ${({ item }) => item?.desktop?.right};
width: ${({ item }) => item?.desktop?.width};
height: ${({ item }) => item?.desktop?.height};
border-radius: ${({ item }) => item?.desktop?.borderRadius};
background-color: ${({ item }) => item?.desktop?.backgroundColor};
outline-style: ${({ item }) => item?.desktop?.outlineStyle};
  outline-width: ${({ item }) => item?.desktop?.outlineWidth};
  outline-color: ${({ item }) => item?.desktop?.outlineColor};
svg{
      position: ${({ itemQuoteSvg }) => itemQuoteSvg?.desktop?.position};
      top: ${({ itemQuoteSvg }) => itemQuoteSvg?.desktop?.top};
      left: ${({ itemQuoteSvg }) => itemQuoteSvg?.desktop?.left};
      transform: ${({ itemQuoteSvg }) => itemQuoteSvg?.desktop?.transform};
      width: ${({ itemQuoteSvg }) => itemQuoteSvg?.desktop?.width};
      height: ${({ itemQuoteSvg }) => itemQuoteSvg?.desktop?.height};
      fill: ${({ itemQuoteSvg }) => itemQuoteSvg?.desktop?.svg?.fill};
}
`

// export const QuatationMark = styled.div`
// width: 36px;
// height: 36px;
// border-radius: 50%;
// background-color: #000;
// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%,-50%);

// `
