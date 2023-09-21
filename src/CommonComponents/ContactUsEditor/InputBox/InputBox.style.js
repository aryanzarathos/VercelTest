import { styled } from "styled-components";

export const MainInputWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: Poppins;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: rgba(32, 32, 32, 1);
  margin-bottom: 8px;
`;

export const Input = styled.input`
  border: 2px solid rgba(236, 236, 236, 1);
  border-radius: 6px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: rgba(32, 32, 32, 1);
  background: rgba(252, 252, 252, 1);
  padding: 8px 12px;
  width: 100%;
  &::placeholder {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: rgba(137, 137, 137, 1);
  }
  &.error {
    border: 2px solid #ea0000;
  }
`;
export const InputWrap = styled.div`
  width: 100%;
  position: relative;
  svg {
    /* position: absolute;
    top: 50%;
    transform: translateY(-55%);
    right: 10px; */
  }
`;
