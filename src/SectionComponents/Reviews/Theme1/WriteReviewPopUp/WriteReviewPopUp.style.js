import styled from "styled-components"


export const WriteReviewPopups = styled.div`
 background:${({ item }) => item?.desktop?.background} ;
`
// export const PopUpHeading = styled.h1`
//   font-family: 'Montserrat',sans-serif;
//   font-style: normal;
//   font-weight: 600;
//   font-size: 18px;
//   line-height: 168%;
//   letter-spacing: -0.02em;

//   color: #202020;
// `
export const SelectRatingWrapper = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    gap: ${({ item }) => item?.desktop?.gap};
       margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
    /* @media screen and (max-width: 550px) {
      flex-wrap: wrap;
      gap: 5px;
  } */

`
export const SelectRatingTextWrap = styled.div`
`
// export const SelectRatingPara = styled.p`
//    font-size: 12px !important;
//     font-weight: 500;
//     line-height: 18px;
//     color: #202020 !important;
//     font-family: 'Poppins',sans-serif;
//     @media screen and (max-width: 680px) {
//       /* font-size: 12px; */
//   }

// `
export const SelectRatingStar = styled.div`
background:${({ item }) => item?.desktop?.background};
`;
export const ReviewWrapper = styled.div`
  margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
  font-family: ${({ item }) => item?.desktop?.fontFamily};
  font-style: ${({ item }) => item?.desktop?.fontStyle};
  color: ${({ item }) => item?.desktop?.color};
  /* label{
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  } */
  /* input{
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
  } */
`
export const UploadMediaSection = styled.div`
  font-family: ${({ item }) => item?.desktop?.fontFamily};
  font-style: ${({ item }) => item?.desktop?.fontStyle};
  color:${({ item }) => item?.desktop?.color};
`
export const AnimLabelTop = styled.label`
 font-weight: ${({ item }) => item?.desktop?.fontWeight};
  font-size: ${({ item }) => item?.desktop?.fontSize};
  line-height: ${({ item }) => item?.desktop?.lineHeight};
`
export const UploadImageWrapper = styled.div`
 border: ${({ item }) => item?.desktop?.border};
  padding-top:${({ item }) => item?.desktop?.padding?.paddingTop} ;
  padding-right:${({ item }) => item?.desktop?.padding?.paddingRight} ;
  padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom} ;
  padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft} ;
  border-radius: ${({ item }) => item?.desktop?.borderRadius};
  display: ${({ item }) => item?.desktop?.display};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  width: ${({ item }) => item?.desktop?.width};
  position: ${({ item }) => item?.desktop?.position};
  cursor: ${({ item }) => item?.desktop?.cursor};
  @media screen and (max-width: 767px) {
      justify-content: ${({ item }) => item?.mobile?.justifyContent};

  }
  
`
export const UploadImageWrap = styled.div`
  display: ${({ item }) => item?.desktop?.display};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  gap: ${({ item }) => item?.desktop?.gap};
  
  img{
    /* background: ${({ itemUpload }) => itemUpload?.desktop?.background}; */

  }
`
export const ImageUploadText = styled.p`
    font-size: ${({ item }) => item?.desktop?.fontSize};
  font-weight: ${({ item }) => item?.desktop?.fontWeight};
  line-height: ${({ item }) => item?.desktop?.lineHeight};
  color: ${({ item }) => item?.desktop?.color};
  @media screen and (max-width: 767px) {
    font-size: ${({ item }) => item?.mobile?.fontSize};
  }
`
export const BrowseMediaWrap = styled.div`
  position: ${({ item }) => item?.desktop?.position};
  right: ${({ item }) => item?.desktop?.right};
  top: ${({ item }) => item?.desktop?.top};
  transform: ${({ item }) => item?.desktop?.transform};
`
// export const BorowseMediaPara = styled.p`
//   font-size: 10px !important;
//   font-weight: 400;
//   line-height: 20px !important;
//   color: #0184FF !important;
// `
export const ImageUploaderLimitText = styled.p`
 font-size: 12px !important;
  font-weight: 400 !important;
  line-height: 12px !important;
  color: #202020 !important;
  margin-top: 10px !important;
`
export const ImageWrapper = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    flex-wrap: ${({ item }) => item?.desktop?.flexWrap};
    gap: ${({ item }) => item?.desktop?.gap};
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
    position: ${({ item }) => item?.desktop?.position};
`
export const ImageWrap = styled.div`
     width: ${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    position: ${({ item }) => item?.desktop?.position};
    overflow: ${({ item }) => item?.desktop?.overflow};

    /* @media screen and (max-width: 680px) {
      width: ${({ item }) => item?.mobile?.width};
      height: ${({ item }) => item?.mobile?.height};
    } */
    @media screen and (max-width:768px) {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

    /* img{
      width: 100%;
      height: 100%;
      border-radius: 4px;
      object-fit: cover;
    } */
`
export const Circle = styled.div`
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
  border-radius: ${({ item }) => item?.desktop?.borderRadius};
  background-color: ${({ item }) => item?.desktop?.backgroundColor};
  position: ${({ item }) => item?.desktop?.position};
  top: ${({ item }) => item?.desktop?.top};
  right: ${({ item }) => item?.desktop?.right};
  cursor: ${({ item }) => item?.desktop?.cursor};
  svg{
    position: ${({ itemCrossSvg }) => itemCrossSvg?.desktop?.position};
    top: ${({ itemCrossSvg }) => itemCrossSvg?.desktop?.top};
    left: ${({ itemCrossSvg }) => itemCrossSvg?.desktop?.left};
     transform: ${({ itemCrossSvg }) => itemCrossSvg?.desktop?.transform};
     display: ${({ itemCrossSvg }) => itemCrossSvg?.desktop?.display};
   width: ${({ itemCrossSvg }) => itemCrossSvg?.desktop?.width};
  height: ${({ itemCrossSvg }) => itemCrossSvg?.desktop?.position};
   fill:${({ itemCrossSvg }) => itemCrossSvg?.desktop?.fill}
  }
`
// export const IconCross = styled.i`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   display: block;
//   width: 9px;
//   height: 9px;
//   background-color: #fff;
// `
export const HrLine = styled.hr`
  background: ${({ item }) => item?.desktop?.background};
  margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
`
export const ImgeUploaderButtonWrap = styled.div`
  margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};

  /* [aria-disabled="true"] {
    background: rgba(32, 32, 32, 0.6) !important;
    border: none;
    pointer-events: none;
  } */
`
export const PublishBtn = styled.button`
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px !important;
  line-height: 21px !important;
  color: #FFFFFF ;
  background: #0184FF;
  border-radius: 4px;
  padding: 6px 24px;
  border: none;
`
export const HrLineLast = styled.hr`
  background: ${({ item }) => item?.desktop?.background};
  margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
`

