import { styled } from "styled-components"

export const CategorisFilterContainer = styled.div`
    width: ${({ item }) => item.desktop.width};
    margin-top: ${({ item }) => item.desktop.margin.marginTop};
    max-height: ${({ item }) => item.desktop.maxHeight};
    overflow-y: ${({ item }) => item.desktop.overflowY};
    @media (max-width:768px){
        max-height: 100%;
    }
  
`
export const FilterList = styled.div`
    width: ${({ item }) => item.desktop.width};
`
export const CatergoryCheckBoxWrap = styled.li`
    margin-top: ${({ item }) => item.desktop.margin.marginTop};
    list-style: ${({ item }) => item.desktop.listStyle};
    display: ${({ item }) => item.desktop.display};
    grid-template-columns:  ${({ item }) => item.desktop.gridTemplateColumns};
    gap:  ${({ item }) => item.desktop.gap};
    @media (max-width: 767px) {
        margin-top: ${({ item }) => item.mobile.margin.marginTop};
        margin-bottom: ${({ item }) => item.mobile.margin.marginBottom};
    }
`
export const SubcategoryCheckBoxWrap = styled.li`
    margin-left: ${({ item }) => item.desktop.margin.marginLeft};
    margin-top: ${({ item }) => item.desktop.margin.marginTop};
    list-style: ${({ item }) => item.desktop.listStyle};
    display: ${({ item }) => item.desktop.display};
    grid-template-columns:  ${({ item }) => item.desktop.gridTemplateColumns};
    gap:  ${({ item }) => item.desktop.gap};
    @media (max-width: 767px) {
        margin-top: ${({ item }) => item.mobile.margin.marginTop};
        margin-bottom: ${({ item }) => item.mobile.margin.marginBottom};
    }

`
export const SubSubcategoryCheckBoxWrap = styled.li`
    margin-left: ${({ item }) => item.desktop.margin.marginLeft};
    margin-top: ${({ item }) => item.desktop.margin.marginTop};
    list-style: ${({ item }) => item.desktop.listStyle};
    display: ${({ item }) => item.desktop.display};
    grid-template-columns:  ${({ item }) => item.desktop.gridTemplateColumns};
    gap:  ${({ item }) => item.desktop.gap};
    @media (max-width: 767px) {
        margin-top: ${({ item }) => item.mobile.margin.marginTop};
        margin-bottom: ${({ item }) => item.mobile.margin.marginBottom};
    }
`
export const ArrowIconSpan = styled.span`
`