import styled from "styled-components";

export const BottomImgMain = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 156px;
  height: 366px;
  overflow: hidden;

  @media screen and (max-width: 1400px) {
    height: auto;
    width: 100%;
  }
  

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    gap: 50px;
  }
`;
export const LTMainBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 30px;
  width: 50%;
  height: 100%;
  gap: 24px;

  @media screen and (max-width: 1400px) {
    height: 100%;
    width: 50%;
    gap: 10px;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0px;
  }

  h2 {
    font-size:36px;
    font-weight: 600;
    line-height: 54px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
export const BottomImg = styled.figure`
  display: block;
  width: 436px;
  height: 216px;
  object-fit: cover;
  object-position: center;
  img{
    display: block;
//   max-width: 100%;
//   // width: 100%;
//   // height: 100%;
  object-fit: cover;
  object-position: center;
  }
  

  @media screen and (max-width: 1400px) {
    max-width: 100%;
    max-height: 100%;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
export const RTMainBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 1400px) {
    height: auto;
    width: 50%;
    gap: 10px;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0px;
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
// export const InnerImg = styled.img`
//   display: block;
//   max-width: 100%;
//   // width: 100%;
//   // height: 100%;
//   object-fit: cover;
//   object-position: center;
// `;

