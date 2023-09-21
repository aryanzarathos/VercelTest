import styled from "styled-components";

export const CollectionThirdContainer = styled.div`
  padding-bottom: 70px;
`;
export const HeaderText = styled.div`
  text-align: center;
  h3 {
    font-size: 48px;
    line-height: 56.25px;
    color: #1f3259;
    text-align: center;
    padding: 0px 0 36px 0;
    @media screen and (max-width: 700px) {
      font-size: 30px;
    }
  }
`;

export const ImageSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 18px;
    line-height: 24px;
    color: #1f3259;
    font-weight: 900;
  }
  h2 {
    font-size: 16px;
    line-height: 20px;
    color: #1f3259;
  }
`;
export const ImgMain = styled.div`
  height: 260px;
  width: 245px;
  margin-bottom: 12px;
  img {
    max-width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }
`;
export const Discount = styled.div`
  display: flex;
  gap: 6px;
  h6 {
    font-size: 14px;
    line-height: 20px;
    color: rgba(32, 32, 32, 0.6);
  }
  p {
    font-size: 14px;
    line-height: 20px;
    color: #428bc1;
    font-weight: 900;
  }
`;

export const Button = styled.button`
  text-align: center;
  font-size: 24px;
  line-height: 24px;
  color: #ffffff;
  height: 48px;
  width: 196px;
  border: none;
  background: #202020;
  border-radius: 4px;
  &:hover {
    curser: pointer;
    background: #808080;
    transition: all 1s;
  }
`;
export const ButtonSection = styled.div`
  text-align: center;
`;
export const Combination = styled.div`
  display: grid;
  margin-bottom: 70px;
  grid-template-columns: auto auto auto auto;
  @media screen and (max-width: 1000px) {
    grid-template-columns: auto auto auto;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;