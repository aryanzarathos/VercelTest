import styled from "styled-components"

export const PaymentMethodContainer = styled.div`
padding: 39px 0;
  
`
export const BreadCrumbContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 32px;
  @media screen and (max-width: 767px){
    flex-wrap: wrap;
    
  }
`
export const AppointmentTxt = styled.p`
  padding: 0 10px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: rgba(32, 32, 32, 0.97);
  white-space: nowrap;
`
export const BreadrumbWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  position: relative;
`
export const BackWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  span{
    font-family: 'Open Sans',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #1F2B6C;

  }
   @media screen and (max-width: 767px){
    position: absolute;
    right: 0;
  }
`
export const BackIcon = styled.i`
  //  -webkit-mask-image: url(${Back});
  // mask-image: url(${Back});
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  display: block;
  height: 15.84px;
  width: 15.84px
;
  background-color: rgba(32, 32, 32, 0.5);
`
export const PaymentWrap = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 67px;
  @media screen and (max-width: 950px){
    flex-wrap: wrap;
  }
`
export const PaymentMethodWrap = styled.div`
  width: 70%;
  @media screen and (max-width: 1200px){
    width: 60%;
  }
  @media screen and (max-width: 950px){
    width: 100%;
  }
  .active{
    border: 2px solid #1F2B6C;
  }

  
  
`
export const DisableBtn = styled.button`
  border: 2px solid rgba(32, 32, 32, 0.6);
  padding: 24px 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 26px;
  margin-bottom: 24px;
  div{
    p{
      color: rgba(32, 32, 32, 0.6);
    }
  }

`
export const MethodTxt = styled.p`
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
  color: #1F2B6C;
  margin-bottom: 12px;
`
export const OrderSummeryWrap = styled.div`
  width: 30%;
  @media screen and (max-width: 1200px){
    width: 40%;
  }
  @media screen and (max-width: 950px){
    width: 100%;
  }
`
export const OrderSummery = styled.div`
  padding: 12px 18px;
  border: 1px solid rgba(31, 43, 108, 0.3);
  border-radius: 8px;
  &.disable{
    border: 2px solid rgba(32, 32, 32, 0.6) !important;
    padding: 24px 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 26px;
    margin-bottom: 24px;
    div{
      p{
        color: rgba(32, 32, 32, 0.6) !important;
      }
    }
  }
`
export const SummaryTxt = styled.p`
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
  color: #1F2B6C;
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(31, 43, 108, 0.3);
`
export const TxtWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  border-bottom: 2px dashed rgba(31, 43, 108, 0.3);
  padding: 8px 0;
`
export const TotalWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  padding: 8px 0;
`
export const Txt = styled.p`
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
  color: #1F2B6C;
`
export const Amount = styled.p`
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1F2B6C;
  margin-bottom: 6px;
`
export const Button = styled.button`
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
  color: #FFFFFF;
  padding: 4px 0;
  width: 100%;
  background: #1F2B6C;
  border-radius: 8px;
  border: transparent;
  cursor: pointer;
`
export const CodWrap = styled.div`
  padding: 24px 30px;
  border: 1px solid rgba(31, 43, 108, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 26px;
  margin-bottom: 24px;
  cursor: pointer;
 
`
export const RazerWrap = styled.div`
  padding: 24px 30px;
  border: 1px solid rgba(31, 43, 108, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 26px;
  cursor: pointer;
`
export const Input = styled.input`
  width: 16.67px;
  height: 16.67px;
  accent-color: #1F2B6C;
`
export const CodTxtWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2px;
`
export const RazerPayWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2px;
`
export const CodTxt = styled.p`
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #1F2B6C;
`
export const ServiceTxt = styled.p`
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: rgba(32, 32, 32, 0.6);

`
export const SiteTxt = styled.p`
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: rgba(32, 32, 32, 0.6);

`
export const RazerImg = styled.figure`
  width: 105px;
  height: 22px;
  img{
    max-width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  
  }
`