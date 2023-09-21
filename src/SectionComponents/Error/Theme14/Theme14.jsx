import React from "react";
import Image from "next/image";
import styled from "styled-components";
import error_fourteen from "../../../Assets/SectionComponent/Images/Error/error_fourteen.png";
// import { Container } from "../../../SectionCommon/Containers/Container.styled";
import error_thirteen from "../../../Assets/SectionComponent/Images/Error/error_thirteen.png";
import { Button, LeftContent, LeftSmallContent, MainContent, MainSection, RightContent, RightImage } from "./ErrorTheme14.style";

const ErrorTheme14 = () => {

  return (
    <>
      <MainSection>
        {/* <Container> */}
        <MainContent>
          {/* ===== left content ==== */}
          <LeftContent>
            <h1>404</h1>
            <LeftSmallContent>
              <h5>OOOps! Page Not Found</h5>
              <p>
                Sorry about that! Please visit our homepage to get where you
                need to go.
              </p>
              <Button>Back to homepage</Button>
            </LeftSmallContent>
          </LeftContent>
          {/* ===== left content ==== */}
          {/* ==== Right Content ===== */}
          <RightContent>
            <RightImage>
              <Image src={error_fourteen} alt="error Image" />
              {/* <Image src={error_thirteen} alt="404 image" /> */}
            </RightImage>
          </RightContent>
        </MainContent>
        {/* </Container> */}
      </MainSection>
    </>
  );
};

export default ErrorTheme14;
