import styled from "styled-components";

export const ServiceHomePageSection = styled.div`
margin:  72px 0;
`;
export const ServiceHomePage = styled.div`
`;
export const ServiceHomePageHead = styled.div`
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
export const ServicePageItem = styled.figure`
position: relative;
cursor: pointer;
`;
export const ServicePageImage = styled.div`
width: 100%;
height: 100%;
min-height: 166px;
max-height: 332px;
img{
  border-radius: 5px;
  width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  display: block;
}
`;
export const ServicePageCaption = styled.figcaption`
position: absolute;
bottom: 0;
width: 100%;
height: 100%;
min-height: 100%;
max-height: 100%;
display: flex;
align-items: flex-end;
justify-content: flex-start;
border-radius: 5px;
background: linear-gradient(180deg, rgba(217, 217, 217, 0) 49.82%, #6474CF 110.96%);;
padding: 24px;
h6{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    letter-spacing:inherit;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
`;
export const ServicePageGrid = styled.div`
 margin-top: 48px;
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 gap: 24px;
 @media screen and (max-width: 768px) {
  grid-template-columns: repeat(1, 1fr);
}
`;
