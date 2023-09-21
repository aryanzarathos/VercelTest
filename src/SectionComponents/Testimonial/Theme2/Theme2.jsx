import React from 'react';
import Slider from "react-slick";
import image1 from '../../../Assets/SectionComponent/Images/Testimonial/Ellipse616.png'
import Quote from '../../../Assets/SectionComponent/Images/Testimonial/whiteQuote.svg'
import Image from 'next/image';
import { AboutContainer2, BlockTitle, ClientContainer2, Container2, ImageContainer, QuatationMark, QuatationMarkContainer } from './TestimonialTheme2.style';



const TestimonialTheme2 = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };




  return (
    <Container2>
      <BlockTitle>
        <h1>Block title</h1>
        <p>This is a block description. To edit, click and type the text or replace it with your own
          custom content</p>
      </BlockTitle>
      <Slider {...settings}>
        <div className="Cardmain">
          <ClientContainer2>
            <ImageContainer>
              <Image className='InnerImg' src={image1} alt="img" />
              <QuatationMarkContainer>
                <QuatationMark>
                  <Quote />
                </QuatationMark>
              </QuatationMarkContainer>
            </ImageContainer>
            <AboutContainer2>
              <h3 className="Name">Client name</h3>
              <p className='About'>This is a testimonial. Editing your testimonial is easy. Simply highlight the text and replace it with your own</p>
            </AboutContainer2>
          </ClientContainer2>
        </div>
        <div className="Cardmain">
          <ClientContainer2>
            <ImageContainer>
              <Image className='InnerImg' src={image1} alt="img" />
              <QuatationMarkContainer>
                <QuatationMark>
                  <Quote />
                </QuatationMark>
              </QuatationMarkContainer>
            </ImageContainer>
            <AboutContainer2>
              <h3 className="Name">Client name</h3>
              <p className='About'>This is a testimonial. Editing your testimonial is easy. Simply highlight the text and replace it with your own</p>
            </AboutContainer2>
          </ClientContainer2>
        </div>
        <div className="CardMain">
          <ClientContainer2>
            <ImageContainer>
              <Image src={image1} alt="img" />
              <QuatationMarkContainer>
                <QuatationMark>
                  <Quote />
                </QuatationMark>
              </QuatationMarkContainer>
            </ImageContainer>
            <AboutContainer2>
              <h3 className="Name">Client name</h3>
              <p className='About'>This is a testimonial. Editing your testimonial is easy. Simply highlight the text and replace it with your own</p>
            </AboutContainer2>
          </ClientContainer2>
        </div>
      </Slider>
    </Container2>
  )
}

export default TestimonialTheme2;