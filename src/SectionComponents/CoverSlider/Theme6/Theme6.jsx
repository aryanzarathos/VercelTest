import React from 'react'
import Slider from "react-slick";
import box6_img from "../../../Assets/SectionComponent/Images/CoverSlider/Rectangle1375.png";
import Image from 'next/image';
import { ButtonSlider, CoverRc, MainContainer, TextRc } from './CoverSliderTheme6.style';



const CoverSlider6 = () => {
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
          <CoverRc>
            <Image src={box6_img} alt="img" />
            <TextRc>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextRc>
          </CoverRc>
          <CoverRc>
            <Image src={box6_img} alt="img" />
            <TextRc>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextRc>
          </CoverRc>
          <CoverRc>
            <Image src={box6_img} alt="img" />
            <TextRc>
              <h1>Left-center aligned texts Top-center aligned texts</h1>
              <p >This is a paragraph. Click here to edit the text. It’s easy. Just
                click here to add your own content and make changes to it.</p>
              <ButtonSlider className='button'>Button</ButtonSlider>
            </TextRc>
          </CoverRc>
        </Slider>
        {/* <LeftVector src={vectorLt} alt="img" /> */}
        {/* <RightVector src={vectorRt} alt="img" /> */}
      </MainContainer>
    </div>
  )
}

export default CoverSlider6
