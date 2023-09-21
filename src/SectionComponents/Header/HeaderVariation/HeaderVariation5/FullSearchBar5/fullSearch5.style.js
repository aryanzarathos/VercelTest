import styled from "styled-components";

export const MainSearchBar = styled.div`
    background-color: #fff;
    position: ${({ item }) => item?.desktop.position};
    width: ${({ item }) => item?.desktop.width};
    top: ${({ item }) => item?.desktop.top};
    box-shadow: ${({ item }) => item?.desktop.boxShadow};
    z-index: ${({ item }) => item?.desktop.zIndex};
    height:${({ item }) => item?.desktop.height};
    display:${({ item }) => item?.desktop.display};
    align-items:${({ item }) => item?.desktop.alignItems};
    padding-top:${({ item }) => item?.desktop.padding?.paddingTop};
    padding-right:${({ item }) => item?.desktop.padding?.paddingRight};
    padding-bottom:${({ item }) => item?.desktop.padding?.paddingBottom};
    padding-left:${({ item }) => item?.desktop.padding?.paddingLeft};
    gap:${({ item }) => item?.desktop.gap};
    @media screen and (max-width:767px) {
      padding-right:0px;
      padding-left:0px;
    }
    .searchIcon{
        fill: ${({ itemSearch }) => itemSearch?.desktop?.fill};
        min-width: 20px;
    }
    .closeIcon{
        fill: ${({ itemClose }) => itemClose?.desktop?.fill};
        min-width: 20px;
        
    }
    
    `;
export const SearchBtn = styled.button`
    display:${({ item }) => item?.desktop?.display};
    cursor:${({ item }) => item?.desktop?.cursor};
    background:${({ item }) => item?.desktop?.background};
    outline:${({ item }) => item?.desktop?.outline};
    border:${({ item }) => item?.desktop?.border};
    `;
export const SearchForm = styled.form`
width:${({ item }) => item?.desktop?.width};

`;
export const SearchInput = styled.input`
width:${({ item }) => item?.desktop?.width};
    background-color: ${({ itemFullSearch }) => itemFullSearch?.SearchBg};

        border:${({ item }) => item?.desktop?.border};
        outline:${({ item }) => item?.desktop?.outline};
        font-size:${({ item }) => item?.desktop?.fontSize};
        &::placeholder{
    color: ${({ itemFullSearch }) => itemFullSearch?.Placeholder};

        }
          @media screen and (max-width:767px) {
            width: 80%;
    }
`;

