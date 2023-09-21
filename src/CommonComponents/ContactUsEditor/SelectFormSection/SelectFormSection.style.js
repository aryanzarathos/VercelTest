import { styled } from "styled-components";

export const MainEditInputFieldContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FieldNameWrap = styled.div`
  max-height: 270px;
  overflow: auto;
`;
export const AddBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background: rgba(55, 88, 249, 1);
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
`;
export const PositionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(234, 234, 234, 1);
`;
export const PositionWrapperP = styled.p`
  font-family: "Poppins";
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;
export const SelectFormDropDown = styled.div`
  position: relative;
`;
export const MainButton = styled.button`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  outline: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  border: 1px solid #ececec;
  display: flex;
  p{
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    width: -webkit-fill-available;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;
export const DropDownContent = styled.div`
  position: absolute;
  transform: translateY(10px);
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 8px 24px 0px #00000029;
  background: #fff;
  button {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    padding: 4px 12px;
    color: #202020;
    background: #fff;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: none;
    outline: none;
    transition: all 0.3s;
    &:hover {
      background: #3758f9;
      color: #fff;
    }
    &:last-child {
      color: #3758f9;
      border-top: 1px solid #eaeaea;
      &:hover {
        color: #fff;
      }
    }
  }
`;
