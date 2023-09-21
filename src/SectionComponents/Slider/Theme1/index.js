/* eslint-disable jsx-a11y/no-distracting-elements */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImage from "../../../Assets/SectionComponent/Images/Banner/banner1.jpg";
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
// import AppLink from "../../../../../../Common/AppLink";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';
import { Banner, SliderImage } from "./indexTheme1.style";

const SliderTheme1 = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Banner>
    <React.Fragment>
      <Slider {...settings}>
          <SliderImage>
            <Link href="#">
              <Image src={BannerImage} alt="" />
            </Link>
          </SliderImage>
          <SliderImage>
            <Link href="#">
              <Image src={BannerImage} alt="" />
            </Link>
          </SliderImage>
          <SliderImage>
            <Link href="#">
              <Image src={BannerImage} alt="" />
            </Link>
          </SliderImage>
      </Slider>
        </React.Fragment>

    </Banner >
  )
}

export default SliderTheme1