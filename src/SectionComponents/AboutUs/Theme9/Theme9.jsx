import React from 'react'
// import styled from 'styled-components';
import Image3 from '../../../Assets/SectionComponent/Images/AboutUs/Rectangle1449.png';
// import { Container } from '../../../SectionCommon/Containers/Container.styled';
import Image from 'next/image';
import AboutData from '../AboutData';
import { Box, H3, Headertext, ImageContainerEight, ImageSection, ImageSectionEight, InnerPara, NameEight, PositionEight, Section3, Section3Img, Section3RT, SectionLR3, SectionLt3 } from './AboutTheme9.style';


const AboutTheme9 = () => {
  return (
    <>
      {/* <Container> */}
      <Section3>
        <H3>About Us</H3>
        <SectionLR3>
          <SectionLt3>
            <Section3Img>
              <Image src={Image3} alt="img" />
            </Section3Img>
          </SectionLt3>
          <Section3RT>
            <Box></Box>
            <InnerPara>
              <h4>We are here to make your website!</h4>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages.</p>
            </InnerPara>
          </Section3RT>
        </SectionLR3>
      </Section3>
      {/* </Container> */}
      {/* <Container className='container-xl'> */}
      <Headertext>Our Team</Headertext>
      <ImageSection>
        {AboutData.map((e) => {
          return (
            e.data2.map((e, index) => {
              return (
                <ImageSectionEight key={index}>
                  <ImageContainerEight>
                    <Image src={e.img} alt="" />
                  </ImageContainerEight>
                  <NameEight>{e.name}</NameEight>
                  <PositionEight>{e.position}</PositionEight>
                </ImageSectionEight>
              )
            })
          )
        })}

      </ImageSection>
      {/* </Container> */}
    </>
  )
}

export default AboutTheme9;