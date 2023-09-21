import styled from "styled-components"


export const ShoppingCartMobile = styled.div`
        display : ${({ item }) => item?.desktop?.display};
  @media screen and (max-width: 700px){
        display: ${({ item }) => item?.mobile?.display};
        justify-content:${({ item }) => item?.mobile?.justifyContent};
        align-items: ${({ item }) => item?.mobile?.alignItems};
        padding:${({ item }) => item?.mobile?.padding};
        border-bottom: ${({ item }) => item?.mobile?.borderBottom};   
    } 
`;

export const BtnContain = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    align-items: ${({ item }) => item?.desktop?.alignItems};
     p{
        &:hover{
            cursor: pointer;
        }
    }
`;


// export const ProductCount = styled.span`
//     font-size: 12px;
//     line-height: 14.06px;
//     color: rgba(32, 32, 32, 0.6);
// `;



export const ProgressContainer = styled.div`

    margin-bottom:${({ item }) => item?.desktop?.marginBottom};
    @media screen and (max-width: 700px){
        margin-bottom: ${({ item }) => item?.mobile?.marginBottom};
    }
`


export const Row = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    margin-bottom: ${({ item }) => item?.desktop?.marginBottom};
    @media screen and (max-width: 1000px){
        flex-wrap:  ${({ item }) => item?.tablet?.flexWrap};
        gap: ${({ item }) => item?.gap?.flexWrap};
        
    }
`;

export const LayoutSectionLt = styled.div`
    width: ${({ item }) => item?.desktop?.width};
    padding-right: ${({ item }) => item?.desktop?.paddingRight};
    @media screen and (max-width: 1200px){
        width: 65%;
        padding-right: 15px;
    }
    @media screen and (max-width: 1000px){
        width:  ${({ item }) => item?.tablet?.width};
        padding:  ${({ item }) => item?.padding?.padding};
    }
`;
export const AboutItem = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    grid-template-columns:${({ item }) => item?.desktop?.gridTemplateColumns};
    gap:${({ item }) => item?.desktop?.gap};
    margin-bottom:${({ item }) => item?.desktop?.marginBottom};
    @media screen and (max-width: 700px){
        display:  ${({ item }) => item?.mobile?.display};
    }
`
// export const Product = styled.p`
//     font-size: 20px;
//     line-height: 36px;
//     color: #003459;
//     white-space: nowrap;
//     font-family: 'Gilroy-Medium', sans-serif;
// `
// export const Variant = styled.p`
//     font-size: 20px;
//     line-height: 36px;
//     color: #003459;
//     white-space: nowrap;
//     font-family: 'Gilroy-Medium', sans-serif;
// `
// export const Quantity = styled.p`
//     font-size: 20px;
//     line-height: 36px;
//     color: #003459;
//     white-space: nowrap;
//     font-family: 'Gilroy-Medium', sans-serif;
// `
// export const Total = styled.p`
//     font-size: 20px;
//     line-height: 36px;
//     color: #003459;
//     white-space: nowrap;
//     font-family: 'Gilroy-Medium', sans-serif;
// `;

export const Line = styled.div`
    width: ${({ item }) => item?.desktop?.width};
    border: ${({ item }) => item?.desktop?.border};
`;

export const ProductContainer = styled.div`
    display:  ${({ item }) => item?.desktop?.display};
    grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
    padding:  ${({ item }) => item?.desktop?.padding};
    gap:  ${({ item }) => item?.desktop?.gap};
    align-items:  ${({ item }) => item?.desktop?.alignItems};
  
   

    @media screen and (max-width: 1200px){
        gap: ${({ item }) => item?.tablet?.gap};
    }
    @media screen and (max-width: 700px){
        grid-template-columns:  ${({ item }) => item?.mobile?.gridTemplateColumns};
      
    }

   
`;

export const ProductItem = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    @media screen and (max-width: 1200px){
        gap: ${({ item }) => item?.tablet?.gap};
    }
    @media screen and (max-width: 700px){
        gap:  ${({ item }) => item?.mobile?.gap};
    }
`;

export const ImgItem = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    height: ${({ item }) => item?.desktop?.height};
    width: ${({ item }) => item?.desktop?.width};
    border: ${({ item }) => item?.desktop?.border};
    border-radius: ${({ item }) => item?.desktop?.borderRadius};
    @media screen and (max-width: 700px){
        width: ${({ item }) => item?.mobile?.width};
        height: ${({ item }) => item?.mobile?.height};
    }
    /* img{
        display: block;
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    } */

`;

