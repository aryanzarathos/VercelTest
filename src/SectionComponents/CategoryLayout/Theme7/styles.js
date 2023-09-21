import styled from 'styled-components';
export const CatergoryHomeHeroSection = styled.div`
margin-top: 48px;
`;
export const CatergoryHomeHero = styled.div`
`;
export const CatergoryHomeHeroHead = styled.div`
h2{
    font-family: 'Open Sans';
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
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.06em;
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
export const CatergoryItem = styled.figure`
position: relative;
cursor: pointer;
`;
export const CatergoryImage = styled.div`
width: 100%;
height: 100%;
img{
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
`;
export const CatergoryCaption = styled.figcaption`
position: absolute;
width: 100%;
bottom: 0;
height: 100%;
display: flex;
align-items: flex-end;
justify-content: flex-start;
border-radius: 5px;
background: linear-gradient(180deg, rgba(217, 217, 217, 0) 50.93%, #6474CF 109.12%);
padding: 32px;
h6{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
`;
export const CategoryHeroGrid = styled.div`

  margin-top: 48px;
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
  .slick-slide > div {
    margin: 0 16px;
  }
  .slick-list {
    margin: 0 -16px;
  }
  .slick-dots{
    bottom: -30px;
    .slick-active{
    margin: 0;
    button{
    &::before{
    font-size: 12px;
    color: #1F2B6C;
    }
    }
    }
    button{
    &::before{
    font-size: 12px;
    color: #1F2B6C;
    }
    }
    }
    .slick-prev{
      content: '';
      width: 1.3rem;
      height: 1.3rem;
      border-right: 2px solid #1F2B6C;;
      border-bottom: 2px solid #1F2B6C;;
      z-index: 0;
      margin-left: -0.5rem;
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
      &::before{
      color: transparent;
      }
      &:hover{
        border-right: 2px solid  #1F2B6C;;
        border-bottom: 2px solid  #1F2B6C;;    
      }
      @media screen and (max-width: 768px) {
        width: 1rem;
        height: 1rem;
        margin-left: 0;
        left: 15px;
        }
      }
      .slick-next{
      content: '';
      width: 1.3rem;
      height: 1.3rem;
      border-left: 2px solid #1F2B6C;;
      border-bottom: 2px solid #1F2B6C;;
      z-index: 0;
      margin-right: -0.5rem;
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
      &::before{
      color: transparent;
      }
      &:hover{
        border-left: 2px solid  #1F2B6C;;
        border-bottom: 2px solid  #1F2B6C;;    
      }
      @media screen and (max-width: 768px) {
        width: 1rem;
        height: 1rem;
        margin-right: 0;
        right: 15px;
        }
      }
`;
export const ViewMoreSection = styled.div`
margin-top: 48px;
display: grid;
align-items: center;
grid-template-columns: 1fr auto;
`;

export const ViewMoreSectionDivider = styled.div`
    width: 100%;
    height: 2px;
    background:  rgb(253, 237, 225);
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
  content: '';
  width: 6px;
  height: 6px;
  border-right: 2px solid  #1F2B6C;
  border-bottom: 2px solid #1F2B6C;
  position: absolute;
  right: 2px;
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
 right: 2px;
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