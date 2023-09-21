import React from 'react'
import Slider from "react-slick";
import box7_img from "../../../Assets/SectionComponent/Images/CoverSlider/Rectangle1376.png";
import styled from 'styled-components';
import Image from 'next/image';
import { ButtonSlider, CoverLb, MainContainer, TextLb } from './CoverSliderTheme7.style';



const CoverSlider7 = () => {
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
          <CoverLb>
            <Image src={box7_img} alt="img" />
            <TextLb>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextLb>
          </CoverLb>
          <CoverLb>
            <Image src={box7_img} alt="img" />
            <TextLb>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextLb>
          </CoverLb>
          <CoverLb>
            <Image src={box7_img} alt="img" />
            <TextLb>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextLb>
          </CoverLb>
        </Slider>
        {/* <LeftVector src={vectorLt} alt="img" /> */}
        {/* <RightVector src={vectorRt} alt="img" /> */}
      </MainContainer>
    </div>
  )
}

export default CoverSlider7
