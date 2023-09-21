const { styled } = require("styled-components");



export const CopyRightWrapper = styled.div`
    width:${({ item }) => item.desktop.width};
    display: ${({ item }) => item.desktop.display};
    flex-direction: ${({ item }) => item.desktop.flexDirection};
    gap: ${({ item }) => item.desktop.gap};
    @media screen and (max-width:768px) {
        margin-bottom: ${({item})=>item?.mobile?.margin?.marginBottom};
    }
`