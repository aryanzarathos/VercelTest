import styled from "styled-components";

export const FacilitiesHeroSection = styled.div`
margin-top: 48px;
`;
export const FacilitiesHeroHead = styled.div`
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
    // display: inline-block;
    /* text-transform: uppercase; */
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    }
`;
export const FacilitiesHeroGrid = styled.div`
display: grid;
grid-template-columns: 250px 1fr;
align-items: flex-start;
gap:36px;
margin-top: 40px;

@media(max-width:1024px) {
  grid-template-columns: 200px 1fr;
}


@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
}
`;
export const FacilitiesMenuTab = styled.ul`
border: 1px solid #1F2B6C;
border-radius: 5px;
background:#feffff;


display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const FacilitiesMenuTabItem = styled.li`
text-align: center;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
&:first-child{
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

`;
export const FacilitiesMenuButton = styled.button`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
text-align: center;
color: #202020;
background: transparent;
padding: 24px 30px;
cursor: pointer;
border: none;
outline: none;
width: 100%;  
&.active{
  background: #1F2B6C;
  color: #BFD2F8;
}
`;
export const FacilitiesViewAllButton = styled.a`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #1F2B6C;
// border-top: 1px solid ;
background:#BFD2F8;
padding: 9px 20px;
cursor: pointer;
display: block;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
&:hover{
  text-decoration: underline;
}
`;

export const FacilitiesMenuTabContent = styled.div`
`;
export const FacilitiesItem = styled.figure`
display: grid;
grid-template-columns: 1fr auto;
align-items: flex-start;
gap: 36px;
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
}
`;
export const FacilitiesImage = styled.div`
width: 324px;
height: 232px;
@media(max-width:1024px) {
  width: 210px;
}
@media screen and (max-width: 768px) {
  width: 100%;
height: 100%;
}
img{
width: 100%;
height: 100%;
object-fit: cover;
display:block;
}
`;
export const FacilitiesDescription = styled.figcaption`
width: 100%;
height: auto;

.sun-editor-output {
  p {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 154%;
    color: #212124;
    letter-spacing:inherit !important;
  }

  span {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 154%;
    color: #212124;
    letter-spacing:inherit !important;
  }
}
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
&::after{
width: 100%;
height: auto;
background-color:inherit;
bottom: auto;
}
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
display: -webkit-box;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
overflow: hidden;
}
`;
export const ViewMoreSection = styled.div`
margin-top: 16px;
display: grid;
align-items: center;
grid-template-columns: 1fr auto;
`;

export const ViewMoreSectionDivider = styled.div`
    width: 100%;
    height: 2px;
    background: #BFD2F8;
    opacity: 0.5;
`;

export const ViewMoreButton = styled.a`
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 140%;
color: #159EEC;
padding: 8px 24px 8px 8px;
cursor: pointer;
position: relative;
text-decoration: none;
&::after{
  // content: '';
  width: 6px;
  height: 6px;
  border-right: 2px solid #1F2B6C;
  border-bottom: 2px solid #1F2B6C;
  /* border-color:  ${({ theme }) => theme.FacilitiesHero.ViewMoreButton.Color}; */
  // position: absolute;
  right: 2px;
  left: auto;
  transform: rotate(-45deg);
  top: 16px;
}
&::before{  
  // content: '';
  width: 16px;
  height: 2px;
 background: #1F2B6C;
 /* background: red; */
//  position: absolute;
 right: 2px;
 left: auto;
 top: 19px;
}
&:hover{
color: #000;
text-decoration: underline;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
&::after{
  border-color: #000;
}
&::before{  
 background: #000;
}
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
background-color: #BFD2F8;
box-sizing: 1px 1px 1px #BFD2F8;
`;
export const SectionHeroBorderBottomM = styled.div`
width: 100%;
height: 100%;
background-color: #1F2B6C;
`;
export const SectionHeroBorderBottomR = styled.div`
width: 100%;
height: 100%;
background-color: #159EEC;
`;