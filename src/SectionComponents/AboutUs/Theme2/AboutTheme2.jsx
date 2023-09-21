// import MessageProfile1 from "../Message.png";
import MessageProfile from "../../../Assets/SectionComponent/Images/AboutUs/Message.jpg";
import React from 'react';
import ImageViewer from '../../../CommonComponents/ImageViewer';
import { MessageDeskHeroSection, MessageDeskItem, MessageDeskSectionHead, MessageProfileContent, MessageProfileImage } from './styles'

const AboutTheme2 = () => {
  const settingsMessageDeskHero = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <MessageDeskHeroSection>
      <MessageDeskSectionHead>
        <h2>Founder’s Message</h2>
        <h3>What our founders have to say?</h3>
      </MessageDeskSectionHead>

      <React.Fragment>
        <MessageDeskItem>
          <MessageProfileImage>
            <ImageViewer
              className="MIW-BannerImgPreview"
              defaultImage={MessageProfile}
            />
          </MessageProfileImage>
          <MessageProfileContent>
            <h4> Dr. Davinder Sabherwal</h4>
            <h5>Neurology</h5>
            <p>
              Dr. Davinder Sabherwal having the total expertise spanning over 45 years, expert in dealing with
              complicated cases of Chest and critical care. He is trained and worked at UK top elite hospitals for 10 years
              such as Royal Berkshire Hospital and St. Lukes Hospital. He is current heading the Department of
              Medicine and caring 10 beds ICU which is equipped with world class infrastructure and equipments such
              as ventilator from Drager Company.
            </p>
            <ul>
              <li>Qualification</li>
              <li>M.B.B.S</li>
              <li>M.R.C.P.</li>
              <li>D.T.M&H (ENG)</li>
              <li>M D.T.C.D (Cardiff)</li>
            </ul>
          </MessageProfileContent>
        </MessageDeskItem>
      </React.Fragment>
    </MessageDeskHeroSection>
  )
}

export default AboutTheme2