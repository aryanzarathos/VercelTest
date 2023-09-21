import styled from "styled-components"

export const OrderIdHeroContainer = styled.div`
    display: ${({ item }) => item.desktop.display};
    align-items:  ${({ item }) => item.desktop.alignItems};
    justify-content:  ${({ item }) => item.desktop.justifyContent};
    flex-direction: ${({ item }) => item.desktop.flexDirection}; 
    margin-bottom: ${({ item }) => item.desktop.marginBottom}; 
`
export const TopSection = styled.div`
  display: ${({ item }) => item.desktop.display};
  justify-content:${({ item }) => item.desktop.justifyContent};
  align-items: ${({ item }) => item.desktop.alignItems};
  flex-direction: ${({ item }) => item.desktop.flexDirection};

  .top-heading{
    @media screen and (max-width:767px) {
      order: 2;
  }
}
`;
export const SkuWrap = styled.div`
    display: ${({ item }) => item.desktop.display}; 
    justify-content: ${({ item }) => item.desktop.justifyContent}; 
    align-items: ${({ item }) => item.desktop.alignItems}; 
    gap: ${({ item }) => item.desktop.gap};
    @media screen and  (max-width:768px) {
        flex-wrap: wrap;
        justify-content: flex-start;
    } 
`
export const HeadingOrderID = styled.div`
    width: ${({ item }) => item.desktop.width};
    text-align: ${({ item }) => item.desktop.textAlign};
    padding: ${({ item }) => item.desktop.padding}; 
    @media screen and (max-width: 767px) {
        text-align: ${({ item }) => item.desktop.textAlign};
        padding: ${({ item }) => item.desktop.padding}; 
    }   

`
export const OrderIdwrap = styled.div`
    display: ${({ item }) => item.desktop.display}; 
    justify-content: ${({ item }) => item.desktop.justifyContent}; 
    align-items: ${({ item }) => item.desktop.alignItems}; 
    gap: ${({ item }) => item.desktop.gap}; 
    @media screen and (max-width: 767px) {
        justify-content: ${({ item }) => item.mobile.justifyContent}; 
        } 

`
export const OrderIDContainer = styled.div`
    display: ${({ item }) => item.desktop.display}; 
    gap: ${({ item }) => item.desktop.gap}; 
    margin-top: ${({ item }) => item.desktop.marginTop}; 
    @media screen and (max-width: 1024px) {
        flex-wrap: ${({ item }) => item.tablet.flexWrap}; 
    }
`
export const OrderIDContainerLeft = styled.div`
    width: ${({ item }) => item.desktop.width}; 
    @media screen and (max-width: 1024px) {
        width: ${({ item }) => item.tablet.width}; 
    }
`
export const CurrentProduct = styled.div`
    display: ${({ item }) => item.desktop.display};
    align-items:${({ item }) => item.desktop.alignItems}; 
    gap: ${({ item }) => item.desktop.gap}; 
    background: ${({ item }) => item.desktop.background}; 
    box-shadow: ${({ item }) => item.desktop.boxShadow}; 
    border-radius: ${({ item }) => item.desktop.borderRadius}; 
    padding: ${({ item }) => item.desktop.padding}; 
    width: ${({ item }) => item.desktop.width}; 
    @media screen and (max-width: 767px) {
      position: ${({ item }) => item.mobile.position}; 
      align-items: ${({ item }) => item.mobile.alignItems}; 
      /* flex-wrap: ${({ item }) => item.mobile.flexWrap};  */
      margin: ${({ item }) => item.mobile.margin}; 
      gap: ${({ item }) => item.mobile.gap}; 
      align-items: flex-start;
      gap: 16px;
    }  
    `
