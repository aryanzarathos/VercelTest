import styled from "styled-components";

export const NoticeBoard = styled.div`
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  padding: 10px 0;
  background: #f9f9f9;
  line-height: 0;
  marquee {
    ul {
      display: flex;
      gap: 20px;
      li {
        position: relative;
        &::last-child {
          &::after {
            background: transparent;
          }
        }
        &::after {
          position: absolute;
          right: -10px;
          left: auto;
          width: 1px;
          height: 100%;
          background: "";
        }
        a {
              "FontSize": "16px",
          "FontWeight": "500",
          "LineHeight": "1.24",
          "FontFamily": "",
          "FontStyle": "",
          "LetterSpacing": ""
          font-weight:500;
          font-size: 16px;
          line-height: 1.24;
          font-style: normal;
          font-family:inherit;
          letter-spacing:inherit;
          color: #343F64;
          span {
              font-weight: 700;
            }
            &:hover {
              color: #000;
            text-decoration: underline;
          }
        }
      }
    }
  }
`;