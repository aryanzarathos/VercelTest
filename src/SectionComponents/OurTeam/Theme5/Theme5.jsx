import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import image13 from '../../../Assets/SectionComponent/Images/OurTeam/Rectangle1351.png';
import { AboutFourth, AboutSectionFourth, ImageContainerFourth, NameFourth, OurTeamContainerFourth, PositionFourth } from './OurTeamTheme5.style';

const OurTeamTheme5 = () => {
  return (
    <OurTeamContainerFourth>
      <ImageContainerFourth>
        <Image src={image13} alt="img" />
      </ImageContainerFourth>
      <AboutSectionFourth>
        <NameFourth>Jefiner Anston</NameFourth>
        <PositionFourth>CEO</PositionFourth>
        <AboutFourth> Its a great place to introduce your team and talk about what makes it special, such as your culture or work philosophy. Dont be afraid to illustrate personality and character to help users connect with your team.This is one of the team member slots you can have for your company. You can replace their picture and add any text you want here for describing your employees.</AboutFourth>
      </AboutSectionFourth>
    </OurTeamContainerFourth>
  )
}

export default OurTeamTheme5;