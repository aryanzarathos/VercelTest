import styled from "styled-components";

export const GalleryHomeHeroSection = styled.div`
padding: 32px 0;
`;
export const SneekPeakHomeHero = styled.div`
`;
export const SneekPeakHomeHeroHead = styled.div`
margin-bottom: 48px;
display: flex;
align-items: center;
flex-direction: column;
h2{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    color: #343F64;
    letter-spacing:inherit;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    color: #4E616B;
  font-style: normal;
  letter-spacing: inherit;
  text-align: center;
  position: relative;
  display: inline-block;
  &::after{
  position: absolute;
  width: 100%;
  height: auto;
  background-color:  inherit;
  bottom: auto;
  }
  }
`;
export const SneekPeakSliderImage = styled.div`
width: 100%;
height: 340px;
img{
width: 100%;
height: 100%;
display: block;
object-fit: cover;
border-radius: 24px;
@media screen and (max-width: 768px) {
  width: 100%;
   }
}
`;
export const SneekPeakHomeHeroAlbum = styled.div`
display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
     }
`;
export const ViewMoreSneekPeakButton = styled.a`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #FFFFFF;
background: #343F64;
box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 8px;
border: 1px solid #343f64;
color: #fff;
padding: 9px 40px;
cursor: pointer;
margin-top: 52px;
&:hover{
background: #fff;
color: #343f64;
border: 1px solid #343f64;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
`;

export const ViewMoreButtonSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
