import React from 'react'
import FaceBookIcon from '../../../Assets/SectionComponent/Images/Footer/Theme2/Icons/facebookIcon.svg';
import TwitterIcon from '../../../Assets/SectionComponent/Images/Footer/Theme2/Icons/twitterIcon.svg';
import MailIcon from '../../../Assets/SectionComponent/Images/Footer/Theme2/Icons/mailIcon.svg';
import InstagramIcon from '../../../Assets/SectionComponent/Images/Footer/Theme2/Icons/instagramIcon.svg';
// import FaceBookIcon from '../../../Assets/SectionComponent/Images/Footer/Theme2/Icons/facebookIcon.svg';
// import TwitterIcon from '../../../Assets/SectionComponent/Images/Footer/Theme2/Icons/twitterIcon.svg';
// import MailIcon from '../../../Assets/SectionComponent/Images/Footer/Theme2/Icons/mailIcon.svg';
// import InstagramIcon from '../../../Assets/SectionComponent/Images/Footer/Theme2/Icons/instagramIcon.svg';
import {
  Footer, FooterAddress, FooterSocialList, FooterSocialListItem, FooterLegalLinksItem,
  FooterLegal, FooterContact, FooterLogo, Divider, LogoWrap, FooterLegalLinks, FooterLink, FooterMenuLink, FooterContactLink, FooterMenuLinkItem, FooterContactLinkItem
} from './FooterTheme2.style'
// import { StyledFooter } from './Footer.styled'
// import Divider from '../../../CommonComponent/Divider';
import Logo from "../../../Assets/SectionComponent/Images/Footer/Theme2/Icons/logo.png";
import Image from 'next/image';
import AnchorElement from '../../../SectionsLayout/Elements/Anchor/AnchorElement/AchorElement';
import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement"
import Text from '../../../SectionsLayout/Elements/TextElement/Text';
// import { Container } from '../../../SectionCommon/Containers/Container.styled';
const FooterTheme2 = ({children}) => {
  ////// console.log('sdsdsdsdsdsds')
  const staticStyle = children.custom_section_editable
  ////// console.log('child',staticStyle[16].style);
  return (
    <Footer item ={staticStyle[0].style}>
      {/* <Container> */}
      <FooterLink item ={staticStyle[1].style}>
        <FooterMenuLink item ={staticStyle[2].style}>
          <AnchorElement link={"/"} style={staticStyle[3].style}>
              Home
          </AnchorElement>
        </FooterMenuLink>
        <FooterContactLink  item ={staticStyle[4].style}>
          <AnchorElement link={"/"} style={staticStyle[5].style}>Customer Support</AnchorElement>
          <AnchorElement link={"/"} style={staticStyle[5].style}>Contact Us</AnchorElement>
        </FooterContactLink>
      </FooterLink>
      <Divider item={staticStyle[6].style}/>
      <FooterLegal item={staticStyle[7].style}>
        <FooterContact item={staticStyle[8].style}>
          <FooterAddress item={staticStyle[9].style}>
            Eblouissante, Shop No. 2E, Sector12, Dwarka, Delhi - 110074
          </FooterAddress>
          <FooterSocialList item={staticStyle[10].style} >
            <FooterSocialListItem item={staticStyle[11].style}>
              {/* <i className='Facebook'></i> */}
              <FaceBookIcon />
            </FooterSocialListItem>
            <FooterSocialListItem item={staticStyle[11].style}>
              {/* <i className='Twitter'></i> */}
              <TwitterIcon />

            </FooterSocialListItem>
            <FooterSocialListItem item={staticStyle[11].style}>
              {/* <i className='Mail'></i> */}
              <MailIcon />
            </FooterSocialListItem>
            <FooterSocialListItem item={staticStyle[11].style}>
              {/* <i className='Instagram'></i> */}
              <InstagramIcon />
            </FooterSocialListItem>
          </FooterSocialList>
        </FooterContact>
        <FooterLogo item={staticStyle[12].style}>
          <LogoWrap item={staticStyle[13].style}>
          <ImageElement src={Logo} alt={"logo"} style={staticStyle[14].style} />
          </LogoWrap>
          <Text tagType={"p"} text={"© 2022 Monito. All rights reserved."} style={staticStyle[15].style} ></Text>
        </FooterLogo>
        <FooterLegalLinks item={staticStyle[16].style}>
          <AnchorElement style={staticStyle[17].style}  link={"/"}>Terms of Service <ImageElement src={Logo} alt={"logo"} style={staticStyle[14].style} /></AnchorElement>
          <AnchorElement  style={staticStyle[17].style}  link={"/"}>Privacy Policy</AnchorElement>
        </FooterLegalLinks>
      </FooterLegal>
      {/* </Container> */}
    </Footer>

  )
}

export default FooterTheme2