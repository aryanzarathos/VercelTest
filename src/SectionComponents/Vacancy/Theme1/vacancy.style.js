import styled from "styled-components";
export const VacancySection = styled.div`
padding: 40px 0;
`;

export const Vacancy = styled.div`

`;

export const VacancyHead = styled.div`
margin-bottom:57px;
display: flex;
align-items: center;
flex-direction: column;
h2{
font-weight:700;
font-size:32px;
line-height: 42px;
font-style: normal;
font-family: 'Montserrat';
letter-spacing: inherit;
text-align: inherit;
color: #343F64;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
}
h3{
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  font-style: normal;
  font-family: 'Monsterrat';
  letter-spacing: inherit;
  color: #343f64;
  text-align: center;
  position: relative;
  display: inline-block;
  &::after{
  position: absolute;
  width: 100%;
  height: auto;
  background-color: "";
  bottom: auto;
  }
  }
`;

export const VacancyDescription = styled.div`
display: grid;
grid-template-columns:  repeat(auto-fill, minmax(400px, 1fr));
gap:30px;
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  }
`;

export const VacancyCard = styled.figure`
width: 100%;
height: 401px;
position: relative;
img{
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 32px;
}
@media screen and (max-width: 768px) {
  height: 300px;
  }

`;

export const CardOverlay = styled.figcaption`
position: absolute;
bottom: 0;
border-radius: 24px;
padding: 32px;
width: 100%;
height: 0%;
background: linear-gradient(180deg, rgba(32, 32, 32, 0) 60.3%, #202020 92.51%);
border-radius: 32px;
transition: all 0.35s ease-in-out 0s;
overflow: hidden;
cursor: pointer;
display: flex;
flex-direction: column;

${VacancyCard}:hover & {
  height: 100%;
  transition: all 0.35s ease-in-out 0s;
 background: rgba(32, 32, 32, 0.9);
 @media (max-width: 768px) {
  overflow-y: auto;
  &::-webkit-scrollbar-thumb , &::-webkit-scrollbar-track {
    background: transparent !important;
  }

 }
}
h6{
  
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-family: 'Monsterrat';
  letter-spacing: inherit;
  color: #fff;
position: relative;
padding-bottom: 10px;
&::after{
  width: 40%;
height: 2px;
background: "";
bottom: 5px;
left: 0;
}
}
`;
export const CardOverlayDetails = styled.div`

display: -webkit-box;
-webkit-line-clamp: 8;
-webkit-box-orient: vertical;
overflow: hidden;


.sun-edtior-wrap {
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-style: normal !important;
  font-family: 'Montserrat' !important;
  letter-spacing: inherit !important;
  color: #fff !important;
  background: transparent !important;
  span {
    font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-style: normal !important;
  font-family: 'Montserrat' !important;
  letter-spacing: inherit !important;
  color: #fff !important;
  background: transparent !important;
  }
}

p{
  
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  font-style: normal;
  font-family: 'Montserrat';
  letter-spacing: inherit;
  color: #fff;
}
`;
export const CardOverlayAction = styled.div`
margin-top: auto;
display: flex;
gap: 20px;
align-items: center;
flex-wrap: wrap;
`;

export const OverlayApplyNowButton = styled.button`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 18px;
Background: #E9DB89;
color:#343F64;
border: 1px solid #343f64;
border-radius: 4px;
padding: 10px 35px;
cursor: pointer;
&:hover{
Background: #31468f,
Color: #ffe6a7
border: 1px solid #31468f;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
@media (max-width:500px) {
  width:100%;
}
`;

export const OverlayViewButton = styled.button`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 18px;
color:#343F64;
background: #D9D9D9;
border-radius: 4px;
border: 1px solid #343f64;
padding:10px 35px;
cursor: pointer;
&:hover{
Background: #31468f,
Color: #ffe6a7
border: 1px solid #31468f;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
@media (max-width:500px) {
  width:100%;
}
`;
export const VacancyContentSection = styled.div`
h6{
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-family: 'Montserrat';
  letter-spacing: inherit;
  color: #fff;
}

p{
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  font-style: normal;
font-family: 'Montserrat';
  letter-spacing: inherit;
  color: #fff;
}

.sun-editor-output {
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-style: normal !important;
  font-family: 'Montserrat';
  letter-spacing: inherit !important;
  color: #fff !important;
background: transparent !important;

span {
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-style: normal !important;
  font-family: 'Montserrat';
  letter-spacing: inherit !important;
  color: #fff !important;
background: transparent !important;
}

}


`;

export const ModalHeaderWrap = styled.div`
.detail-header-wrap{
  padding-top: 36px;
}
`;
