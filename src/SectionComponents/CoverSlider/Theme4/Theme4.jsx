import React from 'react'
import Slider from "react-slick";
import box4_img from "../../../Assets/SectionComponent/Images/CoverSlider/Rectangle1373.png";
import Image from 'next/image';
import { ButtonSlider, CoverLc, MainContainer, TextLc } from './CoverSliderTheme4.style';

<style>
  @import url(`https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap`);
</style>

const CoverSlider4 = () => {
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
          <CoverLc>
            <Image src={box4_img} alt="img" />
            <TextLc>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextLc>
          </CoverLc>
          <CoverLc>
            <Image src={box4_img} alt="img" />
            <TextLc>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextLc>
          </CoverLc>
          <CoverLc>
            <Image src={box4_img} alt="img" />
            <TextLc>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextLc>
          </CoverLc>
        </Slider>
        {/* <LeftVector src={vectorLt} alt="img" /> */}
        {/* <RightVector src={vectorRt} alt="img" /> */}
      </MainContainer>
    </div>
  )
}

export default CoverSlider4