export const AboutImg = styled.div`
    width: ${({ item }) => item?.desktop?.width};
`;

export const DescriptionMain = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    width:${({ item }) => item?.desktop?.width};
    gap:${({ item }) => item?.desktop?.gap};
     /* p{
        font-size: 16px;
        line-height: 24px;
        color: #003459;
        font-family: 'Gilroy-Medium', sans-serif;
        @media screen and (max-width: 1200px){
        font-size: 13px;
        line-height: 20px;  
    }
    @media screen and (max-width: 700px){
       font-size: 12px;
       line-height: 18px;
    }
    } */
`
export const DeleteLikeBtn = styled.div`
     display: ${({ item }) => item?.desktop?.display}; 
    @media screen and (max-width: 700px){ 
    display: ${({ item }) => item?.mobile?.display};
    flex-direction:  ${({ item }) => item?.mobile?.flexDirection};
    align-items:  ${({ item }) => item?.mobile?.alignItems};
    gap: ${({ item }) => item?.mobile?.gap};
    }
`;

export const Deletebtn = styled.div`
    &:hover{
            cursor: pointer;
        }
`;

export const LikeBtmItem = styled.div`
   position: ${({ item }) => item?.desktop?.position};
   display: ${({ item }) => item?.desktop?.display};
   @media screen and (max-width: 700px){
        display:  ${({ item }) => item?.mobile?.display};
    } 
`;

export const TotalItemMobile = styled.div`
  display: ${({ item }) => item?.desktop?.display};
  h2{
    font-size: 16px;
    line-height: 24px;
    color: #003459;
    white-space: nowrap;
    font-family: 'Gilroy-Medium', sans-serif;
    @media screen and (max-width: 1200px){
        font-size: 13px;
        line-height: 20px;  
    }
    @media screen and (max-width: 700px){
       font-size: 12px;
       line-height: 16px;
    }
    }
    h6{
    font-size: 16px;
    line-height: 24px;
    font-family: 'Gilroy-Medium', sans-serif;
    color: rgba(32, 32, 32, 0.6);
    white-space: nowrap;
    @media screen and (max-width: 700px){
       font-size: 12px;
       line-height: 16px;
    }
    }
  @media screen and (max-width: 700px){
        display: block;
    } 
`;

export const DiscountMobile = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    /* h6{
    font-size: 16px;
    line-height: 24px;
    color: rgba(32, 32, 32, 0.6);
    white-space: nowrap;
    font-family: 'Gilroy-Medium', sans-serif;
    @media screen and (max-width: 1200px){
        font-size: 13px;
        line-height: 20px;  
    }
   
    }
    p{
    font-size: 16px;
    line-height: 24px;
    color: #428BC1;
    white-space: nowrap;
    font-family: 'Gilroy-Medium', sans-serif;
    @media screen and (max-width: 1200px){
        font-size: 13px;
        line-height: 20px;  
    }
} */
`;


export const LineDot = styled.div`
    width: 100%;
    border-bottom: 2px dotted ;
    border-color: ${({ theme }) => theme.CartPage.Line.BoderColor};
    opacity: 0.2;
`;


export const VariantItem = styled.div`
    /* p{
        font-size: 28px;
        line-height: 24px;
        color: #003459;
        white-space: nowrap;
        font-family: 'Gilroy-Medium', sans-serif;
        @media screen and (max-width: 1200px){
        font-size: 13px;
        line-height: 20px;  
    }
    @media screen and (max-width: 700px){
        display: none;
    }
        .variantselect{
            font-weight: 600;
        }
    } */
`;
export const QuantityItem = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
   
   /* input{
    padding: 10px;
    width: 80%;
    border: 1px solid rgba(32, 32, 32, 0.6);
    border-radius: 4px;
    &::-webkit-outer-spin-button{
        display: inline-block;
        opacity: 1;
    }
    &::-webkit-inner-spin-button {
        display: inline-block;
        opacity: 1;
    }
    @media screen and (max-width: 700px){
        width: 82px;
   }
} */

input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0; 
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none;
}

