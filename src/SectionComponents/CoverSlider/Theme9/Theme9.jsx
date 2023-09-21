import React from 'react'
import Slider from "react-slick";
import box9_img from "../../../Assets/SectionComponent/Images/CoverSlider/Rectangle1378.png";
import Image from 'next/image';
import { ButtonSlider, CoverRb, MainContainer, TextRb } from './CoverSliderTheme9.style';


const CoverSlider9 = () => {
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
          <CoverRb>
            <Image src={box9_img} alt="img" />
            <TextRb>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it. </p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextRb>
          </CoverRb>
          <CoverRb>
            <Image src={box9_img} alt="img" />
            <TextRb>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it. </p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextRb>
          </CoverRb>
          <CoverRb>
            <Image src={box9_img} alt="img" />
            <TextRb>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it. </p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextRb>
          </CoverRb>
        </Slider>
        {/* <LeftVector src={vectorLt} alt="img" /> */}
        {/* <RightVector src={vectorRt} alt="img" /> */}
      </MainContainer>
    </div>
  )
}

export default CoverSlider9
