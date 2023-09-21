import styled from 'styled-components'
// import Facebook from "../../../Assets/SectionComponent/Icons/Social/facebook-t1.svg";
// import Twitter from "../../../Assets/SectionComponent/Icons/Social/twitter-t1.svg";
// import Mail from "../../../Assets/SectionComponent/Icons/Social/email-t1.svg";
// import Instagram from "../../../Assets/SectionComponent/Icons/Social/instagram-t1.svg";
export const Footer = styled.footer`
padding:  ${({item}) => item.desktop.padding };
/* .divider{
  background-color: #103559;
  margin: 32px 0;
} */
/* @media (max-width: ${({ theme }) => theme.mobile}) {

} */
`
export const FooterLink = styled.div`
display: ${({item}) => item.desktop.display };
grid-template-columns: ${({item}) => item.desktop.gridTemplateColumns };
gap: ${({item}) => item.desktop.gap };
align-items: ${({item}) => item.desktop.alignItems };

@media (max-width: 768px) {
  grid-template-columns: ${({item}) => item.tablet.gridTemplateColumns };
  justify-content: ${({item}) => item.desktop.justifyContent };
}
`
export const FooterMenuLink = styled.div`
display:   ${({item}) => item.desktop.display };
align-items:   ${({item}) => item.desktop.alignItems };
gap:   ${({item}) => item.desktop.gap };
flex-wrap:   ${({item}) => item.desktop.flexWrap };
@media (max-width: 768px) {
  justify-content: ${({item}) => item.desktop. justifyContent };
}
`

// export const FooterMenuLinkItem = styled.a`
// font-size: 16px;
// line-height: 24px;
// font-weight: 600;
// color: #003459;
// @media (max-width: ${({ theme }) => theme.mobile}) {

// }
// `
export const FooterContactLink = styled.div`
display: ${({item}) => item.desktop.display };
flex-direction: ${({item}) => item.desktop.flexDirection };
align-items: ${({item}) => item.desktop.alignItems };
gap: ${({item}) => item.desktop.gap } ;
flex-wrap:  ${({item}) => item.desktop.flexWrap };
@media (max-width: 768px) {
  flex-direction: ${({item}) => item.tablet.flexDirection };
  justify-content: ${({item}) => item.tablet.flexWrap };
  gap: ${({item}) => item.tablet.gap };
}
`
export const Divider = styled.div`
  width: ${({item}) => item.desktop.width };
  height: ${({item}) => item.desktop.height };
  background-color: ${({item}) => item.desktop. backgroundColor };
  margin:${({item}) => item.desktop.margin };
`
// export const FooterContactLinkItem = styled.a`
// font-size: 16px;
// line-height: 24px;
// font-weight: 600;
// color: #003459;
// @media (max-width: ${({ theme }) => theme.mobile}) {

// }
// `
export const FooterLegal = styled.div`
display:  ${({item}) => item.desktop.display };
grid-template-columns: ${({item}) => item.desktop.gridTemplateColumns };
gap:  ${({item}) => item.desktop.gap };
align-items:  ${({item}) => item.desktop.alignItems };

@media(max-width:480px) {
  grid-template-columns: ${({item}) => item.mobile.gridTemplateColumns };
}

`
export const FooterContact = styled.div`


`
export const FooterAddress = styled.p`
font-size: ${({item}) => item.desktop.fontSize };
line-height: ${({item}) => item.desktop.lineHeight };
font-weight: ${({item}) => item.desktop.fontWeight };
color: ${({item}) => item.desktop.color };
@media (max-width: 768px) {
  text-align: ${({item}) => item.desktop.textAlign };
}
`


