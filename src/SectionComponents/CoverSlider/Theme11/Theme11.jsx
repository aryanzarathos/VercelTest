import React from 'react'
import Slider from "react-slick";
import box11_img from "../../../Assets/SectionComponent/Images/CoverSlider/Rectangle1380.png";
import styled from 'styled-components';
import Image from 'next/image';
import { CoverImgMedium } from './CoverSliderTheme11.style';


const CoverSlider11 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <CoverImgMedium>
        <Slider {...settings}>
          <Image src={box11_img} alt='img' />
          <Image src={box11_img} alt='img' />
          <Image src={box11_img} alt='img' />
        </Slider>
      </CoverImgMedium>
    </div>
  )
}

export default CoverSlider11
