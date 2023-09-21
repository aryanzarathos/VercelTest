import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImage from "../../../../Assets/SectionComponent/Images/Banner/banner-hero.jpg";
import Image from "next/image";
import { SliderImage, BannerOverlay, BannerOverlayCaption } from './DesktopBanner.style'

const DesktopBanner = () => {
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
    <React.Fragment>
      <Slider {...settings}>
        {
          data ? (
            data.length ?
              data.map((item, key) => {
                return (
                  <React.Fragment key={key}>
                    <SliderImage itemProp={"440"}>
                      {true ?
                        <a target="_blank" rel="noreferrer" href={'#'}>
                          <Image src={BannerImage} alt="" />
                        </a>
                        :
                        <Image src={BannerImage} alt="" />
                      }

                      {
                        true ? (
                          <BannerOverlay>
                            <BannerOverlayCaption>
                              <h1>{"Back to School"}</h1>
                              <h3 >{"Welcome to all of our students"}</h3>
                              {/* <h3>{item.business_short_description ? item.business_short_description : "Welcome to all of our students"}</h3> */}
                            </BannerOverlayCaption>
                          </BannerOverlay>
                        ) :
                          ''
                      }

                    </SliderImage>
                  </React.Fragment>

                )
              }) : <React.Fragment>
                <SliderImage itemProp={"440"}>
                  <Image src={BannerImage} alt="" />

                  <BannerOverlay>
                    <BannerOverlayCaption>
                      <h1>Back to School</h1>
                      <h3>Welcome to all of our students</h3>
                    </BannerOverlayCaption>
                  </BannerOverlay>

                </SliderImage>
              </React.Fragment>) :
            <React.Fragment>
              <SliderImage itemProp={"440"}>
                <Image src={BannerImage} alt="" />

                <BannerOverlay>
                  <BannerOverlayCaption>
                    <h1>Back to School</h1>
                    <h3>Welcome to all of our students</h3>
                  </BannerOverlayCaption>
                </BannerOverlay>

              </SliderImage>
            </React.Fragment>
        }
      </Slider>
    </React.Fragment>
  )
}
export default DesktopBanner