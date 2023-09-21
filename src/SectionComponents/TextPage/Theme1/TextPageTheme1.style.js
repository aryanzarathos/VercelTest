import styled from "styled-components";


export const BlogImgMain = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  padding-bottom: 150px;
  @media screen and (max-width: 1200px) {
    width: auto;
    height: auto;
    gap: 20px;
  }

  @media screen and (max-width: 900px) {
    margin-bottom: 50px;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  `;
export const BlogImg = styled.figure`
  width: 50%;
  height: 100%;
  overflow: hidden;
  display: block;
  object-fit: cover;
  object-position: center;
  img{
      display: block;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
  }

  @media screen and (max-width: 1200px) {
    width: 50%;
    height: auto;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;
export const InnerImg = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
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
export const BlogText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  overflow: hidden;
  @media screen and (max-width: 900px) {
      width: 100%;
    }

  p {
    font-size: 14px;
    line-height: 24px;
    color:rgba(32, 32, 32, 0.6);
    font-weight: 400;
    width: 100%;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

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
`;
