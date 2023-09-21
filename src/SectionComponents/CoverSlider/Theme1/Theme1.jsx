import React from 'react'
import Slider from "react-slick";
import box1_img from "../../../Assets/SectionComponent/Images/CoverSlider/Rectangle1370.png";
import Image from 'next/image';
import { ButtonSlider, CoverLt, MainContainer, TextLt } from './CoverSliderTheme1.style';


const CoverSlider1 = () => {
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
          <CoverLt >
            <Image src={box1_img} alt="img" />
            <TextLt>
              <h1>Top-left aligned texts hfs fsk wifjij skn skj eghd fsk fioe fs euid skji fjh </h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it. </p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextLt>
          </CoverLt>
          <CoverLt >
            <Image src={box1_img} alt="img" />
            <TextLt>
              <h1>Top-left aligned texts hfs fsk wifjij skn skj eghd fsk fioe fs euid skji fjh </h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it. </p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextLt>
          </CoverLt>
          <CoverLt >
            <Image src={box1_img} alt="img" />
            <TextLt>
              <h1>Top-left aligned texts hfs fsk wifjij skn skj eghd fsk fioe fs euid skji fjh </h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it. </p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextLt>
          </CoverLt>
        </Slider>

      </MainContainer>
    </div>
  )
}

export default CoverSlider1
