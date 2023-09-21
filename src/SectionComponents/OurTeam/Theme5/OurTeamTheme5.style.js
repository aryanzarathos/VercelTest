import styled from "styled-components";


export const OurTeamContainerFourth = styled.div`
display: flex;
margin-bottom: 36px;

@media screen and (max-width: 1000px) {
  height: auto;
}

@media screen and (max-width: 700px) {
  flex-wrap: wrap;
  gap: 20px;
}
@media screen and (max-width: 600px) {
  margin-bottom: 50px;
}
`;
export const ImageContainerFourth = styled.figure`
height: 338px;
width: 50%;

@media screen and (max-width: 900px) {
  height: auto;
}
@media screen and (max-width: 700px) {
  width: 100%;
  height: auto;
}
img{
  width: 100%;
  height: 100%;
}
`;
export const AboutSectionFourth = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
padding: 0px 0px 0px 120px;

img {
  max-width: 100%;
display: block;
width: 100%;
height: 100%;
}

@media screen and (max-width: 1000px) {
  padding: 0px 0px 0 8%;
}

@media screen and (max-width: 700px) {
  width: 100%;
  padding: 0px;
}
`;
export const NameFourth = styled.p`
font-size: 24px;
line-height: 31.88px;
font-weight: 500;
margin-bottom: 5px;
font-family: 'Nunito', sans-serif;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`;
export const PositionFourth = styled.p`
font-size: 14px;
font-weight: 500;
line-height: 18.59px;
font-family: 'Nunito', sans-serif;
margin-bottom: 11px;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`;
export const AboutFourth = styled.p`
font-size: 14px;
line-height: 24px;
font-weight: 500;
font-family: 'Nunito', sans-serif;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 9;
-webkit-box-orient: vertical;
overflow: hidden;
`;
export const InnerImg = styled.img`
max-width: 100%;
display: block;
width: 100%;
height: 100%;
`;

