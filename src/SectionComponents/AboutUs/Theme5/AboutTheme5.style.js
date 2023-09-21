import styled from "styled-components";


export const Section1 = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 100px;
  overflow: hidden;
  gap: 166px;

  @media screen and (max-width: 1300px) {
    gap: 10%;
}
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    gap: 100px;
    margin-bottom: 100px;
}

`;
export const SectionLT1 = styled.figure`
  display: block;
  width: 50%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
    img{
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  }


  @media screen and (max-width: 900px) {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
`;
export const InnerImg = styled.img`
  max-width: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
`;
export const SectionRT1 = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 900px) {
    height: auto;
    width: 100%;
  }
  h6{
    margin-bottom: 16px;
    font-family: 'Poppins', sans-serif;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 44px;
    font-weight: 400;
    line-height: 55px;
    color: #0E0E0E;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 36px;
  }
`;
export const H6 = styled.h6`
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  color:#4765F8;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const SectionRT1Content = styled.p`

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26.4px;
  color: #999191;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 48px;
  `;
export const BtnBlue = styled.button`
    font-size: 14px;
    font-weight: 400;
    line-height: 20.3px;
    width: 194px;
    height: 50px;
    border-radius: 5px;
    color:#FFFFFF;
    background-color:#4765F8;
    border: none;
    &:hover{
      cursor: pointer;
      background-color: #8093f3;
      transition: all 1s;
    }
`;
