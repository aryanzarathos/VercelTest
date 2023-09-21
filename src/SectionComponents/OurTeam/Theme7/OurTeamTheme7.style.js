import styled from "styled-components";

export const OurTeamContainerSix = styled.div`
display: flex;
@media screen and (max-width: 700px) {
  flex-wrap: wrap;
  gap: 50px;
}
`;
export const ImageContainerSix = styled.figure`
  height: 577px;
  width: 50%;
  img {
    max-width: 100%;
display: block;
width: 100%;
height: 100%;
  }

  @media screen and (max-width: 1100px) {
    height: auto;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
export const InnerImg = styled.img`

`;
export const AboutSectionSix = styled.div`
width: 50%;
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
@media screen and (max-width: 700px) {
  width: 100%;
  margin-bottom: 100px;
  
}

h2 {
  font-size: 24px;
  line-height: 31.88px;
  font-weight: 500;
  margin-bottom: 5px;
  font-family: 'Nunito', sans-serif;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

h4 {
  font-size: 14px;
  font-weight: 500;
  line-height: 18.59px;
  font-family: 'Nunito', sans-serif;
  margin-bottom: 11px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

p {
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  font-family: 'Nunito', sans-serif;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media screen and (max-width: 700px) {
    text-align: start;  
  }
  
}
  width: 50%;
  padding-left: 5%;
`;
