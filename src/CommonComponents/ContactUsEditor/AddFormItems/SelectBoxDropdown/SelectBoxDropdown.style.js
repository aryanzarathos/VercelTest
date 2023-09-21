import { styled } from "styled-components";

export const SelectBoxDropdownWrapper = styled.div``;
export const Label = styled.div`
  font-family: "Poppins";
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: rgba(32, 32, 32, 1);
  margin-bottom: 9px;
`;
export const SelectBoxContent = styled.div`
  position: relative;
`;
export const SelectMainBtn = styled.button`
  padding: 6px 8px;
  background: rgba(252, 252, 252, 1);
  border: 2px solid rgba(236, 236, 236, 1);
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  align-items: center;
`;
export const IconContentBtn = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  .block {
    background: transparent;
    outline: none;
    border: none;
  }
  p {
    font-family: "Poppins";
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: rgba(32, 32, 32, 1);
  }
`;
export const SelectBoxDropDownContent = styled.div`
  position: absolute;
  background: #fff;
  border-radius: 4px;
  transform: translateY(6px);
  width: 100%;
  border: 1px solid #eeeeee;
  z-index: 1;
`;
export const DropDownIconContentBtn = styled.button`
  display: flex;
  gap: 12px;
  align-items: center;
  border-radius: 0px;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  transition: all 0.3s;
  padding: 6px 8px;
  cursor: pointer;
  .block {
    background: transparent;
    outline: none;
    border: none;
  }
  .hoverBlock {
    display: none;
    background: transparent;
    outline: none;
    border: none;
  }
  &:hover {
    background: #3758f9;
    color: #fff;
    p {
      color: #fff;
    }
    .block {
      display: none;
    }
    .hoverBlock {
      display: block;
    }
  }

  p {
    font-family: "Poppins";
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: rgba(32, 32, 32, 1);
  }
  &:first-child {
    border-radius: 4px 4px 0px 0px;
  }
  &:last-child {
    border-radius: 0px 0px 4px 4px;
  }
`;
