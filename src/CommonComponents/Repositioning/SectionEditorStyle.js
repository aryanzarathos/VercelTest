import { styled } from "styled-components";



export const RepostionWrapper = styled.div`
`
export const RepositionContainer = styled.div`
  width: 100%;
  height: 100%;

  &.Active_Selection{
    visibility: visible;
    border-left: 2px solid #3758f9;
    border-right: 2px solid #3758f9;
    &:before{
      border-top: 2px solid #3758f9;
      left: 0;
      width: 100%;
      z-index: 1;
    }
    &:after{
      border-bottom: 2px solid #3758f9;
      left: 0;
      width: 100%;
      z-index: 1;
      bottom: 0;
    }
  }
  &.isHover{
    border-left: 2px solid #8395eb;
    border-right: 2px solid #8395eb;
    &:before{
      border-top: 2px solid #8395eb;
      left: 0;
      width: 100%;
      z-index: 1;
    }
    &:after{
      border-bottom: 2px solid #8395eb;
      left: 0;
      width: 100%;
      z-index: 1;
      bottom: 0;
    }
  }
`;

export const ButtonGrouopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  position: absolute;
  top: 24px;
  left: 68px;
  z-index: 101;
`;
export const EditButton = styled.button`
    padding: 6px 20px;
    background-color: #202020;
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: none;
    border-radius: 5rem;
    font-family: "Poppins",sans-serif;
    white-space:nowrap;
    transation: all 0.3s ease-in-out;
    &:hover{
      background: #3758f9;
    }
`;
// export const ManageSettingWrap = styled.div`  
//     position:relative;
// `
// export const ManageSetting = styled.button`
//     cursor: pointer;
//     line-height: 0;
//     padding: 8px;
//     text-align: center;
//     border-radius: 5rem;
//     background: #202020;
//     border: none;
//     transation: all 0.3s ease-in-out;
//     svg {
//       fill: #fff;
//     }
//     &:hover {
//       background: #3758f9;
//     }
// `;
export const Button = styled.button`
    background: transparent;
    z-index: 1;
    border: none;
    line-height: 0;
`;


export const AddIconTop = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  // z-index: 100;
  z-index: 3;
  right: 50%;
  left: 50%;
  transform: translate(-50%);
  top: calc(35px / -2);
  pointer-events: all;
  cursor: pointer;
  background-color:transparent;
  border:none;
  cursor: pointer;
  height: 36px;
  width: 36px;
`;
export const AddIconBottom = styled.div`
  bottom: calc(35px / -2);
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 2;
  right: 50%;
  left: 50%;
  transform: translate(-50%);
  pointer-events: all;
  cursor: pointer;
  background-color:transparent;
  height: 36px;
  width: 36px;
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
`
export const EditorToolWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 100px;
  z-index: 99;
  display: flex;
  align-items: center;
  gap: 16px;
`
export const GallerySettingWrap = styled.div`
  background-color: #202020;
  color: #ffffff;
  border-radius: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  position: relative;
`
export const Widgetmenu = styled.div`
  background-color: #202020;
  color: #ffffff;
  border-radius: 5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  position: relative;
`;

export const AddBannerIcon = styled.div`
  cursor: pointer;
  line-height: 0;
  transation: all 0.3s ease-in-out;
  padding: 8px 12px 8px 20px;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  &.active {
    background: #3758f9;
  }
  svg {
    fill: #fff;
  }
  &:hover {
    background: #3758f9;
  }
`;
export const DuplicateIcon = styled.i`
  cursor: pointer;
  line-height: 0;
  transation: all 0.3s ease-in-out;
  padding: 9px 12px;
  width: 100%;
  height: 100%;
  text-align: center;
  &.active {
    background: #3758f9;
  }
  svg {
    fill: #fff;
  }
  &:hover {
    background: #3758f9;
  }
`;
export const SettingIconWrap = styled.i`
  cursor: pointer;
  line-height: 0;
  transation: all 0.5s ease-in-out;
  width: 100%;
  padding: 8px 20px 8px 12px;
  height: 100%;
  text-align: center;
  border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
  &.active {
    background: #3758f9;
  }
  svg {
    fill: #fff;
  }
  &:hover {
    background: #3758f9;
  }
`;
export const DownArrowWrap = styled.i`
  cursor: pointer;
  line-height: 0;
  transation: all 0.5s ease-in-out;
  padding: 8px 12px 8px 20px;
  width: 100%;
  height: 100%;
  text-align: center;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
  &.active {
    background: #3758f9;
  }
  svg {
    fill: #fff;
  }
  &:hover {
    background: #3758f9;
  }
  &.disabled {
    pointer-events: none !important;

    svg {
      fill: rgba(255, 255, 255, 0.2) !important;
    }
  }
`;
export const TopArrowWrap = styled.i`
  cursor: pointer;
  line-height: 0;
  padding: 9px 12px;
  width: 100%;
  height: 100%;
  text-align: center;

  &.active {
    background: #3758f9;
  }
  svg {
    fill: #fff;
  }
  &:hover {
    background: #3758f9;
  }

  &.disabled {
    pointer-events: none !important;

    svg {
      fill: rgba(255, 255, 255, 0.2)  !important;
    }
  }
`;
export const DeleteImgIcon = styled.i`
  cursor: pointer;
  line-height: 0;
  padding: 8px 20px 8px 12px;
  width: 100%;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    background: #3758f9;
  }
  svg {
    fill: #fff;
  }
  &:hover {
    background: #3758f9;
  }
`;

export const ParentElement = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  &.isSectionActive{
    border-left: 2px solid #3758f9;
    border-right: 2px solid #3758f9;
  }
  &.isSectionHover{
    border-left: 2px solid #8395eb;
    border-right: 2px solid #8395eb;
  }
`;