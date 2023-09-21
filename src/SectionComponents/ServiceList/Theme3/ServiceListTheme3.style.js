import styled from "styled-components";

export const ThankYouWrapper = styled.div`
  width: ${({ item }) => item?.desktop?.width};
  margin: ${({ item }) => item?.desktop?.margin};
  display: ${({ item }) => item?.desktop?.display};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  height: ${({ item }) => item?.desktop?.height};
`;

export const InnerWrapper = styled.div`
  display: ${({ item }) => item?.desktop?.display};
  flex-direction: ${({ item }) => item?.desktop?.flexDirection};
  text-align: ${({ item }) => item?.desktop?.textAlign};
`;

export const GifFrame = styled.div`
  max-width:${({ item }) => item?.desktop?.maxWidth};
  height: ${({ item }) => item?.desktop?.height};

  img {
  mix-blend-mode: multiply !important;
  }
`;