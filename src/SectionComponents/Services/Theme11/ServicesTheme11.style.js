import styled from "styled-components";

export const OurServicesMainContainer = styled.div`
  margin: 48px 0px 96px 0px;
`;

export const OurServicesHeadSection = styled.div`
  font-family: 'Futura';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 48px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const HeadingContent = styled.span`
  font-family: 'Futura','sans-serif';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 48px;
  color: #000000;  
`;

export const OurServicesGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  gap: 56px;
  background: transparent;
`;

export const OurServicesMenuTab = styled.ul`
  background-color: white;
  border: 1px solid #1f2b6c;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  gap: 24px;
  padding: 2px;

  @media screen and (max-width : 1025px){
    justify-content: flex-start;
  }
`;

export const OurservicesMenuTabItem = styled.li`
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  list-style-type: none;
  overflow: hidden;
  
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  @media screen and (max-width: 1025px) {
    overflow: unset;
  }
`;
export const OurServicesMenuButton = styled.button`
  background: ${(props) => props.currentPage === props.data ? "#254927;;" : "transparent"};
  color: ${(props) => props.currentPage === props.data ? "rgba(255, 255, 255, 1)" : "#202020"};
  font-family: 'Futura Bk BT';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  outline: none;
  width: 100%;    
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;

  @media screen and (max-width: 1025px) {
    white-space: nowrap;
    padding: 8px 16px;
  }
`;

export const OurServicesItem = styled.figure`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;

  @media screen and (max-width: 1025px) {
    grid-template-columns: 1fr;
  }
`;
export const OurservicesImage = styled.div`
  width: 470px;
  height: 335px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  
  @media screen and (max-width: 1025px) {
    width: 100%;
    height: auto;
    order: 2;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 16px;
  }
`;

export const OurServicesButton = styled.button`
  background: rgba(37, 73, 39, 1);
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;;
  border:none;
  padding: 13px 30px;
  border-radius: 50px;
  margin: auto;
  margin-top: 36px;
  cursor: pointer;
`;

export const OurServicesItemHeading = styled.h4`
  font-family: 'Futura Md BT','sans-serif';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
  color: #202020;
  margin-bottom: 17px;
  position: relative;
  &::after {
    width: 100%;
  }
`;

export const OurServicesItemContentContainer = styled.figcaption`
  width: 100%;
  height: auto;
`;

export const OurServicesContent = styled.p`
  font-family: 'Futura Bk BT','sans-serif';
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
  overflow-x: auto;
  max-height: 90vh;
  scrollbar-width: thin;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
  background: #fcfefe;
  z-index: 999;

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
    background: rgba(37, 73, 39, 1);
    border-radius: 10px;
  }

  @media screen and (max-width: 1025px) {
    width: 100%;
    border: none;
    z-index: 999;
  }
`;

