import { styled } from "styled-components";

export const FieldNameWrapper = styled.div`
  border: 1px solid #ececec;
  padding: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 12px;
  border-radius: 6px;
  background: #fcfcfc;
  cursor: grab;
  button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .settingIcon {
    margin-left: auto;
    svg {
      path {
        stroke: #202020;
      }
    }
    &:hover {
      svg {
        path {
          stroke: #3758f9;
          stroke-opacity: 0.8;
        }
      }
    }
  }
  .passwordIcon {
    svg {
      path {
        fill: #202020;
      }
    }
    &:hover {
      svg {
        path {
          fill: #3758f9;
          fill-opacity: 0.8;
        }
      }
    }
  }
  .deleteIcon {
    svg {
      path {
        stroke: #202020;
        stroke-opacity:0.5
      }
    }
    &:hover {
      svg {
        path {
          stroke: #ea0000;
          stroke-opacity:0.9
        }
      }
    }
  }

  &.eyeOff {
    background: #f2f2f2;
    p {
      color: rgba(32, 32, 32, 0.4);
    }
  }
`;
export const FieldNameP = styled.p`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #202020;
`;
