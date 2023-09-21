import React from 'react';
import Slider from "react-slick";
import image3 from '../../../Assets/SectionComponent/Images/Testimonial/Ellipse620.png'
import Quote from '../../../Assets/SectionComponent/Images/Testimonial/quote-black.svg'
import Image from 'next/image';
import { BlockTitle, CardContainer1, CardImgcontainer, Container4, Containers, NameContainer, ProfileContainer } from './TestimonialTheme4.style';


const TestimonialTheme4 = () => {

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
    <Container4>
      <Containers>


        <BlockTitle>
          <h1>Block title</h1>
          <p>This is a block description. To edit, click and type the text or replace it with your own
            custom content</p>
        </BlockTitle>
        <Slider {...setting}>
          <div className="CardMain">
            <CardContainer1>
              <ProfileContainer>
                <CardImgcontainer>
                  <Image src={image3} alt="img" />
                </CardImgcontainer>
                <NameContainer>
                  <h2 className="Name">Charles Patterson</h2>
                  <p className="organization">Paypal</p>
                </NameContainer>
                <Quote />
              </ProfileContainer>
              <p className="cardText">This is a testimonial. Editing your testimonial is
                easy. Simply highlight the text and replace it with
                your own.</p>
            </CardContainer1>
          </div>
          <div className="CardMain">
            <CardContainer1>
              <ProfileContainer>
                <CardImgcontainer>
                  <Image src={image3} alt="img" />
                </CardImgcontainer>
                <NameContainer>
                  <h2 className="Name">Charles Patterson</h2>
                  <p className="organization">Paypal</p>
                </NameContainer>
                <Quote />
              </ProfileContainer>
              <p className="cardText">This is a testimonial. Editing your testimonial is
                easy. Simply highlight the text and replace it with
                your own.</p>
            </CardContainer1>
          </div>
          <div className="CardMain">
            <CardContainer1>
              <ProfileContainer>
                <CardImgcontainer>
                  <Image src={image3} alt="img" />
                </CardImgcontainer>
                <NameContainer>
                  <h2 className="Name">Charles Patterson</h2>
                  <p className="organization">Paypal</p>
                </NameContainer>
                <Quote fill={"red"} />
              </ProfileContainer>
              <p className="cardText">This is a testimonial. Editing your testimonial is
                easy. Simply highlight the text and replace it with
                your own.</p>
            </CardContainer1>
          </div>
          <div className="CardMain">
            <CardContainer1>
              <ProfileContainer>
                <CardImgcontainer>
                  <Image src={image3} alt="img" />
                </CardImgcontainer>
                <NameContainer>
                  <h2 className="Name">Charles Patterson</h2>
                  <p className="organization">Paypal</p>
                </NameContainer>
                <Quote />
              </ProfileContainer>
              <p className="cardText">This is a testimonial. Editing your testimonial is
                easy. Simply highlight the text and replace it with
                your own.</p>
            </CardContainer1>
          </div>
        </Slider>
      </Containers>
    </Container4>
  )
}

export default TestimonialTheme4;