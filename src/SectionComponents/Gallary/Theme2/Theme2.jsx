import React from "react";
import gallary1 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary1.PNG";
import gallary2 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary2.png";
import gallary3 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary3.png";
import gallary4 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary4.png";
import gallary5 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary5.PNG";
import gallary6 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary6.PNG";
import gallary7 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary7.PNG";
import gallary8 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary8.PNG";
import test from "../../../Assets/SectionComponent/Images/Gallery/newgallary/test.jpg";
import test2 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/test2.jpg";
import small from "../../../Assets/SectionComponent/Images/Gallery/newgallary/small.jpeg";
import big from "../../../Assets/SectionComponent/Images/Gallery/newgallary/big.PNG";
import Image from "next/image";
import { HeaderText, MainContent, MainImage, MainSection } from "./GallaryTheme2.style";

const GallaryData = [
  {
    id: 1,
    image: gallary1,
  },

  {
    id: 2,
    image: big,
  },
  {
    id: 3,
    image: gallary4,
  },
  {
    id: 4,
    image: gallary7,
  },
  {
    id: 5,
    image: gallary5,
  },
  {
    id: 6,
    image: gallary6,
  },
];

const GallaryTheme2 = () => {

  return (
    <>
      <MainSection>
        <HeaderText>
          <h3>GALLERY 2</h3>
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

export default GallaryTheme2;