`;

export const VariantItemMobile = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    @media screen and (max-width: 700px){
        display: ${({ item }) => item?.mobile?.display};
        p{
        font-size: 14px;
        line-height: 24px;
        color: #003459;
        white-space: nowrap;
        font-family: 'Gilroy-Medium', sans-serif;
        @media screen and (max-width: 1200px){
        font-size: 13px;
        line-height: 20px; 
        } 
    @media screen and (max-width: 700px){
       font-size: 12px;
       line-height: 14px;
    }
    }
    }
`;


export const QuantityHandleWrapper = styled.div`
  border: 1px solid rgba(32, 32, 32, 0.6);
  border-radius: 4px;
  padding: 6px 35px 6px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .qauntity{
    font-family: 'Gilroy-Medium',sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #202020;
  }
  .incerement-btn{
    background-color: transparent;
    border: none;
    font-size: 20px;
    line-height: 0;
    height: 0;
    position: absolute;
    top: 2px;
    right: 10px;
    &:disabled{
        cursor: auto;
    }
  }
  .descriment-btn{
    background-color: transparent;
    border: none;
    font-size: 20px;
    line-height: 0;
    height: 0;
    position: absolute;
    bottom: 2px;
    right: 10px;
    &:disabled{
        cursor: auto;
    }
  }
`
export const TotalItem = styled.div`
    @media screen and (max-width: 700px){
        display: ${({ item }) => item?.mobile?.display};
    }
    /* h2{
    font-size: 16px;
    line-height: 24px;
    color: #003459;
    white-space: nowrap;
    font-family: 'Gilroy-Medium', sans-serif;
    @media screen and (max-width: 1200px){
        font-size: 13px;
        line-height: 20px;  
    }
    
    }
    h6{
    font-size: 16px;
    line-height: 24px;
    color: rgba(32, 32, 32, 0.6);
    white-space: nowrap;
    font-family: 'Gilroy-Medium', sans-serif;
    @media screen and (max-width: 1200px){
        font-size: 13px;
        line-height: 20px;  
    }
   
    }
    p{
    font-size: 16px;
    line-height: 24px;
    color: #428BC1;
    white-space: nowrap;
    font-family: 'Gilroy-Medium', sans-serif;
    @media screen and (max-width: 1200px){
        font-size: 13px;
        line-height: 20px;  
    }
    
} */
`;
export const DltLikeWrappper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
`






// export const BackBtn = styled.i`
//     -webkit-mask-image: url(${Image3});
//     mask-image: url(${Image3});
//     -webkit-mask-repeat: no-repeat;
//     mask-repeat: no-repeat;
//     background-color: #1F3259;
//     width: 7px;
//     height: 12px;
//     &:hover{
//             cursor: pointer;
//         }
// `;

export const DeletebtnIcon = styled.div`
    &:hover{
            cursor: pointer;
        }
        @media screen and (max-width: 700px){
        display: ${({ item }) => item?.mobile?.display};  
    } 
`;


export const LikeBtmItemDesk = styled.div`
   position: ${({ item }) => item?.desktop?.position};
   display: ${({ item }) => item?.desktop?.position};
   @media screen and (max-width: 700px){
        display: ${({ item }) => item?.mobile?.position};
    } 
`;
export const Like = styled.div`
    /* width: 16.67px;
    height: 15.29px;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    background-color: #1F2B6C;
    display: block; */
    &:hover{
            cursor: pointer;
        }
`;
// export const Aero = styled.i`
//     position: absolute;
//     bottom: 25%;
//     right: -1px;
//     width: 8.75px;
//     height: 6.81px;
//     -webkit-mask-repeat: no-repeat;
//     mask-repeat: no-repeat;
//     background-color: #1F2B6C;
//     &:hover{
//             cursor: pointer;
//         }  
// `;




export const LayoutSectionRt = styled.div`
    width: ${({ item }) => item?.desktop?.width};
    @media screen and (max-width: 1024px){
        width:  ${({ item }) => item?.tablet?.width};
    }
`;
export const OrderSummaryContainer = styled.div`
    padding:  ${({ item }) => item?.desktop?.padding};
    border: ${({ item }) => item?.desktop?.border};
    border-radius:  ${({ item }) => item?.desktop?.borderRadius};
    @media screen and (max-width:767px) {
        border: ${({ item }) => item?.mobile?.border};
        margin-bottom:${({ item }) => item?.mobile?.margin?.marginBottom}
        
    }
`;
export const OrderSumaryText = styled.div`
    border-bottom:${({ item }) => item?.desktop?.borderBottom};
    padding-bottom:${({ item }) => item?.desktop?.paddingBottom};
    /* h2{
        font-size: 20px;
        line-height: 36px;
        color: #003459;
        @media screen and (max-width: 700px){
            font-size: 16px;
            line-height: 36px;
        }
    } */
`

