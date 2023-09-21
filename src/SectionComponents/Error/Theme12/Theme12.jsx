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
import error_nine from "../../../Assets/SectionComponent/Images/Error/error_nine.png";
import error_ten from "../../../Assets/SectionComponent/Images/Error/error_ten.png";
import error_elven from "../../../Assets/SectionComponent/Images/Error/error_elven.png";
import error_elven_one from "../../../Assets/SectionComponent/Images/Error/error_elven_one.png";
import error_elven_two from "../../../Assets/SectionComponent/Images/Error/error_elven_two.png";
import error_elven_three from "../../../Assets/SectionComponent/Images/Error/error_elven_three.png";
import error_fifteen from "../../../Assets/SectionComponent/Images/Error/error_fifteen.png";
import error_telvwe from "../../../Assets/SectionComponent/Images/Error/error_telvwe.png";
import BackBtn from "../../../Assets/SectionComponent/Images/Error/backBtn.svg";
import { Button, MainContent, MainImage, MainSection } from "./ErrorTheme12.style";
// import { Container } from "../../../SectionCommon/Containers/Container.styled";

const ErrorTheme12 = () => {

  return (
    // <Container>
    <MainSection>
      <MainContent>
        <h2>Oops.... </h2>
        <h4>Page not found </h4>
        <p>
          This Page doesn`t exist or was removed! We suggest you back to home.
        </p>
        <Button>
          <BackBtn />
          <span>Back to home</span>
        </Button>
      </MainContent>
      <MainImage>
        {/* <Image src={error_one} alt="404 image" /> */}
        {/* <Image src={error_two} alt="404 image" /> */}
        {/* <Image src={error_three} alt="404 image" /> */}
        {/* <Image src={error_four} alt="404 image" /> */}
        {/* <Image src={error_five} alt="404 image" /> */}
        {/* <Image src={error_six} alt="404 image" /> */}
        {/* <Image src={error_seven} alt="404 image" /> */}
        {/* <Image src={error_eight} alt="404 image" /> */}
        {/* <Image src={error_nine} alt="404 image" /> */}
        {/* <Image src={error_ten} alt="404 image" /> */}
        {/* <Image src={error_elven} alt="404 image" /> */}
        {/* <Image src={error_fifteen} alt="404 image" /> */}
        <Image src={error_telvwe} alt="404 image" />
      </MainImage>
    </MainSection>
    // </Container>
  );
};

export default ErrorTheme12;
