import { Fragment } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import EmailIcon from "../../../Assets/SectionComponent/Images/ContactUs/email-icon.svg";
import PhoneIcon from "../../../Assets/SectionComponent/Images/ContactUs/phone-icon2.svg";
import AddressIcon from "../../../Assets/SectionComponent/Images/ContactUs/address-icon2.svg";
import WorkingHour from "../../../Assets/SectionComponent/Images/ContactUs/hours.svg";

const ContactSection = styled.div`
margin-top: 72px;
`;
const ContactPageHead = styled.div`
h2{
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: rgb(0, 111, 156);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  h3{
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: rgb(244, 134, 49);
    text-align: center;
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    }
`;
const ContactPageList = styled.ul`
margin-top: 56px;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 32px;
align-items: center;
@media screen and (max-width: 1310px) {
  grid-template-columns: repeat(2, 1fr);
}
@media screen and (max-width: 768px) {
  grid-template-columns: repeat(1, 1fr);
}
li{
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: rgb(253, 237, 225);
  border-radius: 5px;
  width: 100%;
  height: 216px;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
  &:hover{
    background: rgb(0, 111, 156);
    -webkit-transition-duration: 700ms;
    -moz-transition-duration: 700ms;
    -o-transition-duration: 700ms;
    transition-duration: 700ms;
    h4{
      color: rgb(253, 237, 225);
    }
    p{
      color: rgb(253, 237, 225);
    }
    .phone-icon,
    .email-icon,
    .address-icon,
    .hours-icon{
      background-color:rgb(253, 237, 225);
    }
  }
    h4{
        font-weight: 600;
        font-size: 24px;
        line-height: 20px;
        color: rgb(0, 111, 156);
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        /* overflow: hidden; */
        margin-bottom: 8px;
    }
    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: rgb(0, 111, 156);
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .icon{
      margin-bottom: 16px;
    }
}
`;
const ContactTheme8 = () => {
  return (
    <Fragment>
      <ContactSection>
        <ContactPageHead>
          <h2>Contact</h2>
          <h3>Get in Touch</h3>
        </ContactPageHead>
        <ContactPageList>
          <li>
            <PhoneIcon className="icon"></PhoneIcon>
            <h4>Call</h4>
            <p>{"1800 309 0777"}</p>
          </li>
          <li>
            <AddressIcon className="icon"></AddressIcon>
            <h4>Location</h4>
            <p>{"Jeewan Nagar"},{"India"},&nbsp;{"110086"}</p>
          </li>
          <li>
            <EmailIcon className="icon"></EmailIcon>
            <h4>Email</h4>
            <p>{"info@jeewanhospital.in"}</p>
          </li>
          <li>
            <WorkingHour className="icon"></WorkingHour>
            <h4>Opening Hours</h4>
            <p>Mon - Sun : 08:00 am - 22:00 pm</p>
          </li>
        </ContactPageList>
      </ContactSection>
    </Fragment>
  )
}

export default ContactTheme8