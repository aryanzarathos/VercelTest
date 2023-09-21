import styled from 'styled-components';
export const AboutHeroSection = styled.div`
margin-top: 48px;
`;
export const SectionContent = styled.div`
width: 80%;
margin: auto;
@media screen and (max-width: 768px) {
  width: 100%;
}
`;

export const SectionHead = styled.div`
margin-bottom: 20px;
text-align: center;
h2{
font-family: 'Open Sans',sans-serif;
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 49px;
text-align: center;
color: #1F2B6C;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
}
h3{
font-family: 'Open Sans',sans-serif;
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
export const SectionDescription = styled.div`
display: -webkit-box;
-webkit-line-clamp: 14;
-webkit-box-orient: vertical;
overflow: hidden;
p{
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 152%;
text-align: center;
color: #202020;
}
`;
export const ViewMoreSection = styled.div`
display: flex;
justify-content: center;
margin-top: 24px;

`;
export const SectionImage = styled.div`
width: 100%;
// height: 478px;
margin-top: 48px;
img{
  width: 100%;
  height: 100%;
  display: block;
  // object-fit: cover;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
iframe, video{
  width: 100%;
  height: 478px;
  border: none;
  border-radius: 8px;
  display: block;
  @media screen and (max-width: 600px) {
    height: 100%;
  }
}
@media screen and (max-width: 768px) {
  width: 100%;
  height: auto;
}
`;
export const ViewMoreButton = styled.a`
font-family: 'Open Sans',sans-serif;
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
  content: '';
  width: 6px;
  height: 6px;
  border-right: 2px solid  #1F2B6C;
  border-bottom: 2px solid #1F2B6C;
  position: absolute;
  right: 0;
  left: auto;
  transform: rotate(-45deg);
  top: 16px;
}
&::before{  
  content: '';
  width: 16px;
  height: 2px;
 background:   #1F2B6C;
 position: absolute;
 right: 0px;
 left: auto;
 top: 19px;
}
&:hover{
color: #1F2B6C;
text-decoration: underline;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
&::after{
  border-color: #1F2B6C;
}
&::before{  
 background: #1F2B6C;
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
background: #BFD2F8;
`;
export const SectionHeroBorderBottomM = styled.div`
width: 100%;
height: 100%;
background: #1F2B6C; 
`;
export const SectionHeroBorderBottomR = styled.div`
width: 100%;
height: 100%;
background: #159EEC;
`;