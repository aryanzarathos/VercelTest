import styled from "styled-components";

export const BlogsTopContainer = styled.div`
 margin-top:${({ item }) => item.desktop.margin.marginTop};
  margin-right:${({ item }) => item.desktop.margin.marginRight};
  margin-bottom:${({ item }) => item.desktop.margin.marginBottom};
  margin-left:${({ item }) => item.desktop.margin.marginLeft};
`;

// export const BlogsTopHeading = styled.h3`
//   font-family: 'Gilroy-Bold','sans-serif';
//   font-size: 36px;
//   line-height: 36px;
//   color: #003459;
//   margin-bottom: 17px;
// `;

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
// export const LineInner = styled.span`
//   width: 10%;
//   height: 4px;
//   background-color: rgba(31, 50, 89, 1);
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);

//   @media screen and (max-width: 992px) {
//     width: 18%;
//   }

//   @media screen and (max-width: 600px) {
//     width: 25%;
//   }
// `;

export const BlogsSubContainer = styled.div`

min-width: ${({ item }) => item?.desktop?.minWidth};
.swiper-button-prev{
        top: -60px;
        right: 45px;
        left: auto;
        height: 30px;
        width: 30px;
        background: #fff;
        border: 2px solid ${({ arrowColor }) => arrowColor.arrowColor};
        border-radius: 50%;
        &::before{
            background: ${({ arrowColor }) => arrowColor.arrowColor};
            height: 2px;
            width: 50%;
            left: 6px;
        }
        &::after{
            left: 5px;
            font-weight: 900;
        }
    }
    .swiper-button-next{
        top: -60px;
        right: 0;
        height: 30px;
        width: 30px;
        background: #fff;
        border: 2px solid ${({ arrowColor }) => arrowColor.arrowColor};
        border-radius: 50%;
        &::before{
                top: 50%;
                background: ${({ arrowColor }) => arrowColor.arrowColor};
                height: 2px;
                width: 50%;
                left: 7px;
                transform: translateY(-69%);
        }
        &::after{
            font-weight: 900;
            font-size: 12px;
            left: 5px;

        }
    }
.mySwipper{
  padding-left: 33px;
  padding-right: 33px;
  @media screen and (max-width:767px) {
    padding-left: 10px;
  padding-right: 10px;
  }
}


`;


export const BlogsBottomContainer = styled.div`
    display: ${({ item }) => item?.desktop?.display};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
  gap: ${({ item }) => item?.desktop?.gap};
  margin-top:${({ item }) => item?.desktop?.margin?.marginTop};
`;



export const CardContainer = styled.div`
  position: ${({ item }) => item?.desktop?.position};
`;

export const CardImages = styled.div`
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
  
  /* img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */

  @media screen and (max-width: 767px) {
    height: ${({ item }) => item?.mobile?.height};
  }
`;

export const CardContent = styled.div`
    min-height: ${({ item }) => item?.desktop?.minHeight};
    max-height: ${({ item }) => item?.desktop?.maxHeight};
    display: ${({ item }) => item?.desktop?.display};
    flex-direction: ${({ item }) => item?.desktop?.flexDirection};
    position: ${({ item }) => item?.desktop?.position};
    bottom: ${({ item }) => item?.desktop?.bottom};
    max-width: ${({ item }) => item?.desktop?.maxWidth};
    left: ${({ item }) => item?.desktop?.left};
    width: ${({ item }) => item?.desktop?.width};
    padding-top:${({ item }) => item?.desktop?.padding.paddingTop};
    padding-right:${({ item }) => item?.desktop?.padding.paddingRight};
    padding-bottom:${({ item }) => item?.desktop?.padding.paddingBottom};
    padding-left:${({ item }) => item?.desktop?.padding.paddingLeft};
    background: ${({ item }) => item?.desktop?.background};
    box-shadow: ${({ item }) => item?.desktop?.boxShadow};
    overflow: ${({ item }) => item?.desktop?.overflow};
  @media screen and (max-width:767px) {
    max-width:${({ item }) => item.mobile.maxWidth} ;
  }
    
`;

// export const CardHeading = styled.h4`

//    display: -webkit-box;
//    -webkit-line-clamp: 2; 
//            line-clamp: 2; 
//    -webkit-box-orient: vertical;
//    overflow: hidden;

// font-family: 'Gilroy-Bold';
// font-size: 14px;
// line-height: 16px;

// color: #003459;

// `;

export const CardBottomContent = styled.p`
  font-family: 'Gilroy-Regular';
font-size: 13px;
line-height: 18px;
color: #202020;
margin-top: 10px;
 display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
           line-clamp: 2; 
   -webkit-box-orient: vertical;
   overflow: hidden;
`;

export const CardButton = styled.button`
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

display: flex;
align-items: center;

color: #428BC1;
background-color: transparent;
outline: none;
border: none;
margin-top: auto;
`;
export const HeadingCover = styled.div`
   position: ${({ item }) => item.desktop.position};
  display: ${({ item }) => item.desktop.display};
  align-items: ${({ item }) => item.desktop.alignItems};
  margin-bottom: ${({ item }) => item.desktop.margin.marginBottom};
  min-height: ${({ item }) => item.desktop.minHeight};
    &:before{
    position: ${({ item }) => item.desktop.before.position};
    content: ${({ item }) => item.desktop.before.content};
    width: ${({ item }) => item.desktop.before.width};
    height: ${({ item }) => item.desktop.before.height};
    background: ${({ item }) => item.desktop.before.background};
    left: ${({ item }) => item.desktop.before.left};
    }
`;
export const CardHeadContainer = styled.div`
  position: ${({ item }) => item?.desktop?.position};
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
  background-color: ${({ item }) => item?.desktop?.backgroundColor};
  `;