export const CurrentProductImg = styled.div`
  width: ${({ item }) => item.desktop.width};
  height: ${({ item }) => item.desktop.height};
  min-height: ${({ item }) => item.desktop.minHeight};
  min-width: ${({ item }) => item.desktop.minWidth};
  
  @media screen and (max-width:768px) {
    display: ${({ item }) => item.mobile.display};
        width: 82px;
        height: 87px;
        min-width: 82px;
        min-height: 87px;
    }
    @media screen and (max-width:350px) {
        width: 72px;
        height: 87px;
         min-width: 72px;
        min-height: 87px;
    }
    
`
export const CurrentProductDetails = styled.div`
  width: ${({ item }) => item.desktop.width};

   @media screen and (max-width: 767px) {
     width: ${({ item }) => item.mobile.width};
    } 

`
export const CurrentProductOtherDetailsContainer = styled.div`
   display: ${({ item }) => item.desktop.display};
   justify-content: ${({ item }) => item.desktop.justifyContent};
   align-items: ${({ item }) => item.desktop.alignItems};
   margin-top: ${({ item }) => item.desktop.marginTop};
   flex-wrap: wrap;
   @media screen and (max-width: 767px) {
       flex-wrap: ${({ item }) => item.desktop.flexWrap};
       margin-top: ${({ item }) => item.desktop.marginTop};
       gap: ${({ item }) => item.desktop.gap};
    }
`
export const CurrentProductOtherDetails = styled.div`
@media screen and (max-width:768px) {
    flex-grow: 1;
}
`;
export const ProductDetailList = styled.div`
    display: ${({ item }) => item.desktop.display};
    align-items: ${({ item }) => item.desktop.alignItems};
    @media screen and (max-width:768px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    }
 `
export const ProductVariantWrap = styled.div`
    display: ${({ item }) => item.desktop.display};
    align-items: ${({ item }) => item.desktop.alignItems};
    justify-content: ${({ item }) => item.desktop.justifyContent};
    gap:${({ item }) => item.desktop.gap};
    margin-bottom: ${({ item }) => item.desktop.marginBottom};
  
 `
export const SKU = styled.p`

`
export const CurrentProductStatus = styled.div`
    display: ${({ item }) => item.desktop.display};
    flex-direction: ${({ item }) => item.desktop.flexDirection};
    gap: ${({ item }) => item.desktop.gap};
    font-size: ${({ item }) => item.desktop.fontSize};
    line-height: ${({ item }) => item.desktop.lineHeight};
    @media screen and (max-width: 767px) {
        /* width: ${({ item }) => item.desktop.width}; */
        width: 100%;
    }
    `
