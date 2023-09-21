import styled, { useTheme } from 'styled-components';
export const AnnouncementSection = styled.div`
padding: 40px 0;
`;
export const Announcement = styled.div`

`;
export const AnnouncementHead = styled.div`
margin-bottom: 40px ;
display: flex;
align-items: center;
flex-direction: column;
h2{
font-family: 'Montserrat',sans-serif;
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 59px;
color: #343F64;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
}
h3{
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: rgb(78, 97, 107);
  text-align: center;
  position: relative;
  display: inline-block;
  &::after{
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: rgb(78, 97, 107);
    bottom: -8px;
  }
  }
`;
export const AnnouncementDescription = styled.div`
display: grid;
grid-template-columns:  repeat(2, 1fr);
gap:30px;
@media screen and (max-width: 768px) {
  grid-template-columns:  1fr;
}
`;
export const AnnouncementCard = styled.figure`
width: 100%;
height: 401px;
position: relative;
img{
object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 24px;
}


`;
export const CardOverlay = styled.figcaption`
position: absolute;
bottom: 0;
border-radius: 24px;
padding: 32px;
width: 100%;
height: 25%;
/* background: linear-gradient(180deg, rgba(234,234,234,0.8) 0%, #EAEAEA 80.51%); */
background: ${({ itemProps }) => itemProps};
transition: all 0.35s ease-in-out 0s;
overflow: hidden;
cursor: pointer;
${AnnouncementCard}:hover & {
  height: 100%;
  transition: all 0.35s ease-in-out 0s;
  /* background: linear-gradient(180deg, rgba(234,234,234,0.8) 0%, #EAEAEA 80.51%); */
  background: ${({ itemProps }) => itemProps};
  overflow-y: hidden;

 h6{
  -webkit-line-clamp: initial;  
 }

  p {
    overflow:auto;
  }
 
}
h6{
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  color: #FFFFFF;
  position: relative;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
}
`;

export const Divider = styled.div`
width: 40%;
height: 2px;
background: #FFFFFF;
margin-bottom: 10px;
`;

export const CardOverlayDetails = styled.div`
height: 300px;
overflow-y:auto; 
padding-right:8px;
&.attachment_Active{
  height: 250px;
}
&::-webkit-scrollbar {
    width: 5px;
  }
&::-webkit-scrollbar-thumb {
  border-radius: 10px;

}
p{
  
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  max-height: 100%;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 5px;
  }
&::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #fff;
}

&::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px ${({ itemProps }) => itemProps}; 
  border-radius: 10px;
}
}

`;

export const CardOverlayAction = styled.div`
margin-top: 24px;
`;
export const OverlayDownloadButton = styled.button`
font-family: 'Montserrat',sans-serif;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 18px;
color: #343F64;
background: #E9DB89;
border-radius: 4px;
border: 1px solid  #E9DB89;
padding:10px 22px;
cursor: pointer;
&:hover{
background: #31468f;
color: #ffe6a7;
border: 1px solid #343F64;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
`;