export const FooterSocialList = styled.div`
display:  ${({item}) => item.desktop.display };
align-items:  ${({item}) => item.desktop.alignItems };
gap:  ${({item}) => item.desktop.gap };
margin-top:  ${({item}) => item.desktop.marginTop };
@media (max-width: 768px) {
  justify-content:  ${({item}) => item.tablet.justifyContent };
}
`
export const FooterSocialListItem = styled.a`

i{
  display: ${({item}) => item.desktop.display };
  -webkit-mask-repeat:${({item}) => item.desktop.WebkitMaskRepeat };
  mask-repeat: ${({item}) => item.desktop.maskRepeat };
  width: ${({item}) => item.desktop.width };
  height: ${({item}) => item.desktop.height };
  background: ${({item}) => item.desktop.background };


}
`
export const FooterLogo = styled.div`
margin: ${({item}) => item.desktop.margin };
/* img{
  width: 69px;
  height: 32px;
  display: block;
  margin: auto;
}
p{
  font-size: 16px;
line-height: 24px;
font-weight: 500;
color: #667479;
margin-top: 24px;
} */
`
export const LogoWrap = styled.div`
min-width: ${({item}) => item.desktop.minWidth };
max-width: ${({item}) => item.desktop.maxWidth };
min-height: ${({item}) => item.desktop.minHeight };
max-height: ${({item}) => item.desktop.maxHeight };
width: ${({item}) => item.desktop.width };
display: ${({item}) => item.desktop.display };
align-items: ${({item}) => item.desktop.alignItems };
justify-content: ${({item}) => item.desktop.justifyContent };
`
export const FooterLegalLinks = styled.div`
display: ${({item}) => item.desktop.display };
align-items: ${({item}) => item.desktop.alignItems };
gap: ${({item}) => item.desktop.gap };
margin: ${({item}) => item.desktop.margin };
margin-right: ${({item}) => item.desktop.marginRight };
`
export const FooterLegalLinksItem = styled.div`  
font-size: 16px;
line-height: 24px;
font-weight: 500;
color: #667479;
`
//logo section//
// export const LogoWrapper = styled.a`
// display: grid;
// grid-template-columns: auto 1fr;
// align-items: center;
// gap: 10px;
// @media screen and (max-width: 768px) {
// flex-direction: column;
// align-items: flex-start;
// }
//  `
// export const Logo = styled.div`
// // width: ${({ theme }) => theme.Footer.Logo.Width};
// // height: ${({ theme }) => theme.Footer.Logo.Height};
// // background-color: ${({ theme }) => theme.Footer.Logo.Background};
// // border-radius: ${({ theme }) => theme.Footer.Logo.BorderRadius};
// // padding: ${({ theme }) => theme.Footer.Logo.PaddingY}; ${({ theme }) => theme.Footer.Logo.PaddingX};
// min-width: 84px;
// max-width: 210px;
// min-height: 42px;
// max-height: 105px;
// width: 100%;
// display: flex;
// align-items: center;
// justify-content: center;
// img{
//   width: 100%;
//   height: 100%;
//   min-width: 100%;
//   max-width: 100%;
//   min-height: 100%;
//   max-height: 100%;
//   text-align: center;
// }
// `
export const LogoText = styled.div`

@media (max-width: ${({ theme }) => theme.mobile}) {

}`
export const LogoTextPrimary = styled.h2`

/* font-weight: ${({ theme }) => theme.Footer.h2.FontWeight};
font-size: ${({ theme }) => theme.Footer.h2.FontSize};
line-height: ${({ theme }) => theme.Footer.h2.LineHeight};
font-style: ${({ theme }) => theme.Footer.h2.FontStyle};
font-family: ${({ theme }) => theme.Footer.h2.FontFamily};
letter-spacing: ${({ theme }) => theme.Footer.h2.LetterSpacing};
color: ${({ theme }) => theme.Footer.h2.Color}; */

font-size: 18px;
font-weight: 700;
line-height: 25px;
letter-spacing: '';
font-family: 'Gilroy-Bold';
color:#6AA9FF;
font-style: normal;

/* @media (max-width: ${({ theme }) => theme.mobile}) {

} */
`
export const LogoTextSecondary = styled.h3`

/* font-weight: ${({ theme }) => theme.Footer.h3.FontWeight};
font-size: ${({ theme }) => theme.Footer.h3.FontSize};
line-height: ${({ theme }) => theme.Footer.h3.LineHeight};
font-style: ${({ theme }) => theme.Footer.h3.FontStyle};
font-family: ${({ theme }) => theme.Footer.h3.FontFamily};
letter-spacing: ${({ theme }) => theme.Footer.h3.LetterSpacing};
color: ${({ theme }) => theme.Footer.h3.Color}; */

font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: '';
font-family: 'Gilroy-Bold';
color:#6AA9FF;
font-style: normal;
margin-top: 24px;

@media (max-width: ${({ theme }) => theme.mobile}) {

}`
//close logo section//

