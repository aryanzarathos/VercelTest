import styled from "styled-components";

export const CategoriesTopContainer = styled.div`
  margin-top:${({ item }) => item.desktop.margin.marginTop};
  margin-right:${({ item }) => item.desktop.margin.marginRight};
  margin-bottom:${({ item }) => item.desktop.margin.marginBottom};
  margin-left:${({ item }) => item.desktop.margin.marginLeft};
`;

export const CategoriesTopHeading = styled.h3`
  font-family: 'Gilroy-Bold','sans-serif';
  font-size: 36px;
  line-height: 36px;
  color: #003459;
  margin-bottom: 17px;
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


export const CategoriesSubContainer = styled.div`

margin-top:${({ item }) => item?.desktop?.margin?.marginTop};
min-width: ${({ item }) => item?.desktop?.minWidth};
 .swiper-button-prev{
        top: -60px;
        right: 45px;
        left: auto;
        height: 30px;
        width: 30px;
        background: #fff;
        border: 2px solid ${({ itemArrow }) => itemArrow.arrowColor};
        border-radius: 50%;
        &::before{
            background: ${({ itemArrow }) => itemArrow.arrowColor};
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
        border: 2px solid ${({ itemArrow }) => itemArrow.arrowColor};
        border-radius: 50%;
        &::before{
                top: 50%;
                background: ${({ itemArrow }) => itemArrow.arrowColor};
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
`;

export const CategoriesBottomContainer = styled.div`
  display: ${({ item }) => item?.desktop?.display};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
  gap: ${({ item }) => item?.desktop?.gap};
`;

// export const BottomContainerButton = styled.button`
//   background: transparent;
//   border: 1px solid #003459;
//   border-radius: 44px;
//   padding: 8px 24px;
//   color: #003459;
//   cursor: pointer;
// `;


// export const HeadContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: 1px;
//   background-color: rgba(214, 214, 214, 1);
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