import React from 'react'
import Slider from "react-slick";
import box3_img from "../../../Assets/SectionComponent/Images/CoverSlider/Rectangle1372.png";
import Image from 'next/image';
import { ButtonSlider, CoverRt, MainContainer, TextRt } from './CoverSliderTheme3.style';

const CoverSlider3 = () => {
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
          <CoverRt >
            <Image src={box3_img} alt="img" />
            <TextRt>
              <h1>Top-right aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextRt>
          </CoverRt>
          <CoverRt >
            <Image src={box3_img} alt="img" />
            <TextRt>
              <h1>Top-right aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextRt>
          </CoverRt>
          <CoverRt >
            <Image src={box3_img} alt="img" />
            <TextRt>
              <h1>Top-right aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextRt>
          </CoverRt>
        </Slider>
        {/* <LeftVector src={vectorLt} alt="img" /> */}
        {/* <RightVector src={vectorRt} alt="img" /> */}
      </MainContainer>
    </div>
  )
}

export default CoverSlider3
