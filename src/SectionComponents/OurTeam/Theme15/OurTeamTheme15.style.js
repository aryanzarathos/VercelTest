import styled from "styled-components";

export const TeamHeroSection = styled.div`
margin-top: 48px;
`;

export const TeamAlbumHeroHead = styled.div`
margin-bottom: 24px;
h2{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    color: #1F2B6C;
    letter-spacing:inherit;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
h3{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #159EEC;
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
export const TeamAlbumHomeList = styled.div`
// display: flex;
// flex-wrap: wrap;
// gap: 60px;
margin-top: 44px;
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 576px) {
  grid-template-columns: 1fr;
}

.slick-slide > div {
  margin: 0 10px;
}
.slick-list {
  margin: 0 -10px;
}
.slick-dots{
  bottom: -30px;
  .slick-active{
  margin: 0;
  button{
  &::before{
  font-size: 12px;
  color: #1F2B6C;
  }
  }
  }
  button{
  &::before{
  font-size: 12px;
  color: #1F2B6C;
  }
  }
  }
  .slick-prev{
    content: '';
    width: 1.3rem;
    height: 1.3rem;
    border-right: 2px solid #1F2B6C;
    border-bottom: 2px solid #1F2B6C;
    z-index: 1;
    margin-left: -0.5rem;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
 
    &::before{
    color: transparent;
    }
    &:hover{
      border-right: 2px solid #1F2B6C;
      border-bottom: 2px solid #1F2B6C;    
    }
    @media screen and (max-width: 768px) {
      width: 1rem;
      height: 1rem;
      margin-left: 0;
      left: 15px;
      }
    }
    .slick-next{
    content: '';
    width: 1.3rem;
    height: 1.3rem;
    border-left: 2px solid #1F2B6C;
    border-bottom: 2px solid #1F2B6C;
    z-index: 1;
    margin-right: -0.5rem;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    @media screen and (max-width: 768px) {
    margin-right: auto;
    }
    &::before{
    color: transparent;
    }
    &:hover{
      border-left: 2px solid #1F2B6C;
      border-bottom: 2px solid #1F2B6C;    
    }
    @media screen and (max-width: 768px) {
    width: 1rem;
    height: 1rem;
    right: 15px;
    }
    }
`;
export const TeamAlbumHomeCard = styled.div`
position: relative;
cursor: pointer;
img{
width: 100%;
height: 284px;
object-fit: cover;
border-radius: 5px 5px 0px 0px;
position: relative;
display: block;
}

`;
export const TeamAlbumHomeCardOverlay = styled.div`
background: #BFD2F8;
width: 100%;
padding: 12px 22px;
text-align: center;
min-height: 100px;
height: 100%;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
h6{
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 140%;
text-align: center;
color: #1F2B6C;
letter-spacing: inherit;
position: relative;
margin-bottom: 1px;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
width: -webkit-fill-available;
text-overflow: ellipsis;
word-break: break-word;

&::after{
width: 70%;
height: auto;
background-color: inherit;
bottom: auto;
}
}
p{
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
text-align: center;
text-transform: capitalize;
color: #1F2B6C;
letter-spacing:inherit;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
width: -webkit-fill-available;
text-overflow: ellipsis;
word-break: break-word;

}
`;

export const ViewMoreSection = styled.div`
margin-top: 36px;
display: grid;
align-items: center;
grid-template-columns: 1fr auto;
`;

export const ViewMoreSectionDivider = styled.div`
    width: 100%;
    height: 2px;
    background:#BFD2F8;
`;

export const ViewMoreButton = styled.a`
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 140%;
color: #159EEC;
border-radius:inherit;
padding: 8px 24px 8px 8px;
cursor: pointer;
position: relative;
text-decoration: none;
&::after{
  content: '';
  width: 6px;
  height: 6px;
  border-right: 2px solid #1F2B6C;
  border-bottom: 2px solid #1F2B6C;
  position: absolute;
  right: 2px;
  left: auto;
  transform: rotate(-45deg);
  top: 16px;
}
&::before{  
  content: '';
  width: 16px;
  height: 2px;
 background:#1F2B6C;
 position: absolute;
 right: 2px;
 left: auto;
 top: 19px;
}
&:hover{
color: #000;
text-decoration: underline;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
&::after{
  border-color: #000;
}
&::before{  
 background: #000;
}
}
`;
export const ViewProfileButtonSection = styled.div`
margin-top: 8px;
`;

export const ViewProfileButton = styled.a`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
/* or 22px */

text-align: center;

/* Accent */

color: #BFD2F8;
background: #1F2B6C;
border-radius: 0px 0px 5px 5px;
border: 1px solid #1f2b6c;
padding: 7px 20px;
cursor: pointer;
text-align: center;
display: block;
&:hover{
background: #BFD2F8;
color: #1f2b6c;
border: 1px solid #bfd2fb;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
`;
