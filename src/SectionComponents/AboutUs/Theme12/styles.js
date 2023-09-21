import styled from 'styled-components';

export const MessageDeskSection = styled.div`
padding:40px 0;
`;
export const MessageDeskSectionHead = styled.div`
margin-bottom: 48px;
text-align: center;
h2{
font-family: 'Montserrat',sans-serif;
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 59px;
color: #343F64;
}
h3{
font-family: 'Montserrat',sans-serif;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;
text-align: center;
color: #4E616B;
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
export const MessageDeskGrid = styled.div`
display: grid;
grid-template-columns:  1fr;
gap: 100px;
align-items: center;
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  gap: 20px;
}
`;

export const MessageWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: space-between;
column-gap: 45px;

@media (max-width: 768px) {
  display: flex;
  flex-wrap: wrap;
}

&:nth-child(odd) {

  .left {
    order: 2;
    @media (max-width: 768px) {
      order: initial;
    }
  }

}

&:nth-child(even) {
  .right {
    order: 4;
    @media (max-width: 768px) {
      order: initial;
    }
  }

}
`


export const MessageDeskGridLeft = styled.div`

`;
export const MessageDeskGridRight = styled.div`
h4{
font-family: 'Montserrat',sans-serif;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
color: #343F64;

};
h5{
font-family: 'Montserrat',sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #343F64;
};
p{
    font-family: 'Montserrat',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 196.4%;
    letter-spacing: 0.02em;
    color: #202020;
    margin-top: 16px;
}

.sun-editor-wrap {
    font-family: 'Montserrat',sans-serif !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 20px !important;
    line-height: 196.4% !important;
    letter-spacing: 0.02em !important;
    color: #202020 !important;
  background: transparent;
  span {
    font-family: 'Montserrat',sans-serif !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 20px !important;
    line-height: 196.4% !important;
    letter-spacing: 0.02em !important;
    color: #202020 !important;
    background: transparent;
  }
}
`;
export const MessageDeskProfileImage = styled.div`
width: 450px;
height: 500px;
object-fit: cover;
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  background: #D9D9D9;
  }
  @media screen and (max-width: 768px) {
    width: auto;
    height: auto;
  }
`;