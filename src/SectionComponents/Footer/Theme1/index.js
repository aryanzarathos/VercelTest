// import SocialIcons from '../../../../SocialIcons'
import {
  LogoWrapper, LogoText, Logo, LogoTextPrimary, LogoTextSecondary, FooterContentWrapper,
  ContentMenuWrap, MapContainerWrap, MenuListItemButton, FooterBottomHero, MenuList, MenuListItem, MenuListItemLink, ContentHeading, MenuListItemHead, SocialMediaIconListItem,
  MapContainer, SocialMediaSection, SocialMediaIconList, CopyrightSection, CopyrightSectionItem, FooterContentWrapperItem, StyledFooter
} from './FooterTheme1.style'
// import Link from 'next/link'
// import { Flex } from '../../../../styles/Flex.styled'
// import { StyledFooter } from './Footer.styled'
// import img from 'next/image'
import logo from "../../../Assets/SectionComponent/Images/Footer/Theme1/Icon/logo.png";
import footerMenuList from "./footerMenu.json";
// import footerSocialIconListContent from "./footerSocialMedia.js";
import { useEffect } from "react";
import Facebook from "../../../Assets/SectionComponent/Images/Footer/Theme1/Icon/Facebook.svg";
import Instagram from "../../../Assets/SectionComponent/Images/Footer/Theme1/Icon/Instagram.svg";
// import Linkedin from "../../../Assets/SectionComponent/Images/Footer/Theme1/Icon/instagram.svg";
// import Youtube from "../../../Assets/TheTranquill/youtube.svg";
// import Twitter from "../../../Assets/TheTranquill/twitter.svg";
import Youtube from "../../../Assets/SectionComponent/Images/Footer/Theme1/Icon/Youtube.svg";
import Twitter from "../../../Assets/SectionComponent/Images/Footer/Theme1/Icon/Twitter.svg";

import React from 'react';
// import { NavLink } from 'react-router-dom';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../../../SectionCommon/Containers/Container.styled';



const FooterTheme1 = () => {

  // const footerSocialIconListContent = [
  //   {
  //     "socialIconSrc": Facebook,
  //     "socialIconLink": instituteData ? instituteData.facebook_url : "https://www.facebook.com/",
  //     "socialTitleName": "Facebook"
  //   },
  //   {
  //     "socialIconSrc": Instagram,
  //     "socialIconLink": instituteData ? instituteData.instagram_url : "https://www.instagram.com/",
  //     "socialTitleName": "Instagram"
  //   },
  //   {
  //     "socialIconSrc": Linkedin,
  //     "socialIconLink": instituteData ? instituteData.linkedin_url : "https://www.linkedin.com/",
  //     "socialTitleName": "Linkedin"
  //   },
  //   {
  //     "socialIconSrc": Twitter,
  //     "socialIconLink": instituteData ? instituteData.twitter_url : "https://twitter.com/",
  //     "socialTitleName": "Twitter"
  //   },
  //   {
  //     "socialIconSrc": Youtube,
  //     "socialIconLink": instituteData ? instituteData.youtube_url : "https://www.youtube.com/",
  //     "socialTitleName": "Youtube"
  //   }
  // ]


  useEffect(() => {
    Array.from(document.getElementsByTagName("iframe")).forEach((iframe) => {
      iframe.contentWindow.addEventListener(
        "load",
        () => {
          const doc = iframe.contentWindow.document;
          iframe.height = doc.body.scrollHeight;
        },
        true
      );
      iframe.contentWindow.addEventListener(
        "resize",
        () => {
          iframe.height = iframe.contentWindow.document.body.scrollHeight + 40;
        },
        true
      );
    });
  }, []);



  return (
    <StyledFooter>
      {/* <Container > */}

      <FooterContentWrapper>
        <FooterContentWrapperItem>
          <LogoWrapper href="/">
            <Logo>
              <Image
                src={logo}
                alt=""
              />
            </Logo>
            <LogoText>
              <LogoTextPrimary>
                The Tranquill Health Care Center
              </LogoTextPrimary>
            </LogoText>
          </LogoWrapper>

          <LogoTextSecondary>
            Budh Vihar, New Delhi, India, 110086
          </LogoTextSecondary>
        </FooterContentWrapperItem>
        <FooterContentWrapperItem>
          <ContentMenuWrap>
            <MenuList>
              <MenuListItemHead>
                Links
              </MenuListItemHead>
              <MenuListItem>
                <Link href="/">
                  Appointment
                </Link>
              </MenuListItem>
              <MenuListItem>
                <Link href="/">
                  Doctors
                </Link>
              </MenuListItem>
              <MenuListItem>
                <Link href="/">
                  Services
                </Link>
              </MenuListItem>
              <MenuListItem>
                <Link href="/">
                  About Us
                </Link>
              </MenuListItem>
              <MenuListItem>
                <MenuListItemLink href="/">
                  Sitemap
                </MenuListItemLink>
              </MenuListItem>
            </MenuList>
            <MenuList>
              <MenuListItem>
                <MenuListItemHead>
                  Our Location
                </MenuListItemHead>

              </MenuListItem>

              <MenuListItem>
                <MapContainerWrap>
                  <MapContainer>
                    {/* <iframe title="map" src="https://g.page/Edneed?share" ></iframe> */}
                  </MapContainer>
                </MapContainerWrap>

              </MenuListItem>

            </MenuList>

          </ContentMenuWrap>
        </FooterContentWrapperItem>


      </FooterContentWrapper>
      <FooterBottomHero>
        <CopyrightSection>
          <CopyrightSectionItem>© 2021 The Tranquill. All Rights Reserved by <Link href="/">thetranquill</Link></CopyrightSectionItem>
        </CopyrightSection>
        <SocialMediaSection>
          <SocialMediaIconList>
            <SocialMediaIconListItem title="">
              <a href="/" target='_blank' rel="noreferrer">
                {/* <Image src={youtube} alt="hi" width="100%" height="100%" /> */}
                {/* <SocialMediaIconCircle> */}
                <Facebook />
                {/* </SocialMediaIconCircle> */}
              </a >
            </SocialMediaIconListItem>
            <SocialMediaIconListItem title="">
              <a href="/" target='_blank' rel="noreferrer">

                {/* <Image src={twitter} alt="hi" width="100%" height="100%" /> */}
                <Instagram />
              </a>
            </SocialMediaIconListItem>

            <SocialMediaIconListItem title="">
              <a href={'#'} target='_blank' rel="noreferrer">

                {/* <Image src={Linkedin} alt="hi" width="100%" height="100%" /> */}
                <Youtube />

              </a>
            </SocialMediaIconListItem>


            <SocialMediaIconListItem title="">
              <a href={Facebook} target='_blank' rel="noreferrer">

                <Twitter />

              </a>
            </SocialMediaIconListItem>
            {/* <SocialMediaIconListItem title="">
                  <a href={Instagram} target='_blank' rel="noreferrer">
                    <Image src={Instagram} alt="hi" width="100%" height="100%" />
                  </a>
                </SocialMediaIconListItem> */}

          </SocialMediaIconList >
        </SocialMediaSection >
      </FooterBottomHero >
      {/* </Container > */}
    </StyledFooter >
  )
}

export default FooterTheme1