import styled from "styled-components";

export const ConnectSection = styled.div`
  height: 624px;
  width: 100%;
  display: flex;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  margin-bottom: 200px;

  @media screen and (max-width: 1040px) {
    height: auto;
    width: auto;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    gap: 50px;
    margin-bottom: 50px;
    gap: 50px;
}

`;

export const ConnectSectionLT = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 64px;
  padding-right: 143px;
  padding-top: 96px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media screen and (max-width: 1040px) {
    width: 50%;
    height: auto;
    padding: 20px;
    justify-content: center;
    gap: 15px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 29.26px;
    color:#000000;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media screen and (max-width: 1000px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color:#000000;
    max-width: 100%;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media screen and (max-width: 1000px) {
      font-size: 12px;
    }
  }
`;
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  width: 250px;
`;
export const CallIcon = styled.div`
  display: flex;
  gap: 18.5px;
  align-items: center;

  img {
    width: 15px;
    height: 15px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 17.07px;
    color:#000000;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media screen and (max-width: 1000px) {
      font-size: 12px;
    }
  }
`;
export const InnerImg = styled.img`
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
`;
export const MsgIcon = styled.div`
  display: flex;
  gap: 18.5px;
  align-items: center;

  img {
    width: 16.67px;
    height: 15.83px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color:#000000;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media screen and (max-width: 1000px) {
      font-size: 12px;
    }
  }
`;
export const LocationIcon = styled.div`
  display: flex;
  gap: 18.5px;
  align-items: center;

  img {
    width: 11.67px;
    height: 16.67px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    color: $colorh1black;
    max-width: 100%;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media screen and (max-width: 1000px) {
      font-size: 12px;
    }
  }
`;

export const ContactMapInnerImg = styled.figure`
  max-width: 344px;
  max-height: 179px;
  position: relative;
  left: 25px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width:1000px) {
    max-width: auto;
    max-height: auto;
    left: auto;
}  
`;


export const ConnectSectionRT = styled.div`
  width: 50%;
  height: 100%;
    background-color:#F4F4F4;
  display: flex;
  gap: 24px;
  flex-direction: column;
  padding: 0px 78px 0px 72px;
  justify-content: center;

  @media screen and (max-width: 1040px) {
    width: 50%;
    height: auto;
    gap: 15px;
    padding: 20px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    height: auto;
  }
  

  h3 {
  font-size: 20px;
  font-weight: 700;
  color:#000000;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  }

  input {
 background-color:#F5F5F5;
  }

  textarea {
 background-color:#F5F5F5;
  }

  button {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color:#FFFFFF;
background-color:#508DF1;
  width: 184px;
  height: 48px;
  border: none;
  &:hover{
    cursor: pointer;
    background: #8cb4f5;
    transition: 1.15s;
  }
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
export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color:#000000;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (max-width: 1000px) {
    font-size: 14px;
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