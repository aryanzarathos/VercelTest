import Image from 'next/image';
import React from 'react'
import image18 from '../../../Assets/SectionComponent/Images/OurTeam/Rectangle1356.png';
import { AboutSectionSeven, ImageContainerSix, OurTeamContainerSeven } from './OurTeamTheme8.style';

const OurTeamTheme8 = () => {
  return (
    <OurTeamContainerSeven>
      <AboutSectionSeven>
        <h2>Jefiner Anston</h2>
        <h4 >CEO</h4>
        <p >Its a great place to introduce your team and talk about what makes it special, such as your culture or work philosophy. Dont be afraid to illustrate personality and character to help users connect with your team.This is one of the team member slots you can have for your company. You can replace their picture and add any text you want here for describing your employees.</p>
      </AboutSectionSeven>
      <ImageContainerSix>
        <Image src={image18} alt="img" />
      </ImageContainerSix>
    </OurTeamContainerSeven>
  )
}

export default OurTeamTheme8;