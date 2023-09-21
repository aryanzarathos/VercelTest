import { styled } from "styled-components";

export const MediaGalleryEditor = styled.div`
    position:relative;
    min-width:1px;
    transition: padding 0.7s ease  ;

    &:after{   
        content: attr(data-content); 
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        width:100%;
        height:100%;
        transition:all .3s ease-in-out;
        opacity:0;
        /* z-index:2; */
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(55, 88, 249, 0.4);
        font-weight: 400;
        font-size: 31.3333px;
        line-height: 47px;
    }
    &:before{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: rgba(55, 88, 249, 0.1);
        transition:all .2s ease-in-out;
        opacity:0;
        /* z-index:1; */
        border: 1.28271px solid #3758F9;
    }
    &.isSectionHover{
        padding: 16px;
      
        &:before{
            opacity:1;
        }
        &:after{
            opacity:1;
        }
    }
    &.isSectionActive{
        padding: 16px;
        &:before{
            opacity:1;
        }
    }

`
export const MediaEditorTool = styled.div`
    position: absolute;
    top: 24px;
    left: 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    z-index: 99;
`

export const ManageSettingButton = styled.button`
    padding: 6px 20px;
    background-color: #202020;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    font-size: 15.6894px;
    line-height: 24px;
    border: none;
    border-radius: 5rem;
    font-family: "Poppins",sans-serif;
    white-space:nowrap;
    transition:all .3s ease-in-out;
    &:hover{
      background: #3758f9;
    }
    &.active{
      background: #3758f9;
    }
`;

export const EditButton = styled.button`
    cursor: pointer;
    line-height: 0;
    padding: 8px;
    text-align: center;
    border-radius: 5rem;
    background: #202020;
    border: none;
    transition:all .3s ease-in-out;
    svg {
    fill: #fff;
    }
    &:hover {
    background: #3758f9;
    }
    &.active {
    background: #3758f9;
    }
`;

export const EditButtonWrap = styled.div`
    position:relative;
`;

export const TextEditButton = styled.button`
    padding: 6px 20px;
    background-color: #202020;
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: none;
    border-radius: 5rem;
    font-family: "Poppins", sans-serif;
    &:hover {
    background: #3758f9;
    }
    &.active {
    background: #3758f9;
    }
`