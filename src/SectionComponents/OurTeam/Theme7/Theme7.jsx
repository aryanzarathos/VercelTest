import Image from 'next/image';
import React from 'react'
import image17 from '../../../Assets/SectionComponent/Images/OurTeam/Rectangle1355.png';
import { AboutSectionSix, ImageContainerSix, OurTeamContainerSix } from './OurTeamTheme7.style';

const OurTeamTheme7 = () => {
  return (
    <OurTeamContainerSix>
      <ImageContainerSix>
        <Image src={image17} alt="img" />
      </ImageContainerSix>
      <AboutSectionSix>
        <h2>Jefiner Anston</h2>
        <h4 >CEO</h4>
        <p>Its a great place to introduce your team and talk about what makes it special, such as your culture or work philosophy. Dont be afraid to illustrate personality and character to help users connect with your team.This is one of the team member slots you can have for your company. You can replace their picture and add any text you want here for describing your employees.</p>
      </AboutSectionSix>
    </OurTeamContainerSix>
  )
}

export default OurTeamTheme7;