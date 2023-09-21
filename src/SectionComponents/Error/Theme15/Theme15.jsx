import React from "react";
import Image from "next/image";
import styled from "styled-components";
import error_fourteen from "../../../Assets/SectionComponent/Images/Error/error_fourteen.png";
import error_thirteen from "../../../Assets/SectionComponent/Images/Error/error_thirteen.png";
import error_fifteen from "../../../Assets/SectionComponent/Images/Error/error_fifteen.png";
import error_fifteen_one from "../../../Assets/SectionComponent/Images/Error/error_fifteen_one.png";
import { Button, LeftContent, MainContent, MainImage, MainSection, RightContent } from "./ErrorTheme15.style";

const ErrorTheme15 = () => {

  return (
    <>
      <MainSection>
        <MainContent>
          <LeftContent>
            {/* <Image src={error_fourteen} alt="error Image" /> */}
            <Image src={error_fifteen} alt="error image" />
          </LeftContent>
          <RightContent>
            <MainImage>
              <Image src={error_fifteen_one} alt="error Image" />
            </MainImage>
            <h3>OOOps! Page Not Found</h3>
            <p>
              This page doesn’t exist or was removed! We suggest you back to
              home
            </p>
            <Button>Back to homepage</Button>
          </RightContent>
        </MainContent>
      </MainSection>
    </>
  );
};

export default ErrorTheme15;
