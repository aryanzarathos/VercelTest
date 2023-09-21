import styled from "styled-components";

export const TeamPageSection = styled.div`
padding: 72px 0;

`;

export const TeamAlbumPageHead = styled.div`
margin-bottom: 24px;
h2{
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 49px;
text-align: center;
color: #1F2B6C;
letter-spacing:inherit;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
}
h3{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #159EEC;
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
export const TeamAlbumHomeList = styled.div`
display:grid;
grid-template-columns: repeat(4, 1fr);
gap: 16px;
margin-top: 44px;
@media screen and (max-width: 992px) {
  grid-template-columns: 1fr 1fr 1fr;
}
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 468px) {
  grid-template-columns: 1fr;
}
`;
export const TeamAlbumHomeCard = styled.div`
position: relative;
cursor: pointer;
img{
width: 100%;
height: 284px;
object-fit: cover;
border-radius: 5px 5px 0px 0px;
position: relative;
display: block;
}

`;
export const TeamAlbumHomeCardOverlay = styled.div`
background: #BFD2F8;
width: 100%;
padding: 12px 22px;
text-align: center;
h6{
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 140%;
/* or 25px */

text-align: center;

/* Primary */

color: #1F2B6C;
letter-spacing:inherit;
position: relative;
margin-bottom: 1px;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
&::after{
width: 70%;
height: auto;
background-color: inherit;
bottom: auto;
}
}
p{
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
text-align: center;
text-transform: capitalize;
color: #1F2B6C;
letter-spacing: inherit;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
}
`;


export const ViewProfileButtonSection = styled.div`
margin-top: 8px;
`;

export const ViewProfileButton = styled.a`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
text-align: center;
color: #BFD2F8;
background: #1F2B6C;
border-radius: 0px 0px 5px 5px;
border: 1px solid #1f2b6c;
padding: 7px 85px;
cursor: pointer;
text-align: center;
display: block;
&:hover{
background: #BFD2F8;
color: #1F2B6C;
border: 1px solid #BFD2F8;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
`;