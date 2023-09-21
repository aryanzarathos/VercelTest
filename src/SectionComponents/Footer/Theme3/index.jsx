import React from 'react';
// import styles from "./footer.module.scss";
// import Image from 'next/image';
import FaceBookIcon from '../../../Assets/SectionComponent/Images/Footer/Theme2/Icons/facebookIcon.svg';
import TwitterIcon from '../../../Assets/SectionComponent/Images/Footer/Theme2/Icons/twitterIcon.svg';
import MailIcon from '../../../Assets/SectionComponent/Images/Footer/Theme2/Icons/mailIcon.jsx';
import InstaIcon from '../../../Assets/SectionComponent/Images/Footer/Theme2/Icons/instagramIcon.svg';
import ImageElement from "../../../SectionsLayout/Elements/ImageElement/ImageElement"
import Link from "../../../SectionsLayout/Elements/Anchor/AnchorElement/AchorElement";
// import FaceBookIcon from "../../../Assets/SectionComponent/Images/Footer/theme3/footerFacebook.svg";
// import TwitterIcon from "../../../Assets/SectionComponent/Images/Footer/theme3/footerTwitter.svg";
// import MailIcon from "../../../Assets/SectionComponent/Images/Footer/theme3/footerMail.svg";
// import InstaIcon from "../../../Assets/SectionComponent/Images/Footer/theme3/footerInsta.svg";
import { ColumnLinkHeadingWrap, ComapnyDescription, CompanyNameWrapper, Footer, FooterColumn, FooterLinkWrapper, FooterRow, LinkWrapper, LinkWrapperLi, LogoContainer, LogoWrapper, SocialMediaWrapper } from "./FooterTheme3Style"
import MapSection from './MapSection/MapSection';
import Text from "../../../SectionsLayout/Elements/TextElement/Text"
import { dummyImg } from '@/Constant/constants';

