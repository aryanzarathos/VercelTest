import styled from "styled-components";

export const Banner = styled.div`

.slick-slider{
  .slick-list {
    .slick-track {
      height: auto !important;
    }
  }
  @media screen and (max-width: 992px) {
    height: auto;
  }
}
background:  ${({ theme }) => theme.Banner.Background};
position: relative;
width: 100%;
.slick-dots{
bottom: 25px;
.slick-active{
margin: 0;
button{
&::before{
font-size: 12px;
color: ${({ theme }) => theme.Banner.Dots.Active.Color};
}
}
}
button{
&::before{
font-size: 12px;
color: ${({ theme }) => theme.Banner.Dots.Color};
}
}
}
.slick-slide {
  visibility: visible;
  display: block;
}
.slick-slide{
  &.slick-active {
  visibility: visible;
  }
}
.slick-prev{
  content: '';
  width: 1.3rem;
  height: 1.3rem;
  border-right: 2px solid ${({ theme }) => theme.Banner.SlickArrowColor.Color};
  border-bottom: 2px solid ${({ theme }) => theme.Banner.SlickArrowColor.Color};
  z-index: 1;
  margin-left: 3.5rem;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  &::before{
  color: transparent;
  }
  &:hover{
    border-right: 2px solid ${({ theme }) => theme.Banner.SlickArrowColor.Hover.Color};
    border-bottom: 2px solid ${({ theme }) => theme.Banner.SlickArrowColor.Hover.Color};    
  }
  }
  .slick-next{
  content: '';
  width: 1.3rem;
  height: 1.3rem;
  border-left: 2px solid ${({ theme }) => theme.Banner.SlickArrowColor.Color};
  border-bottom: 2px solid ${({ theme }) => theme.Banner.SlickArrowColor.Color};
  z-index: 1;
  margin-right: 3.5rem;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  &::before{
  color: transparent;
  }
  &:hover{
    border-left: 2px solid ${({ theme }) => theme.Banner.SlickArrowColor.Hover.Color};
    border-bottom: 2px solid ${({ theme }) => theme.Banner.SlickArrowColor.Hover.Color};    
  }
  }


 




`;

export const UrlLink = styled.a`
  width:100%;
  height: ${({ itemProp }) => `${itemProp?.height}px` ? `${itemProp?.height}px` : `${itemProp}px`};
  display: block;
  position: relative;
  @media screen and (max-width: 992px) {
    max-height: ${({ itemProp }) => `${itemProp?.height}px` ? `${itemProp?.height}px` : `${itemProp}px`};
  }
  img{
    object-fit: cover;
    width: 100%;
    object-position: center;
    height: 100%;
    max-height: 100%;
  }
`
export const SliderImage = styled.a`
  width:100%;
  display: block;
  position: relative;
  height: ${({ itemProp }) => `${itemProp?.height}px` ? `${itemProp?.height}px` : `${itemProp}px`};
  max-height: ${({ itemProp }) => `${itemProp?.height}px` ? `${itemProp?.height}px` : `${itemProp}px`};
  @media screen and (max-width: 992px) {
    max-height: 480px;
    height: 480px;
    min-height: 100%;
  }
  img{
    object-fit: cover;
    width: 100%;
    object-position: center;
    height: 100%;
    max-height: 100%;
  }
`;
export const BannerOverlay = styled.div`
position: absolute;
top: ${({ theme }) => theme.Banner.BannerOverlay.Top};
min-width: ${({ theme }) => theme.Banner.BannerOverlay.MinWidth};
max-width: ${({ theme }) => theme.Banner.BannerOverlay.MaxWidth};
// background: ${({ theme }) => theme.Banner.BannerOverlay.Background};
padding: ${({ theme }) => theme.Banner.BannerOverlay.Padding};
border-radius: ${({ theme }) => theme.Banner.BannerOverlay.BorderRadius};
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
@media screen and (max-width: 992px) {
width: 70%;
padding: 24px 32px;
bottom: 24px; 
}
@media screen and (max-width: 468px) {
width: 70%;
padding: 8px 16px;
bottom: 24px; 
}
`;

export const BannerOverlayCaption = styled.div`
h1{
font-weight: ${({ theme }) => theme.Banner.h1.FontWeight};
font-size: ${({ theme }) => theme.Banner.h1.FontSize};
line-height: ${({ theme }) => theme.Banner.h1.LineHeight};
font-family: ${({ theme }) => theme.Banner.h1.FontFamily};
font-style: ${({ theme }) => theme.Banner.h1.FontStyle};
letter-spacing: ${({ theme }) => theme.Banner.h1.LetterSpacing};
color: ${({ theme }) => theme.Banner.h1.Color};
word-break: break-all;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
@media screen and (max-width: 768px) {
font-size: 32px;
line-height: 42px;
margin-bottom: 0;
  }
@media screen and (max-width: 468px) {
font-size: 16px;
line-height: 24px;
margin-bottom: 0;
  }
}
h3{
font-weight: ${({ theme }) => theme.Banner.h3.FontWeight};
font-size: ${({ theme }) => theme.Banner.h3.FontSize};
line-height: ${({ theme }) => theme.Banner.h3.LineHeight};
font-style: ${({ theme }) => theme.Banner.h3.FontStyle};
font-family: ${({ theme }) => theme.Banner.h3.FontFamily};
letter-spacing: ${({ theme }) => theme.Banner.h3.LetterSpacing};
color: ${({ theme }) => theme.Banner.h3.Color};
word-break: break-all;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
@media screen and (max-width: 768px) {
  font-size: 16px;
  line-height: 26px;
    }
@media screen and (max-width: 468px) {
  font-size: 8px;
  line-height: 14px;
    }
}`;
