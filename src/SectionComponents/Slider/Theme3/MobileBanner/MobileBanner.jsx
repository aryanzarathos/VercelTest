import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImage from "../../../../Assets/SectionComponent/Images/Banner/banner-hero.jpg";
import Image from "next/image";
import { SliderImage, BannerOverlay, BannerOverlayCaption } from './MobileBanner.style'

const MobileBanner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  const data = [
    { img: BannerImage },
    { img: BannerImage },
    { img: BannerImage },
  ]

  return (
    <Slider {...settings}>
      {
        data ? (
          data.length ?
            data.map((item, key) => {
              return (
                <React.Fragment key={key}>
                  <SliderImage imgHeight={false ? '480' : 'auto'} >
                    {true ?
                      <a href={'#'} target="_blank" rel="noreferrer">
                        <Image src={BannerImage} alt="" crossOrigin='anonymous' />
                      </a>
                      :
                      <Image src={BannerImage} alt="" crossOrigin='anonymous' />
                    }
                    {
                      true ?
                        <BannerOverlay>
                          <BannerOverlayCaption>
                            <h1>{"Back to School"}</h1>
                            <h3 >{"Welcome to all of our students"}</h3>
                          </BannerOverlayCaption>
                        </BannerOverlay>
                        :
                        ''
                    }
                  </SliderImage>
                </React.Fragment>
              )
            }) : "") : ""
      }
    </Slider>
  )
}
export default MobileBanner