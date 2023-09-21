import styled from "styled-components";

export const TeamHomeHeroSection = styled.div`
padding: 32px 0;
`;
export const TeamAlbumHomeHero = styled.div`

`;
export const TeamAlbumHomeHeroHead = styled.div`
margin-bottom: 48px;
display: flex;
align-items: center;
flex-direction: column;
h2{
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 59px;
color: #343F64;
letter-spacing: inherit;
text-align: center;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
}
  h3 {
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;
    font-style: normal;
    font-family: 'Montserrat';
    letter-spacing: inherit;
    color: #343F64;
    text-align: center;
    position: relative;
    display: inline-block;
    &::after {
      position: absolute;
      width: 100%;
      height: auto;
      background-color: "";
      bottom: 0px;
    }
  }
  }
`;
export const TeamAlbumHomeList = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 0 60px;
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  gap: 30px;
  }
`;
export const TeamAlbumHomeCard = styled.div`
border: 1px solid #343F64;
  box-shadow: 0px 0px 9px 3px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  height: auto;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
    position: relative;
    display: block;
  }
`;


export const CardOverlay = styled.figcaption`
position: absolute;
bottom: 0;
width: 100%;
height: 20%;
transition: all 0.35s ease-in-out 0s;
overflow: hidden;
cursor: pointer;
background:rgba(255,255,255,0,8)
border-bottom-right-radius: inherit;
border-bottom-left-radius: inherit;
padding: 10px 30px 35px;
 h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #343F64;
    letter-spacing: inherit;
    color: #343F64;
    position: relative;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  h5 {
        
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #4D5263;
    letter-spacing: normal;
    color: #343F64;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 16px;
  }
  ${TeamAlbumHomeCard}:hover & {
    height: 100%;
    transition: all 0.35s ease-in-out 0s;
    background: rgba(255,255,255,0.8);
    overflow-y: hidden;
    
  border-radius: 24px;
    p {
      overflow:auto;
    }
  }
`

export const CardOverlayDetails = styled.div`
  height: 250px;
  
  p,
  p > div > span{
  
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #4D5263;
    letter-spacing: normal;
    color: #343F64;
    max-height: 100%;
    overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #343F64;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #eee;
    border-radius: 10px;
}


  }

  .sun-editor-wrap {
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 20px !important;
    font-style: normal !important;
    font-family: "" !important;
    letter-spacing: inherit !important;
    color: #343F64 !important;
    background: transparent !important;

    span {
      font-weight: 400 !important;
      font-size: 16px !important;
      line-height: 20px !important;
      font-style: normal !important;
      font-family: "" !important;
      letter-spacing: inherit !important;
      color: #343F64 !important;
      background: transparent !important;
    }
  }
`;


export const CardOverlayDivider = styled.div`
    width: 70%;  
    height: 1px;
    background-color: #343f64;
    margin: 5px 0;

`;


export const ViewMoreButtonSection = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const ViewMoreTeamButton = styled.a`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #FFFFFF;
background: #343F64;
box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 8px;
border: 1px solid #343F64;
padding: 9px 41px 10px 40px;
cursor: pointer;
margin-top: 52px;
&:hover{
background: #fff;
color: #343F64;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
`;