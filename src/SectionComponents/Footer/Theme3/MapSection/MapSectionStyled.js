import { styled } from "styled-components";


export const MapContainer = styled.div`
   width:${({ item }) => item.style.desktop.width};
   height: ${({ item }) => item.style.desktop.height};
   margin-bottom: ${({ item }) => item.style.desktop.marginBottom};
   border-radius: ${({ item }) => item.style.desktop.borderRadius};
   overflow: ${({ item }) => item.style.desktop.overflow};
   /* img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
   } */

   iframe {
    width: 100%;
    height: 100%;
    border: 0;
   }
`

export const ImageContainer = styled.div`

`