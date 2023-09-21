import styled from "styled-components";

export const LatestBolgTopContainer = styled.div`
  margin-top:${({ item }) => item?.desktop?.margin?.marginTop};
  margin-right:${({ item }) => item?.desktop?.margin?.marginRight};
  margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom};
  margin-left:${({ item }) => item?.desktop?.margin?.marginLeft};
`;

// export const LatestBolgTopHeading = styled.h3`
//   font-family: 'Gilroy-Bold',sans-serif;
//   font-size: 36px;
//   line-height: 36px;
//   color: #003459;
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

export const LatestBolgSubContainer = styled.div`
  margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
  display: ${({ item }) => item?.desktop?.display};
  grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  gap: ${({ item }) => item?.desktop?.gap};
  cursor: ${({ item }) => item?.desktop?.cursor};
  @media screen and (max-width:767px) {
    grid-template-columns: ${({ item }) => item?.mobile?.gridTemplateColumns};
    gap: ${({ item }) => item?.mobile?.gap};
  }
`;

export const SubLeftContainer = styled.div`
  max-width: ${({ item }) => item?.desktop?.maxWidth};
  min-width: ${({ item }) => item?.desktop?.minWidth};
  height: ${({ item }) => item?.desktop?.height};

  @media screen and (max-width: 767px) {
    height: ${({ item }) => item?.mobile?.height};
  }
`;

// export const RightContainerTopHeading = styled.h3`
//   font-family: 'Gilroy-Bold',sans-serif;
//   font-size: 25px;
//   line-height: 29px;
//   color: #313131;
// `;

export const RightContainerContent = styled.p`
  font-family: 'Gilroy-Regular',sans-serif;
  font-size: 20px;
  line-height: 28px;
  color: #6E6E6E;
  margin-top: 8px;
`;

export const RightContainerButton = styled.button`
  font-family: 'Gilroy-SemiBold',sans-serif;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  column-gap: 7px;
  margin-top: 33px;
  color: rgba(0, 52, 89, 1);
`;

// export const ButtonForwardIcon = styled.span`
//   -webkit-mask: url(${ForwardIcon}) no-repeat center;
//   mask-image: url(${ForwardIcon}) no-repeat center;
//   display: block;
//   width: 11px;
//   height: 11px;
//   background-color: rgba(0, 52, 89, 1);
// `;
export const SubRightContainer = styled.div`
position:${({ item }) => item?.desktop?.position};
svg{
  fill: ${({ itemSvg }) => itemSvg?.desktop?.fill};
  height:${({ itemSvg }) => itemSvg?.desktop?.height};
  width:${({ itemSvg }) => itemSvg?.desktop?.width};
}
`;