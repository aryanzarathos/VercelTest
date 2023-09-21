import React from 'react'
import image4 from "../../../Assets/SectionComponent/Images/ContactUs/Rectangle1441.png"
import Image from 'next/image';
import { Content, CoverImg, H1, ImageWrapper, Input, TextArea } from './ContactUsTheme4.style';


const ContactTheme4 = () => {
  return (

    <>
      <CoverImg>
        <ImageWrapper>
          <Image src={image4} alt="InnerImg" />
        </ImageWrapper>
        <Content>
          <H1>Contact us</H1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,</p>
          <Input type="Email" name="Email" placeholder="Enter your email" />
          <TextArea rows={4} name="Feedback" placeholder="Enter your Feedback..." />
          <button>SUBMIT</button>
        </Content>
      </CoverImg>
    </>
  )
}

export default ContactTheme4
