import React from 'react'
import styled from 'styled-components';
import Image1 from '../../../Assets/SectionComponent/Images/OurTeam/teamImg.png'
// import { Container } from '../../../SectionCommon/Containers/Container.styled';
import { ReactComponent as CallIconSvg } from "../../../Assets/SectionComponent/Images/AboutUs/Icons/callSvg.svg"
import MailIconsvg from "../../../Assets/SectionComponent/Images/AboutUs/Icons/mailSvg.svg"
import LocationIconsvg from "../../../Assets/SectionComponent/Images/AboutUs/Icons/locationSvg.svg"
import image5 from "../../../Assets/SectionComponent/Images/ContactUs/Rectangle1447.png";
import AboutData from '../AboutData';
import Image from 'next/image';
import { AboutHeading, AboutSectionTheme, CallIconWrap, ConnectSection, ConnectSectionLT, ConnectSectionRT, Contact, ContactMapInnerImg, FirstPara, Headertext, ImageContainerEight, ImageSection, ImageSectionEight, ImgSection, Input, Label, LocationIconWrap, MsgIcon, NameEight, PositionEight, SecondPara, SectionLt, SectionRt, TextArea, ThirdPara } from './AboutTheme10.style';


const AboutTheme10 = () => {
  return (
    <>
      {/* <Container> */}
      <AboutSectionTheme>
        <SectionLt>
          <AboutHeading>About <span> Us</span></AboutHeading>
          <FirstPara>Started as a small plant nursery plant planet is now offering home delivery service of various plant varities in 35+ cities.</FirstPara><br />
          <SecondPara>We work in the motto clean air with healthy plants. All the plants are grown with natural manure.</SecondPara><br />
          <ThirdPara>All the plants are grown with natural manure.</ThirdPara>
        </SectionLt>
        <SectionRt>
          <ImgSection>
            <Image src={Image1} alt='img' />
          </ImgSection>
        </SectionRt>
      </AboutSectionTheme>
      {/* </Container> */}


      {/* <Container> */}

      <ConnectSection>
        <ConnectSectionLT>
          <h2><span> Let`s </span> connect </h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text.</p>
          <Contact>
            <CallIconWrap>
              <CallIconSvg fill={'#000'} width={18} height={18} />
              <p>+9560625959</p>
            </CallIconWrap>
            <MsgIcon className="MsgIcon">

              <MailIconsvg fill={'#000'} width={18} height={18} />
              <p>thebrandneed@gmail.com</p>
            </MsgIcon>
            <LocationIconWrap>
              <LocationIconsvg fill={'#000'} width={24} height={24} />
              <p>Address - 203, Tower C, Ithum Towers, Sector 62, Noida, Uttar Pradesh 201309</p>
            </LocationIconWrap>
          </Contact>
          <ContactMapInnerImg>

          </ContactMapInnerImg>
        </ConnectSectionLT>
        <ConnectSectionRT>
          <h3>Send us a message</h3>
          <span>
            <Label For="full name">FULL NAME</Label>
            <Input type="text" name='Full Name' placeholder='Enter your name' />
          </span>
          <span>
            <Label For="Phone Number">PHONE NUMBER</Label>
            <Input type="Number" name='Phone Number' placeholder='Enter your Phone number' />
          </span>
          <span>
            <Label For="Email">EMAIL</Label>
            <Input type="Email" name="Email" placeholder="Enter your email" />
          </span>
          <span>
            <Label For="Message">MESSAGE</Label>
            <TextArea rows={4} name="Message" placeholder="Enter your message..." />
          </span>
          <button>SUBMIT</button>
        </ConnectSectionRT>
      </ConnectSection>
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

export default AboutTheme10;