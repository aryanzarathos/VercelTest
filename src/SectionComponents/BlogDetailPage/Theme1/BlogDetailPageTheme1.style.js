import styled from "styled-components";

export const BlogViewHeadContainer = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
    padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
    background-color: ${({ item }) => item?.desktop?.backgroundColor};
`;

export const InnerContainer = styled.div`
  display: ${({ item }) => item?.desktop?.display};
  text-align: ${({ item }) => item?.desktop?.textAlign};
`;

export const InnerTopHeading = styled.h3`
    font-family: 'Gilroy-Bold','sans-serif';
    font-size: 36px;
    line-height: 36px;
    color: #003459;
`;

export const InnerTopContent = styled.p`
    font-family: 'Gilroy-Medium','sans-serif';
    font-size: 20px;
    line-height: 20px;
    color: #667479;
    margin-top: 6px;
`;

export const BlogViewTopContainer = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
    margin-left: ${({ item }) => item?.desktop?.margin?.marginLeft};
    margin-right: ${({ item }) => item?.desktop?.margin?.marginRight};
    width: ${({ item }) => item?.desktop?.width};

    @media screen and (max-width : 600px) {
        display: ${({ item }) => item?.mobile?.display};
    }
`;

export const TopSection = styled.div`
  display: ${({ item }) => item?.desktop?.display};
  grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
  gap: ${({ item }) => item?.desktop?.gap};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  align-items: ${({ item }) => item?.desktop?.alignItems};

  @media screen and (max-width: 425px) {
    display: ${({ item }) => item?.mobile?.display};
  }
`;

export const TopSectionImageConatainer = styled.div`
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
  border-radius: ${({ item }) => item?.desktop?.borderRadius};
  overflow: ${({ item }) => item?.desktop?.overflow};
  border: ${({ item }) => item?.desktop?.border};
  
  /* img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  } */
`;

export const TopSectionImgContent = styled.div`
  display: ${({ item }) => item?.desktop?.display};
`;

export const ImgContainerHeading = styled.h3`
  font-family: 'Gilroy-Bold','sans-serif';
  font-size: 16px;
  line-height: 19px;
  color: #202020;
`;

export const ImgContainerContent = styled.p`
  font-family: 'Gilroy-Regular','sans-serif';
  font-size: 14px;
  line-height: 16px;
  color: rgba(31, 50, 89, 1);
  margin-top: 3px;
`;

// export const FaceBookIcon = styled.i`
// -webkit-mask: url(${TopSectionImg1}) no-repeat center;
// mask-image: url(${TopSectionImg1}) no-repeat center;
// display: block;
// width: 24px;
// height: 24px;
// background-color: rgba(31, 50, 89, 1);
// cursor : pointer;
// `;

// export const TwiterIcon = styled.i`
// -webkit-mask: url(${TopSectionImg2}) no-repeat center;
// mask-image: url(${TopSectionImg2}) no-repeat center;
// display: block;
// width: 25px;
// height: 21px;
// background-color: rgba(31, 50, 89, 1);
// cursor : pointer;
// `;

// export const MailIcon = styled.i`
// -webkit-mask: url(${TopSectionImg3}) no-repeat center;
// mask-image: url(${TopSectionImg3}) no-repeat center;
// display: block;
// width: 29px;
// height: 23px;
// background-color: rgba(31, 50, 89, 1);
// cursor : pointer;
// `;

// export const InstagramIcon = styled.i`
// -webkit-mask: url(${TopSectionImg4}) no-repeat center;
// mask-image: url(${TopSectionImg4}) no-repeat center;
// display: block;
// width: 24px;
// height: 24px;
// background-color: rgba(31, 50, 89, 1);
// cursor : pointer;
// `;

export const TopSectionIcons = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    flex-direction: ${({ item }) => item?.desktop?.flexDirection};
    gap: ${({ item }) => item?.desktop?.gap};

    @media screen and (max-width: 600px) {
     margin-top : ${({ item }) => item?.mobile?.margin?.marginTop};   
    }
    .Twitter{
       height:  ${({ itemTwitter }) => itemTwitter.desktop.height};
        width:  ${({ itemTwitter }) => itemTwitter.desktop.width};
        fill:  ${({ itemTwitter }) => itemTwitter.desktop.fill}; 
    }
    .facebook{
         height:  ${({ itemFacebook }) => itemFacebook.desktop.height};
        width:  ${({ itemFacebook }) => itemFacebook.desktop.width};
        fill:  ${({ itemFacebook }) => itemFacebook.desktop.fill};
    }
    .gmail{
        height:  ${({ itemGmail }) => itemGmail.desktop.height};
        width:  ${({ itemGmail }) => itemGmail.desktop.width};
        fill:  ${({ itemGmail }) => itemGmail.desktop.fill}; 
    }
    .instagram{
         height:  ${({ itemInsta }) => itemInsta.desktop.height};
        width:  ${({ itemInsta }) => itemInsta.desktop.width};
        fill:  ${({ itemInsta }) => itemInsta.desktop.fill}; 
    }
`;

export const BlogviewSubContainer = styled.div`
    margin-top:${({ item }) => item?.desktop?.margin?.marginTop};
    margin-left:${({ item }) => item?.desktop?.margin?.marginLeft};
    margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom};
    margin-right:${({ item }) => item?.desktop?.margin?.marginRight};
    width:${({ item }) => item?.desktop?.width};
p{
  color: var(--global-color-quaternary) !important;
    font-size: var(--global-typography-fontSizeP ) !important;
    font-weight: var(--global-typography-fontWightLight) !important;
    font-family: var(--global-typography-fontFamilyP) !important;
    line-height: var(--global-typography-lineHeightP) !important;
 
    font-style: var(--global-typography-fontStyleP) !important;
    p {
           color: var(--global-color-quaternary) !important;
    font-size: var(--global-typography-fontSizeP ) !important;
    font-weight: var(--global-typography-fontWightLight) !important;
    font-family: var(--global-typography-fontFamilyP) !important;
    line-height: var(--global-typography-lineHeightP) !important;
 
    font-style: var(--global-typography-fontStyleP) !important;
      span {
        color: var(--global-color-quaternary) !important;
    font-size: var(--global-typography-fontSizeP ) !important;
    font-weight: var(--global-typography-fontWightLight) !important;
    font-family: var(--global-typography-fontFamilyP) !important;
    line-height: var(--global-typography-lineHeightP) !important;
 
    font-style: var(--global-typography-fontStyleP) !important;

      }
    }
  }
`;

// export const SubContainerContent = styled.p`
//     font-family: 'Gilroy-Medium','sans-serif';
//     font-size: 20px;
//     line-height: 168.02%;
//     color: #202020;
//     P{
//         font-weight: 400;
//     }
// `;

export const SubImgContainer = styled.div`
    width: ${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
    margin-right: ${({ item }) => item?.desktop?.margin?.marginRight};
    margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
    margin-left: ${({ item }) => item?.desktop?.margin?.marginLeft};

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width : 600px) {
        height: auto;
    }
`;
