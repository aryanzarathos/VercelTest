import styled from "styled-components"
// import SuccessIcon from '../../../Assets/SectionComponent/Images/SuccessfullPlaced/btn-icon.svg'


export const SuccessfullContainer = styled.div`
  padding: ${({ item }) => item?.desktop.padding};
  display: ${({ item }) => item?.desktop.display};
  flex-direction: ${({ item }) => item?.desktop.flexDirection};
  align-items: ${({ item }) => item?.desktop.alignItems};
  text-align: ${({ item }) => item?.desktop.textAlign};
`
export const SuccessfullMsg = styled.h3`
  font-size: ${({ item }) => item?.desktop.fontSize};
  line-height: ${({ item }) => item?.desktop.lineHeight};
  color: ${({ item }) => item?.desktop.color};
  font-family: ${({ item }) => item?.desktop.fontFamily};
  margin-bottom: ${({ item }) => item?.desktop.fontFamily};
  @media screen and (max-width: 700px){
    font-size: ${({ item }) => item?.mobile.fontSize};
    line-height: ${({ item }) => item?.mobile.lineHeight};
    }
`
export const Colored = styled.span`
 font-size: ${({ item }) => item?.desktop.fontSize};
  line-height: ${({ item }) => item?.desktop.lineHeight};
  color: ${({ item }) => item?.desktop.color};
  font-family: ${({ item }) => item?.desktop.fontFamily};
  @media screen and (max-width: 700px){
    font-size: ${({ item }) => item?.mobile?.fontSize};
    line-height: ${({ item }) => item?.mobile?.lineHeight};
    }
`
export const SuccessfullGif = styled.figure`
  width:  ${({ item }) => item?.desktop.width};
  height:  ${({ item }) => item?.desktop.height};
  margin-bottom: ${({ item }) => item?.desktop.marginBottom};
`

export const ExploreBtn = styled.button`
  padding: ${({ item }) => item.desktop.padding};
  font-size: ${({ item }) => item.desktop.fontSize};
  line-height: ${({ item }) => item.desktop.lineHeight};
  color:  ${({ item }) => item.desktop.color};
  background-color: ${({ item }) => item.desktop.backgroundColor};
  display: ${({ item }) => item.desktop.display};
  align-items: ${({ item }) => item.desktop.alignItems};
  gap: ${({ item }) => item.desktop.gap};
  border: ${({ item }) => item.desktop.border};
  border-radius: ${({ item }) => item.desktop.borderRadius};
  margin-bottom: ${({ item }) => item.desktop.marginBottom};
  &:hover{
        background-color: ${({ item }) => item.desktop.hover.backgroundColor};
        cursor: ${({ item }) => item.desktop.hover.cursor};
        transition:${({ item }) => item.desktop.hover.transition};
    }
    @media screen and (max-width: 700px){
        font-size: ${({ item }) => item.mobile.fontSize};
        line-height: ${({ item }) => item.mobile.lineHeight};
    }
`
