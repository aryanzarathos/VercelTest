import styled from "styled-components";

export const GroupCollectionContainer = styled.div`
  height: ${({ item }) => item.desktop.height};
  width: ${({ item }) => item.desktop.width};
  padding-bottom: ${({ item }) => item.desktop.paddingBottom};
  margin-top: ${({ item }) => item.desktop.marginTop};
  min-width: 100px;
  
background: ${({ item }) => item?.desktop?.background} ;
padding:  ${({ item }) => item?.desktop?.padding?.paddingTop} ;
`;
// export const GroupHeaderText = styled.div`
//   text-align: center;
//   margin-bottom: 69px;
//   h1 {
//     color: #1f3259;
//     font-size: 48px;
//     line-height: 56.25px;
//     @media screen and (max-width: 700px) {
//       font-size: 30px;
//       line-height: 40px;
//     }
//   }
// `;
export const GroupCardSection = styled.div`

  display: ${({ item }) => item.desktop.display};
  justify-content: ${({ item }) => item.desktop.justifyContent};
  align-items: ${({ item }) => item.desktop.alignItems};
  grid-template-columns: repeat(${({ gridView }) => gridView.desktop.gridCount},1fr);
  margin-bottom: ${({ item }) => item.desktop.marginBottom};
  gap: ${({ item }) => item.desktop.gap};
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(${({ gridView }) => gridView.tablet.gridCount},1fr);
  }
   @media screen and (max-width: 767px) {
  grid-template-columns: repeat(${({ gridView }) => gridView.mobile.gridCount},1fr);
  }
`;
export const Groupcardmain = styled.div`
  display: ${({ item }) => item.desktop.display};
  border-radius: ${({ item }) => item.desktop.borderRadius};
  height: ${({ item }) => item.desktop.height};
  width:  ${({ item }) => item.desktop.width};

  background:${({ item }) => item?.desktop?.background};
    padding: ${({ item }) => item?.desktop?.padding?.paddingTop};
    border-style : ${({ item }) => item?.desktop?.borderStyle};
    border-width : ${({ item }) => item?.desktop?.borderWidth};
   border-color: ${({ item }) => item?.desktop?.borderColor};

  @media screen and (max-width: 767px) {
    flex-direction: ${({ item }) => item.mobile.flexDirection};
    height: ${({ item }) => item.mobile.height};
    border-radius: ${({ item }) => item.mobile.borderRadius};
  }
`;
export const ItemLeft = styled.div`
  height: ${({ item }) => item.desktop.height};
  border-radius: ${({ item }) => item.desktop.borderRadius};
  overflow:${({ item }) => item.desktop.overflow};
  width:  ${({ item }) => item.desktop.width};
  @media screen and (max-width: 767px) {
    width: ${({ item }) => item.mobile.width};
    max-height:${({ item }) => item.mobile.maxHeight};
    border-radius: ${({ item }) => item.mobile.borderRadius};
  }
  // img {
  //   width: 100%;
  //   height: 100%;
  //   display: block;
  //   object-fit: cover;
  //   object-position: center;
  // }
`;
export const ItemRight = styled.div`
  width:  ${({ item }) => item.desktop.width};
  height:  ${({ item }) => item.desktop.height};
  padding:  ${({ item }) => item.desktop.padding};
  /* background-color:  ${({ item }) => item.desktop.backgroundColor}; */
  box-shadow:  ${({ item }) => item.desktop.boxShadow};
  display:  ${({ item }) => item.desktop.display};
  flex-direction:  ${({ item }) => item.desktop.flexDirection};
  justify-content:  ${({ item }) => item.desktop.justifyContent};
  border-radius:  ${({ item }) => item.desktop.borderRadius};


  @media screen and (max-width: 1024px) {
    padding: ${({ item }) => item.tablet.padding};
  }

  @media screen and (max-width: 767px) {
    width:  ${({ item }) => item.mobile.width};
    gap:  ${({ item }) => item.mobile.gap};
    border-radius:  ${({ item }) => item.mobile.borderRadius};
    padding:  ${({ item }) => item.mobile.padding};
  }
`;
export const ArrivalText = styled.h2`
  font-size: ${({ item }) => item.desktop.fontSize};
  font-weight: ${({ item }) => item.desktop.fontWeight};
  line-height: ${({ item }) => item.desktop.lineHeight};
  color: ${({ item }) => item.desktop.color};
  @media screen and (max-width: 500px) {
    font-size: ${({ item }) => item.mobile.fontSize};
    line-height: ${({ item }) => item.mobile.lineHeight};
  }
`;

// export const CardImg = styled.img`
//   width: 100%;
//   height: 100%;
//   display: block;
//   object-fit: cover;
//   object-position: center;
// `;

export const ExploreSection = styled.button`
  display:${({ item }) => item.desktop.display};
  gap:${({ item }) => item.desktop.gap};
  flex-wrap: wrap-reverse;
  cursor: ${({ item }) => item.desktop.cursor};
  align-items: ${({ item }) => item.desktop.alignItems};
  background-color:  ${({ item }) => item.desktop.backgroundColor};
  border:  ${({ item }) => item.desktop.border};
  @media screen and (max-width: 500px) {
    gap:${({ item }) => item.mobile.gap};
  }
`;

export const ExploreText = styled.p`
  font-size: ${({ item }) => item.desktop.fontSize};
  line-height: ${({ item }) => item.desktop.lineHeight};
  color: ${({ item }) => item.desktop.color};
  @media screen and (max-width: 500px) {
    font-size: ${({ item }) => item.mobile.fontSize};
    line-height: ${({ item }) => item.mobile.lineHeight};
  }
`;
