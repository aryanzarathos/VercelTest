import styled from "styled-components";

export const GalleryListSection = styled.div`
padding: 40px 0;
`;
export const GalleryListHead = styled.div`
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
letter-spacing: inherit;
text-align: center;
}
h3{

font-weight: 600;
font-size: 32px;
line-height: inherit;
font-style: normal;
font-family: Montserrat;
letter-spacing: inherit;
text-align: center;
color: #343f64;
position: relative;
  display: inline-block;
  &::after{
  position: absolute;
  width: 100%;
  height: auto;
  background-color:inherit;
  bottom: auto;
  }
}
`;

export const GalleryListFilter = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin-bottom: 60px;
`;

export const GalleryListFilterButton = styled.button`

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 18px;
color: #343F64;
background: #fff;
border: 1px solid #343f64;
border-radius: 4px;
color: #343f64;
padding: 10px 24px;
cursor: pointer;
&:hover{
background: #343f64;
color: #fff;
border: 1px solid #343f64;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
&.active{
  background: #343f64;
color: #fff;
border: 1px solid #343f64;
}
`;
export const GalleryListImage = styled.div`
width: 100%
height: 352px;
position: relative;
img{
width: 100%;
height: 100%;
display: block;
border-radius: 24px;
object-fit: cover;
@media screen and (max-width: 768px) {
height: auto;
  }
}
`;
export const GalleryListAlbum = styled.div`
display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    }
`;
export const ThumnailPopBody = styled.div`
width: 100%
height: 352px;
position: relative;
video{
width: 100%;
height: 100%;
display: block;
border-radius: 24px;
@media screen and (max-width: 768px) {
height: auto;
  }
}
`;