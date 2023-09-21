import styled from "styled-components";

export const CenterOfExcellence = styled.div`
margin: 72px 0;

p{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 196.4%;
    letter-spacing: 0.02em;
    color: #202020;
    text-align: center;
    text-transform: capitalize;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: revert;
  }
`;
export const CenterOfExcellenceHead = styled.div`
margin-bottom: 44px;
text-align: center;
h2{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    color: #1F2B6C;
    letter-spacing:inherit;
    text-transform: capitallize;
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
    margin-top:16px;
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
background:#BFD2F8; 
`;
export const SectionHeroBorderBottomM = styled.div`
width: 100%;
height: 100%;
background:#1F2B6C; 
`;
export const SectionHeroBorderBottomR = styled.div`
width: 100%;
height: 100%;
background:#BFD2F8; 
`;

export const BannerCoverSection = styled.div`
margin: 72px 0;
`;
export const BannerCoverSectionImage = styled.div`
width: 100%;
height: 478px;
img{
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
@media screen and (max-width: 768px) {
  height: auto;
}
`;