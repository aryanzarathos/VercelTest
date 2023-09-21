import styled from "styled-components";

export const OurTeamContainerThird = styled.div`
position: relative;
width: 100%;
padding: 24px;
margin-bottom: 114px;
background-color: #EEEEEE;
@media screen and (max-width: 600px) {
  margin-bottom: 50px;
}
/* .slick-dots li button:before{
  font-size: 10px;
}
.slick-prev:before{
  color: transparent;
}
.slick-next:before{
  color: transparent;
  
}
.slick-next{
  z-index: 999;
  right: 15px;
  margin: -40px 0;
  border-right: 2px solid #FFFFFF;
    border-bottom: 2px solid #FFFFFF;
    transform: rotate(310deg);
}
.slick-prev{
  z-index:999;
  left: 15px;
  bottom: -2%;
  margin:-40px 0;
  border-right: 2px solid #FFFFFF;
  border-bottom: 2px solid #FFFFFF;
  transform: rotate(135deg);
} */
`;
export const ImageSectionThird = styled.div`
width: 25%;
position: relative;
padding-right: 10px;
padding-left: 10px;


@media screen and (max-width: 1000px) {
  width: 45%;
}

@media screen and (max-width: 600px) {
  width: 100%;
}
`;
export const ImgContainerThird = styled.figure`
width: 100%;
max-height: 378px;
padding-bottom: 10px;
img {
    max-width: 100%;
    display: block;
    object-fit: contain;
    width: 100%;
    height: 100%;
}
`;
export const AboutSectionThird = styled.div`
padding: 8px 8px 20px 8px;
background-color: #FFFFFF;
position: absolute;
bottom: -20px;
left: 10%;
right: 10%;

`;
export const PositionThird = styled.p`
font-size: 12px;
font-weight: 500;
font-family: 'Nunito', sans-serif;
color: #202020;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`;
export const NameThird = styled.p`
font-size: 16px;
font-weight: 500;
font-family: 'Nunito', sans-serif;
color: #202020;
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

