import React from 'react'
import Image1 from '../../../Assets/SectionComponent/Images/AboutUs/image.png';
// import { Container } from '../../../SectionCommon/Containers/Container.styled';
import Image from 'next/image';
import { BtnBlue, H6, Section1, SectionLT1, SectionRT1, SectionRT1Content } from './AboutTheme5.style';

const AboutTheme5 = () => {

  return (

    // <Container>
    <Section1>
      <SectionLT1>
        <Image src={Image1} alt="img" />
      </SectionLT1>
      <SectionRT1>
        <H6>ABOUT US</H6>
        <h2>We are The Best SEO Company</h2>
        <SectionRT1Content>Whether you do a search for “London seo”, “London web or a variety of other highly competitive terms in our industry you will find that we completely dominate our competitors at our own game. Further, you will see we are the top rated firm with 67 reviews on Google giving us 4.8 stars.</SectionRT1Content>
        <BtnBlue>MORE ABOUT US</BtnBlue>
      </SectionRT1>
    </Section1>
    // </Container>
  )
}

export default AboutTheme5;