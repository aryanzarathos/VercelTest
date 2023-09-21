import styled from "styled-components"


export const ImageDivider = styled.div`
  /* margin: 50px 0 40px 0 ; */
  margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
  margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
  border-top-width: ${({ item }) => item?.desktop?.border?.borderTop};
  border-right-width: ${({ item }) => item?.desktop?.border?.borderRight};
  border-bottom-width: ${({ item }) => item?.desktop?.border?.borderBottom};
  border-left-width: ${({ item }) => item?.desktop?.border?.borderLeft};
  border-style: ${({ item }) => item?.desktop?.border?.borderStyle};
  border-color: ${({ item }) => item?.desktop?.border?.borderColor};

  @media (max-width:768px) {
     margin-top: ${({ item }) => item?.mobile?.margin?.marginTop};
  margin-bottom: ${({ item }) => item?.mobile?.margin?.marginBottom};
  }
`
export const ImageDividerThin = styled.div`
  margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
  margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
  border-top-width: ${({ item }) => item?.desktop?.border?.borderTop};
  border-right-width: ${({ item }) => item?.desktop?.border?.borderRight};
  border-bottom-width: ${({ item }) => item?.desktop?.border?.borderBottom};
  border-left-width: ${({ item }) => item?.desktop?.border?.borderLeft};
  border-style: ${({ item }) => item?.desktop?.border?.borderStyle};
  border-color: ${({ item }) => item?.desktop?.border?.borderColor};

`
export const CustomerReviewsWrapper = styled.div`
  margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
`
export const ProductRatingConatinerWrapper = styled.div`
background: ${({ item }) => item?.desktop?.background};
`
// export const ReviewHeading = styled.p`
//   font-size: 20px;
//   font-weight: 700;
//   color: #1F3259;

//   @media (max-width:768px) {
//     font-size: 16px;
//   }
// `
export const ProductRatingContainerItem = styled.div`
  display: ${({ item }) => item?.desktop?.display};;
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  margin-top:${({ item }) => item?.desktop?.margin?.marginTop};
  margin-left:${({ item }) => item?.desktop?.margin?.marginLeft};
  margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom};
  margin-right:${({ item }) => item?.desktop?.margin?.marginRight};
  gap: ${({ item }) => item?.desktop?.gap};

  @media (max-width:767px) {
    flex-wrap: ${({ item }) => item?.mobile?.flexWrap};
  }
`
export const RatingHeadingContainer = styled.div`
  display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};

  align-items: ${({ item }) => item?.desktop?.alignItems};
`
// export const RatingHeadingItem = styled.p`
//    font-size: 20px;
//   font-weight: 700;
//   color: #1F3259;

//   @media (max-width:768px) {
//     font-size: 16px;
//   }
// `
export const RateShowBtn = styled.div`
    background: ${({ item }) => item?.desktop?.background};
    /* padding: 4px 14px; */
    padding-top:  ${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right:  ${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom:  ${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left:  ${({ item }) => item?.desktop?.padding?.paddingLeft};
    display:  ${({ item }) => item?.desktop?.display};
    gap:  ${({ item }) => item?.desktop?.gap};
    align-items:  ${({ item }) => item?.desktop?.alignItems};
    border-radius:  ${({ item }) => item?.desktop?.border?.borderRadius};
    .whiteIcon{
      fill:${({ itemStar }) => itemStar?.desktop?.fill};
    }
`
export const RateShowBtnItem = styled.span`
   font-size: ${({ item }) => item?.desktop?.fontSize};
      font-weight: ${({ item }) => item?.desktop?.fontWeight};
      color: ${({ item }) => item?.desktop?.color};
`
// export const StarSvg = styled.i`
//       display: block;
//       width: 13px;
//       height: 12px;
//       background: #fff;
//       /* -webkit-mask: url(${StarSvgImg}) no-repeat center; */
//       // mask-image: url(${StarSvgImg}) no-repeat center;
// `
// export const ReviewInputBtn = styled.button`
//       font-family: 'Gilroy-SemiBold',sans-serif;
//       text-transform: capitalize;
//       font-size: 16px;
//       font-weight: 600;
//       border: 1px solid #1F3259 ;
//       color: #1F3259 ;
//       background: transparent;
//       padding: 6px 30px;
//       cursor: pointer;
//       border: 1px solid #1F3259;
//       border-radius: 4px;
//       transition: all .5s;
//       letter-spacing: -0.02em;
//       @media (max-width:424px) {
//         margin-top: 12px;
//         width: 100%;
//       }

//       &:hover {
//         background: #1F3259;
//         color: #fff;
//       }
// `
export const ReviewContainer = styled.ul`
    height: ${({ item }) => item?.desktop?.height};
    overflow-y: ${({ item }) => item?.desktop?.overflowY};
    scrollbar-color:${({ item }) => item?.desktop?.scrollbarColor};

    &::-webkit-scrollbar {
      scrollbar-color: ${({ item }) => item?.desktop?.webkit?.scrollbarColor};
      width: ${({ item }) => item?.desktop?.webkit?.width};
    }
`

