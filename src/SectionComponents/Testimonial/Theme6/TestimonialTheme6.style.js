import styled from "styled-components";

export const ContainerTestimonial = styled.div`
min-width: 1px;
background: ${({ item }) => item.desktop.background};
padding: ${({ item }) => item?.desktop?.padding?.paddingTop};

@media screen and (max-width: 768px) {
  flex-wrap: ${({ item }) => item?.mobile?.flexWrap};
  gap: ${({ item }) => item?.mobile?.gap};
  justify-content: ${({ item }) => item?.mobile?.justifyContent};
}
`;
export const LeftContainer = styled.div`
width: ${({ item }) => item?.desktop?.width};
padding-bottom: ${({ item }) => item?.desktop?.paddingBottom};

@media screen and (max-width: 768px) {
  width: ${({ item }) => item?.mobile?.width};
  padding-bottom: ${({ item }) => item?.mobile?.paddingBottom};
}

`;


export const ContainerWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
`
export const RightContainer = styled.div`
width: ${({ item }) => item?.desktop?.width};

@media screen and (max-width: 768px) {
  position: ${({ item }) => item?.mobile?.position};
  width: ${({ item }) => item?.mobile?.width}; 
}

.swiper-button-prev{
        &::after{
          color: ${({ item }) => item?.desktop?.SliderButton?.prevbutton?.after?.color};
        }
    }
    .swiper-button-next{
        &::after{
          color: ${({ item }) => item?.desktop?.SliderButton?.nextbutton?.after?.color};
        }
    }

`
export const CardRt = styled.div`
box-shadow: ${({ item }) => item?.desktop?.boxShadow};
border-radius: ${({ item }) => item?.desktop?.borderRadius};
margin: ${({ item }) => item?.desktop?.margin};
width: ${({ item }) => item?.desktop?.width};
background:${({ item }) => item?.desktop?.background};
padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
border-style : ${({ item }) => item?.desktop?.borderStyle};
border-width : ${({ item }) => item?.desktop?.borderWidth};
border-color: ${({ item }) => item?.desktop?.borderColor};
`;


export const Circle = styled.div`
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
  border-radius: ${({ item }) => item?.desktop?.borderRadius};
  background: ${({ item }) => item?.desktop?.background};
  display: ${({ item }) => item?.desktop?.display};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  outline-style: ${({ item }) => item?.desktop?.outlineStyle};
  outline-width: ${({ item }) => item?.desktop?.outlineWidth};
  outline-color: ${({ item }) => item?.desktop?.outlineColor};
  svg {
    fill: ${({ item }) => item?.desktop?.svg?.fill};
    width: ${({ item }) => item?.desktop?.svg?.width};
    height: ${({ item }) => item?.desktop?.svg?.height};
  }
`


