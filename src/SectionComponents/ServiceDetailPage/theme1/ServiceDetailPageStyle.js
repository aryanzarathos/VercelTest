import { styled } from "styled-components";


export const MainWrapper = styled.div`
overflow: ${({ item }) => item.style.desktop.overflow};
`

export const HeadingWrappper = styled.div`
text-align:  ${({ item }) => item.style.desktop.textAlign};
padding: ${({ item }) => item.style.desktop.padding};



`
export const LowerWrapper = styled.div`
padding-top: ${({ item }) => item.style.desktop.paddingTop};
`
export const TabsContainer = styled.div`
display: ${({ item }) => item.style.desktop.display};
gap: ${({ item }) => item.style.desktop.gap};
justify-content: ${({ item }) => item.style.desktop.justifyContent};
align-items: ${({ item }) => item.style.desktop.alignItems};
`
export const TabSection = styled.div`
    overflow-x: ${({ item }) => item.style.desktop.overflowX};
    white-space: ${({ item }) => item.style.desktop.whiteSpace};
    display: ${({ item }) => item.style.desktop.display};
    max-width: ${({ item }) => item.style.desktop.maxWidth};
    gap: ${({ item }) => item.style.desktop.gap};


    &::-webkit-scrollbar {
        display: none;
    } 
`


export const TabWrapper = styled.div`
width: ${({ item }) => item.style.desktop.width};
`

export const TabButton = styled.button`
border-radius: ${({ item }) => item.style.desktop.borderRadius};
padding: ${({ item }) => item.style.desktop.padding};
border: ${({ item }) => item.style.desktop.border};
box-shadow:${({ item }) => item.style.desktop.boxShadow};
cursor: ${({ item }) => item.style.desktop.cursor};

   &.activeTab {
    background: ${({ item }) => item.style.desktop.active.background};
    color: ${({ item }) => item.style.desktop.active.color};
}



`