const FooterTheme3 = ({ children }) => {

  // get the menu data
  const data = children.data

  const style = {
    footer: children.custom_section_editable[0],
    footerRow: children.custom_section_editable[1],
    footerColumn: children.custom_section_editable[2],
    logoContainer: children.custom_section_editable[3],
    logoWrapper: children.custom_section_editable[4],
    logoImage: children.custom_section_editable[5],
    companyNameWrapper: children.custom_section_editable[6],
    companyNameWrapperText: children.custom_section_editable[7],
    comapnyDescription: children.custom_section_editable[8],
    comapnyDescriptionText: children.custom_section_editable[9],
    socialMediaWrapper: children.custom_section_editable[10],
    facebookLink: children.custom_section_editable[11],
    facebookSvg: children.custom_section_editable[12],
    twitterLink: children.custom_section_editable[13],
    twitterSvg: children.custom_section_editable[14],
    mailLink: children.custom_section_editable[15],
    mailSvg: children.custom_section_editable[16],
    instaLink: children.custom_section_editable[17],
    instaSvg: children.custom_section_editable[18],
    footerLinkWrapper: children.custom_section_editable[19],
    linkWrapper: children.custom_section_editable[20],
    columnLinkHeadingWrap: children.custom_section_editable[21],
    columnLinkHeadingText: children.custom_section_editable[22],
    linkWrapperLi: children.custom_section_editable[23],
    menuLink: children.custom_section_editable[24],
  }

  let finalData = data?.length ? data[0]?.data : {}
  let MapData = data?.length ? data[0]?.Menus : []
  // console.log("line 5400", finalData)
  let siteName = {
    desktop: {
      ...children.custom_section_editable[7]?.style?.desktop,
      color: finalData?.LogoAndSiteName?.font_color,
      fontSize: finalData?.LogoAndSiteName?.font_size,
      fontFamily: finalData?.LogoAndSiteName?.font_family,
      fontWeight: finalData?.LogoAndSiteName?.font_weight
    }
  }
  let ComapnyDescriptionText = {
    desktop: {
      ...children.custom_section_editable[9]?.style?.desktop,
      color: finalData?.Appearance?.description,
    }
  }
  let columnLinkHeadingText = {
    desktop: {
      ...children.custom_section_editable[22]?.style?.desktop,
      color: finalData?.Appearance?.heading,
    }
  }
  let menuLink = {
    desktop: {
      ...children.custom_section_editable[24]?.style?.desktop,
      color: finalData?.Appearance?.menu,
    }
  }
  // console.log(children,"finalData?.Appearance?.icon")
  return (
    <Footer item={style.footer.style}>
      <FooterRow item={style.footerRow.style}>
        <FooterColumn item={style.footerColumn.style}>
          <LogoContainer item={style.logoContainer.style}>
            {finalData?.LogoAndSiteName?.show_website_logo && <LogoWrapper item={style.logoWrapper.style} itemLogo={finalData?.LogoAndSiteName}>
              <ImageElement src={finalData?.LogoAndSiteName?.logo?.src ? finalData?.LogoAndSiteName?.logo : null}
                defaultImage={dummyImg} style={style.logoImage.style} />
            </LogoWrapper>}
            {finalData?.LogoAndSiteName?.show_site_name
              && <CompanyNameWrapper item={style.companyNameWrapper.style} >
                {/* <h3>Jushop</h3> */}
                <Text tagType={style.companyNameWrapperText.tagType} text={finalData?.LogoAndSiteName?.site_Name}
                  style={siteName} />
              </CompanyNameWrapper>}

          </LogoContainer>

          <ComapnyDescription item={style.comapnyDescription.style}>
            <Text tagType={style.comapnyDescriptionText.tagType}
              text={finalData?.brand_description}
              style={ComapnyDescriptionText} />
          </ComapnyDescription>
          {
            !finalData?.social_media?.hide_icon &&
            <SocialMediaWrapper item={style.socialMediaWrapper.style} mailItem={finalData?.Appearance?.icon}>
              {finalData?.social_media?.show_facebook && <Link link={finalData?.social_media?.facebook ? finalData?.social_media?.facebook : "/#"} style={style.facebookLink.style}  >
                <FaceBookIcon height={style.facebookSvg.style.desktop.height} width={style.facebookSvg.style.desktop.width} fill={finalData?.Appearance?.icon} />
              </Link>}
              {finalData?.social_media?.show_twitter && <Link link={finalData?.social_media?.twitter ? finalData?.social_media?.twitter : "/#"} style={style.twitterLink.style}  >
                <TwitterIcon height={style.twitterSvg.style.desktop.height} width={style.twitterSvg.style.desktop.width} fill={finalData?.Appearance?.icon} />
              </Link>}
              {finalData?.social_media?.show_gmail && <Link link={finalData?.social_media?.gmail ? finalData?.social_media?.gmail : "/"} style={style.mailLink.style}   >
                <MailIcon height={style.mailSvg.style.desktop.height} width={style.mailSvg.style.desktop.width} currentColor={finalData?.Appearance?.icon} />
              </Link>}
              {finalData?.social_media?.show_instagram && <Link link={finalData?.social_media?.instagram ? finalData?.social_media?.instagram : "/#"} style={style.instaLink.style}  >
                <InstaIcon height={style.instaSvg.style.desktop.height} width={style.instaSvg.style.desktop.width} fill={finalData?.Appearance?.icon} />
              </Link>}
            </SocialMediaWrapper>
          }
        </FooterColumn>
        {
          MapData?.map((menus, index) => {
            return (
              <FooterLinkWrapper item={style.footerLinkWrapper.style} key={index}>
                <LinkWrapper item={style.linkWrapper.style}>
                  <ColumnLinkHeadingWrap item={style.columnLinkHeadingWrap.style}>
                    <Text tagType={style.columnLinkHeadingText.tagType}
                      text={menus.block_title}
                      style={columnLinkHeadingText} />
                    {/* <h3>{menus.heading}</h3> */}
                  </ColumnLinkHeadingWrap>
                  {
                    menus?.nav_head_menu[0]?.data?.map((menu, index) => (
                      <LinkWrapperLi item={style.linkWrapperLi.style} key={index}>

                        <Link link={`/${menu?.page?.page_slug}`} text={menu.menu}
                          style={menuLink}>{menu?.page?.page_name}</Link>
                      </LinkWrapperLi>
                    ))
                  }
                </LinkWrapper>

              </FooterLinkWrapper>
            )
          })
        }

      </FooterRow>
      {/* <MapSection /> */}
    </Footer>
  )
}

export default FooterTheme3