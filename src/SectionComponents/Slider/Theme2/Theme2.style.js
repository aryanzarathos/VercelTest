import styled from "styled-components";

export const BannerMainContainer = styled.div`
width: ${({ item }) => item.desktop.width};
position: ${({ item }) => item.desktop.position};
margin: ${({ item }) => item.desktop.margin};
padding: ${({ item }) => item.desktop.padding};
min-width: 1px;


 swiper-container::part(button-prev) {
  color: ${({ sliderStyle }) => sliderStyle.arrowColor};
  &::after {
    width:100%;
  }
}

swiper-container::part(button-next) {
  color:${({ sliderStyle }) => sliderStyle.arrowColor};
  &::after {
    width:100%;
  }
} 

.swiper-button-prev {
  color: ${({ sliderStyle }) => sliderStyle.arrowColor};

  &::after {
    width:100%;
  }
} 

 .swiper-button-next {
  color: ${({ sliderStyle }) => sliderStyle.arrowColor};

  &::after {
    width:100%;
  }
} 

.swiper-pagination {
  .swiper-pagination-bullet{
    width: 10px;
    height: 10px;
    background:  ${({ sliderStyle }) => sliderStyle.dotsColor};
  }
}


     video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    } 
  



/* /* 
.slick-dots {
  right: ${({ item }) => item.desktop.slick.right};
  text-align: ${({ item }) => item.desktop.slick.textAlign};
  top: ${({ item }) => item.desktop.slick.top};
  display: ${({ item }) => item.desktop.slick.display} !important;
  flex-direction: ${({ item }) => item.desktop.slick.flexDirection};
  gap: ${({ item }) => item.desktop.slick.gap};
  align-items: ${({ item }) => item.desktop.slick.alignItems};
  padding-right: ${({ item }) => item.desktop.slick.paddingRight};

  @media screen and (max-width: 425px) {
      left:  ${({ item }) => item.mobile.slick.left};
      top:   ${({ item }) => item.mobile.slick.top};
  }
} */


.slick-vertical .slick-slide {
  border: ${({ item }) => item.desktop.slick.slickVerticalBorder};

}

.slick-list {
  .slick-track {
    height: 100% !important;
  }
}


.slick-dots li button:before {
  font-size: ${({ item }) => item.desktop.buttonBefore.fontSize};
  border: ${({ item }) => item.desktop.buttonBefore.border};
  border-radius: ${({ item }) => item.desktop.buttonBefore.borderRadius};
  position: ${({ item }) => item.desktop.buttonBefore.position};
  color:  ${({ item }) => item.desktop.buttonBefore.color};
  width: ${({ item }) => item.desktop.buttonBefore.width};
  height: ${({ item }) => item.desktop.buttonBefore.height};
}

.slick-dots li.slick-active button:before {
  color:  ${({ item }) => item.desktop.slick.sickDotColor};
} 

/* .slick-dots li button:before {

} */
`;

export const ImgWraper = styled.div`
  width: ${({ item }) => item.desktop.width};
  min-height: ${({ item }) => item.desktop.height};
  height: ${({ imgHeight }) => imgHeight};
  margin: ${({ item }) => item.desktop.margin};
  position: ${({ item }) => item.desktop.position};
  background: ${({ backgroundColor }) => backgroundColor};
  /* img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */
// this is temp changes to adjust the image height
  @media(max-width:768px) {
    height: auto;
  }
`;

export const ContentWrapper = styled.div`
/* position: absolute;
top:0;
left:0 ;
right: 0;
width: 100%; */
/* margin-left: 100px;
margin-right: 100px;
margin-top: 47px;
margin-bottom: 47px; */
/* max-width: 500px;
z-index: 2;
display:grid;
align-items :center ;
background: red; */
margin-left: ${({ style }) => style.desktop.marginLeft} ;
margin-right: ${({ style }) => style.desktop.marginRight} ;
margin-top: ${({ style }) => style.desktop.marginTop} ;
margin-Bottom: ${({ style }) => style.desktop.marginBottom} ;
max-width: ${({ style }) => style.desktop.maxWidth};

@media(max-width:1024px) {
  max-width: ${({ style }) => style.tablet?.maxWidth};
}

@media(max-width:768px) {
  max-width: ${({ style }) => style.mobile?.maxWidth};
}

`

export const Opacity = styled.div`
position: ${({ item }) => item.desktop?.position};
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, ${({ opacityValue }) => opacityValue});

display: ${({ item }) => item.desktop.display};
align-items: ${({ verticalAlign }) => verticalAlign};
`;