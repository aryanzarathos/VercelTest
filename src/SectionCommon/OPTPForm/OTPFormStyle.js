import { styled } from "styled-components";

    export const MainContainer = styled.div`
    width: ${({ item }) => item?.desktop?.width  ? item?.desktop?.width : "100%"  };
    `
    export const MainHeadingContainer = styled.div`
            margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom ? item?.desktop?.margin?.marginBottom : "24px"};

    `
    export const InputOtpContainer = styled.div`
        width: ${({ item }) => item?.desktop?.width};
        display: ${({ item }) => item?.desktop?.display};
        justify-content: ${({ item }) => item?.desktop?.justifyContent};
        align-items: ${({ item }) => item?.desktop?.alignItems};
        margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
        gap:${({ item }) => item?.desktop?.gap};
        @media screen and (max-width: 767px) {
                gap:${({ item }) => item?.mobile?.gap};
        }
        @media screen and (max-width:350px) {
            .form-control{
                height: 28px;
                width: 28px;
            }
        }

    `
    export const OtpNumber = styled.div`
    display:${({ item }) => item?.desktop?.display};
    align-items:${({ item }) => item?.desktop?.alignItems};
    gap:${({ item }) => item?.desktop?.gap};
    flex-wrap:${({ item }) => item?.desktop?.wrap};
    justify-content:${({ item }) => item?.desktop?.justifyContent};
    margin-top:${({ item }) => item?.desktop?.margin?.marginTop};
    @media screen and (max-width:767px) {
        flex-direction: column;
    }
     `;
    export const OtpRecive = styled.div`
    display:${({ item }) => item?.desktop?.display};
    align-items:${({ item }) => item?.desktop?.alignItems};
    gap:${({ item }) => item?.desktop?.gap};
    justify-content:${({ item }) => item?.desktop?.justifyContent};
    margin-top:${({ item }) => item?.desktop?.margin?.marginTop};
    margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom};
    `;

    export const VarifyContainer = styled.div`
display: ${({ item }) => item?.desktop?.display};
justify-content: ${({ item }) => item?.desktop?.justifyContent};
align-items: ${({ item }) => item?.desktop?.alignItems};
gap: ${({ item }) => item?.desktop?.gap};
margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
`
