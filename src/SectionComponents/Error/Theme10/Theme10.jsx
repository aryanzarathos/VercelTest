import React from "react";
import Image from "next/image";
import styled from "styled-components";
import error_one from "../../../Assets/SectionComponent/Images/Error/error_one.png";
import error_two from "../../../Assets/SectionComponent/Images/Error/error_two.png";
import error_three from "../../../Assets/SectionComponent/Images/Error/error_three.png";
import error_four from "../../../Assets/SectionComponent/Images/Error/error_four.png";
import error_five from "../../../Assets/SectionComponent/Images/Error/error_five.png";
import error_six from "../../../Assets/SectionComponent/Images/Error/error_six.png";
import error_seven from "../../../Assets/SectionComponent/Images/Error/error_seven.png";
import error_eight from "../../../Assets/SectionComponent/Images/Error/error_eight.png";
import error_fifteen from "../../../Assets/SectionComponent/Images/Error/error_fifteen.png";
import error_nine from "../../../Assets/SectionComponent/Images/Error/error_nine.png";
import error_ten from "../../../Assets/SectionComponent/Images/Error/error_ten.png";
import error_elven from "../../../Assets/SectionComponent/Images/Error/error_elven.png";
import error_fourteen from "../../../Assets/SectionComponent/Images/Error/error_fourteen.png";
import { Button, MainContent, MainImage, MainSection } from "./ErrorTheme10.style";

// import { Container } from "../../../SectionCommon/Containers/Container.styled";

const ErrorTheme10 = () => {

  return (
    <MainSection>
      <MainImage>
        {/* <Image src={error_three} alt="404 image" /> */}
        {/* <Image src={error_one} alt="404 image" /> */}
        {/* <Image src={error_two} alt="404 image" /> */}
        {/* <Image src={error_four} alt="404 image" /> */}
        {/* <Image src={error_five} alt="404 image" /> */}
        {/* <Image src={error_six} alt="404 image" /> */}
        {/* <Image src={error_seven} alt="404 image" /> */}
        {/* <Image src={error_eight} alt="404 image" /> */}
        {/* <Image src={error_nine} alt="404 image" /> */}
        <Image src={error_ten} alt="404 image" />
        {/* <Image src={error_elven} alt="404 image" /> */}
        {/* <Image src={error_fifteen} alt="404 image" /> */}
        {/* <Image src={error_fourteen} alt="404 image" /> */}
      </MainImage>
      <MainContent>
        <h2>Oh no. We lost this page</h2>
        <p>
          We searched everywhere but couldn’t find what you’re looking for.
          Let’s find a better place for you to go.
        </p>
        <Button> Back to home</Button>
      </MainContent>
    </MainSection>
  );
};

export default ErrorTheme10;
