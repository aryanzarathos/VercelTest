import React from 'react'
import Slider from "react-slick";
import box8_img from "../../../Assets/SectionComponent/Images/CoverSlider/Rectangle1377.png";
import Image from 'next/image';
import { ButtonSlider, CoverCb, MainContainer, TextCb } from './CoverSliderTheme8.style';

const CoverSlider8 = () => {
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
          <CoverCb>
            <Image src={box8_img} alt="img" />
            <TextCb>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextCb>

          </CoverCb>
          <CoverCb>
            <Image src={box8_img} alt="img" />
            <TextCb>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextCb>
          </CoverCb>

          <CoverCb>
            <Image src={box8_img} alt="img" />
            <TextCb>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextCb>
          </CoverCb>
        </Slider>
        {/* <LeftVector src={vectorLt} alt="img" /> */}
        {/* <RightVector src={vectorRt} alt="img" /> */}
      </MainContainer>
    </div>
  )
}

export default CoverSlider8
