import React from 'react'
import GeneralPageTheme4TopImg from '../../../Assets/SectionComponent/Images/GeneralPages/Theme4TopImg.png'
import GeneralPageTheme4BottomImg1 from '../../../Assets/SectionComponent/Images/GeneralPages/bottomImg1.png'
import GeneralPageTheme4BottomImg2 from '../../../Assets/SectionComponent/Images/GeneralPages/bottomImg2.png'
import GeneralPageTheme4BottomImg3 from '../../../Assets/SectionComponent/Images/GeneralPages/bottomImg3.png'
import Image from 'next/image';
import { GeneralPageTheme4SubContainer, GeneralPageTheme4TopContainer, HeaderContent, HeaderSection, HeaderTopHeading, SubImgContainer, TopContentContainer, TopImgContainer } from './GeneralPagesTheme4'


const GeneralPageTheme4 = () => {
  return (
    <>
      <HeaderSection>
        <HeaderTopHeading>
          Page Title
        </HeaderTopHeading>
        <HeaderContent>
          This is a block description. To edit, click and type the text or replace it with your own custom content
        </HeaderContent>
      </HeaderSection>
      <GeneralPageTheme4TopContainer>
        <TopImgContainer>
          <Image src={GeneralPageTheme4TopImg} alt="GeneralPageTheme4TopImg" />
        </TopImgContainer>
        <TopContentContainer>
          <h3>Block Title</h3>
          <p>
            Its a great place to introduce your team and talk about what makes it special, such as your culture or work philosophy. Dont be afraid to illustrate personality and character to help users connect with your team.This is one of the team member slots you can have for your company. You can replace their picture and add any text you want here for describing your employees.
          </p>
          <button>button</button>
        </TopContentContainer>
      </GeneralPageTheme4TopContainer>
      <GeneralPageTheme4SubContainer>
        <SubImgContainer>
          <Image src={GeneralPageTheme4BottomImg1} alt="GeneralPageTheme4BottomImg1" />
        </SubImgContainer>
        <SubImgContainer>
          <Image src={GeneralPageTheme4BottomImg2} alt="GeneralPageTheme4BottomImg2" />
        </SubImgContainer>
        <SubImgContainer>
          <Image src={GeneralPageTheme4BottomImg3} alt="GeneralPageTheme4BottomImg3" />
        </SubImgContainer>
      </GeneralPageTheme4SubContainer>
    </>
  )
}

export default GeneralPageTheme4