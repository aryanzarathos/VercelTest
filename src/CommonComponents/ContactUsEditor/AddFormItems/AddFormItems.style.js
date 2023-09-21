import { styled } from "styled-components";

export const MainWrapper = styled.div`
  .addItems {
    margin-top: 18px;
  }
  .markCheckBox {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 16px;
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: rgba(32, 32, 32, 1);
  }
  .tooltipError {
    position: absolute;
    top: 50%;
    transform: translateY(-55%);
    right: 10px;
    height: 20px;
    width: 20px;
  }
  .changePosition {
    right: -40% !important;
    bottom: 180% !important;
  }
  .changeDownArrowPosition {
    bottom: 162% !important;
    right: 16% !important;
    transform: rotate(45deg) !important;
  }
`;
export const BtnWraaper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 16px;
`;
export const CancelBtn = styled.button`
  border-radius: 27px;
  border: 1px solid rgba(32, 32, 32, 0.6);
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  width: 100%;
  padding: 6px;
  background: transparent;
  color: rgba(32, 32, 32, 0.6);
  cursor: pointer;
`;
export const DoneBtn = styled.button`
  border-radius: 27px;
  border: rgba(55, 88, 249, 1);
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  width: 100%;
  padding: 6px;
  background: rgba(55, 88, 249, 1);
  color: #fff;
  cursor: pointer;
`;
export const OptionWrapper = styled.div`
  margin-top: 12px;
`;
export const OptionDelete = styled.button`
  background: transparent;
  outline: none;
  border: none;
  height: 20px;
  width: 20px;
  cursor: pointer;
  &.deleteIcon {
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
`;
export const OptionP = styled.p`
  font-family: "Poppins";
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(32, 32, 32, 1);
`;
export const OptionContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 8px;

  .spaceTop {
    margin-top: 0px;
    flex-grow: 1;
  }
`;
export const AddOptionButton = styled.button`
  font-family: "Poppins";
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: rgba(55, 88, 249, 1);
  padding: 6px 16px;
  border: 1px solid rgba(55, 88, 249, 1);
  border-radius: 57px;
  background: transparent;
  transition: all 0.3s;
  margin-top: 12px;
  cursor: pointer;
  &:hover {
    background: rgba(55, 88, 249, 1);
    color: #fff;
  }
`;
export const CheckBoxColorWrapper = styled.div`
  margin-top: 16px;
  border-top: 1px solid rgba(234, 234, 234, 1);
  padding: 12px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CheckBoxColorP = styled.p`
  font-family: "Poppins";
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(32, 32, 32, 1);
`;
export const CheckBoxColorContent = styled.div`
  padding: 5px;
  border: 2px solid rgba(236, 236, 236, 1);
  border-radius: 6px;
  background: rgba(252, 252, 252, 1);
  display: flex;
`;
export const HexP = styled.p`
  font-family: "Poppins";
  font-size: 10px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: -0.4000000059604645px;
  color: rgba(32, 32, 32, 0.8);
`;
export const ColorCode = styled.p`
  font-family: "Poppins";
  font-size: 11px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.4000000059604645px;
  color: rgba(32, 32, 32, 1);
  margin-left: 8px;
  padding-left: 8px;
  border-left: 1px solid rgba(32, 32, 32, 0.2);
`;
export const ColorBox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(1, 132, 255, 1);
  margin-left: 30px;
  border-radius: 2px;
`;
