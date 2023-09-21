import React, { useEffect, useState } from 'react';
import ArrowUp from '../../../Assets/SectionComponent/Icons/arrowup.svg'
import ArrowDown from '../../../Assets/SectionComponent/Icons/arrowdown.svg'
import styled from 'styled-components'

const FilterDropDownContainer = styled.div`
 /* display: none; */
`
const Button = styled.button`
width: ${({ item }) => item.desktop.width};
background-color: ${({ item }) => item.desktop.backgroundColor};
border: ${({ item }) => item.desktop.border};
display: ${({ item }) => item.desktop.display};
justify-content: ${({ item }) => item.desktop.justifyContent};
align-items: ${({ item }) => item.desktop.alignItems};
gap:${({ item }) => item.desktop.gap};
cursor: ${({ item }) => item.desktop.cursor};
`
const CategoryFilterText = styled.span`
    font-family: ${({ item }) => item.desktop.fontFamily};
    font-size: ${({ item }) => item.desktop.fontSize};
    line-height: ${({ item }) => item.desktop.lineHeight};
    font-weight: ${({ item }) => item.desktop.fontWeight};
    color: ${({ item }) => item.desktop.color};
    word-break: ${({ item }) => item.desktop.wordBreak};
`
const ArrowIconSpan = styled.span`
`

const ArrowIcon = styled.i`
  -webkit-mask: url(${ArrowUp}) no-repeat center;
  mask: url(${ArrowUp}) no-repeat center;
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #202020;
  cursor: pointer;
  transform:${props => props.isOpen ? "rotate(0deg)" : "rotate(180deg)"}; ;

`

const FilterDropDown = ({ children, filterItem, filterHeading,closeFilter }) => {
  const [openCollections, setOpenCollections] = useState(false);
  useEffect(()=>{
    if(closeFilter){
      setOpenCollections(false)
    }
  },[closeFilter])
  // //// console.log(children,filterItem, filterHeading,"filterItem")
  return (
    <FilterDropDownContainer >
      <Button item={filterItem.filterButton} onClick={() => { setOpenCollections(!openCollections) }}  >
        <CategoryFilterText item={filterItem.mainHeading}>{filterHeading}</CategoryFilterText>
        <ArrowIconSpan>{openCollections ? <ArrowUp /> : <ArrowDown />}</ArrowIconSpan>
      </Button>
      {
        openCollections && children
      }
    </FilterDropDownContainer>
  )
}

export default FilterDropDown