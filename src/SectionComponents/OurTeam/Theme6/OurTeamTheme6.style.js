import styled from "styled-components";

export const OurTeamContainerFive = styled.div`
position: relative;
margin-bottom: 33px;
.slick-dots li button:before{
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
}
`;

export const ImageSectionFive = styled.div`
text-align: center;
`;
export const ImageContainerFive = styled.figure`
height: 227px;
margin-bottom: 16px;
margin-right: 7px;
margin-left: 7px;

img {
  max-width: 100%;
display: block;
width: 100%;
height: 100%;
}

@media screen and (max-width: 1200px) {
  height: auto;
}
`;
export const NameFive = styled.p`
font-size: 20px;
font-weight: 500;
line-height: 26.56px;
font-family: 'Nunito', sans-serif;
color: #202020;
overflow: hidden;
 white-space: nowrap;
text-overflow: ellipsis;
`;
export const PositionFive = styled.p`
font-size: 14px;
font-weight: 500;
line-height: 18.59px;
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
