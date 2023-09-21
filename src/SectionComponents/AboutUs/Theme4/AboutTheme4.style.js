import styled from "styled-components";


export const SectionText1 = styled.div`
width: 100%;
padding-bottom: 150px;

h3{
  margin-bottom: 16px;
}

h5 {
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  margin-bottom: 24px;
  color: #202020;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

p {
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 46px;
  @media screen and (max-width: 600px) {
    text-align: start;
  }
}

button {
  width: 120px;
  height: 40px;
  background-color: #000000;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  color: #FFFFFF;
  &:hover{
    cursor: pointer;
    background-color: #4b4b4b;
    border: none;
    transition: all 1s;
  }
}
`;
export const H3 = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 39.01px;
  color: #000000;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;




