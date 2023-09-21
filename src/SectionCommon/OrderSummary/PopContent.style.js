import { styled } from "styled-components";

export const HeadingContainer = styled.div`
  /* h3{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000;
  } */
`;

export const TopContainer = styled.div`
  margin-top: ${({ item }) => item.desktop.marginTop};
  margin-bottom: ${({ item }) => item.desktop.marginBottom};
  position: ${({ item }) => item.desktop.position};

  .topContainerInput{
    padding-right: 70px;
    &::placeholder{
      font-family: ${({ item2 }) => item2.desktop.placeHolder?.fontFamily};
      font-size: ${({ item2 }) => item2.desktop.placeHolder?.fontSize};
      font-style: ${({ item2 }) => item2.desktop.placeHolder?.fontStyle};
      font-weight:${({ item2 }) => item2.desktop.placeHolder?.fontWeight};
      line-height: ${({ item2 }) => item2.desktop.placeHolder?.lineHeight};
      color:${({ item2 }) => item2.desktop.placeHolder?.color};
    }
  }
`;

export const RightContainerButton = styled.button`

`;

export const Midcontainer = styled.div`

`;

export const BottomContainer = styled.div`
  max-height: ${({ item }) => item.desktop.maxHeight};
  overflow-y: ${({ item }) => item.desktop.overflowY};
  padding: ${({ item }) => item.desktop.padding};
  padding: 10px 0;
`;

export const BottomCuponCards = styled.div`
  margin-bottom: 16px;
  border:  ${({ item }) => item.desktop.border};
  border-radius:  ${({ item }) => item.desktop.borderRadius};
  padding:  ${({ item }) => item.desktop.padding};
  &:last-child{
    margin-bottom: 0;
  }
`;

export const CardsTopContainer = styled.div`
  display:${({ item }) => item.desktop.display};
  justify-content: ${({ item }) => item.desktop.justifyContent};
  align-items: ${({ item }) => item.desktop.alignItems};
`;

export const TopLeftContainer = styled.div`
  background: ${({ item }) => item.desktop.background};
  border-radius: ${({ item }) => item.desktop.borderRadius};
  padding: ${({ item }) => item.desktop.padding};

`;

export const RightButton = styled.button`

`;

export const CardsSubContainer = styled.div`
  margin-top: ${({ item }) => item.desktop.margin.marginTop};
`;

export const DetailsWrap = styled.div`
display: ${({ item }) => item.desktop.display};
gap: ${({ item }) => item.desktop.gap};
align-items: ${({ item }) => item.desktop.alignItems};
margin-top: ${({ item }) => item.desktop.marginTop};
border: ${({ item }) => item.desktop.border};
background-color: ${({ item }) => item.desktop.backgroundColor};
svg{
  transition: all 0.2s;
  transform: rotate(180deg);
  &.rotate{
    transform: rotate(0);
  }
}

`;