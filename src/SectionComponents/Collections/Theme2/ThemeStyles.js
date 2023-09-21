import styled from "styled-components";

export const GroupCollection = styled.section`
  height: 100%;
  width: 100%;
  padding-bottom: 96px;
`;
export const GroupHeaderText = styled.div`
  text-align: center;
  margin-bottom: 69px;
  h1 {
    color: #1f3259;
    font-size: 48px;
    line-height: 56.25px;
    @media screen and (max-width: 700px) {
      font-size: 30px;
      line-height: 40px;
    }
  }
`;
export const GroupCardWrap = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto;
  margin-bottom: 40px;
  gap: 40px;
  @media screen and (max-width: 950px) {
    grid-template-columns: auto;
  }
`;
export const Groupcardmain = styled.div`
  display: flex;
  border-radius: 12px;
  height: 300px;
  width: 100%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
    border-radius: 0 !important;
  }
`;
export const ItemLt = styled.div`
  height: 100%;
  border-radius: 12px 0px 0px 12px;
  overflow: hidden;
  width: 60%;
  @media screen and (max-width: 600px) {
    width: 100%;
    max-height: 300px;
    border-radius: 12px 12px 0px 0px;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }
`;
export const ItemRt = styled.div`
  width: 40%;
  height: 100%;
  padding: 56px 50px 24px 24px;
  background-color: #1f3259;
  box-shadow: inset 8px 0px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0px 12px 12px 0px;

  @media screen and (max-width: 1200px) {
    padding: 20px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    gap: 70px;
    border-radius: 0px 0px 12px 12px;
  }
  @media screen and (max-width: 350px) {
    padding: 10px;
  }
`;
export const ArrivalText = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 29.26px;
  color: #ffffff;
  @media screen and (max-width: 500px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

// export const CardImg = styled.img`
//   width: 100%;
//   height: 100%;
//   display: block;
//   object-fit: cover;
//   object-position: center;
// `;

export const ExploreSection = styled.div`
  display: flex;
  gap: 12px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    gap: 5px;
  }
  img {
    width: 25px;
    height: 25px;
    display: block;
    @media screen and (max-width: 500px) {
      height: 20px;
      width: 20px;
    }
  }
`;
// export const VectorImg = styled.img`
// width: 25px;
// height: 25px;
// display: block;
// @media screen and (max-width: 500px) {
//   height: 20px;
//   width: 20px;
// }
// `;
export const ExploreText = styled.p`
  font-size: 20px;
  line-height: 23.44px;
  color: #ffffff;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    line-height: 20px;
  }
`;