import React from 'react'
import Slider from "react-slick";
import box2_img from "../../../Assets/SectionComponent/Images/CoverSlider/Rectangle1371.png";
import Image from 'next/image';
import { ButtonSlider, CoverCt, MainContainer, TextCt } from './CoverSliderTheme2.style';


const CoverSlider2 = () => {
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
          <CoverCt >
            <Image src={box2_img} alt="img" />
            <TextCt>
              <h1>Top-center aligned texts Top-center aligned texts</h1>

              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextCt>
          </CoverCt>
          <CoverCt >
            <Image src={box2_img} alt="img" />
            <TextCt>
              <h1>Top-center aligned texts Top-center aligned texts</h1>

              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextCt>
          </CoverCt>
          <CoverCt >
            <Image src={box2_img} alt="img" />
            <TextCt>
              <h1>Top-center aligned texts Top-center aligned texts</h1>

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

export default CoverSlider2
