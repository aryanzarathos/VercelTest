import styled from "styled-components";

export const FacilitiesHeroSection = styled.div`
  margin: 56px 0px 97px 0px;
`;

export const FacilitiesHeroGrid = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  align-items: flex-start;
  gap: 42px;
  @media screen and (max-width: 1025px) {
    grid-template-columns: 1fr;
  }
`;
export const FacilitiesMenuTab = styled.ul`
  background: #fcfefe;
  border: 1px solid #1f2b6c;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1025px) {
    flex-direction: row;
    align-items: center;
    border: none;
  }
`;

export const FacilitiesMenuTabItem = styled.li`
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media screen and (max-width: 1025px) {
    overflow: unset;
    border-radius: 0;
  }
  &:first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    @media screen and (max-width: 1025px) {
      border-radius: 0;
    }
  }
`;
export const FacilitiesMenuButton = styled.button`
  background: ${(props) => props.currentPage === props.data ? "rgba(31, 50, 89, 1)" : "transparent"};
  color: ${(props) => props.currentPage === props.data ? "rgba(255, 255, 255, 1)" : "rgba(32, 32, 32, 1)"};
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  padding: 24px 61px;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100%;
  @media screen and (max-width: 1025px) {
    white-space: nowrap;
    padding: 6px 16px;
  }
`;
export const FacilitiesItem = styled.figure`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-start;
  gap: 40px;
  @media screen and (max-width: 1025px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
export const FacilitiesImage = styled.div`
  width: 324px;
  height: 231px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1025px) {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
export const ImgBottomBorder = styled.div`
  width: 100%;
  margin: 0;
  border: 5px solid rgba(66, 139, 193, 1);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LineInner = styled.span`
  border: 5px solid rgba(31, 50, 89, 1);
  position: absolute;
  width: 60%;
  z-index: 100;
`
export const OurFacilitesButton = styled.button`
  background: rgba(106, 169, 255, 1);
  font-family: 'Open Sans','sans-serif';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: rgba(255, 255, 255, 1);
  border:none;
  padding: 13px 30px;
  border-radius: 50px;
  margin: auto;
  margin-top: 24px;
  cursor: pointer;
`

export const FacilitiesDescription = styled.figcaption`
  width: 100%;
  height: auto;
  h4 {
    font-family: 'Gilroy-SemiBold','sans-serif';
    font-size: 26px;
    line-height: 30px;
    color: #202020;
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 16px;
    position: relative;
    &::after {
      width: 100%;
    }
  }
  p {
    font-family: 'Gilroy-Medium','sans-serif';
    font-size: 16px;
    line-height: 154%;
    color: #212124;
    margin-bottom: 24px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const FacilitiesMenuTabWrap = styled.div`
  padding-right: 8px;
  overflow-y: auto;
  max-height: 90vh;
  scrollbar-width: thin;
  position: sticky;
  top: 0;
  border-radius: 5px;
  background: #fcfefe;

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(31, 50, 89, 1);
    border-radius: 10px;
  }

  @media screen and (max-width: 1025px) {
    width: 100%;
    overflow: hidden;
    overflow-x: auto;
    border: none;
    padding-bottom: 8px;
    border-radius: 0;
    z-index: 999;
  }
`;

