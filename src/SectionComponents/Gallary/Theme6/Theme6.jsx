import React from "react";
import gallary13 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary13.png";
import gallary14 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary14.png";
import gallary15 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary15.png";
// import gallary16 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary16.png";
import gallary17 from "../../../Assets/SectionComponent/Images/Gallery/newgallary/gallary17.png";
import Image from "next/image";
import big from "../../../Assets/SectionComponent/Images/Gallery/newgallary/big.PNG";
import { HeaderText, MainContent, MainImage, MainSection } from "./GallaryTheme6.style";

const GallaryData = [
  {
    id: 1,
    img: gallary13,
  },
  {
    id: 2,
    img: gallary14,
  },
  {
    id: 3,
    img: gallary15,
  },
  {
    id: 4,
    img: big,
  },
  {
    id: 5,
    img: gallary17,
  },
];

const GallaryTheme6 = () => {

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
          {GallaryData.map((value) => {
            const { id, img } = value;
            return (
              <>
                <MainImage key={id}>
                  <Image src={img} alt="gallary data" />
                </MainImage>
              </>
            );
          })}
        </MainContent>
      </MainSection>
    </>
  );
};

export default GallaryTheme6;
