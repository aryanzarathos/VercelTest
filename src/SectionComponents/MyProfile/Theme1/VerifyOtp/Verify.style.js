import styled from "styled-components"

export const BtnContainer = styled.div`
   display: ${({item})=>item?.desktop?.display};
   flex-direction: ${({ item }) => item?.desktop?.flexDirection};
   gap: ${({ item }) => item?.desktop?.gap};
`
export const VarifyContainer = styled.div`
    display: ${({item})=>item?.desktop?.display};
    justify-content: ${({ item }) => item?.desktop?.justifyContent};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    gap: ${({ item }) => item?.desktop?.gap};
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
    /* p{
        font-family: 'Gilroy-SemiBold',sans-serif;
        font-size: 20px;
        line-height: 20px;
        color: #003459;
    } */
`