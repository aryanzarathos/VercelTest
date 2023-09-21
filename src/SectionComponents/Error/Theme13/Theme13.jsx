import React from "react";
import Image from "next/image";
import styled from "styled-components";
import error_elven from "../../../Assets/SectionComponent/Images/Error/error_elven.png";
import error_thirteen from "../../../Assets/SectionComponent/Images/Error/error_thirteen.png";
import error_thirteen_one from "../../../Assets/SectionComponent/Images/Error/error_thirteen_one.png";
import { Button, MainContent, MainImage, MainSection } from "./ErrorTheme13.style";

const ErrorTheme13 = () => {

  return (
    <MainSection>
      <MainImage>
        <Image src={error_thirteen} alt="404 image" />
        {/* <Image src={error_elven} alt="404 image" /> */}
      </MainImage>
      <Image src={error_thirteen_one} alt="down_image" className="downImage" />
      <MainContent>
        <h2>Oh No! Error 404</h2>
        <p>
          This page doesn’t exist or was removed! We suggest you back to home
        </p>
        <Button>
          Back to home
        </Button>
      </MainContent>
    </MainSection>
  );
};

export default ErrorTheme13;
