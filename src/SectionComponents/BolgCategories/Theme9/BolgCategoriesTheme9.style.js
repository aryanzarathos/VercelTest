import styled from "styled-components";

export const BlogMainWrapper = styled.div`
min-width: 1px;

background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
`
export const MainContent = styled.div`
    display:${({ item }) => item.desktop.display};
    gap:${({ item }) => item.desktop.gap};
    grid-template-columns: repeat(${({ gridCount }) => gridCount.desktop.gridCount},1fr);
        @media (max-width:1024px) {
            grid-template-columns: repeat(${({ gridCount }) => gridCount.tablet.gridCount},1fr);
        }
        @media (max-width:767px) {
            grid-template-columns: repeat(${({ gridCount }) => gridCount.mobile.gridCount},1fr);
        }
    `;
export const BlogCard = styled.div`
    overflow:${({ item }) => item.desktop.overflow};
    background:${({ item }) => item.desktop.background};
    background: ${({ item }) => item?.desktop?.background} ;
    padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
    border-style:  ${({ item }) => item?.desktop?.borderStyle} ;
    border-width:${({ item }) => item?.desktop?.borderWidth};
    border-color:${({ item }) => item?.desktop?.borderColor} ;
    `;
export const BlogImageWrap = styled.div`
    width:${({ item }) => item.desktop.width};
    height:${({ item }) => item.desktop.height};
    `;
export const BlogContent = styled.div`
    padding-top:  ${({ item }) => item?.desktop?.padding?.paddingTop};
    padding-right:  ${({ item }) => item?.desktop?.padding?.paddingRight};
    padding-bottom:  ${({ item }) => item?.desktop?.padding?.paddingBottom};
    padding-left:  ${({ item }) => item?.desktop?.padding?.paddingLeft};
    .blogDec{
        color:${({ paraStyle }) => paraStyle?.desktop?.color} !important;
    font-size: ${({ paraStyle }) => paraStyle?.desktop?.fontSize} !important;
    font-weight: ${({ paraStyle }) => paraStyle?.desktop?.fontWeight}  !important;
    font-family: ${({ paraStyle }) => paraStyle?.desktop?.fontFamily} !important;
    line-height:  ${({ paraStyle }) => paraStyle?.desktop?.lineHeight} !important;
    font-style:  ${({ paraStyle }) => paraStyle?.desktop?.fontStyle} !important;
    p {
        color:${({ paraStyle }) => paraStyle?.desktop?.color} !important;
    font-size: ${({ paraStyle }) => paraStyle?.desktop?.fontSize} !important;
    font-weight: ${({ paraStyle }) => paraStyle?.desktop?.fontWeight}  !important;
    font-family: ${({ paraStyle }) => paraStyle?.desktop?.fontFamily} !important;
    line-height:  ${({ paraStyle }) => paraStyle?.desktop?.lineHeight} !important;
    font-style:  ${({ paraStyle }) => paraStyle?.desktop?.fontStyle} !important;
    span {
        color:${({ paraStyle }) => paraStyle?.desktop?.color} !important;
    font-size: ${({ paraStyle }) => paraStyle?.desktop?.fontSize} !important;
    font-weight: ${({ paraStyle }) => paraStyle?.desktop?.fontWeight}  !important;
    font-family: ${({ paraStyle }) => paraStyle?.desktop?.fontFamily} !important;
    line-height:  ${({ paraStyle }) => paraStyle?.desktop?.lineHeight} !important;
    font-style:  ${({ paraStyle }) => paraStyle?.desktop?.fontStyle} !important;
    }
    }
    }

    /* hide all the images and video set from dangoues html */
     p {
        figure , image {
            display: none;
        }
     }

    `;