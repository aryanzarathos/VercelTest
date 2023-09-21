import styled from "styled-components";

export const FacilitySection = styled.div`
padding: 40px 0;
`;
export const Facility = styled.div`

`;
export const FacilityHead = styled.div`
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
h3{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    color: #4E616B;
    letter-spacing:inherit;
    text-align: center;
    position: relative;
    display: inline-block;
    &::after{
    position: absolute;
    width: 100%;
    height: auto;
    background-color: inherit;
    bottom: auto;
  }
  }
`;
export const FacilityList = styled.div`
`;
export const FacilityListItem = styled.div`
display: grid;
grid-template-columns: auto 1fr;
align-items: center;
gap:16px;
margin-bottom: 40px;
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  }
`;
export const FacilityListItemImage = styled.div`
width: 100%;
height: 330px;
img{
  width: 100%;
  border-top-left-radius: "";
  border-bottom-left-radius:"";
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 768px) {
  width: 100%;  
  /* height: 200px; */
  img{
    width: 100%;
    border-top-left-radius: "";
    border-top-right-radius: "";
    border-bottom-left-radius: 0;    
  }
  }
`;
export const FacilityListItemContent = styled.div`
height: 100%;
// padding: ;
// border-top-right-radius: ${({ theme }) => theme.Facility.FacilityPage.FacilityListItemContent.BorderTopRightRadius};
// border-bottom-right-radius: ${({ theme }) => theme.Facility.FacilityPage.FacilityListItemContent.BorderBottomRightRadius};
// border: 1px solid ${({ theme }) => theme.Facility.FacilityPage.h1.Color};
@media screen and (max-width: 768px) {
  border-top-right-radius: 0;
//   border-bottom-left-radius: ${({ theme }) => theme.Facility.FacilityPage.FacilityListItemContent.BorderTopRightRadius};
//   border-bottom-right-radius: ${({ theme }) => theme.Facility.FacilityPage.FacilityListItemContent.BorderBottomRightRadius};
}
h4{
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
color: #343F64;
letter-spacing:inherit;
text-align: inherit;
position: relative;
// display: inline-block;
word-break: break-all;
display: -webkit-box;
-webkit-line-clamp:1;
-webkit-box-orient: vertical;
overflow: hidden;

}
ul{
  margin-top: 26px;
  padding-left: 20px;
  // display: -webkit-box;
  // -webkit-line-clamp: 8;
  // -webkit-box-orient: vertical;
  height:200px;
  overflow: auto;
  
  &::-webkit-scrollbar {
    width: 5px;
  }
&::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background:  #323f64; 
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px ${({ itemProps }) => itemProps}; 
  border-radius: 10px;
}
}
li{
  // list-style-type: decimal;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #4D5263;
    text-align:inherit;
}

.sun-editor-wrap {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #4D5263;
        text-align:inherit;
        letter-spacing:inherit;
        background: transparent !important;

span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #4D5263;
    text-align:inherit;
    letter-spacing:inherit;
    background: transparent !important;
}
}
`;
export const FacilityHeading = styled.div`
position:relative;
padding-bottom:16px;
border-bottom: 2px solid #ACACAC;
display:inline-block;`


