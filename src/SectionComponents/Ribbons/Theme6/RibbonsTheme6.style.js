import styled from "styled-components";

export const MainSection = styled.section`
    background: ${({ item }) => item?.desktop.background};
    padding: ${({ item }) => item?.desktop.padding};
  `;
export const MainContent = styled.div`
    display: ${({ item }) => item?.desktop.display};
    justify-content: ${({ item }) => item?.desktop.justifyContent};
    align-items: ${({ item }) => item?.desktop.alignItems};
    gap: ${({ item }) => item?.desktop.gap};
    @media screen and (max-width: 575px) {
      flex-direction: ${({ item }) => item?.mobile.flexDirection};
      gap: ${({ item }) => item?.mobile.gap};
    }
    
  `;
export const Button = styled.button`
    padding: ${({ item }) => item?.desktop.padding};
    border: ${({ item }) => item?.desktop.border};
    font-family: ${({ item }) => item?.desktop.fontFamily};
    font-style: ${({ item }) => item?.desktop.fontStyle};
    font-weight: ${({ item }) => item?.desktop.fontWeight};
    font-size: ${({ item }) => item?.desktop.fontSize};
    line-height: ${({ item }) => item?.desktop.lineHeight};
    letter-spacing: ${({ item }) => item?.desktop.letterSpacing};
    word-spacing: ${({ item }) => item?.desktop.wordSpacing};
    text-transform: ${({ item }) => item?.desktop.textTransform};
    transition: ${({ item }) => item?.desktop.transition};
    background: ${({ style }) => style?.button ? style?.button : "var(--global-color-primary)" };
    color: ${({ style }) => style?.button_text_color ? style?.button_text_color : "var(--global-color-penitentiary)" };
    &:hover {
      cursor: ${({ item }) => item?.desktop.cursor};
      
    }
  `;
export const NewBtn = styled.div`
    color: ${({ style }) => style?.ribbon_text ?  style?.ribbon_text : "var(--global-color-quaternary)" };
    background: ${({ style }) => style?.ribbon_color ?  style?.ribbon_color : "transparent" };
    padding: ${({ item }) => item?.desktop.padding};
    font-family: ${({ item }) => item?.desktop.fontFamily};
    font-style: ${({ item }) => item?.desktop.fontStyle};
    font-weight: ${({ item }) => item?.desktop.fontWeight};
    font-size: ${({ item }) => item?.desktop.fontSize};
    line-height: ${({ item }) => item?.desktop.lineHeight};
    letter-spacing: ${({ item }) => item?.desktop.letterSpacing};
    word-spacing: ${({ item }) => item?.desktop.wordSpacing};
    text-transform: ${({ item }) => item?.desktop.textTransform};
    cursor: ${({ item }) => item?.desktop.cursor};
  `;