import styled from "styled-components";

export const Banner = styled.div`
.slick-slider{
height: 100%;
  @media screen and (max-width: 992px) {
    height: auto;
  }
}
background:white;
position: relative;
width: 100%;
.slick-dots{
bottom: 25px;
.slick-active{
margin: 0;
button{
&::before{
font-size: 12px;
color: #000;
}
}
}
button{
&::before{
font-size: 12px;
color: #000;
}
}
}
.slick-prev{
  content: '';
  width: 1.3rem;
  height: 1.3rem;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  z-index: 1;
  margin-left: 3.5rem;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  &::before{
  color: transparent;
  }
  &:hover{
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;    
  }
  }
  .slick-next{
  content: '';
  width: 1.3rem;
  height: 1.3rem;
  border-left: 2px solid blue;
  border-bottom: 2px solid blue;
  z-index: 1;
  margin-right: 3.5rem;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  &::before{
  color: transparent;
  }
  &:hover{
    border-left: 2px solid blue;
    border-bottom: 2px solid blue;    
  }
  }
`;

export const SliderImage = styled.div`
// width: 100%;
// height: ${({ theme }) => theme.Banner.SliderImage.Height};
max-height: 420px;
position: relative;
img{
  // object-fit: cover;
width: 100%;
height: inherit;
display: block;
}
@media screen and (max-width: 992px) {
  height: auto;
}
`;
// export const BannerOverlay = styled.div`
// position: absolute;
// top: 0;
// min-width: ${({ theme }) => theme.Banner.BannerOverlay.MinWidth};
// max-width: ${({ theme }) => theme.Banner.BannerOverlay.MaxWidth};
// // background: ${({ theme }) => theme.Banner.BannerOverlay.Background};
// padding: ${({ theme }) => theme.Banner.BannerOverlay.Padding};
// border-radius: ${({ theme }) => theme.Banner.BannerOverlay.BorderRadius};
// display: flex;
// flex-direction: column;
// align-items: flex-start;
// justify-content: space-between;
// @media screen and (max-width: 992px) {
// width: 70%;
// padding: 24px 32px;
// bottom: 24px;
// }
// @media screen and (max-width: 468px) {
// width: 70%;
// padding: 8px 16px;
// bottom: 24px;
// }
// `;

// export const BannerOverlayCaption = styled.div`
// h1{
// font-weight: ${({ theme }) => theme.Banner.h1.FontWeight};
// font-size: ${({ theme }) => theme.Banner.h1.FontSize};
// line-height: ${({ theme }) => theme.Banner.h1.LineHeight};
// font-family: ${({ theme }) => theme.Banner.h1.FontFamily};
// font-style: ${({ theme }) => theme.Banner.h1.FontStyle};
// letter-spacing: ${({ theme }) => theme.Banner.h1.LetterSpacing};
// color: ${({ theme }) => theme.Banner.h1.Color};
// word-break: break-all;
// display: -webkit-box;
// -webkit-line-clamp: 1;
// -webkit-box-orient: vertical;
// overflow: hidden;
// @media screen and (max-width: 768px) {
// font-size: 32px;
// line-height: 42px;
// margin-bottom: 0;
//   }
// @media screen and (max-width: 468px) {
// font-size: 16px;
// line-height: 24px;
// margin-bottom: 0;
//   }
// }
// h3{
// font-weight: ${({ theme }) => theme.Banner.h3.FontWeight};
// font-size: ${({ theme }) => theme.Banner.h3.FontSize};
// line-height: ${({ theme }) => theme.Banner.h3.LineHeight};
// font-style: ${({ theme }) => theme.Banner.h3.FontStyle};
// font-family: ${({ theme }) => theme.Banner.h3.FontFamily};
// letter-spacing: ${({ theme }) => theme.Banner.h3.LetterSpacing};
// color: ${({ theme }) => theme.Banner.h3.Color};
// word-break: break-all;
// display: -webkit-box;
// -webkit-line-clamp: 2;
// -webkit-box-orient: vertical;
// overflow: hidden;
// @media screen and (max-width: 768px) {
//   font-size: 16px;
//   line-height: 26px;
//     }
// @media screen and (max-width: 468px) {
//   font-size: 8px;
//   line-height: 14px;
//     }
// }`;