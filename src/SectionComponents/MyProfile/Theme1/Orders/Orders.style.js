import styled from "styled-components"

export const ProductMainContainer = styled.div`
/* margin-top: 24px; */
/* padding: 24px 36px; */
padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-Left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
@media screen and (max-width: 767px) {  
    /* padding: 24px 20px; */
    padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
padding-Left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
padding: 0px;

}
`
export const OrderDetailContainer = styled.div`
 display: ${({ item }) => item?.desktop?.display};
 justify-content: ${({ item }) => item?.desktop?.justifyContent};
 margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
 margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
 margin-top: 20px;
 @media screen and (max-width: 767px) {
    flex-wrap: ${({ item }) => item?.mobile?.flexWrap};
}
`
// export const OrderDetail = styled.h2`
// font-family: 'Gilroy-SemiBold', 'sans-serif';
// font-size: 18px;
// line-height: 36px;
// color: #003459;
// @media screen and (max-width: 870px) {  
//     font-size: 13px;
// }

// `;
export const ProductContainer = styled.div`
margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
`
// export const Title = styled.p`
//     font-family: 'Gilroy-SemiBold';
//     font-size: 18px;
//     line-height: 36px;
//     color: #003459;
//     background: #F0F6FF;
//     padding-left: 24px;
//     border-radius: 8px 8px 0 0;
//     border-bottom: 1px solid #B3C2CD;

// `
export const ProdcutDetailContainer = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    padding-top:${({ item }) => item?.desktop?.padding?.paddingTop} ;
    padding-right:${({ item }) => item?.desktop?.padding?.paddingRight} ;
    padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom} ;
    padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft} ;
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    background: ${({ item }) => item?.desktop?.background};
    border-bottom: ${({ item }) => item?.desktop?.borderBottom};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    gap: ${({ item }) => item?.desktop?.gap};
        @media screen and (max-width: 1024px) {
            gap: ${({ item }) => item?.tablet?.gap};
            flex-wrap: ${({ item }) => item?.tablet?.flexWrap};
        }
        @media screen and (max-width: 767px) {
            justify-content: ${({ item }) => item?.mobile?.justifyContent};
            padding-top:${({ item }) => item?.mobile?.padding?.paddingTop} ;
    padding-right:${({ item }) => item?.mobile?.padding?.paddingRight} ;
    padding-bottom:${({ item }) => item?.mobile?.padding?.paddingBottom} ;
    padding-left:${({ item }) => item?.mobile?.padding?.paddingLeft} ;
        }
    /* a{

        @media screen and (max-width: 1024px) {
            display: none;
        }
        &:hover{
        color: #fff;
        background: #003459;
        }
    } */
`
export const Products = styled.div`
    display: ${({ item }) => item?.desktop?.display}; 
    gap:${({ item }) => item?.desktop?.gap};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    width: ${({ item }) => item?.desktop?.width};
`


export const ProductImgContainer = styled.div`
    width:${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};

    /* img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    } */
`

export const ProductDetail = styled.div`
    width: ${({ item }) => item?.desktop?.width};
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    align-items: ${({ item }) => item?.desktop?.aligItems};
    gap: ${({ item }) => item?.desktop?.gap};
    grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
    @media screen and (max-width: 1024px) {
        grid-template-columns: ${({ item }) => item?.tablet?.gridTemplateColumns};
    }
    /* a{
        display: none;
        @media screen and (max-width: 980px) {
            display: block; 
            width: 162px;
            margin-top: 15px;
        }
    } */
`;

// export const SKU = styled.p`
//     font-family: 'Gilroy-Medium', sans-serif;
//     font-size: 13px;
//     line-height: 20px;
//     color: #99A2A5;
// `
// export const ProductName = styled.p`
//     font-family: 'Gilroy-Medium', sans-serif;
//     font-size: 14px;
//     line-height: 19px;
//     color: #003459;
// `;
export const BackBtn = styled.div`
background: ${({ item }) => item?.desktop?.background};
display: ${({ item }) => item?.desktop?.display};
@media screen and (max-width: 767px) {  
    display: ${({ item }) => item?.mobile?.display};
}

    a{
        /* display: flex;
        align-items: center;
        gap: 12px; */
        /* p{
            font-family: 'Gilroy-Medium', sans-serif;
            font-size: 20px;
            line-height: 23px;
            color: #1F3259;
            font-weight: 600;
        } */
    }
    svg{
        width: ${({ itemProductBackBtnSvg }) => itemProductBackBtnSvg?.desktop?.width};
        height: ${({ itemProductBackBtnSvg }) => itemProductBackBtnSvg?.desktop?.height};
        fill: ${({ itemProductBackBtnSvg }) => itemProductBackBtnSvg?.desktop?.fill};
    }
`
