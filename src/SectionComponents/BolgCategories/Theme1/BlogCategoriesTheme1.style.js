import styled from "styled-components";

export const LatestBolgTopContainer = styled.div`
  margin: 64px 0px 50px 0px;
`;

export const LatestBolgTopHeading = styled.h3`
  font-family: 'Gilroy-Bold',sans-serif;
  font-size: 36px;
  line-height: 36px;
  color: #003459;
`;

export const HeadContainer = styled.div`
  margin-top: 17px;
  position: relative;
  width: 100%;
  height: 1px;
  background-color: rgba(214, 214, 214, 1);
`;

export const LineInner = styled.span`
  width: 10%;
  height: 4px;
  background-color: #003459;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  
  @media screen and (max-width: 992px) {
    width: 18%;
  }

  @media screen and (max-width: 600px) {
    width: 25%;
  }
`;

export const LatestBolgSubContainer = styled.div`
  margin-top: 36px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 72px;
  cursor: pointer;
  @media screen and (max-width:992px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

export const SubLeftContainer = styled.div`
  max-width: 566px;
  min-width: 100%;
  height: 340px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 700px) {
    height: auto;
  }
`;

export const RightContainerTopHeading = styled.h3`
  font-family: 'Gilroy-Bold',sans-serif;
  font-size: 25px;
  line-height: 29px;
  color: #313131;
`;

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
