import styled from "styled-components";

export const Section3 = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 150px;

  h3 {
    text-align: center;
    margin-bottom: 224px;
    
  }
`;
export const SectionLR3 = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    gap: 200px;
}
`;
export const SectionLt3 = styled.div`
  width: 50%;

  @media screen and (max-width: 900px) {
    height: 80%;
    width: 80%;
    display: flex;
    justify-content: space-around; 
}
`;
export const Section3Img = styled.figure`
  width: 518px;
  height: 518px;
  background-color: #EFF7FF;
  position: relative;
  display: block;
  @media screen and (max-width: 700px) {
    height: 400px;
    width: 100%;
  }
  @media screen and (max-width: 540px) {
    height: 300px;
  }
  @media screen and (max-width: 320px) {
    height: 250px;
  }

  img {
    position: absolute;
    bottom: 59px;
    left: 59px;
    display: block;
    max-width: 100%;
    object-fit: cover;
    object-position: center;
}
`;
export const Section3RT = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  @media screen and (max-width: 900px) {
    height: 100%;
    width: 100%;
    
}
`;
export const Box = styled.div`
  width: 135px;
  height: 136px;
  background-color: #EFF7FF;

`;
export const InnerPara = styled.div`
  width: 120%;
  height: 262px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0px 30px 0px 30px;
  position: absolute;
  bottom: 223px;
  right: 33px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);

  @media screen and (max-width: 1300px) {
    height: 220px;
    width: 120%;
    bottom: 40%;
    right: 7%;
  }

  @media screen and (max-width: 900px) {
    width: 90%;
    bottom: 20%;
    right: 5%;
  }

 
  h4 {
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #202020;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
   
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
