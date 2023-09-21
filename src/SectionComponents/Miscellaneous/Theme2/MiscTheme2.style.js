import styled from "styled-components";

export const MiscellaneousWrapper = styled.div`
margin: 32px 0;
border: 1px solid;
border-color:  #343F64;
border-radius: 8px;
`;
export const MiscellaneousHead = styled.div`
background-color: #343F64;
border-radius: 8px;
padding: 16px 24px;
h3{
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        font-style: normal;
        font-family: 'Montserrat';
        letter-spacing: inherit;
        color: #FFF;
}
h2{
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    font-style: normal;
    font-family: 'Montserrat';
    letter-spacing: inherit;
    color: #FFF;  
}
h4{
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  font-style: normal;
  font-family: 'Montserrat';
  letter-spacing: inherit;
  color: #FFF;
}
`;
export const MiscellaneousBody = styled.div`

padding: 16px 24px;
`;
export const List = styled.ul`
margin-left: 24px;
`;
export const ListItem = styled.li`
font-weight: 400;
font-size: 16px;
line-height: 20px;
font-style: normal;
font-family: 'Montserrat';
letter-spacing: inherit;
color: #343F64;
list-style-type:disc;
a{
  cursor: pointer;
}
mark {
  background: red;
  padding: 2px 8px;
  color:#FFF;
  font-size:12px;
  border-radius: 4px;
  margin-left: 8px;
}

`;

export const ViewMoreFaqsHeroSection = styled.div`
display: flex;
justify-content: center;
margin-top: 57px;
}
`;
export const ViewMoreFaqsHeroButton = styled.a`

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #FFFFFF;
background: #343F64;
box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 8px;
border: 1px solid #343f64;
color: #fff;
padding: 9px 40px;
cursor: pointer;
&:hover{
background: #fff;
color: #343f64;
border: 1px solid #343f64;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
`;
