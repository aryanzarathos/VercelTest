import React from 'react'
import Slider from "react-slick";
import box5_img from "../../../Assets/SectionComponent/Images/CoverSlider/Rectangle1374.png";
import styled from 'styled-components';
import Image from 'next/image';
import { ButtonSlider, CoverCt, MainContainer, TextCt } from './CoverSliderTheme5.style';


const CoverSlider5 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <MainContainer>
        <Slider {...settings}>
          <CoverCt>
            <Image src={box5_img} alt="img" />
            <TextCt>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextCt>
          </CoverCt>
          <CoverCt>
            <Image src={box5_img} alt="img" />
            <TextCt>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextCt>
          </CoverCt>
          <CoverCt>
            <Image src={box5_img} alt="img" />
            <TextCt>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextCt>
          </CoverCt>
        </Slider>
        {/* <LeftVector src={vectorLt} alt="img" /> */}
        {/* <RightVector src={vectorRt} alt="img" /> */}
      </MainContainer>
    </div>
  )
}

export default CoverSlider5
