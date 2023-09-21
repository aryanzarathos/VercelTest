import styled from "styled-components";

export const MainSearch = styled.div`
display:${({ item }) => item?.desktop?.display};
background: ${({ itemSearch }) => itemSearch?.SearchBg};
border-radius: ${({ item }) => item?.desktop?.borderRadius};
max-width:${({ item }) => item?.desktop?.maxWidth};
width:${({ item }) => item?.desktop?.width};
padding:${({ item }) => item?.desktop?.padding};
gap:${({ item }) => item?.desktop?.gap};
align-items: ${({ item }) => item?.desktop?.alignItems};
svg{
    height: ${({ itemSvg }) => itemSvg?.desktop?.height};
    width: ${({ itemSvg }) => itemSvg?.desktop?.width};
    fill: ${({ itemSvg }) => itemSvg?.desktop?.fill};
}
`;
export const SearchInput = styled.input`
width:${({ item }) => item?.desktop?.width};
outline:${({ item }) => item?.desktop?.outline};
border:${({ item }) => item?.desktop?.border};
background:${({ item }) => item?.desktop?.background};
font-size: ${({ item }) => item?.desktop?.fontSize};
line-height: ${({ item }) => item?.desktop?.lineHeight};
background: ${({ itemSearch }) => itemSearch?.SearchBg};

&::placeholder{
    color: ${({ itemSearch }) => itemSearch?.Placeholder};
}
`;
