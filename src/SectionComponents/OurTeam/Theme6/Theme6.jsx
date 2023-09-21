import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
import image14 from '../../../Assets/SectionComponent/Images/OurTeam/Rectangle1352.png';
import image15 from '../../../Assets/SectionComponent/Images/OurTeam/Rectangle1353.png';
import image16 from '../../../Assets/SectionComponent/Images/OurTeam/Rectangle1354.png';
import { ImageContainerFive, ImageSectionFive, NameFive, OurTeamContainerFive, PositionFive } from './OurTeamTheme6.style';




const OurTeamTheme6 = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    centerPadding: 10,
    slidesToScroll: 3,
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
    <OurTeamContainerFive>
      <Slider {...settings}>
        <ImageSectionFive>
          <ImageContainerFive>
            <Image src={image14} alt="img" />
          </ImageContainerFive>
          <NameFive>James Puddy</NameFive>
          <PositionFive>CEO</PositionFive>
        </ImageSectionFive>
        <ImageSectionFive>
          <ImageContainerFive>
            <Image src={image15} alt="img" />
          </ImageContainerFive>
          <NameFive>James Puddy</NameFive>
          <PositionFive>CEO</PositionFive>
        </ImageSectionFive>
        <ImageSectionFive>
          <ImageContainerFive>
            <Image src={image16} alt="img" />
          </ImageContainerFive>
          <NameFive>James Puddy</NameFive>
          <PositionFive>CEO</PositionFive>
        </ImageSectionFive>
      </Slider>
    </OurTeamContainerFive>
  )
}

export default OurTeamTheme6;