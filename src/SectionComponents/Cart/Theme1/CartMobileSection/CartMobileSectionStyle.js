
import styled from "styled-components";


export const ShoppingCartMobile = styled.div`
        display : ${({ item }) => item?.desktop?.display};
  @media screen and (max-width: 700px){
        display: ${({ item }) => item?.mobile?.display};
        justify-content:${({ item }) => item?.mobile?. justifyContent};
        align-items: ${({ item }) => item?.mobile?.alignItems};
        padding:${({ item }) => item?.mobile?.padding};
        border-bottom: ${({ item }) => item?.mobile?. borderBottom};   
    } 
`;


export const BtnContain = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    gap: ${({ item }) => item?.desktop?.gap};
    align-items: ${({ item }) => item?.desktop?. alignItems};
     p{
        &:hover{
            cursor: pointer;
        }
    }
`;
