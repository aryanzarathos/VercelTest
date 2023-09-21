import React from 'react'
// import { Container } from '../../SectionCommon/Containers/Container.styled';
import { HeadingContent, Thme2HeadingConatiner, TopHeading } from './FacilitiesTheme2.style';
import FacilitiesSection from '../FacilitiesSection/FacilitiesSection';

const FacilitiesTheme2 = () => {
  return (
    <>
      <Thme2HeadingConatiner>
        <TopHeading>Categories 2  Orthopedics</TopHeading>
        <HeadingContent>The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment. At Jeevan Hospital, our qualified technicians are dedicated to offer a wide range of high quality diagnostic services as below. The Department of radio-diagnosis at Jeevan Hospital 1 is equipped with most advanced diagnostic equipment. Radio-diagnosis plays a crucial role in identification of an ailment.</HeadingContent>
      </Thme2HeadingConatiner>
      {/* <Container> */}
      <FacilitiesSection />
      {/* </Container> */}
    </>
  )
}

export default FacilitiesTheme2