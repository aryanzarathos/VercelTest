import React from "react";
import CallIcon from "../../../Assets/SectionComponent/Images/Ribbons/callIcon.svg";
import EmailIcon from "../../../Assets/SectionComponent/Images/Ribbons/emailIcon.svg";
import FbIcon from "../../../Assets/SectionComponent/Images/Ribbons/fbIcon.svg";
import InstaIcon from "../../../Assets/SectionComponent/Images/Ribbons/instaIcon.svg";
import TwitterIcon from "../../../Assets/SectionComponent/Images/Ribbons/twitterIcon.svg";
import { InfoIcon, MainContent, MainSection, PersonalInfo, PersonalInfoData, SocialLinks } from "./RibbonsTheme1.style";

const RibbonTheme1 = () => {


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
  const SocialData = [
    {
      id: 1,
      image: <FbIcon />,
    },
    {
      id: 2,
      image: <InstaIcon />,
    },
    {
      id: 3,
      image: <TwitterIcon />,
    },
  ];

  return (
    <>
      <MainSection>
        <MainContent>
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

          {/* ===== social link start ======= */}
          <SocialLinks>
            {SocialData.map((value) => {
              const { id, image } = value;
              return (
                <>
                  <InfoIcon key={id}>{image}</InfoIcon>
                </>
              );
            })}
          </SocialLinks>
          {/* ===== social link end ======= */}
        </MainContent>
      </MainSection>
    </>
  );
};

export default RibbonTheme1;