export const ReveiwItemWrapper = styled.div`
     display: ${({ item }) => item?.desktop?.display};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  width: ${({ item }) => item?.desktop?.width};
  gap: ${({ item }) => item?.desktop?.gap};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};

  @media (max-width:767px) {
    flex-direction:${({ item }) => item?.mobile?.flexDirection} ;
  }
`
export const UsersReveiwWrapperContainer = styled.li`
     position: ${({ item }) => item?.desktop?.position};
    min-height:${({ item }) => item?.desktop?.minHeight} ;
    margin-top:${({ item }) => item?.desktop?.margin?.marginTop}; 
    margin-right:${({ item }) => item?.desktop?.margin?.marginRight}; 
    margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom}; 
    margin-left:${({ item }) => item?.desktop?.margin?.marginleft}; 
    border-bottom:${({ item }) => item?.desktop?.border?.borderBottom};
    border-top:${({ item }) => item?.desktop?.border?.borderTop};
    border-left:${({ item }) => item?.desktop?.border?.borderLeft};
    border-right:${({ item }) => item?.desktop?.border?.borderRight};
    border-style:${({ item }) => item?.desktop?.border?.borderStyle};
    border-color:${({ item }) => item?.desktop?.border?.borderColor};

    /* &:last-child {
      border-bottom: none;
    } */

    /* &.replay-active {
      &::after {
        content: '';
        width: 1px;
        min-height: 80%;
        background: #00000033;
        position: absolute;
        top: 30px;
        left: 18px;
        z-index: -1;

        @media (max-width:768px) {
          height: 80%;
        }
      }
    } */
`

export const ReviewWithReply = styled.div`
display: ${({ item }) => item?.desktop?.display}; ;
flex-direction: ${({ item }) => item?.desktop?.flexDirection}; ;
align-items: ${({ item }) => item?.desktop?.aligItems}; ;
   position: ${({ item }) => item?.desktop?.position};
   padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
   border-bottom:${({ item }) => item?.desktop?.border?.borderBottom};
    border-top:${({ item }) => item?.desktop?.border?.borderTop};
    border-left:${({ item }) => item?.desktop?.border?.borderLeft};
    border-right:${({ item }) => item?.desktop?.border?.borderRight};
    border-style:${({ item }) => item?.desktop?.border?.borderStyle};
    border-color:${({ item }) => item?.desktop?.border?.borderColor};
    position: relative;
    &::after {
    /* position: absolute;
    left: 20px;
    top: 50px;
    border-right: 1px solid var(--global-color-quaternary-lightShadeThin);
    height: calc(100% - 60px); */
    position: absolute;
    left: 20px;
    bottom: 5px;
    border-right: 1px solid var(--global-color-quaternary-lightShadeThin);
    height: calc(100% - 70px);
    @media screen and (max-width:768px) {
      left: 0px;
    }

    }
`
// export const ReviewWithOutOutReply = styled.div`
//    padding-bottom: 24px;
//    border-bottom: 1px solid rgba(0,52,89,0.3);
// `


export const ReveiwItemLeft = styled.div`
   width: ${({ item }) => item?.desktop?.width};
      display: ${({ item }) => item?.desktop?.display};
      gap: ${({ item }) => item?.desktop?.gap};

      align-items: ${({ item }) => item?.desktop?.alignItems};

      @media (max-width:767px) {
        width: ${({ item }) => item?.mobile?.width};
      }
`;
export const UserImageWrapper = styled.div`
      position: ${({ item }) => item?.desktop?.position};
     width: ${({ item }) => item?.desktop?.width};
      height: ${({ item }) => item?.desktop?.height};
      /* object-fit: cover;
      object-position: center; */
      /* img {
        width: 100;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      } */
`
export const PortraitDivider = styled.div`
   
    /* &::after{ 
      content: ${({ item }) => item?.desktop?.after?.content};
      position: ${({ item }) => item?.desktop?.after?.position};
      left: ${({ item }) => item?.desktop?.after?.left};
      top: ${({ item }) => item?.desktop?.after?.top};
      border-right: ${({ item }) => item?.desktop?.after?.borderRight};
      height: ${({ item }) => item?.desktop?.after?.height};

    } */
    @media (max-width:767px) {
      display:${({ item }) => item?.mobile?.display}
    }
`
export const NameRatingDiv = styled.div`
background: ${({ item }) => item?.desktop?.background};
    
`
// export const UserName = styled.p`
//      font-size: 12px;
//         font-weight: 600;
// `
export const ReviewRating = styled.div`
    display: ${({ item }) => item?.desktop?.display};
        gap: ${({ item }) => item?.desktop?.gap};
        margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
`
export const ReviewItemRight = styled.div`
     width: ${({ item }) => item?.desktop?.width};
    @media (max-width:767px) {
      width: ${({ item }) => item?.mobile?.width};
      padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
      padding-left: 10px;
    }
`
// export const UserReview = styled.p`
//       font-size: 12px;
//     font-weight: 500;
// `
export const UserProductImageWrapper = styled.div`
        margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
        display: ${({ item }) => item?.desktop?.display};
        gap: ${({ item }) => item?.desktop?.gap};
        @media screen and (max-width:767px) {
          flex-wrap: wrap;
        }

`;
export const ProductImageContainer = styled.div`
     width: ${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
    /* object-fit: cover;
    object-position: center; */

    /* img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    } */
`
// export const ReplyBtn = styled.button`
//    color: #0184FF;
//     font-size: 10px;
//     font-weight: 400;
//     margin-top: 6px;
//     cursor: pointer;
//     background-color: transparent;
//     border: none;
//     outline: none;
// `
export const ReplyBtnWrap = styled.div`
    text-align: ${({ item }) => item?.desktop?.textAlign};
`

