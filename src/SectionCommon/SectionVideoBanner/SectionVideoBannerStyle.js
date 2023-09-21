import { styled } from "styled-components";

export const Video = styled.video`
    position:absolute;
    top: 0px ;
    left: 0px  ;
    width:100%;
    height: 100%;
    object-fit:${({ item }) => item?.desktop?.video?.objectFit ? item?.desktop?.video?.objectFit : ""};
    object-position: ${({ item }) => item?.desktop?.objectPosition ? item?.desktop?.objectPosition : ""};
    z-index: 0;

    @media(max-width:1024px) {
        object-fit:${({ item }) => item?.tablet?.video?.objectFit ? item?.tablet?.objectFit : ""};
        object-position: ${({ item }) => item?.tablet?.objectPosition ? item?.tablet?.objectPosition : ""};
    }
    @media(max-width:768px) {
        object-fit:${({ item }) => item?.mobile?.objectFit ? item?.mobile?.objectFit : ""};
        object-position: ${({ item }) => item?.mobile?.objectPosition ? item?.mobile?.objectPosition : ""};
    }
`