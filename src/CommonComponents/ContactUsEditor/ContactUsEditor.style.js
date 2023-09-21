import { styled } from "styled-components";


export const MainWrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
min-width: 1px;
min-height: 300px;
padding: 10px;
&.active {
    &:after {
      opacity: 1;
    }
  }


  &:after {

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    /* transition: all 0.3s ease-in-out; */
    opacity: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(55, 88, 249, 0.8);
    font-weight: 400;
    font-size: 24px;
    line-height: 47px;
    background: rgba(55, 88, 249, 0.1);
    border: 1px solid #3758f9;
  }
  &:hover:after {
    opacity: 1;
  }
`

export const MainImageEditor = styled.div`
  position: relative;
  min-width: 1px;
  min-height: 300px;
  height: 100%;
  width: 100%;
`;
export const BtnEditMedia = styled.button`
  padding: 7px 17px;
  background-color: #202020;
  color: #fff;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: none;
  border-radius: 5rem;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s;
  position: absolute;
  right: 10px;
  z-index: 2;
  &:hover {
    background: #3758f9;
  }
`;

export const FormWrapper = styled.div`
    display: flex;
    row-gap: 18px;
    column-gap: 3%;
    flex-wrap: wrap;
`