export const StatusLi = styled.li`
        padding: ${({ item }) => item.desktop.padding};
        background: ${({ item }) => item.desktop.background};
        border-radius: ${({ item }) => item.desktop.borderRadius};
        text-align: ${({ item }) => item.desktop.textAlign};
        display: flex;
        &::marker {
            color: ${({ item }) => item.desktop.marker.color};
            margin: ${({ item }) => item.desktop.marker.margin};
        }
        @media screen and (max-width:768px) {
            justify-content: center;
        }
`
export const CancleProductBtn = styled.button`
    border-radius: ${({ item }) => item.desktop.borderRadius};
    padding:${({ item }) => item.desktop.padding};
    text-align: ${({ item }) => item.desktop.textAlign};
    color:  ${({ item }) => item.desktop.color};
    background: ${({ item }) => item.desktop.background};
    box-shadow:${({ item }) => item.desktop.boxShadow};
    transition: ${({ item }) => item.desktop.transition};
    border: ${({ item }) => item.desktop.border};
    width: ${({ item }) => item.desktop.width};
    cursor: ${({ item }) => item.desktop.cursor};
    &:hover{
        color: ${({ item }) => item.desktop.hover.color};
        background: ${({ item }) => item.desktop.hover.background};
    }
`
export const OrderIDContainerRight = styled.div`
    width: ${({ item }) => item.desktop.width};
    @media screen and (max-width: 1024px) {
        width: ${({ item }) => item.mobile.width};
    }
`
export const TrackingDetailsContainer = styled.div`
    margin-top: ${({ item }) => item?.desktop?.marginTop};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    background:${({ item }) => item?.desktop?.background};
    padding: ${({ item }) => item?.desktop?.padding};
`
export const TrackingDetailsWrapper = styled.div`
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    background: ${({ item }) => item?.desktop?.background};
    padding: ${({ item }) => item?.desktop?.padding};
`
export const HeadingWrap = styled.div`
       width: fit-content;
       position: relative;
       ::after{
            content: '';
            border: ${({ item }) => item?.desktop?.after?.border};;
            width: 100%;
            bottom: 0;
       }
`
export const TrackingIdWrapper = styled.div`
 display: flex;
 gap: 60px;
 margin-top: 12px;
 margin-bottom: 16px;
`
export const TextWrap = styled.div`
display: flex;
gap:6px;
align-items: center;
`
export const OtherItemsContainer = styled.div`
margin-top: ${({ item }) => item.desktop.marginTop};

`
export const OtherItemsContainerBox = styled.div`
    border-width:${({ item }) => item.desktop.borderWidth};
    border-style: ${({ item }) => item.desktop.borderStyle};
    border-color: ${({ item }) => item.desktop.borderColor};
    padding: ${({ item }) => item.desktop.padding};
`
export const OtherItems = styled.div`
    display: ${({ item }) => item.desktop.display};
    align-items: ${({ item }) => item.desktop.alignItems};
    gap: ${({ item }) => item.desktop.gap};
    box-shadow: ${({ item }) => item.desktop.boxShadow};
    border-radius:${({ item }) => item.desktop.borderRadius};
    padding: ${({ item }) => item.desktop.padding};
    background: ${({ item }) => item.desktop.background};
    margin-bottom: ${({ item }) => item.desktop.marginBottom};
    /* align-items: ${({ item }) => item.desktop.alignItems}; */
    @media screen and (max-width: 767px) {
      align-items: ${({ item }) => item.mobile.alignItems};
      flex-wrap: ${({ item }) => item.mobile.flexWrap};
      gap: ${({ item }) => item.mobile.gap};
        position: relative;
        padding-bottom: 50px;
    }
    `
export const OtherItemImg = styled.div`
    width: ${({ item }) => item.desktop.width};
    height: ${({ item }) => item.desktop.height};
    min-width: ${({ item }) => item.desktop.minWidth};
    min-height: ${({ item }) => item.desktop.minHeight};
    @media screen and (max-width: 767px) {
        width: ${({ item }) => item.mobile.width};
        min-width: ${({ item }) => item.mobile.minWidth};
        min-height: ${({ item }) => item.mobile.minHeight};
        display: ${({ item }) => item.mobile.display};
        margin: ${({ item }) => item.mobile.margin};
    }
`
export const OtherItemDetails = styled.div`
 width: ${({ item }) => item.desktop.width};
`
export const OtherItemDetailContainer = styled.div`
   display: ${({ item }) => item.desktop.display};
   justify-content:${({ item }) => item.desktop.justifyContent};
   align-items: ${({ item }) => item.desktop.alignItems};
   margin-top:${({ item }) => item.desktop.marginTop};
   width: ${({ item }) => item.desktop.width};
   flex-wrap: ${({ item }) => item.desktop.flexWrap};
   gap: ${({ item }) => item.desktop.gap};
   @media screen and (max-width: 767px) {
        display: ${({ item }) => item.mobile.display};
    }
`
export const OtherItemOtherDetailsDiv = styled.div`
   display: ${({ item }) => item.desktop.display};
   grid-template-columns:${({ item }) => item.desktop.gridTemplateColumns};
   gap: ${({ item }) => item.desktop.gap};
   
   @media screen and (max-width: 767px) {
    grid-template-columns:${({ item }) => item.mobile.gridTemplateColumns};
    }
`
export const MainWrapper = styled.div`
   width: ${({ item }) => item.desktop.width};
   @media screen and (max-width: 1024px) {
    width: ${({ item }) => item.tablet.width};
    }
   @media screen and (max-width: 767px) {
    width: ${({ item }) => item.mobile.width};
    }
`

