import styled from "styled-components";
import ForwardImg from "../../../Assets/SectionComponent/Images/Services/forwardArrow.svg"


export const SubContainerBox = styled.div`
display: grid;
grid-template-columns: .9fr 4fr;
background: #FFFFFF;
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
border-radius: 30px;

@media (max-width: 425px) {
  grid-template-columns: 1fr;
  border-radius: 30px 30px 0px 0px;
}
`;

export const SubLeftContent = styled.div`
width: 128px;

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;

  @media (max-width: 425px) {
    border-radius: 30px;
  }
}

@media (max-width: 425px) {
padding: 0;
width: 100%;
height: 250px;
}
`;

export const SubRightContent = styled.div`
padding: 21px 24px;
height: fit-content;
`;

export const BoxTopContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 5px;
`

export const BoxTopHeading = styled.p`
font-size: 24px;
color: #1F3259;
`;

export const BoxForwardImg = styled.i`
/* -webkit-mask: url(${ForwardImg}) no-repeat center; */
mask-image: url(${ForwardImg}) no-repeat center;
display: block;
width: 16px;
height: 16px;
background-color: rgba(106, 169, 255, 1);
`;

export const BoxBottomContent = styled.p`
margin-top: 12px;
`;

