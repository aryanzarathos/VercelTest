import { styled } from "styled-components";

export const InputDetails = styled.div`
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
  .verifyOtp {
    margin-top: 12px;
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
