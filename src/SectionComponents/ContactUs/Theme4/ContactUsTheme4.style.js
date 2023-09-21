import styled from "styled-components";

export const CoverImg = styled.figure`
  height: 570px;
  width: 100%;
  position: relative;
  display: block;
  object-fit: cover;
  object-position: center;
  margin-bottom: 240px;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    height: 100%;
    width: 100%;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 300px;
    margin-bottom: 50px;
  }
`;

export const ImageWrapper = styled.div`
width: 100%;
height: 100%;

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  
}
`
export const InnerImg = styled.img`
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
`;
export const Content = styled.figure`
    width: 478px;
    position: absolute;
    left: 64px;
    top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 1000px) {
    height: auto;
    width: 400px;
    left: 50px;
    gap: 10px;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
    height: auto;
    top: 10px;
    left: 10px;
  }

  h1 {
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    @media screen and (max-width: 1000px) {
      font-size: 14px;
      max-width: 100%;
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  textarea {
    @media screen and (max-width: 1000px) {
      padding: 0px 0px 0px 10px;

      &::placeholder {
        font-size: 12px;
      }
    }
  }

  button {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    width: 184px;
    height: 48px;
     background-color:#202020;
 color:#FFFFFF;
    border: none;
    &:hover{
      cursor: pointer;
      background-color: #3a3a3a;
      transition: 1.15s;
    }

    @media screen and (max-width: 1000px) {
      height: 35px;
      width: 150px;
    }
  }
  
`;
export const H1 = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;

  @media screen and (max-width: 1000px) {
    font-size: 28px;
    line-height: 35px;
}
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px 0px 9px 16px;
  border: 1px solid rgba(32, 32, 32, 0.2);

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color:rgba(32, 32, 32, 0.4);

    @media screen and (max-width: 1000px) {
      font-size: 12px;
    }

    @media screen and (max-width: 700px) {
      font-size: 10px;
    }

    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1000px) {
    font-size: 11px;
    padding: 10px 10px 10px 10px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 0px 87px 16px;
  border: 1px solid rgba(32, 32, 32, 0.2);

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color:rgba(32, 32, 32, 0.4);
  }

  @media screen and (max-width: 1000px) {
    padding: 10px 0px 0px 14px;
  }
`;
