import styled from "styled-components";

export const CollectionFourthContainer = styled.div`
  text-align: center;
`;
export const HeaderText = styled.div`
  margin-bottom: 56px;
  text-align: center;
  padding: 48px 0;
  background: rgba(106, 169, 255, 0.1);
  h1 {
    font-family: "Gilroy-Bold", sans-serif;
    font-size: 36px;
    line-height: 36px;
    color: #1f3259;
    @media screen and (max-width: 700px) {
      font-size: 30px;
      padding: 25px 0;
    }
  }
`;
export const ImgContainer = styled.div`
  width: 90%;
  margin: auto;
`;
export const ImageSection = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  margin-bottom: 72px;
  justify-content: space-around;
  @media screen and (max-width: 950px) {
    flex-wrap: wrap;
  }
`;
export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 44px;
  width: 100%;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const ImageItem = styled.div`
  text-align: center;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const ImageMain = styled.div`
  height: 261px;
  width: 100%;
  border-radius: 12px;
  margin-bottom: 16px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }
`;
// export const InnerImg = styled.img`
// `;
export const Caption = styled.p`
  font-family: "Gilroy-SemiBold", sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: #1f3259;
`;
