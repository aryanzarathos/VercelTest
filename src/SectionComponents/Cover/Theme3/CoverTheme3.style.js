import styled from "styled-components";

export const ColorWhite = `
 color:#ffffff;
`;
export const CoverFigure = `
  margin-bottom: 10px;
  &:after{
    display:block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(32, 32, 32, 0.1);
    curser:pointer;
    }
      
  @media screen and (max-width: 2560px) {
    width: auto;
    height: auto;
  }
`;
export const CoverRt = styled.figure`
  position: relative;
  display: flex;
  margin-bottom: 10px;
  &:after{
    display:block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(32, 32, 32, 0.1);
    curser:pointer;
    }
      
  @media screen and (max-width: 2560px) {
    width: auto;
    height: auto;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img{
    max-width: 100%;
    width: 100%;
    object-fit: cover;
    height:100%;
    display:block;
  }
`;

// export const InnerImg = styled.img`

// `;
export const InnerText = `
  display: flex;
  flex-direction: column;
  gap: 20px;
  color:#ffffff;
  font-family: poppins;
  width: 550px;
  
  @media screen and (max-width: 768px) {
    width: 380px;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: fit-content;
    gap: 10px;
    width: 336px;
  }
  @media screen and (max-width: 420px) {
    width: 250px;
  }

  h1 {
    font-size: 36px;
    font-weight: 500;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media screen and (max-width: 900px) {
      font-size: 30px;
    }
    @media screen and (max-width: 768px) {
      font-size: 25px;
      font-weight: 450;
    }
    @media screen and (max-width: 500px) {
      font-size: 20px;
      line-height: 45px;
      font-weight: 400;
    }
    @media screen and (max-width: 420px) {
      font-size: 15px;
      line-height: 20px;
      font-weight: 300;
    }
  }

  p {
    font-weight: 400;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media screen and (max-width: 768px) {
      max-width: 100%;
      font-weight: 350;
      font-size: 12px;
      line-height: 18px;
    }
    @media screen and (max-width: 500px) {
      max-width: 100%;
      font-weight: 300;
      font-size: 11px;
      line-height: 15px;
    }
    @media screen and (max-width: 420px) {
      max-width: 100%;
      font-weight: 250;
      font-size: 10px;
      line-height: 10px;
    }
  }
`;
export const TextRt = styled.figcaption`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color:#ffffff;
  font-family: poppins;
  width: 550px;
  
  @media screen and (max-width: 768px) {
    width: 380px;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: fit-content;
    gap: 10px;
    width: 336px;
  }
  @media screen and (max-width: 420px) {
    width: 250px;
  }

  h1 {
    font-size: 36px;
    font-weight: 500;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media screen and (max-width: 900px) {
      font-size: 30px;
    }
    @media screen and (max-width: 768px) {
      font-size: 25px;
      font-weight: 450;
    }
    @media screen and (max-width: 500px) {
      font-size: 20px;
      line-height: 45px;
      font-weight: 400;
    }
    @media screen and (max-width: 420px) {
      font-size: 15px;
      line-height: 20px;
      font-weight: 300;
    }
  }

  p {
    font-weight: 400;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media screen and (max-width: 768px) {
      max-width: 100%;
      font-weight: 350;
      font-size: 12px;
      line-height: 18px;
    }
    @media screen and (max-width: 500px) {
      max-width: 100%;
      font-weight: 300;
      font-size: 11px;
      line-height: 15px;
    }
    @media screen and (max-width: 420px) {
      max-width: 100%;
      font-weight: 250;
      font-size: 10px;
      line-height: 10px;
    }
  }
  position: absolute;
  right: 0px;
  padding: 120px 101px 0px 0px;

  @media screen and (max-width: 900px) {
    padding: 50px;
  }
  @media screen and (max-width: 770px) {
    padding: 20px;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  height: 40px;
  width: 120px;
  font-weight: 500;
  z-index: 1;
  &:hover{
    cursor: pointer;
    color: #FFFFFF;
  }

  @media screen and (max-width: 600px) {
    font-size: 11px;
    height: 35px;
    width: 100px;
    font-weight: 480;
    }
  @media screen and (max-width: 400px) {
    font-size: 11px;
    height: 30px;
    width: 80px;
    font-weight: 480;
    }  
`;
