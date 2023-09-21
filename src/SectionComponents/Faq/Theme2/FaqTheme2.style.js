import styled from "styled-components"


export const MainConatainer = styled.div`
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
;
`
// export const HeadingWrapper = styled.div`
//    text-align: center;
//    font-family: 'Gilroy-Bold',sans-serif;
// h1{
//     font-size: 40px;
//     line-height: 47px;
//     text-transform: capitalize;
//     color: #202020;
//     margin-bottom: 16px;
// }
// h3{
//     font-size: 24px;
//     line-height: 28px;
//     color: #202020;
//     margin-bottom: 9px;
// }
// p{
//     font-family: 'Gilroy-Regular',sans-serif;
//     font-size: 16px;
//     line-height: 19px;
//     text-align: center;
//     color: #202020;
// }
// `
export const FaqWrapper = styled.div`
position: ${({ item }) => item?.desktop?.position};
`;
export const FaqWrap = styled.div`
border: ${({ item }) => item?.desktop?.border};
border-radius: ${({ item }) => item?.desktop?.borderRadius};
 padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
/* padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight}; */
margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom}; 
cursor: ${({ item }) => item?.desktop?.cursor};
background: ${({ item }) => item?.desktop?.background};
border-style:  ${({ item }) => item?.desktop?.borderStyle} ;
    border-width:${({ item }) => item?.desktop?.borderWidth};
    border-color:${({ item }) => item?.desktop?.borderColor} ;

&:last-child {
    margin-bottom: 0px;
}

&:hover{
    background: ${({ item }) => item?.desktop?.hover?.background};
}
`;
export const TitleWrapper = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
    .aero{
        fill: ${({ itemSvg }) => itemSvg?.desktop?.fill};
        transition: ${({ itemSvg }) => itemSvg?.desktop?.transition};
    }
    .rotate{
        transform: ${({ itemSvg }) => itemSvg?.desktop?.active?.transform};
    }
`

export const Description = styled.div` 
      transition: ${({ item }) => item?.desktop?.transition};
         opacity: ${({ item }) => item?.desktop?.opacity};
    height: ${({ item }) => item?.desktop?.height};
  /* p{
    font-family: 'Futura Md BT',sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: rgba(32, 32, 32, 0.6);
 
} */
&.show{
    padding-top: 12px;
    height: auto;
    opacity: 1;
} 

`