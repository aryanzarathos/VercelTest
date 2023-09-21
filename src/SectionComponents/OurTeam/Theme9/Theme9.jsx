import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import image19 from '../../../Assets/SectionComponent/Images/OurTeam/Ellipse612.png';
import image20 from '../../../Assets/SectionComponent/Images/OurTeam/Ellipse613.png';
import image21 from '../../../Assets/SectionComponent/Images/OurTeam/Ellipse614.png';
import image22 from '../../../Assets/SectionComponent/Images/OurTeam/Ellipse615.png';
import Image from 'next/image';
import { ImageContainerEight, ImageSectionEight, NameEight, OurTeamContainerEight, PositionEight } from './OurTeamTheme9.style';


const OurTeamTheme9 = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
    <OurTeamContainerEight>
      <Slider {...settings}>
        <ImageSectionEight>
          <ImageContainerEight>
            <Image src={image19} alt="" />
          </ImageContainerEight>
          <NameEight>Scarlet Jhonson</NameEight>
          <PositionEight>CEO</PositionEight>
        </ImageSectionEight>
        <ImageSectionEight>
          <ImageContainerEight>
            <Image src={image20} alt="" />
          </ImageContainerEight>
          <NameEight>Scarlet Jhonson</NameEight>
          <PositionEight>CEO</PositionEight>
        </ImageSectionEight>

        <ImageSectionEight>
          <ImageContainerEight>
            <Image src={image21} alt="" />
          </ImageContainerEight>
          <NameEight>Scarlet Jhonson</NameEight>
          <PositionEight>CEO</PositionEight>
        </ImageSectionEight>

        <ImageSectionEight>
          <ImageContainerEight>
            <Image src={image22} alt="" />
          </ImageContainerEight>
          <NameEight>Scarlet Jhonson</NameEight>
          <PositionEight>CEO</PositionEight>
        </ImageSectionEight>
      </Slider>
    </OurTeamContainerEight>
  )
}

export default OurTeamTheme9