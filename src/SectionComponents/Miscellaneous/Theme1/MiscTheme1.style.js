import styled from "styled-components";

export const FaqsSection = styled.div`
padding: 40px 0;
`;
export const Faqs = styled.div`

`;
export const FaqsHead = styled.div`
margin-bottom: 60px;
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
letter-spacing:inherit;
text-align: inherit;
}
h3{
font-weight: 700;
font-size: 32px;
line-height: 42px;
font-style: normal;
font-family: 'Montserrat';
letter-spacing: inherit;
text-align: inherit;
color: #343F64;
}
`;
export const FaqsDescription = styled.div`

`;
export const FaqList = styled.ul`
padding: 0 20px;
`;
export const FaqListItem = styled.li`
border-bottom: 2px solid rgba(52, 63, 100, 0.4);;
padding: 16px 0 16px 24px;
h6{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #343F64;
    letter-spacing: inherit;
    position: relative; 
  
  &::before{
    width: 8px;
    height: 8px;
    border-radius:50%;
    background: #343F64;
    left: -20px;
    top: 8px;
  }
}
p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;

    color: #4E616B;
    letter-spacing: inherit;

}

button{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;

color: #FFFFFF;
  background: #343F64;
  border: 1px solid #343F64;
  border-radius: ;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
  color: #fff;
  padding: 9px 40px;
  cursor: pointer;
  margin-top: 52px;
  &:hover{
  background: #fff;
  color: #343F64;
  border: 1px solid #343F64;
  -webkit-transition-duration: 700ms;
  -moz-transition-duration: 700ms;
  -o-transition-duration: 700ms;
  transition-duration: 700ms;
  }
}
`;