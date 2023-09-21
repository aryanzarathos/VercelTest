import styled from "styled-components";

export const FiltersContainer = styled.div`
width: ${({ item }) => item.desktop.width};
display: ${({ item }) => item.desktop.display};
flex-direction: ${({ item }) => item.desktop.flexDirection};
gap: ${({ item }) => item.desktop.gap};
`

export const FilterMainConatiner = styled.div`
position: ${({ item }) => item.desktop.position};
top: ${({ item }) => item.desktop.top};

`

export const HeadingWrap = styled.div`
display: ${({ item }) => item.desktop.display};
justify-content: ${({ item }) => item.desktop.justifyContent};
align-items: ${({ item }) => item.desktop.alignItems};
gap: ${({ item }) => item.desktop.gap};
margin-bottom: ${({ item }) => item.desktop.margin.marginBottom};

`