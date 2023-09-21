import React from "react";
// import styled from "styled-components";
import Image2 from "../../../Assets/SectionComponent/Images/AboutUs/Rectangle193.png";
// import { Container } from "../../../SectionCommon/Containers/Container.styled";
import Image from "next/image";
import SectionEditor from "../../../CommonComponents/Repositioning/SectionEditor";
import { H6, Section2, Section2Btm, Section2Content, Section2Img, Section2Top } from "./AboutTheme1.style";

const AboutTheme1 = () => {
  return (
    <SectionEditor>
      {/* <Container> */}
      <Section2>
        <Section2Top>
          <H6>About us </H6>
          <h1>We are here to make your website!</h1>
        </Section2Top>
        <Section2Btm>
          <Section2Img>
            {/* <InnerImg src={Image2} alt="Img" /> */}
            <Image src={Image2} alt="Img" />
          </Section2Img>
          <Section2Content>
            <p>
              The About page is the core description of your website. Here is
              where you let clients know what your website is about. You can
              edit all of this text and replace it with what you want to
              write. For example you can let them know how long you have been
              in business, what makes your company special, what are its core
              values and more. The About page is the core description of your
              website. Here is where you let clients know what your website is
              about. You can edit all of this text and replace it with what
              you want to write. You can edit all of this text and what you
              want to write.{" "}
            </p>
          </Section2Content>
        </Section2Btm>
      </Section2>
      {/* </Container> */}
    </SectionEditor>
  );
};

export default AboutTheme1;
