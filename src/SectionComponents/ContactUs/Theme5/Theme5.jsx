import React from 'react'
import CallSvgIcon from "../../../Assets/SectionComponent/Images/ContactUs/Icon/phone-icon.svg"
import MailSvgIcon from "../../../Assets/SectionComponent/Images/ContactUs/Icon/mail-icon.svg"
import LocationSvgIcon from "../../../Assets/SectionComponent/Images/ContactUs/Icon/location-icon.svg"
import image5 from "../../../Assets/SectionComponent/Images/ContactUs/Rectangle1447.png";

import Image from 'next/image';
import { CallIcon, ConnectSection, ConnectSectionLT, ConnectSectionRT, Contact, ContactMapInnerImg, Input, Label, LocationIcon, MsgIcon, TextArea } from './ContactUsTheme5.style';

const ContactTheme5 = () => {
  return (
    <>
      <ConnectSection>
        <ConnectSectionLT>
          <h2>Let’s connect Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laborum ducimus nesciunt est sunt repellendus accusantium in explicabo esse maxime.
          </h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.</p>
          <Contact>
            <CallIcon>
              <CallSvgIcon width={15} height={15} fill={'#000'}  />
              <p>+9560625959</p>
            </CallIcon>
            <MsgIcon className="MsgIcon">
              <MailSvgIcon width={15} height={15} fill={'#000'} />
              <p>thebrandneed@gmail.com</p>
            </MsgIcon>
            <LocationIcon>
              <LocationSvgIcon width={24} height={24} fill={'#000'} />
              <p>Address - 203, Tower C, Ithum Towers, Sector 62, Noida, Uttar Pradesh 201309</p>
            </LocationIcon >
          </Contact>
          <ContactMapInnerImg>
            <Image src={image5} alt="InnerImg" />
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
    </>
  )
}

export default ContactTheme5
