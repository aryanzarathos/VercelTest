import styled from 'styled-components';
export const AnnouncementHomeHeroSection = styled.div`
margin-top: 48px;
`;
export const AnnouncementHomeHero = styled.div`
`;
export const AnnouncementHomeHeroHead = styled.div`
margin-bottom: 24px;
h2{
    font-family: 'Open Sans',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    color: #1F2B6C;
}
`;
export const AnnouncementItem = styled.figure`
position: relative;
`;
export const AnnouncementImage = styled.div`
width: 100%;
height: 344px;
img{
  border-radius: 24px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
`;
export const AnnouncementCaption = styled.figcaption`
position: absolute;
width: 100%;
bottom: 0;
height: 65px;
/* background: ${({ theme }) => theme.Announcement.AnnouncementHero.AnnouncementCaption.Background}; */
background-color: #1F2B6C;
border-bottom-left-radius: 24px;
border-bottom-right-radius: 24px;
padding: 24px;
h6{
font-weight: 600;
font-size: 18px;
line-height: 24px;
color: rgb(52, 63, 100);
color: #FFFFFF;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
}
`;
export const AnnouncementHeroGrid = styled.div`
display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
}
`;
export const ViewMoreAnnouncementButton = styled.a`
font-weight: 400;
font-size: 18px;
line-height: 24px;
background: rgb(52, 63, 100);
border: 1px solid rgb(52, 63, 100);
border-radius: 4px;
color:  rgb(52, 63, 100);
padding: 10px 40px;
background: transparent;
cursor: pointer;
margin-top: 32px;
&:hover{
background: rgb(49, 70, 143);
color: rgb(255, 230, 167);
border: 1px solid rgb(49, 70, 143);
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
`;

export const ViewMoreButtonSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;