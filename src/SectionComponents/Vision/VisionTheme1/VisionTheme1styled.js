import styled from 'styled-components';

export const MissionSection = styled.div`
border: 2px solid #343F64;
border-radius: 24px;
padding: 55px 75px;
@media screen and (max-width: 768px) {
  padding: 32px 24px;
}
`;
export const MissionHead = styled.div`
margin-bottom: 40px;
text-align: center;
h2{
font-family: 'Montserrat',sans-serif;
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 59px;
text-align: center;
color: #343F64;
}

h3{
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: rgb(78, 97, 107);
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
export const MissionDescription = styled.div`
p{
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 153.9%;
  letter-spacing: 0.02em;
  color: #202020;
}

.sun-editor-wrap {
  font-family: 'Montserrat',sans-serif !important;
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 24px !important;
  line-height: 153.9% !important;
  letter-spacing: 0.02em !important;
  color: #202020 !important;
  background: transparent;

span {
  font-family: 'Montserrat',sans-serif !important;
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 24px !important;
  line-height: 153.9% !important;
  letter-spacing: 0.02em !important;
  color: #202020 !important;
  background: transparent;
}

}
`;
export const MissionSectionWrap = styled.div`
padding:40px 0;
`;