import Image from "next/image";
import React from "react";
import gallary19 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary19.png";
import gallary18 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary18.png";
import gallary20 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary20.png";
import gallary21 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary21.png";
import gallary22 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary22.png";
import { HeaderText, MainContent, MainImage, MainSection } from "./GallaryTheme7.style";

const GallaryData = [
  {
    id: 1,
    image: gallary19,
  },
  {
    id: 2,
    image: gallary18,
  },
  {
    id: 3,
    image: gallary20,
  },
  {
    id: 4,
    image: gallary21,
  },
  {
    id: 5,
    image: gallary22,
  },
];
const GallaryTheme7 = () => {

  return (
    <>
      <MainSection>
        <HeaderText>
          <h3>GALLERY 7</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit, a.
          </p>
        </HeaderText>
        <MainContent>
          {GallaryData.map((value) => {
            const { id, image } = value;
            return (
              <>
                <MainImage key={id}>
                  <Image src={image} alt="gallary-images" />
                </MainImage>
              </>
            );
          })}
        </MainContent>
      </MainSection>
    </>
  );
};

export default GallaryTheme7;
