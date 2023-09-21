import React from 'react'
import Slider from "react-slick";
import image1 from '../../../Assets/SectionComponent/Images/Testimonial/Ellipse616.png'
import Quote from '../../../Assets/SectionComponent/Images/Testimonial/whiteQuote.svg'
import Image from 'next/image';
import { AboutContainer, BlockTitle, ClientContainer, Containers, ImageContainer, QuatationMark, QuatationMarkContainer } from './TestimonialTheme1.style';


const TestimonialTheme1 = () => {

  const settingss = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <Containers>
      <BlockTitle>
        <h1>Block title</h1>
        <p>This is a block description. To edit, click and type the text or replace it with your own
          custom content</p>
      </BlockTitle>

      <Slider {...settingss}>
        <div className="CardMain">
          <ClientContainer>
            <ImageContainer>
              <Image src={image1} alt="img" />
              <QuatationMarkContainer>
                <QuatationMark>
                  <Quote />
                </QuatationMark>
              </QuatationMarkContainer>

            </ImageContainer>
            <AboutContainer>
              <h3 className="Name">Client name</h3>
              <p className='About'>This is a testimonial. Editing your testimonial is easy. Simply highlight the text and replace it with your own
                content. Use this testimonial to highlight your professional experience, customer satisfaction and their
                reviews for your services and products</p>
            </AboutContainer>
          </ClientContainer>
        </div>
        <div className="CardMain">
          <ClientContainer>
            <ImageContainer>
              <Image src={image1} alt="img" />
              <QuatationMarkContainer>
                <QuatationMark>
                  <Quote />
                </QuatationMark>
              </QuatationMarkContainer>
            </ImageContainer>
            <AboutContainer>
              <h3 className="Name">Client name</h3>
              <p className='About'>This is a testimonial. Editing your testimonial is easy. Simply highlight the text and replace it with your own
                content. Use this testimonial to highlight your professional experience, customer satisfaction and their
                reviews for your services and products</p>
            </AboutContainer>
          </ClientContainer>
        </div>
        <div className="CardMain">
          <ClientContainer>
            <ImageContainer>
              <Image src={image1} alt="img" />
              <QuatationMarkContainer>
                <QuatationMark>
                  <Quote />
                </QuatationMark>
              </QuatationMarkContainer>
            </ImageContainer>
            <AboutContainer>
              <h3 className="Name">Client name</h3>
              <p className='About'>This is a testimonial. Editing your testimonial is easy. Simply highlight the text and replace it with your own
                content. Use this testimonial to highlight your professional experience, customer satisfaction and their
                reviews for your services and products</p>
            </AboutContainer>
          </ClientContainer>
        </div>
      </Slider>
    </Containers>

  )
}

export default TestimonialTheme1