// footer content section //
export const FooterContentWrapper = styled.div`
display: grid;
grid-template-columns:1fr 3fr;
gap: 40px;
align-items: flex-start;
margin-top: 30px;
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
}`

export const FooterContentWrapperItem = styled.div`
`
export const ContentMenuWrap = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
gap: 10px 20px;
      @media screen and (max-width: 468px) {
        grid-template-columns: 1fr;
      }`
// close footer content section //

// Heading section //
export const ContentHeading = styled.h6`

/* font-weight: ${({ theme }) => theme.Footer.h6.FontWeight};
font-size: ${({ theme }) => theme.Footer.h6.FontSize};
line-height: ${({ theme }) => theme.Footer.h6.LineHeight};
font-style: ${({ theme }) => theme.Footer.h6.FontStyle};
font-family: ${({ theme }) => theme.Footer.h6.FontFamily};
letter-spacing: ${({ theme }) => theme.Footer.h6.LetterSpacing};
text-transform: ${({ theme }) => theme.Footer.h6.TextTransform};
color:${({ theme }) => theme.Footer.h6.Color}; */


font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: '';
font-family: 'Gilroy-Bold';
color:#6AA9FF;
font-style: normal;
margin-bottom: 10px;
@media (max-width: ${({ theme }) => theme.mobile}) {

}`
// close headeing section //

//menu list Section//
export const MenuList = styled.ul`

      `;
export const MenuListItem = styled.li`
padding: 4px 0;
a{
  /* font-weight: ${({ theme }) => theme.Footer.a.FontWeight};
font-size: ${({ theme }) => theme.Footer.a.FontSize};
line-height: ${({ theme }) => theme.Footer.a.LineHeight};
font-style: ${({ theme }) => theme.Footer.a.FontStyle};
font-family: ${({ theme }) => theme.Footer.a.FontFamily};
letter-spacing: ${({ theme }) => theme.Footer.a.LetterSpacing};
color: ${({ theme }) => theme.Footer.a.Color}; */


font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: '';
font-family: 'Gilroy-Bold';
color:#6AA9FF;
font-style: normal;

&:hover{
/* color: ${({ theme }) => theme.Footer.a.Hover.Color}; */
}
}
`
export const MenuListItemHead = styled.h4`
/* font-weight: ${({ theme }) => theme.Footer.h4.FontWeight};
font-size: ${({ theme }) => theme.Footer.h4.FontSize};
line-height: ${({ theme }) => theme.Footer.h4.LineHeight};
font-style: ${({ theme }) => theme.Footer.h4.FontStyle};
font-family: ${({ theme }) => theme.Footer.h4.FontFamily};
letter-spacing: ${({ theme }) => theme.Footer.h4.LetterSpacing};
color: ${({ theme }) => theme.Footer.h4.Color}; */

font-size: 18px;
font-weight: 600;
line-height: 20px;
letter-spacing: '';
font-family: 'Gilroy-Bold';
color:#6AA9FF;
font-style: normal;
margin-bottom: 24px;
`
export const MenuListItemLink = styled.a`
/* font-weight: ${({ theme }) => theme.Footer.a.FontWeight};
font-size: ${({ theme }) => theme.Footer.a.FontSize};
line-height: ${({ theme }) => theme.Footer.a.LineHeight};
font-style: ${({ theme }) => theme.Footer.a.FontStyle};
font-family: ${({ theme }) => theme.Footer.a.FontFamily};
letter-spacing: ${({ theme }) => theme.Footer.a.LetterSpacing};
color: ${({ theme }) => theme.Footer.a.Color}; */

