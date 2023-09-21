import styled from "styled-components";

export const ServicePageDetailsSection = styled.div`
margin: 72px 0;
`;
export const ServicePageDetailsHead = styled.div`
position:relative;
h2{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    color: #1F2B6C;
    letter-spacing:inherit;
  }
  p{
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 154%;
    text-align: center;
    color: #212124;
    letter-spacing:inherit;
    position: relative;
    display: block;
    text-transform:capitalize;
    margin-top:47px;
    padding: 0 58px;
    @media screen and (max-width: 768px) {
      padding: 0;
}
    }


`;
export const BackToCategory = styled.button`
  position:absolute;
  top:0;
  left:0;
  border:none;
  background:transparent;
  display:flex;
  align-items:center;
  gap:15px;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: #1F2B6C;
  @media (max-width: 767px) {
    display: none;
  }
`
export const BackIcon = styled.span`
  width: 48px;
  height: 48px;
  display:flex;
  align-items:center;
  justify-content:center;
  background: #F2F7FF;
  border-radius:10rem;
  img{
    width: 21px;
    height: 21px;
    @media screen and (max-width: 768px) {
    width: 25px;
  height: 25px;
  }
  }
  @media screen and (max-width: 768px) {
    width: 38px;
    height: 38px;
  }
`

export const BackText = styled.span`
  @media screen and (max-width: 768px) {
      display: none;
  }
`
export const ServicePageDetailsGrid = styled.div`
display: grid;
grid-template-columns: 250px 1fr;
align-items: flex-start;
gap:36px;
margin-top: 64px;
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
}
`;

export const ServiceNoFound = styled.div`
  margin-top:50px;
  display:flex;
  justify-content:center;
  flex-direction:column;
  text-align:center;
  height:100%;
  width:100%;
  gap:32px;
  h2{
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    color: rgb(0, 111, 156);
  }
  img{
    height:82px;
    width:82px;
    display:block;
    margin:auto;
  }
`
export const BackToHomeButtonWrap = styled.div`
  display:block;
  margin:auto;
`

export const BackToHomeButton = styled.button`
  background: rgb(0, 111, 156);
  border-radius:4px;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #FFFFFF;
  display:flex;
  align-items:center;
  gap:14px;
  padding:10px 26px;
  border: none;
`
export const LeftArrowIcon = styled.i`
    display: block;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 100;
    transform: rotate(180deg);
`
export const ServicePageDetailsMenuTabWrap = styled.div`
height: auto;
max-height: 90vh;
overflow: hidden;
overflow-y: auto;
scrollbar-width: thin;
position: sticky;
top: 0;
border: 1px solid #006f9c;
border-radius: 5px;
background: #FCFEFE;
@media screen and (max-width: 768px) {
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  border: none;
  padding-bottom:  8px;
  border-radius: 0;
}
/* width */
::-webkit-scrollbar {
  padding-right:10px;
  width: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #006f9c; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #f48631; 
}
`;
export const ServicePageDetailsMenuTab = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-between;
@media screen and (max-width: 768px) {
  flex-direction: row;
  align-items: center;
}
`;

export const ServicePageDetailsMenuTabItem = styled.li`
text-align: center;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
@media screen and (max-width: 768px) {
  overflow: unset;
  border-radius: 0;
}
&:first-child{
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  @media screen and (max-width: 768px) {
    border-radius: 0;
  }
}
&:last-child{
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  @media screen and (max-width: 768px) {
    border-radius: 0;
  }
}

`;
export const ServicePageDetailsMenuButton = styled.button`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
text-align: center;
color: #202020;
background: transparent;
padding:24px 18px;
cursor: pointer;
border: none;
outlinbe: none;
width: 100%;  
@media screen and (max-width: 768px) {
  white-space: nowrap;
  padding: 6px 16px;
}
&.active{
  background: #1F2B6C;
  color: #fff;
}
&:hover{
  background: #1F2B6C;
  color: #fff;
}
`;

export const ServicePageDetailsMenuTabContent = styled.div`
`;
export const ServicePageDetailsItem = styled.figure`
display: grid;
grid-template-columns: 1fr auto;
align-items: flex-start;
gap: 36px;
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
}
`;
export const ServicePageDetailsCoverSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const ServicePageDetailsImage = styled.div`
width: 100%;
height: 100%;
min-width: 250px;
max-width: 324px;
min-height: 166px;
max-height: 231px;
margin-bottom: 48px;
@media screen and (max-width: 768px) {
  width: 100%;
height: 100%;
}
img{
width: 100%;
height: 100%;
min-width: 100%;
max-width: 100%;
min-height: 100%;
max-height: 100%;
// object-fit: cover;
display:block;
}
`;
export const ServicePageDetailsDescription = styled.figcaption`
width: 100%;
height: auto;
h4{
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 30px;
    color: #202020;
    letter-spacing:inherit;
    margin-bottom: 16px;
    position: relative;
}
p{
font-family: 'Work Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 154%;
color: #212124;
letter-spacing:inherit;
margin-bottom: 24px;
}
`;

export const SectionHeroBorderBottom = styled.div`
display: grid;
grid-template-columns: 25% 50% 25%;
align-items:center;
height: 8px;
`;
export const SectionHeroBorderBottomL = styled.div`
width: 100%;
height: 100%;
background:#1F2B6C; 
`;
export const SectionHeroBorderBottomM = styled.div`
width: 100%;
height: 100%;
background:#1F2B6C;
`;
export const SectionHeroBorderBottomR = styled.div`
width: 100%;
height: 100%;
background:#1F2B6C; 
`;
export const BookingButton = styled.button`
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
color: #1F2B6C;
background: #BFD2F8;
border-radius: 50px;
border: 1px solid #bfd2fb;
padding: 13px 30px;
cursor: pointer;
&:hover{
background: #1f2b6c;
color: #bfd2fb;
border: 1px solid #1f2b6c;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
`;

export const ServicePageDetailsItemHero = styled.div`
h1{
  color: #1F2B6C;
  }
  h6{
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 30px;

    color: #202020;
    letter-spacing:inherit;
    text-align: inherit;
    text-transform: capitalize;
  }
`;

export const TeamAlbumHomeList = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 24px;
margin-top: 24px;
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 576px) {
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
padding:12px 22px;
text-align: center;
h4{
    font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 140%;
text-align: center;
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
bottom:auto;
}
}
h5{
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
text-align: center;
text-transform: capitalize;
color: #1F2B6C;
letter-spacing:inherit;
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
background: #1F2B6C;
border-radius: 0px 0px 5px 5px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
text-align: center;
color: #BFD2F8;
border: 1px solid #1f2b6c;
padding: 7px 20px;
cursor: pointer;
text-align: center;
display: block;
&:hover{
background: #bfd2fb;
color: #1f2b6c;
border: 1px solid #bfd2fb;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
`;

export const BookAppointmentButton = styled.a`
margin-top:24px;
cursor: pointer;
text-align: center;
display: block;
background-color:transparent;
border:none;
color: ${({ theme }) => theme.ServicePageDetails.h4.Color};
font-weight: 700;
font-size: 16px;
line-height: 22px;
`;