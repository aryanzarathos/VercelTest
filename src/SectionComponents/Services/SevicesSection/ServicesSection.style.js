import styled from "styled-components";

export const OurServicesMainContainer = styled.div`
  margin: 48px 0px 108px 0px;
`;

export const OurServicesGridContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  align-items: flex-start;
  gap: 36px;
  @media screen and (max-width: 1025px) {
    grid-template-columns: 1fr;
  }
`;
export const OurServicesMenuTab = styled.ul`
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

export const OurservicesMenuTabItem = styled.li`
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
export const OurServicesMenuButton = styled.button`
    background: ${(props) => props.currentPage === props.data ? "#1F2B6C;" : "transparent"};
    color: ${(props) => props.currentPage === props.data ? "rgba(255, 255, 255, 1)" : "#202020"};
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    padding: 24px 18px;
    cursor: pointer;
    border: none;
    outline: none;
    width: 100%;
    @media screen and (max-width: 1025px) {
        white-space: nowrap;
        padding: 6px 16px;
    }
`;
export const OurServicesItem = styled.figure`
  display: grid;
  grid-template-columns: 1fr;
  /* gap: 40px; */
  @media screen and (max-width: 1025px) {
    grid-template-columns: 1fr;
  }
`;
export const FacilitiesImage = styled.div`
  width: 324px;
  height: 231px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1025px) {
    width: 100%;
    height: auto;
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
  border: 5px solid #BFD2F8;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LineInner = styled.span`
  border: 5px solid #1F2B6C;
  position: absolute;
  width: 60%;
  z-index: 100;
`;
export const OurFacilitesButton = styled.button`
  background: #BFD2F8;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #1F2B6C;
  border:none;
  padding: 13px 30px;
  border-radius: 50px;
  margin: auto;
  margin-top: 28px;
  cursor: pointer;
`;

export const OurServicesItemHeading = styled.h4`
  font-family: 'Work Sans','sans-serif';
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 30px;
  color: #202020;
  margin-bottom: 16px;
  position: relative;
  &::after {
    width: 100%;
  }
`;

export const OurServicesItemContentContainer = styled.figcaption`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  align-items: flex-start;

  @media screen and (max-width: 1025px) {
    grid-template-columns: 1fr;
  }
`;

export const OurServicesContent = styled.p`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 154%;
    color: #212124;
    margin-bottom: 24px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const OurservicesMenuTabWrap = styled.div`
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