font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: '';
font-family: 'Gilroy-Bold';
color:#6AA9FF;
font-style: normal;

&:hover{
/* color: ${({ theme }) => theme.Footer.a.Hover.Color}; */
}
@media (max-width: ${({ theme }) => theme.mobile}) {

}`
export const MenuListItemButton = styled.button`
background-color: transparent;
outline: none;
border: none;
/* font-weight: ${({ theme }) => theme.Footer.a.FontWeight};
font-size: ${({ theme }) => theme.Footer.a.FontSize};
line-height: ${({ theme }) => theme.Footer.a.LineHeight};
font-style: ${({ theme }) => theme.Footer.a.FontStyle};
font-family: ${({ theme }) => theme.Footer.a.FontFamily};
letter-spacing: ${({ theme }) => theme.Footer.a.LetterSpacing};
color: ${({ theme }) => theme.Footer.a.Color}; */

font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: '';
font-family: 'Gilroy-Bold';
color:#6AA9FF;
font-style: normal;
&:hover{
/* color: ${({ theme }) => theme.Footer.a.Hover.Color}; */
}
@media (max-width: ${({ theme }) => theme.mobile}) {

}`

//close menu list Section//

//map Section//
export const MapContainerWrap = styled.div`

@media (max-width: ${({ theme }) => theme.mobile}) {

}`
export const MapContainer = styled.div`
iframe{
  border-radius: 8px;
  border: none;
  height: 150px;
  width: 100%;
}
@media (max-width: ${({ theme }) => theme.mobile}) {

}`
//close map Section//

//social media Section//

export const FooterBottomHero = styled.div`
border-top: 1px solid #fff;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 24px;
padding: 24px;
@media screen and (max-width: 768px) {
  flex-direction: column;
  padding: 24px 0;
  align-items: flex-start;
  gap: 24px;
  }
`
export const SocialMediaSection = styled.div`
@media (max-width: ${({ theme }) => theme.mobile}) {

}`
export const SocialMediaIconList = styled.div`
display: flex;
gap: 15px;
align-items: center;
@media screen and (max-width: 320px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  }
`
export const SocialMediaIconListItem = styled.div`
width: 24px;
height:24px;
cursor: pointer;
@media (max-width: ${({ theme }) => theme.mobile}) {

}`

//close social media Section//

//copyright Section//

export const CopyrightSection = styled.div`
@media (max-width: ${({ theme }) => theme.mobile}) {

}`
export const CopyrightSectionItem = styled.p`
/* font-weight: ${({ theme }) => theme.Footer.CopyrightSectionItem.FontWeight};
font-size: ${({ theme }) => theme.Footer.CopyrightSectionItem.FontSize};
line-height: ${({ theme }) => theme.Footer.CopyrightSectionItem.LineHeight};
color: ${({ theme }) => theme.Footer.CopyrightSectionItem.Color}; */

font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: '';
font-family: 'Gilroy-Bold';
color:#6AA9FF;
font-style: normal;
a{
  /* font-weight: ${({ theme }) => theme.Footer.CopyrightSectionItem.FontWeight};
font-size: ${({ theme }) => theme.Footer.CopyrightSectionItem.FontSize};
line-height: ${({ theme }) => theme.Footer.CopyrightSectionItem.LineHeight};
color: ${({ theme }) => theme.Footer.CopyrightSectionItem.Color}; */

font-size: 16px;
font-weight: 400;
line-height: 26px;
letter-spacing: '';
font-family: 'Gilroy-Bold';
color:#6AA9FF;
font-style: normal;
&:hover{
  text-decoration: underline;
}
}
@media (max-width: ${({ theme }) => theme.mobile}) {

}`

//close copyright Section//
