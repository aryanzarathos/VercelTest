import styled from "styled-components";

// export const ShopWrap = styled.div`
//   width: 100%;
// `;
export const ImageSection = styled.div`
  text-align: ${({ item }) => item?.desktop?.textAlign};
  display: ${({ item }) => item?.desktop?.display};
  flex-direction: ${({ item }) => item?.desktop?.flexDirection};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  cursor: ${({ item }) => item?.desktop?.cursor};
  /* h3 {
    font-size: 18px;
    line-height: 24px;
    color: #1f3259;
    font-weight: 500;
  } */
  /* h2 {
    font-size: 16px;
    line-height: 20px;
    color: #1f3259;
    font-weight: 700;
  } */
`;
export const ImgMain = styled.div`
  position: ${({ item }) => item?.desktop?.position};
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
  min-width: ${({ item }) => item?.desktop?.minWidth};
  max-width: ${({ item }) => item?.desktop?.maxWidth};
  min-height: ${({ item }) => item?.desktop?.minHeight};
  max-height: ${({ item }) => item?.desktop?.maxHeight};
  margin-bottom: ${({ item }) => item?.desktop?.marginBottom};
  @media screen and (max-width: 1024px) {
  height: ${({ item }) => item?.tablet?.height};
    min-width: ${({ item }) => item?.tablet?.minWidth};
    max-width: ${({ item }) => item?.tablet?.maxWidth};
    min-height: ${({ item }) => item?.tablet?.minHeight};
    max-height: ${({ item }) => item?.tablet?.maxHeight};
  }
  @media screen and (max-width: 767px) {
    min-width: ${({ item }) => item?.mobile?.minWidth};
    max-width: ${({ item }) => item?.mobile?.maxWidth};
    min-height: ${({ item }) => item?.mobile?.minHeight};
    max-height: ${({ item }) => item?.mobile?.maxHeight};  }
  /* button {
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
  } */
  /* img {
    height: 100%;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: center;
    transition: 0.4s ease;
  } */

  /* .show {
    display: flex;
  } */
`;
export const Discount = styled.div`
  display: ${({ item }) => item?.desktop?.display};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  gap: ${({ item }) => item?.desktop?.gap};
  margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
  /* h6 {
    font-size: 14px;
    line-height: 20px;
    color: rgba(32, 32, 32, 0.6);
    font-weight: 700;
  } */
  /* p {
    font-size: 14px;
    line-height: 20px;
    color: #428bc1;
    font-weight: 900;
    font-weight: 700;
  } */
`;

export const Combination = styled.div`
  display: ${({ item }) => item?.desktop?.display};
  margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
  grid-template-columns: ${({ item }) => item?.desktop?.gridtemplateColumns};
  gap: ${({ item }) => item?.desktop?.gap};

  
  @media screen and (max-width: 1024px) {
     grid-template-columns: ${({ item }) => item?.tablet?.gridtemplateColumns};
     gap: ${({ item }) => item?.tablet?.gap};
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: ${({ item }) => item.mobile.gridtemplateColumns};
  }
`;
export const ShopSection = styled.div`
  padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
  display: ${({ item }) => item?.desktop?.display};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  gap:${({ item }) => item?.desktop?.gap};
  flex-wrap:${({ item }) => item?.desktop.flexWrap};
  @media screen and (max-width:767px) {
    gap: ${({ item }) => item?.mobile?.gap};
  }
`;
export const ShopSectionLt = styled.div`
  display: ${({ item }) => item?.desktop?.display};
  gap: ${({ item }) => item?.desktop?.gap};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  /* h1 {
    font-size: 24px;
    line-height: 36px;
    color: #003459;
    font-weight: 400;
  }
  h3 {
    font-size: 14px;
    line-height: 20px;
    color: #667479;
  } */
`;
export const ShopSectionRt = styled.div`
position: ${({ item }) => item?.desktop?.position};


  /* label {
    font-size: 14px;
    line-height: 20px;
    color: #667479;
  }
  option {
    font-size: 14px;
    line-height: 20px;
    color: #667479;
  }
  select {
    border: none;
    font-size: 14px;
    line-height: 20px;
    color: #667479;
    &:hover {
      cursor: pointer;
    }
  } */
`;
export const PopularIcon = styled.div`
  display: ${({ item }) => item?.desktop?.display};
gap: ${({ item }) => item?.desktop?.gap};
  align-items: ${({ item }) => item?.desktop?.alignItems};

`;
export const SortBy = styled.div`
 padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
  display: ${({ item }) => item?.desktop?.display};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  border: ${({ item }) => item?.desktop?.border};
  border-radius: ${({ item }) => item?.desktop?.borderRadius};
  gap: ${({ item }) => item?.desktop?.gap};
  `;

export const LikeShareImg = styled.div`
  position: ${({ item }) => item?.desktop?.position};
  top: ${({ item }) => item?.desktop?.top};
  right: ${({ item }) => item?.desktop?.right};
  display: ${({ item }) => item?.desktop?.display};
  gap: ${({ item }) => item?.desktop?.gap};
`;
export const FillWishlist = styled.div`
  fill: ${({ item }) => item?.desktop?.fill};
  height: ${({ item }) => item?.desktop?.height};
  width: ${({ item }) => item?.desktop?.width};
`;
// export const MainSection = styled.section``;
// export const MainHeader = styled.div`
//   h2 {
//     font-family: "Futura";
//     font-style: normal;
//     font-weight: 500;
//     font-size: 24px;
//     line-height: 32px;
//     text-transform: capitalize;
//     color: #202020;
//     letter-spacing: inherit;
//     word-spacing: inherit;
//     text-align: center;
//     margin-top: 30px;
//   }
//   h5 {
//     font-family: "Futura";
//     font-style: normal;
//     font-weight: 500;
//     font-size: 16px;
//     line-height: 21px;
//     text-transform: capitalize;
//     color: #202020;
//     letter-spacing: inherit;
//     word-spacing: inherit;
//     text-align: center;
//     width: 100%;
//     margin-bottom: 36px;
//   }
// `;
export const PopularList = styled.ul`
    position: ${({ item }) => item?.desktop?.position};
    left: ${({ item }) => item?.desktop?.left};
    right: ${({ item }) => item?.desktop?.right};
    background-color: ${({ item }) => item?.desktop?.backgroundColor};
    z-index: ${({ item }) => item?.desktop?.zIndex};
    height: ${({ item }) => item?.desktop?.height};
    overflow-y: ${({ item }) => item?.desktop?.overflowY};
    box-shadow: ${({ item }) => item?.desktop?.boxShadow};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
    width: ${({ item }) => item?.desktop?.width};
    `;
export const PopularListItem = styled.li`
  gap: ${({ item }) => item.desktop.gap};
  display: ${({ item }) => item.desktop.display};
  align-items: ${({ item }) => item.desktop.alignItems};
  background: ${({ item }) => item.desktop.background};
  padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
    border-bottom: ${({ item }) => item.desktop.borderBottom};
    &:first-child{
  padding-top: ${({ item }) => item?.desktop?.firstChild?.padding?.paddingTop};

    }

 
    `;