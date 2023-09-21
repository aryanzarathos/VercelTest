import styled from 'styled-components';
export const AnnouncementSection = styled.div`
margin: 72px 0;`
    ;
export const Announcement = styled.div``;

export const AnnouncementHead = styled.div`
h2{
    font-family: 'Open Sans',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    color: #1F2B6C;
  }
  h3{
    font-family: 'Open Sans',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #159EEC;
  }
`;
export const AnnouncementDescription = styled.div`
display: grid;
grid-template-columns:  repeat(2, 1fr);
gap:30px;
margin-top: 48px;
@media screen and (max-width: 768px) {
  grid-template-columns:  1fr;
}
`;
export const AnnouncementCard = styled.figure`
width: 100%;
height: 373px;
position: relative;
img{
object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
`;
export const CardOverlay = styled.figcaption`
position: absolute;
bottom: 0;
border-radius: 4px;
padding: 16px 24px;
width: 100%;
height: 100%;
background: linear-gradient(180deg, rgba(32, 32, 32, 0) 45.64%, #1F2B6C 106.1%);;
transition: all 0.35s ease-in-out 0s;
overflow: hidden;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: flex-end;
${AnnouncementCard}:hover & {
  
justify-content:center;
  height: 100%;
  transition: all 0.35s ease-in-out 0s;
  background: rgba(31, 43, 108, 0.8);;
 -webkit-transition-duration: 700ms;
 -moz-transition-duration: 700ms;
 -o-transition-duration: 700ms;
 transition-duration: 700ms;
}
h6{
    font-family: 'Open Sans',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;

    color: #FFFFFF;

  }
`;

export const CardOverlayDetails = styled.div`

display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
${CardOverlay}:hover & {
  transition: all 0.35s ease-in-out 0s;
  -webkit-line-clamp: 8;
  -webkit-transition-duration: 700ms;
  -moz-transition-duration: 700ms;
  -o-transition-duration: 700ms;
  transition-duration: 700ms;
}
p{
    font-family: 'Open Sans',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #FFFFFF;
}
`;
export const CardOverlayAction = styled.div`
margin-top: 24px;
display: none;
${CardOverlay}:hover & {
  display: block;
  -webkit-transition-duration: 700ms;
  -moz-transition-duration: 700ms;
  -o-transition-duration: 700ms;
  transition-duration: 700ms;
}
`;
export const OverlayDownloadButton = styled.button`
font-family: 'Open Sans',sans-serif;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 20px;
color: #1F2B6C;
padding: 8px 24px;
background: #BFD2F8;
border-radius: 4px;border:none;
cursor: pointer;
&:hover{
background:#1F2B6C;
color: #fff;
border: 1px solid #1F2B6C;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
`;