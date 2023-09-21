import React from "react";
// import { Container } from "../../SectionCommon/Containers/Container.styled";
import { FacilitiesHeroSectionHeading } from "./FacilitiesTheme1.style";
import FacilitiesSection from "../FacilitiesSection/FacilitiesSection";



const FacilitiesTheme1 = () => {


  return (
    <>
      <FacilitiesHeroSectionHeading>
        <h1>Our Facilities</h1>
        <h2>Subheading</h2>
      </FacilitiesHeroSectionHeading>
      {/* <Container> */}
      <FacilitiesSection />
      {/* </Container> */}
    </>
  );
};

export default FacilitiesTheme1;
