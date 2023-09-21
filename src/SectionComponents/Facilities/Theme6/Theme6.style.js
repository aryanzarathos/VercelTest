import { styled } from "styled-components";

export const FacilityMainWrapper = styled.div`
margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
`

export const FacilitiesWrapper = styled.div`
/* border-bottom: ${({ item }) => item.desktop.borderBottom}; */
&:nth-child(even) {
    .facilitiesWrap{
        flex-direction: ${({ item2 }) => item2.desktop.flexDirection};
        @media (max-width: 767px) {
            flex-direction: ${({ item2 }) => item2.mobile.flexDirection};
        }
    }
}
`
export const FacilitiesWrap = styled.div`
display:  ${({ item }) => item.desktop.display};
gap:  ${({ item }) => item.desktop.gap};
padding-top: ${({ item }) => item.desktop.padding?.paddingTop};
padding-right: ${({ item }) => item.desktop.padding?.paddingRight};
padding-bottom: ${({ item }) => item.desktop.padding?.paddingBottom};
padding-left: ${({ item }) => item.desktop.padding?.paddingLeft};
margin-bottom:  ${({ item }) => item.desktop?.margin?.marginBottom};
padding-bottom:  ${({ item }) => item.desktop?.padding?.paddingBottom};
background: ${({ item }) => item?.desktop?.background} ;
    padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;

   
   
    border-bottom:${({ item }) => item?.desktop?.borderWidth}   ${({ item }) => item?.desktop?.borderStyle} ${({ item }) => item?.desktop?.borderColor} ;

@media (max-width: 1024px) {
    gap:  ${({ item }) => item.tablet.gap};
}
@media (max-width: 767px) {
    gap:  ${({ item }) => item.mobile.gap};
    flex-wrap:  ${({ item }) => item.mobile.flexWrap};
    padding-top: ${({ item }) => item.mobile?.padding?.paddingTop};
    padding-right: ${({ item }) => item.mobile?.padding?.paddingRight};
    padding-bottom: ${({ item }) => item.mobile?.padding?.paddingBottom};
    padding-left: ${({ item }) => item.mobile?.padding?.paddingLeft};
}
`
export const FacilitiesImgWrap = styled.div`
    height: ${({ item }) => item.desktop.height};
    min-height:  ${({ item }) => item.desktop.minHeight};
    max-height:  ${({ item }) => item.desktop.maxHeight};
    width:  ${({ item }) => item.desktop.width};
    flex-basis:  ${({ item }) => item.desktop.flexBasis};
   
    @media (max-width:1024px) {
        height: ${({ item }) => item.tablet?.height};
        min-height:  ${({ item }) => item.tablet?.minHeight};
        max-height:  ${({ item }) => item.tablet?.maxHeight};
    }
    @media (max-width:767px) {
        height: ${({ item }) => item.mobile?.height};
        min-height:  ${({ item }) => item.mobile?.minHeight};
        max-height:  ${({ item }) => item.mobile?.maxHeight};
        flex-basis:  ${({ item }) => item.mobile?.flexBasis};
    }
`
export const WrapperMain = styled.div`
`
export const FacilitiesDetailsWrap = styled.div`
  flex-basis:  ${({ item }) => item.desktop?.flexBasis};
  @media (max-width:767px) {
    flex-basis:  ${({ item }) => item.mobile?.flexBasis};
  }
`
