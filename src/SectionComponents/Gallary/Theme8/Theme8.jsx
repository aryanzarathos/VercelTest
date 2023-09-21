import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import gallary26 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary26.png";
import gallary25 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary25.png";
import gallary24 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary24.png";
import gallary23 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary23.png";
import { HeaderText, MainContent, MainImage, MainSection } from "./GallaryTheme8.style";


// object data
const GallaryData = [
  {
    id: 1,
    src: gallary26,
  },
  {
    id: 2,
    src: gallary25,
  },
  {
    id: 3,
    src: gallary24,
  },
  {
    id: 4,
    src: gallary23,
  },
  {
    id: 5,
    src: gallary25,
  },
  {
    id: 6,
    src: gallary24,
  },
  {
    id: 7,
    src: gallary25,
  },
];

const GallaryTheme8 = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // variableWidth: true,
  };

  return (
    <MainSection>
      <HeaderText>
        <h3>GALLERY 8</h3>
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

export default GallaryTheme8;
