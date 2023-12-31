import styled from 'styled-components'

export const StyledFooter = styled.footer`
background: #1F2B6C;
color: #fff;
padding: 42px 0 72px 0;
@media (max-width:525px) {

}
`
//logo section//
export const LogoWrapper = styled.a`
display: grid;
grid-template-columns: auto 1fr;
align-items: center;
gap: 10px;
@media screen and (max-width: 768px) {
flex-direction: column;
align-items: flex-start;
}
`
export const Logo = styled.div`
// width: ${({ theme }) => theme.Footer.Logo.Width};
// height: ${({ theme }) => theme.Footer.Logo.Height};
// background-color: ${({ theme }) => theme.Footer.Logo.Background};
// border-radius: ${({ theme }) => theme.Footer.Logo.BorderRadius};
// padding: ${({ theme }) => theme.Footer.Logo.PaddingY}; ${({ theme }) => theme.Footer.Logo.PaddingX};
min-width: 84px;
max-width: 210px;
min-height: 42px;
max-height: 105px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
img{
  width: 100%;
  height: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  text-align: center;
}
`
export const LogoText = styled.div`

@media (max-width:525px) {

}`
export const LogoTextPrimary = styled.h2`

/* font-weight: ${({ theme }) => theme.Footer.h2.FontWeight};
font-size: ${({ theme }) => theme.Footer.h2.FontSize};
line-height: ${({ theme }) => theme.Footer.h2.LineHeight};
font-style: ${({ theme }) => theme.Footer.h2.FontStyle};
font-family: ${({ theme }) => theme.Footer.h2.FontFamily};
letter-spacing: ${({ theme }) => theme.Footer.h2.LetterSpacing};
color: ${({ theme }) => theme.Footer.h2.Color}; */

font-family: 'poppins';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
letter-spacing: 0.2rem;
color: #FFFFFF;

@media (max-width: ${({ theme }) => theme.mobile}) {

}`
export const LogoTextSecondary = styled.h3`

/* font-weight: ${({ theme }) => theme.Footer.h3.FontWeight};
font-size: ${({ theme }) => theme.Footer.h3.FontSize};
line-height: ${({ theme }) => theme.Footer.h3.LineHeight};
font-style: ${({ theme }) => theme.Footer.h3.FontStyle};
font-family: ${({ theme }) => theme.Footer.h3.FontFamily};
letter-spacing: ${({ theme }) => theme.Footer.h3.LetterSpacing};
color: ${({ theme }) => theme.Footer.h3.Color}; */

font-family: 'poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.2rem;
color: #FFFFFF;

margin-top: 24px;
@media (max-width:525px) {

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

font-family: 'poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 25px;
letter-spacing: 0.2rem;
color: #FFFFFF;

margin-bottom: 10px;
@media (max-width:525px) {

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

font-family: 'poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
letter-spacing: 0.2rem;
color: #FFFFFF;

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

font-family: 'poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 25px;
letter-spacing: 0.2rem;
color: #FFFFFF;


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

font-family: 'poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 26px;
letter-spacing: 0.2rem;
color: #FFFFFF;

&:hover{
/* color: ${({ theme }) => theme.Footer.a.Hover.Color}; */
}
@media (max-width:525px) {

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

font-family: 'poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 26px;
letter-spacing: 0.2rem;
color: #FFFFFF;

&:hover{
/* color: ${({ theme }) => theme.Footer.a.Hover.Color}; */
}
@media (max-width:525px) {

}`

//close menu list Section//

//map Section//
export const MapContainerWrap = styled.div`

@media (max-width:525px) {

}`
export const MapContainer = styled.div`
iframe{
  border-radius: 8px;
  border: none;
  height: 157px;
  width: 100%;
}
@media (max-width:525px) {

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
@media (max-width:525px) {

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
height: 24px;
background: #BFD2F8;
border-radius: 50%;
position: relative;
svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
cursor: pointer;
@media (max-width:525px) {

}`

// export const SocialMediaIconCircle = styled.div`

// `

//close social media Section//

//copyright Section//

export const CopyrightSection = styled.div`
@media (max-width:525px) {

}`
export const CopyrightSectionItem = styled.p`
/* font-weight: ${({ theme }) => theme.Footer.CopyrightSectionItem.FontWeight};
font-size: ${({ theme }) => theme.Footer.CopyrightSectionItem.FontSize};
line-height: ${({ theme }) => theme.Footer.CopyrightSectionItem.LineHeight};
color: ${({ theme }) => theme.Footer.CopyrightSectionItem.Color}; */

font-family: 'poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
letter-spacing: 0.2rem;
color: #FFFFFF;

a{
  /* font-weight: ${({ theme }) => theme.Footer.CopyrightSectionItem.FontWeight};
 font-size: ${({ theme }) => theme.Footer.CopyrightSectionItem.FontSize};
 line-height: ${({ theme }) => theme.Footer.CopyrightSectionItem.LineHeight};
 color: ${({ theme }) => theme.Footer.CopyrightSectionItem.Color}; */
 font-family: 'poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
letter-spacing: 0.2rem;
color: #FFFFFF;
 
&:hover{
  text-decoration: underline;
}
}
@media (max-width:525px) {

}`

//close copyright Section//