export const OtherItemOtherDetails = styled.div`
display: ${({ item }) => item.desktop.display};
flex-wrap: ${({ item }) => item.desktop.flexWrap};
gap: ${({ item }) => item.desktop.gap};
`
export const OtherItemtStatus = styled.div`
    display: ${({ item }) => item.desktop.display};;
    flex-direction: ${({ item }) => item.desktop.flexDirection};;
    justify-content: ${({ item }) => item.desktop.justifyContent};
    gap: ${({ item }) => item.desktop.gap};
    font-size: ${({ item }) => item.desktop.fontSize};
    line-height: ${({ item }) => item.desktop.lineHeight};
    color: ${({ item }) => item.desktop.color};
    @media screen and (max-width: 767px) {
        margin-top: ${({ item }) => item.mobile.marginTop};
    }
    
`


export const ButtonViewOrder = styled.button`
        border-radius: ${({ item }) => item.desktop.borderRadius};
        padding:  ${({ item }) => item.desktop.padding};
        text-align: ${({ item }) => item.desktop.textAlign};
        color:  ${({ item }) => item.desktop.color};
        background:  ${({ item }) => item.desktop.background};
        box-shadow:  ${({ item }) => item.desktop.boxShadow};
        transition:  ${({ item }) => item.desktop.transition};
        border:  ${({ item }) => item.desktop.border};
        cursor:  ${({ item }) => item.desktop.cursor};
        &:hover{
            color:  ${({ item }) => item.desktop.hover.color};
            background:  ${({ item }) => item.desktop.hover.background};
        }
        @media (max-width:767px) {
            padding:  ${({ item }) => item.mobile.padding};
        }
`


export const NeedHelpContainer = styled.div`
    margin-top: ${({ item }) => item.desktop.marginTop};
    border: ${({ item }) => item.desktop.border};
    border-radius: ${({ item }) => item.desktop.borderRadius};
    padding: ${({ item }) => item.desktop.padding};

`
export const PaymentSummary = styled.div`
    border: ${({ item }) => item.desktop.border};
    border-radius: ${({ item }) => item.desktop.borderRadius};

`
export const OrderSummary = styled.div`
display:  ${({ item }) => item.desktop.display};
justify-content:  ${({ item }) => item.desktop.justifyContent};
align-items:  ${({ item }) => item.desktop.alignItems};
padding:  ${({ item }) => item.desktop.padding};

`
export const HR = styled.hr`
     margin: 10px 15px 0 15px;
`
export const OrderTotal = styled.div`
display:  ${({ item }) => item.desktop.display};
justify-content:  ${({ item }) => item.desktop.justifyContent};
align-items:  ${({ item }) => item.desktop.alignItems};
padding:  ${({ item }) => item.desktop.padding};
margin:  ${({ item }) => item.desktop.margin};
 /* h5{
   background-color: transparent;
   margin: 7px 0;
   font-weight: 600;
   font-family: 'Gilroy-Medium',sans-serif;
 } */

`
export const BackBtnOrderId = styled.div`
    background: ${({ item }) => item.desktop.background};
    width: ${({ item }) => item.desktop.width};
    display: ${({ item }) => item.desktop.display};
    align-items: ${({ item }) => item.desktop.alignItems};
    gap: ${({ item }) => item.desktop.gap};
   
    @media screen and (max-width: 767px) {
        padding: ${({ item }) => item.mobile.padding};
    }
    /* svg{
        display: none;
        width: 7.22px;
        height: 12.65px;
        @media screen and (max-width: 768px){
         display: block;
        }
    } */
`
export const BackBtnImgOrderId = styled.i`
  
`

export const CanceleBtnWrap = styled.div`

`

export const CancelButton = styled.button`
   
`