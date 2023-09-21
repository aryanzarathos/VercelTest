import React from "react";
import styled from "styled-components";
import gallary9 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary9.PNG";
import gallary10 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary10.PNG";
import gallary11 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary11.PNG";
import gallary12 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary12.PNG";
import test from "../../../Assets/SectionComponent/Images/Gallery/newgallary/test.jpg";
import test2 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/test2.jpg";
import small from "../../../Assets/SectionComponent/Images/Gallery/newgallary/small.jpeg";
import big from "../../../Assets/SectionComponent/Images/Gallery/newgallary/big.PNG";
import Image from "next/image";
import { HeaderText, MainContent, MainImage, MainSection } from "./GallaryTheme4.style";

const GallaryData = [
  {
    id: 1,
    image: gallary9,
  },

  {
    id: 2,
    image: gallary10,
  },
  {
    id: 3,
    image: small,
  },
  {
    id: 4,
    image: gallary12,
  },
];

const GallaryTheme4 = () => {

  return (
    <>
      <MainSection>
        <HeaderText>
          <h3>GALLERY 4</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit, a.
          </p>
        </HeaderText>
        <MainContent>
          {GallaryData?.map((value) => {
            const { image, id } = value;
            return (
              <>
                <MainImage key={id}>
                  <Image src={image} alt="gallary-image" />
                </MainImage>
              </>
            );
          })}
        </MainContent>
      </MainSection>
    </>
  );
};

export default GallaryTheme4;
