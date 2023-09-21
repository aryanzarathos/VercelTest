import styled from "styled-components";

export const BlogCategoriesTopContainer = styled.div`
   margin-top:${({ item }) => item?.desktop?.margin?.marginTop};
  margin-right:${({ item }) => item?.desktop?.margin?.marginRight};
  margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom};
  margin-left:${({ item }) => item?.desktop?.margin?.marginLeft};
`;

export const CategoriesTopHeading = styled.h3`
  font-family: 'Gilroy-Bold','sans-serif';
  font-size: 36px;
  line-height: 36px;
  color: #003459;
  margin-bottom: 17px;
`;

export const CategoriesHeadingContainer = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    
    @media screen and (max-width : 500px) {
        display: ${({ item }) => item?.mobile?.display};
    }
`;

export const HeadingSearchSection = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    column-gap: ${({ item }) => item?.desktop?.columnGap};
    background: ${({ item }) => item?.desktop?.background};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
    cursor: ${({ item }) => item?.desktop?.cursor};
    border: ${({ item }) => item?.desktop?.border};
    svg{
      fill: ${({ itemSearch }) => itemSearch?.desktop?.fill};
      height: ${({ itemSearch }) => itemSearch?.desktop?.height};
      width: ${({ itemSearch }) => itemSearch?.desktop?.width};
    }
`;

// export const HeadingSearchIcon = styled.span`
//   -webkit-mask: url(${SearchIcon}) no-repeat center;
//   mask-image: url(${SearchIcon}) no-repeat center;
//   display: block;
//   width: 17px;
//   height: 17px;
//   background-color:  #667479;
// `;

export const CategoriesHeadingButton = styled.input`
    border: ${({ item }) => item?.desktop?.border};
    background: ${({ item }) => item?.desktop?.background};
    font-family: ${({ item }) => item?.desktop?.fontFamily};
    font-size: ${({ item }) => item?.desktop?.fontSize};
    line-height: ${({ item }) => item?.desktop?.lineHeight};
    color: ${({ item }) => item?.desktop?.color};
    font-weight: ${({ item }) => item?.desktop?.fontWeight};
    font-style: ${({ item }) => item?.desktop?.fontStyle};
`;

export const HeadContainer = styled.div`
  margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
  position: ${({ item }) => item?.desktop?.position};
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
  background-color: ${({ item }) => item?.desktop?.backgroundColor};
`;

export const LineInner = styled.span`
  width: ${({ item }) => item?.desktop?.width};
  height:  ${({ item }) => item?.desktop?.height};
  background-color:  ${({ item }) => item?.desktop?.backgroundColor};
  position:  ${({ item }) => item?.desktop?.position};
  top:  ${({ item }) => item?.desktop?.top};
  transform:  ${({ item }) => item?.desktop?.transform};
  
  @media screen and (max-width: 1024px) {
    width: ${({ item }) => item?.tablet?.width};
  }

  @media screen and (max-width: 767px) {
    width: ${({ item }) => item?.mobile?.width};
  }
`;

export const BlogCategoriesSubContainer = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    grid-template-columns: repeat(${({ gridCount }) => gridCount?.desktop?.gridCount},1fr);
    column-gap: ${({ item }) => item?.desktop?.columnGap};
    row-gap: ${({ item }) => item?.desktop?.rowGap};
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
    
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(${({ gridCount }) => gridCount?.tablet?.gridCount},1fr);
    column-gap: ${({ item }) => item?.tablet?.columnGap};
    margin-top: ${({ item }) => item?.tablet?.margin?.marginTop};
    }

    @media screen and (max-width: 600px) {
         grid-template-columns: repeat(${({ gridCount }) => gridCount?.mobile?.gridCount},1fr);
    column-gap: ${({ item }) => item?.mobile?.columnGap};
    }
`;


// export const CardHeading = styled.h4`
//   font-family: 'Gilroy-Medium','sans-serif';
//   font-size: 18px;
//   line-height: 21px;
//   color: #202020;
//   margin: 12px 0px 8px 0px;
// `;

// export const CardBottomContent = styled.p`
//   font-family: 'Gilroy-Regular','sans-serif';
//   font-size: 14px;
//   line-height: 20px;
//   color: #202020;
//   margin-top: 12px;
// `;

// export const CardButton = styled.button`
//   font-family: 'Gilroy-SemiBold','sans-serif';
//   font-size: 17px;
//   line-height: 20px;
//   display: flex;
//   align-items: center;
//   border: none;
//   background-color: transparent;
//   cursor: pointer;
//   column-gap: 7px;
//   margin-top: 12px;
//   color: rgba(0, 52, 89, 1);
// `;

export const CardContainer = styled.div`
  /* padding: 10px; */
  position: ${({ item }) => item?.desktop?.position};
`;

export const CardImages = styled.div`
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
/*   
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */

  @media screen and (max-width: 600px) {
    height: auto;
  }
`;

export const CardContent = styled.div`
  background-color: ${({ item }) => item?.desktop?.backgroundColor};
  padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
  padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
  padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
  padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
  min-height: ${({ item }) => item?.desktop?.minHeight};
  display: ${({ item }) => item?.desktop?.display};
  flex-direction: ${({ item }) => item?.desktop?.flexDirection};
  overflow: ${({ item }) => item?.desktop?.overflow};
  svg{
  fill: ${({ itemSvg }) => itemSvg?.desktop?.fill};
  height:${({ itemSvg }) => itemSvg?.desktop?.height};
  width:${({ itemSvg }) => itemSvg?.desktop?.width};
}

`;


export const CardHeadContainer = styled.div`
  position: ${({ item }) => item?.desktop?.position};
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
  background-color: ${({ item }) => item?.desktop?.backgroundColor};
  `;