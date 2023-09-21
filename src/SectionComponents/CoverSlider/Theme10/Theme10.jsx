import React from 'react'
import Slider from "react-slick";
import box10_img from "../../../Assets/SectionComponent/Images/CoverSlider/Rectangle1379.png";
import Image from 'next/image';
import { CoverImgSmall } from './CoverSliderTheme10.style';


const CoverSlider10 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <CoverImgSmall>
        <Slider {...settings}>
          <Image src={box10_img} alt='img' />
          <Image src={box10_img} alt='img' />
          <Image src={box10_img} alt='img' />
          <Image src={box10_img} alt='img' />

        </Slider>
      </CoverImgSmall>
    </div>
  )
}

export default CoverSlider10
