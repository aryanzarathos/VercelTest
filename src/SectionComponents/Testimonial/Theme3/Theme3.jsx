import React from 'react';
import Slider from "react-slick";
import image1 from '../../../Assets/SectionComponent/Images/Testimonial/Ellipse616.png'
import Quote from '../../../Assets/SectionComponent/Images/Testimonial/whiteQuote.svg'
import Image from 'next/image';
import { AboutContainer3, BlockTitle, ClientContainer3, Container3, Containers, ImageContainer, QuatationMark, QuatationMarkContainer } from './TestimonialTheme3.style';



const TestimonialTheme3 = () => {

  var setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (

    <Container3>
      <Containers>

        <BlockTitle>
          <h1>Block title</h1>
          <p>This is a block description. To edit, click and type the text or replace it with your own
            custom content</p>
        </BlockTitle>
        <Slider {...setting}>
          <div className="CardMain">
            <ClientContainer3>
              <ImageContainer>
                <Image className='InnerImg' src={image1} alt="img" />
                <QuatationMarkContainer>
                  <QuatationMark>
                    <Quote />
                  </QuatationMark>
                </QuatationMarkContainer>
              </ImageContainer>
              <AboutContainer3>
                <h3 className="Name">Client name</h3>
                <p className='About'>This is a testimonial. Editing your testimonial is easy. Simply highlight the text and replace it with your own</p>
              </AboutContainer3>
            </ClientContainer3>
          </div>
          <div className="CardMain">
            <ClientContainer3>
              <ImageContainer>
                <Image src={image1} alt="img" />
                <QuatationMarkContainer>
                  <QuatationMark>
                    <Quote />
                  </QuatationMark>
                </QuatationMarkContainer>
              </ImageContainer>
              <AboutContainer3>
                <h3 className="Name">Client name</h3>
                <p className='About'>This is a testimonial. Editing your testimonial is easy. Simply highlight the text and replace it with your own</p>
              </AboutContainer3>
            </ClientContainer3>
          </div>

          <div className="CardMain">
            <ClientContainer3>
              <ImageContainer>
                <Image src={image1} alt="img" />
                <QuatationMarkContainer>
                  <QuatationMark>
                    <Quote />
                  </QuatationMark>
                </QuatationMarkContainer>
              </ImageContainer>
              <AboutContainer3>
                <h3 className="Name">Client name</h3>
                <p className='About'>This is a testimonial. Editing your testimonial is easy. Simply highlight the text and replace it with your own</p>
              </AboutContainer3>
            </ClientContainer3>
          </div>
          <div className="CardMain">
            <ClientContainer3>
              <ImageContainer>
                <Image src={image1} alt="img" />
                <QuatationMarkContainer>
                  <QuatationMark>
                    <Quote />
                  </QuatationMark>
                </QuatationMarkContainer>
              </ImageContainer>
              <AboutContainer3>
                <h3 className="Name">Client name</h3>
                <p className='About'>This is a testimonial. Editing your testimonial is easy. Simply highlight the text and replace it with your own</p>
              </AboutContainer3>
            </ClientContainer3>
          </div>
        </Slider>
      </Containers>
    </Container3>
  )
}

export default TestimonialTheme3;