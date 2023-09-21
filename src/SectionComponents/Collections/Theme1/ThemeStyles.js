import styled from "styled-components";

export const CollectionSection = styled.section`
  padding: ${({ itemProp }) => itemProp.padding};
`;

export const HeaderText = styled.div`
  text-align: ${({ itemProp }) => itemProp.headerText.textAlign};
  h1 {
    font-size: ${({ itemProp }) => itemProp.headerText.h1.fontSize};
    line-height: ${({ itemProp }) => itemProp.headerText.h1.lineHeight};
    color: ${({ itemProp }) => itemProp.headerText.h1.color};
    text-align: ${({ itemProp }) => itemProp.headerText.h1.textAlign};
    margin: ${({ itemProp }) => itemProp.headerText.h1.margin};
    @media screen and (max-width: 700px) {
      font-size: ${({ itemProp }) => itemProp.headerText.h1.Responsive.medium.fontSize};
    }
  }
`;
export const ContainerFirst = styled.div`
  .slick-dots li button:before {
    font-size: ${({ itemProp }) => itemProp.slickDots.button.fontSize};
  }
  .slick-dots li {
    margin: ${({ itemProp }) => itemProp.slickDots.li.margin};
  }
  .slick-next {
    right: ${({ itemProp }) => itemProp.slickNext.right};
    width: ${({ itemProp }) => itemProp.slickNext.width};
    height:${({ itemProp }) => itemProp.slickNext.height};
    @media screen and (max-width: 800px) {
      right: ${({ itemProp }) => itemProp.slickNext.Responsive.medium.right};
    }
  }

  .slick-prev {
    z-index: ${({ itemProp }) => itemProp.slickPrev.zIndex};
    left: ${({ itemProp }) => itemProp.slickPrev.left};
    width: ${({ itemProp }) => itemProp.slickPrev.right};
    height: ${({ itemProp }) => itemProp.slickPrev.height};
    @media screen and (max-width: 800px) {
      left: ${({ itemProp }) => itemProp.slickPrev.Responsive.medium.left};
    }
  }

  .slick-prev:before {
    border-right: ${({ itemProp }) => itemProp.slickPrev.before.borderRight};
    border-bottom: ${({ itemProp }) => itemProp.slickPrev.before.borderBottom};
    transform: ${({ itemProp }) => itemProp.slickPrev.before.transform};
    color: ${({ itemProp }) => itemProp.slickPrev.before.color};
    width: ${({ itemProp }) => itemProp.slickPrev.before.width};
    height: ${({ itemProp }) => itemProp.slickPrev.before.height};
    top: ${({ itemProp }) => itemProp.slickPrev.before.top};
    left: ${({ itemProp }) => itemProp.slickPrev.before.left};
  }

  .slick-next:before {
    font-size: ${({ itemProp }) => itemProp.slickNext.before.fontSize};
    border-right:  ${({ itemProp }) => itemProp.slickNext.before.borderRight};
    border-bottom:  ${({ itemProp }) => itemProp.slickNext.before.borderBottom};
    color:  ${({ itemProp }) => itemProp.slickNext.before.color};
    width:  ${({ itemProp }) => itemProp.slickNext.before.width};
    height:  ${({ itemProp }) => itemProp.slickNext.before.height};
    top:  ${({ itemProp }) => itemProp.slickNext.before.top};
    left:  ${({ itemProp }) => itemProp.slickNext.before.left};
    transform:  ${({ itemProp }) => itemProp.slickNext.before.transform};
  }
`;
export const ImageItem = styled.div`
  display: ${({ itemProp }) => itemProp.SlideItem.display};
  flex-direction: ${({ itemProp }) => itemProp.SlideItem.flexDirection};
  justify-content: ${({ itemProp }) => itemProp.SlideItem.justifyContent};
  text-align: ${({ itemProp }) => itemProp.SlideItem.alignItems};
  align-items: ${({ itemProp }) => itemProp.SlideItem.textAlign};
  h3 {
    font-size: 18px;
    line-height: 24px;
    color: #1f3259;
    font-weight: 900;
  }
  h2 {
    font-size: 16px;
    line-height: 20px;
    color: #1f3259;
  }
`;
export const ImgContainer = styled.figure`
  height: 260px;
  margin-bottom: 12px;
  /* @media screen and(max-width: 800px) {
    height: auto;
    width: auto;
} */
  img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }
`;
// export const InnerImg = styled.img`
// max-width: 100%;
// display: block;
// object-fit: cover;
// object-position: center;
// `;
export const Discount = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  h6 {
    font-size: 14px;
    line-height: 20px;
    color: rgba(32, 32, 32, 0.6);
  }
  p {
    font-size: 14px;
    line-height: 20px;
    color: #428bc1;
    font-weight: 900;
  }
`;