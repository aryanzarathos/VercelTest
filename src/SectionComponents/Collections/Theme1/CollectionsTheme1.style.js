import styled from "styled-components";

export const CollectionFirstContainer = styled.div`
  padding: 56px 0 96px 0;
`;

export const HeaderText = styled.div`
  text-align: center;
  h1 {
    font-size: 48px;
    line-height: 56.25px;
    color: #1f3259;
    text-align: center;
    margin: 0px 0 36px 0;
    @media screen and (max-width: 700px) {
      font-size: 30px;
    }
  }
`;
export const ContainerFirst = styled.div`
  .slick-dots li button:before {
    font-size: 10px;
  }
  .slick-dots li {
    margin: 0px 2px;
  }
  .slick-next {
    right: 10px;
    width: 40px;
    height: 40px;
    @media screen and (max-width: 800px) {
      right: 0px;
    }
  }

  .slick-prev {
    z-index: 1;
    left: 10px;
    width: 40px;
    height: 40px;
    @media screen and (max-width: 800px) {
      left: 5px;
    }
  }

  .slick-prev:before {
    border-right: 2px solid #6aa9ff;
    border-bottom: 2px solid #6aa9ff;
    transform: rotate(135deg);
    color: transparent;
    width: 12px;
    height: 12px;
    top: 12px;
    left: 12px;
  }

  .slick-next:before {
    font-size: 40px;
    border-right: 2px solid #6aa9ff;
    border-bottom: 2px solid #6aa9ff;
    color: transparent;
    width: 12px;
    height: 12px;
    top: 12px;
    left: 8px;
    transform: rotate(-45deg);
  }
`;
export const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
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
export const ImgContainer = styled.figure`
  height: 260px;
  margin-bottom: 12px;
  /* @media screen and(max-width: 800px) {
    height: auto;
    width: auto;
} */
  img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }
`;
// export const InnerImg = styled.img`
// max-width: 100%;
// display: block;
// object-fit: cover;
// object-position: center;
// `;
export const Discount = styled.div`
  display: flex;
  justify-content: center;
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
