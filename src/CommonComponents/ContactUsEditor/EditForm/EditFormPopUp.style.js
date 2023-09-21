import { styled } from "styled-components";

export const MainEditPopUp = styled.div`
  padding: 16px;
  background: #fff;

  width: 316px;
  position: absolute;

  top: -22%;
  /* left: -60%; */
  z-index: 4;
  border-radius: 8px;
  /* top: 60px; */
  left:-380px;
  box-shadow: 2px 5px 10px 0px rgba(32, 32, 32, 0.25);
  min-height: 447px;
  &.removeHeight {
    min-height: auto;
  }
`;

export const SettingHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(234, 234, 234, 1);
`;
export const SettingHeadingWrapperButton = styled.button`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;
export const SettingHeadingWrapperP = styled.p`
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;
