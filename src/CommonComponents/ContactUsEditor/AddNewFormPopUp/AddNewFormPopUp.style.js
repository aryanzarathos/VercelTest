import { styled } from "styled-components";

export const DoneCancelBtn = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 24px;
`;
export const CancelBtn = styled.button`
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 4px 28px;
  border: 1px solid rgba(55, 88, 249, 1);
  border-radius: 18px;
  color: rgba(55, 88, 249, 1);
  cursor: pointer;
  background: transparent;
`;
export const DoneBtn = styled.button`
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 4px 28px;
  border: 1px solid rgba(55, 88, 249, 1);
  border-radius: 18px;
  color: rgba(55, 88, 249, 1);
  cursor: pointer;
  background: rgba(55, 88, 249, 1);
  color: #fff;
`;
export const AddNewFromWrapper = styled.form`
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
