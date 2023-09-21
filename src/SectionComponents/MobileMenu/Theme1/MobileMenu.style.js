import styled from "styled-components"



export const MenuContainer = styled.div`
gap: ${({ item }) => item?.desktop?.gap};
grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
    padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
    position: ${({ item }) => item?.desktop?.position};
    bottom: ${({ item }) => item?.desktop?.bottom};
    left: ${({ item }) => item?.desktop?.left};
    box-shadow: ${({ item }) => item?.desktop?.boxShadow};
    background: ${({ item }) => item?.desktop?.background};
    width: ${({ item }) => item?.desktop?.width};
    display: ${({ item }) => item?.desktop?.display};
    z-index: 999;
    
`;

// export const Text = styled.p`
//     font-size: 10px;
//     line-height: 14px;
//     color: rgba(32, 32, 32, 0.6);
//     font-family: 'Gilroy-Bold', sans-serif;
//     white-space: nowrap;
// `;
export const MobileMenu = styled.div`
display: ${({ item }) => item?.desktop?.display};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    flex-direction: ${({ item }) => item?.desktop?.flexDirection};
    background: ${({ item }) => item?.desktop?.background};
    outline: ${({ item }) => item?.desktop?.outline};
    border: ${({ item }) => item?.desktop?.border};
    &.addclass{
        svg{
            fill: ${({ itemActive }) => itemActive?.desktop?.fill};
        }
        p{
            color: ${({ itemActive }) => itemActive?.desktop?.color};
        }
    }
`;
export const MoileIcon = styled.div`
position: ${({ item }) => item?.desktop?.position};
svg{
    fill: ${({ itemSvg }) => itemSvg?.desktop?.fill};
}
`;