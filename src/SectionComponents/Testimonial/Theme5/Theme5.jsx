import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import image5 from '../../../Assets/SectionComponent/Images/Testimonial/Ellipse620(1).png';
import image6 from '../../../Assets/SectionComponent/Images/Testimonial/Ellipse620(2).png';
import image7 from '../../../Assets/SectionComponent/Images/Testimonial/Ellipse620(3).png';
import image8 from '../../../Assets/SectionComponent/Images/Testimonial/Vector(5).png';
import Star from '../../../Assets/SectionComponent/Images/Testimonial/star.svg'
import { BlockTitle, CardContainer2, CardImgcontainer2, Container5, Containers, NameContainer2, ProfileContainer2, StarContainer, StarImg } from './TestimonialTheme5.style';

const TestimonialTheme5 = () => {
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
    <Container5>
      <Containers>

        <BlockTitle>
          <h1>Block title</h1>
          <p>This is a block description. To edit, click and type the text or replace it with your own
            custom content</p>
        </BlockTitle>
        <Slider {...setting}>
          <div className="CardMain">
            <CardContainer2>
              <ProfileContainer2>
                <CardImgcontainer2>
                  <Image src={image5} alt="img" />
                </CardImgcontainer2>
                <NameContainer2>
                  <h2 className="Name">Charles Patterson</h2>
                  <p className="organization">Paypal</p>
                </NameContainer2>
              </ProfileContainer2>
              <p className="cardText">This is a testimonial. Editing your testimonial is
                easy. Simply highlight the text and replace it with
                your own.</p>
              <StarContainer>
                {/* <StarImg src={image8} alt="img" />
              <StarImg src={image8} alt="img" />
              <StarImg src={image8} alt="img" />
              <StarImg src={image8} alt="img" />
              <StarImg src={image8} alt="img" /> */}
              </StarContainer>
            </CardContainer2>
          </div>
          <div className="CardMain">
            <CardContainer2>
              <ProfileContainer2>
                <CardImgcontainer2>
                  <Image src={image5} alt="img" />
                </CardImgcontainer2>
                <NameContainer2>
                  <h2 className="Name">Charles Patterson</h2>
                  <p className="organization">Paypal</p>
                </NameContainer2>
              </ProfileContainer2>
              <p className="cardText">This is a testimonial. Editing your testimonial is
                easy. Simply highlight the text and replace it with
                your own.</p>
              <StarContainer>
                <Image src={image8} alt="img" />
                <Image src={image8} alt="img" />
                <Image src={image8} alt="img" />
                <Image src={image8} alt="img" />
                <Image src={image8} alt="img" />
              </StarContainer>
            </CardContainer2>
          </div>
          <div className="CardMain">
            <CardContainer2>
              <ProfileContainer2>
                <CardImgcontainer2>
                  <Image src={image6} alt="img" />
                </CardImgcontainer2>
                <NameContainer2>
                  <h2 className="Name">Charles Patterson</h2>
                  <p className="organization">Paypal</p>
                </NameContainer2>
              </ProfileContainer2>
              <p className="cardText">This is a testimonial. Editing your testimonial is
                easy. Simply highlight the text and replace it with
                your own.</p>
              <StarContainer>
                <Image src={image8} alt="img" />
                <Image src={image8} alt="img" />
                <Image src={image8} alt="img" />
                <Image src={image8} alt="img" />
                <Image src={image8} alt="img" />
              </StarContainer>
            </CardContainer2>
          </div>
          <div className="CardMain">
            <CardContainer2>
              <ProfileContainer2>
                <CardImgcontainer2>
                  <Image src={image7} alt="img" />
                </CardImgcontainer2>
                <NameContainer2>
                  <h2 className="Name">Charles Patterson</h2>
                  <p className="organization">Paypal</p>
                </NameContainer2>
              </ProfileContainer2>
              <p className="cardText">This is a testimonial. Editing your testimonial is
                easy. Simply highlight the text and replace it with
                your own.</p>
              <StarContainer>
                <Star />
                <Image src={image8} alt="img" />
                <Image src={image8} alt="img" />
                <Image src={image8} alt="img" />
                <Image src={image8} alt="img" />
              </StarContainer>
            </CardContainer2>
          </div>
        </Slider>
      </Containers>
    </Container5>
  )
}

export default TestimonialTheme5;