export const Subtotal = styled.div`
    padding: ${({ item }) => item?.desktop?.padding};
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    border-bottom: ${({ item }) => item?.desktop?.borderBottom};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    @media screen and (max-width:767px){
        border-bottom: ${({ item }) => item?.mobile?.borderBottom};
    }
    /* h2{
        font-size: 20px;
        line-height: 36px;
        color: #003459;
        @media screen and (max-width: 700px){
            font-size: 16px;
            line-height: 36px;
            @media screen and (max-width: 700px){
            font-size: 16px;
            line-height: 24px;
        }
    }
    }
    p{
        font-size: 16px;
        line-height: 24px;
        color: #003459;

    } */

`;
export const Shipping = styled.div`
 padding: ${({ item }) => item?.desktop?.padding};
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    border-bottom: ${({ item }) => item?.desktop?.borderBottom};
    align-items: ${({ item }) => item?.desktop?.alignItems};
     @media screen and (max-width:767px){
        border-bottom: ${({ item }) => item?.mobile?.borderBottom};
    }
    /* h2{
        font-size: 20px;
        line-height: 36px;
        color: #003459;
        @media screen and (max-width: 700px){
            font-size: 16px;
            line-height: 36px;
        }
    }
    p{
        font-size: 16px;
        line-height: 24px;
        color: #003459;

    } */
`;
export const TotalAmmount = styled.div`
    padding: ${({ item }) => item?.desktop?.padding};
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    align-items: ${({ item }) => item?.desktop?.alignItems};
`;

export const ButtonContinue = styled.button`
    width:${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
    background: ${({ item }) => item?.desktop?.backgroundColor};
    color:${({ item }) => item?.desktop?.color};
    display: ${({ item }) => item?.desktop?.display};
    align-items:${({ item }) => item?.desktop?.alignItems};
    justify-content:${({ item }) => item?.desktop?.justifyContent};
    gap: ${({ item }) => item?.desktop?.gap};
    font-size: ${({ item }) => item?.desktop?.fontSize};
    line-height: ${({ item }) => item?.desktop?.lineHeight};
    border-radius:${({ item }) => item?.desktop?.borderRadius};
    border: ${({ item }) => item?.desktop?.border};
    margin-top: ${({ item }) => item?.desktop?.marginTop};
    @media screen and (max-width: 700px){
            font-size: 16px;
            line-height: 36px;
        }
    &:hover{
        background-color: #0a4d79;
        cursor: pointer;
        transition: all 1s;
    }
`;
export const CartIconMain = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;
export const OrderButton = styled.div`
    /* position: fixed;
    bottom: 0px;
    width: 100%;
    z-index: 999;
    left: 0;
    padding: 20px;
    background: #fff;
    box-shadow: 4px -4px 8px 0px rgba(0, 0, 0, 0.06); */
@media screen and (max-width : 767px) {
       position: ${({ item }) => item?.mobile?.position};
    bottom: ${({ item }) => item?.mobile?.bottom};
    width: ${({ item }) => item?.mobile?.width};
    left: ${({ item }) => item?.mobile?.left};
    padding-top:${({ item }) => item?.mobile?.padding?.paddingTop};
    padding-right:${({ item }) => item?.mobile?.padding?.paddingRight};
    padding-bottom:${({ item }) => item?.mobile?.padding?.paddingBottom};
    padding-Left:${({ item }) => item?.mobile?.padding?.paddingLeft};
    background: ${({ item }) => item?.mobile?.background};
    box-shadow: ${({ item }) => item?.mobile?.boxShadow};
    position: fixed;
    bottom: 0px;
    width: 100%;
    z-index: 999;
    left: 0;
    padding: 20px;
    background: var(--global-color-penitentiary);
    box-shadow: 4px -4px 8px 0px rgba(0, 0, 0, 0.06);
}
`;

