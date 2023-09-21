import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Image from "next/image";
import gallary23 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary23.png";
import small from "../../../Assets/SectionComponent/Images/Gallery/newgallary/small.jpeg";
import { HeaderText, MainContent, MainImage, MainSection } from "./GallaryTheme3.style";

// object data
const GallaryData = [
  {
    id: 1,
    src: gallary23,
  },
  {
    id: 2,
    src: gallary23,
  },
  {
    id: 3,
    src: gallary23,
  },
  {
    id: 4,
    src: gallary23,
  },
  {
    id: 5,
    src: gallary23,
  },
  {
    id: 6,
    src: gallary23,
  },
  {
    id: 7,
    src: gallary23,
  },
];

const GallaryTheme3 = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    centerPadding: "180px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "100px",
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <MainSection>
      <HeaderText>
        <h3>GALLERY 4</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit, a.
        </p>
      </HeaderText>
      <MainContent>
        <Slider {...settings}>
          {GallaryData?.map((value) => {
            const { id, src } = value;
            return (
              <MainImage key={id}>
                <Image src={src} alt="slider_images" />
              </MainImage>
            );
          })}
        </Slider>
      </MainContent>
    </MainSection>
  );
};

export default GallaryTheme3;
