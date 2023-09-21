import styled from "styled-components";

export const HeaderText = styled.p`
    font-size: 40px;
    line-height: 46.88px;
    color: #003459;
    font-family: 'Gilroy-Bold',sans-serif;
    text-align: center;
    padding: 72px 0 73px 0;
`

export const WrapContainer = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width:1000px) {
        grid-template-columns: 1fr;
    }
`

export const OurTeamImgContainerSecond = styled.div`
width: 100%;
display: flex;
background-color: #EEEEEE;

@media screen and (max-width: 700px) {
  flex-wrap: wrap;
}
`;
export const ImgContainerSecond = styled.figure`
width: 50%;
height: 272px;

img {
    max-width: 100%;
display: block;
width: 100%;
height: 100%;
}
@media screen and (max-width: 700px) {
  width: 100%;
}
`;
export const TeamAboutSectionSecond = styled.div`
width: 50%;
padding: 21px;

@media screen and (max-width: 700px) {
  width: 100%;
}
`;
export const AboutSecond = styled.p`
font-size: 14px;
line-height: 24px;
font-weight: 900;
color: #202020;
font-family: 'Nunito', sans-serif;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 7;
-webkit-box-orient: vertical;
overflow: hidden;
`;
export const Position = styled.p`
font-size: 14px;
font-weight: 500;
line-height: 16.41px;
color: #6AA9FF;
margin-bottom: 8px;
font-family: 'Nunito', sans-serif;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`;
export const Name = styled.p`
font-size: 20px;
line-height: 23.44px;
font-weight: 500px;
color: #202020;
margin-bottom: 12px;
font-family: 'Nunito', sans-serif;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`;
export const InnerImg = styled.img`
max-width: 100%;
display: block;
width: 100%;
height: 100%;
`;
