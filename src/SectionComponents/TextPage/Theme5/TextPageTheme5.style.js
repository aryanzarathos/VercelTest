import styled from "styled-components";

export const BlogTextCT = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  margin-bottom: 60px;

  @media screen and (max-width: 800px) {
  gap: 10px;
  margin-bottom: 50px;
  }

  h2 {
    font-size:36px;
    font-weight: 600;
    line-height: 54px;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    color:rgba(32, 32, 32, 0.6);
    font-weight: 400;
    width: 100%;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
export const Button = styled.button`
  width: 122.16px;
  height: 36px;
  color:#000000;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  background-color:#E5E5E5;
  border: 1px solid #000000;
  &:hover{
    cursor: pointer;
    background-color: #7a7a7a;
    color: #FFFFFF;
    transition: all 1s;
  }
`;