export const ReplayTab = styled.div`
width: ${({ item }) => item?.desktop?.width};
`
export const ReviewItemRightComment = styled.div`

width: ${({ item }) => item?.desktop?.width};
    @media (max-width:767px) {
      width: ${({ item }) => item?.mobile?.width};
      padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
    }`;

export const ReplyDivWrapperComment = styled.div`
   margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
  display: ${({ item }) => item?.desktop?.display};
  width: ${({ item }) => item?.desktop?.width};
  gap: ${({ item }) => item?.desktop?.gap};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  
  @media (max-width:1024px) {
       gap: ${({ item }) => item?.tablet?.gap};

    }
  @media (max-width:767px) {
    flex-direction: ${({ item }) => item?.mobile?.flexDirection};
  }
  /* .replied-user-left-container{ */

    /* @media (max-width:1000px) {
      padding-left: 26px;
      width: auto;
    } */
  /* } */
`;
export const ReplyDivWrapper = styled.div`
   margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
  display: ${({ item }) => item?.desktop?.display};
  width: ${({ item }) => item?.desktop?.width};
  gap: ${({ item }) => item?.desktop?.gap};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  
  @media (max-width:1024px) {
       gap: ${({ item }) => item?.tablet?.gap};

    }
  @media (max-width:767px) {
    flex-direction: ${({ item }) => item?.mobile?.flexDirection};
  }
  /* .replied-user-left-container{ */

    /* @media (max-width:1000px) {
      padding-left: 26px;
      width: auto;
    } */
  /* } */
`;
export const ReveiwItemLeftComment = styled.div`
   width: ${({ item }) => item?.desktop?.width};
      display: ${({ item }) => item?.desktop?.display};
      gap: ${({ item }) => item?.desktop?.gap};

      align-items: ${({ item }) => item?.desktop?.alignItems};
  padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};

      @media (max-width:767px) {
        width: ${({ item }) => item?.mobile?.width};
  padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};

      }
`
export const UserImageWrapperComment = styled.div`
      position: ${({ item }) => item?.desktop?.position};
     width: ${({ item }) => item?.desktop?.width};
      height: ${({ item }) => item?.desktop?.height};
`;
export const NameRatingDivComment = styled.div`
background: ${({ item }) => item?.desktop?.background};
    
`;
export const ReveiwItemLeftSubReply = styled.div`
   width: ${({ item }) => item?.desktop?.width};
      display: ${({ item }) => item?.desktop?.display};
      gap: ${({ item }) => item?.desktop?.gap};

      align-items: ${({ item }) => item?.desktop?.alignItems};
  padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};

      @media (max-width:767px) {
        width: ${({ item }) => item?.mobile?.width};
  padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};

      }
`;
export const UserImageWrapperSubReply = styled.div`
      position: ${({ item }) => item?.desktop?.position};
     width: ${({ item }) => item?.desktop?.width};
      height: ${({ item }) => item?.desktop?.height};
      /* object-fit: cover;
      object-position: center; */
      /* img {
        width: 100;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      } */
`
export const NameRatingDivSubReply = styled.div`
background: ${({ item }) => item?.desktop?.background};
    
`
export const ReviewItemRightSubReply = styled.div`
     width: ${({ item }) => item?.desktop?.width};
    @media (max-width:767px) {
      width: ${({ item }) => item?.mobile?.width};
      padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
    }
`
export const MainReview = styled.div`
display: ${({ item }) => item?.desktop?.display};
grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
gap: ${({ item }) => item?.desktop?.gap};
padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
@media (max-width:767px) {
grid-template-columns: ${({ item }) => item?.mobile?.gridTemplateColumns};
padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
padding-left: 0px;
padding-right: 0px;
  
}
`;
export const MainLeftReview = styled.div`
@media  (max-width:767px) {
display: ${({ item }) => item?.mobile?.display};
  
}
`;
export const MainRightReview = styled.div``;