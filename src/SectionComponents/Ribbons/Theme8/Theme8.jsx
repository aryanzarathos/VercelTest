import React from "react";
import styled from "styled-components";
import { Container } from "../../../SectionCommon/Containers/Container.styled";
import CallIcon from "../../../Assets/SectionComponent/Images/Ribbons/callIcon.svg";
import EmailIcon from "../../../Assets/SectionComponent/Images/Ribbons/emailIcon.svg";
import FbIcon from "../../../Assets/SectionComponent/Images/Ribbons/fbIcon.svg";
import InstaIcon from "../../../Assets/SectionComponent/Images/Ribbons/instaIcon.svg";
import TwitterIcon from "../../../Assets/SectionComponent/Images/Ribbons/twitterIcon.svg";
import { InfoIcon, MainContent, MainSection, PersonalInfo, PersonalInfoData, RightText } from "./RibbonsTheme8.style";

const RibbonTheme8 = () => {

  const PersoanlData = [
    {
      id: 1,
      image: <CallIcon />,
      text: "+9560625959",
    },
    {
      id: 2,
      image: <EmailIcon />,
      text: "thebrandneed@gmail.com",
    },
  ];



  return (
    <>
      <MainSection>
        <MainContent>
          <RightText>
            <p>
              Your message goes right here! <span>Call us now!</span>
            </p>
          </RightText>
          {/* ==== personal Info start ======= */}
          <PersonalInfo>
            {PersoanlData.map((value) => {
              const { id, image, text } = value;
              return (
                <>
                  <PersonalInfoData key={id}>
                    <InfoIcon>{image}</InfoIcon>
                    <p>{text}</p>
                  </PersonalInfoData>
                </>
              );
            })}
          </PersonalInfo>
          {/* ==== personal Info end ======= */}
        </MainContent>
      </MainSection>
    </>
  );
};

export default RibbonTheme8;
