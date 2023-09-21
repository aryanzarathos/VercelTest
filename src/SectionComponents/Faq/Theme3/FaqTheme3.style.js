import styled from "styled-components";

export const ContainerMain = styled.div`
padding: 80px 0;
`
export const HeadingWrapper = styled.div`
h1{
  font-family: 'Futura Md BT',sans-serif;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  @media screen and (max-width: 600px) {
    font-size: 22px;
  }
}
p{
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #0346B5;
  margin-bottom: 18px;
  font-family: 'Futura Md BT',sans-serif;
  }
`
export const CardWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 90px;
margin: 58px 0;
@media screen and (max-width: 1024px) {
  grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 767px) {
  grid-template-columns: 1fr  ;
}
@media screen and (max-width: 600px) {
  grid-template-columns: auto;
  margin-top: 20px;
}
`;
export const FaqWrap = styled.div`
border-radius: 8px;
margin-bottom: -57px;
`
export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 9px;
h1{
    font-family: 'Gilroy-SemiBold',sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
}
`
export const Description = styled.div`
p{
    font-family: 'Futura Md BT',sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: rgba(32, 32, 32, 0.6);
   
}

`