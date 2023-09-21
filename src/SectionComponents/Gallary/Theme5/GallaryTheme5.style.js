import styled from "styled-components";

export const MainSection = styled.section`
position:${({item})=>item?.desktop?.position};
background: ${({ item }) => item?.desktop?.background} ;
padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
min-width: 1px;
`;

export const MainContent = styled.div`
    place-items: ${({item})=>item?.desktop?.placeItems};
    gap: ${({item})=>item?.desktop?.gap};
    display: ${({item})=>item?.desktop?.display};

    
    grid-template-columns: repeat(${({gridCount}) => gridCount?.desktop?.gridCount}, 1fr);
    @media screen and (max-width:1024px){
    grid-template-columns: repeat(${({gridCount}) => gridCount?.tablet?.gridCount}, 1fr);
    }
     @media screen and (max-width:767px){
    grid-template-columns: repeat(${({gridCount}) => gridCount?.mobile?.gridCount}, 1fr);
    }
  `;

export const MainImage = styled.div`
    width: ${({item})=>item?.desktop?.width};
    overflow: ${({item})=>item?.desktop?.overflow};
    height: ${({item})=>item?.desktop?.height};
    aspect-ratio: ${({item})=>item?.desktop?.aspectRatio};
    border-radius: ${({item})=>item?.desktop?.borderRadius};
    background: ${({ item }) => item?.desktop?.background} ;
    padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
    border-style:  ${({ item }) => item?.desktop?.borderStyle} ;
    border-width:${({ item }) => item?.desktop?.borderWidth};
    border-color:${({ item }) => item?.desktop?.borderColor} ;
    /* img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-position: center;
    } */
  `;
