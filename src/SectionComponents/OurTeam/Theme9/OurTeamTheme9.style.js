import styled from "styled-components";

export const OurTeamContainerEight = styled.div`
position: relative;
margin-bottom: 120px;
.slick-dots li button:before{
  font-size: 10px;
}
.slick-dots li{
  margin: 0px 2px;
}
.slick-prev:before{
  color: transparent;
}
.slick-next:before{
  color: transparent;
}
.slick-next{
  z-index: 1;
  right: 10px;
  border-right: 2px solid #FFFFFF;
    border-bottom: 2px solid #FFFFFF;
    transform: rotate(310deg);
    margin: -40px 6%;
}
.slick-prev{
  z-index:1;
  left: 10px;
  border-right: 2px solid #FFFFFF;
  border-bottom: 2px solid #FFFFFF;
  transform: rotate(135deg);
  margin: -40px 6%;
}
`;
export const ImageSectionEight = styled.div`
text-align: center;
padding: 20px;
@media screen and (max-width: 800px) {
  width: 40%;
}

@media screen and (max-width: 600px) {
  width: 90%;
}
`;
export const ImageContainerEight = styled.figure`
border-radius: 50%;
overflow: hidden;
margin-bottom: 16px;
/* width: 279px;
height: 279px; */
img {
 width: 100%;
display: block;
width: 100%;
height: 100%;
object-fit: cover;
}
`;
export const NameEight = styled.p`
font-size: 20px;
font-weight: 500;
line-height: 26.56px;
color: #202020;
margin-bottom: 8px;
font-family: 'Nunito', sans-serif;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`;
export const PositionEight = styled.p`
font-size: 14px;
font-weight: 500;
line-height: 18.59px;
color: #202020;
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

