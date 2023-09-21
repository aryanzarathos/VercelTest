import styled from "styled-components";

export const BlogPara = styled.div`
    width: 100%;
    padding-bottom: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    overflow: hidden;

    h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color:#202020;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    }

  @media screen and (max-width: 800px) {
    display: flex;
    gap: 10px;
    margin-bottom: 50px;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    color:rgba(32, 32, 32, 0.6);
    font-weight: 400;
    width: 100%;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
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