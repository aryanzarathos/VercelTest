import styled from "styled-components";

export const HeadContainer = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: rgba(214, 214, 214, 1);
`;

export const CardContainer = styled.div`
  /* padding: 10px; */
`;

export const CardImages = styled.div`
  width: 100%;
  height: 212px;
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 600px) {
    height: auto;
  }
`;

export const CardContent = styled.div`
  background-color: transparent;
  padding: 3px;
  margin-bottom: 48px;
  min-height: 205px;
`;

export const CardHeading = styled.h4`
  font-family: 'Gilroy-Medium','sans-serif';
  font-size: 18px;
  line-height: 21px;
  color: #202020;
  margin: 12px 0px 8px 0px;
`;

export const CardBottomContent = styled.p`
  font-family: 'Gilroy-Regular','sans-serif';
  font-size: 14px;
  line-height: 20px;
  color: #202020;
  margin-top: 12px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardButton = styled.button`
  font-family: 'Gilroy-SemiBold','sans-serif';
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  column-gap: 7px;
  margin-top: 12px;
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

