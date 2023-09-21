import styled from "styled-components";

export const FaqsSection = styled.div`
padding: 40px 0;
`;
export const Faqs = styled.div`

`;
export const FaqsHead = styled.div`
margin-bottom: 57px;
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
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
h3{
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  font-style: normal;
  font-family: 'Montserrat;
  letter-spacing: inherit;
  color: #343F64;
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
},
p{
  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 25px;

color: #4E616B;
  letter-spacing: inherit;
  color: #4e616b;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
`;