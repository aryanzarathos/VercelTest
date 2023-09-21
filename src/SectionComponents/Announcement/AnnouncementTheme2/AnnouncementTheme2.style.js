import styled from "styled-components";
export const FeeStructureHomeHeroSection = styled.div`
  padding: 32px 0;
  .account-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .accont-text-wrap {
      .accont-text {
        font-size: 18px;
      } 

    }
    
    .btn-wrap {
      margin-top: 24px;
      display: flex;
      align-items: center;
      gap: 16px;

      .btn-account {
        padding: 6px 42px;
      }
    }
}
`;
export const FeeStructureHomeHero = styled.div``;
export const FeeStructureHomeHeroHead = styled.div`
  margin-bottom: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    font-family: 'Montserrat',sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    color: rgb(52, 63, 100);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

`;
export const FeeStructureHomeHeroList = styled.ul``;
export const FeeStructureHomeHeroListItem = styled.li`
  border: 1px solid rgb(52, 63, 100);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  padding: 16px 24px 16px 32px;
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 24px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
  &::before {
    padding-left: 24px;
  }
  &:last-child {
    margin-bottom: 0;
  }

  h6 {
    font-family: 'Montserrat',sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: rgb(52, 63, 100);
    position: relative;
    &::before {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: rgb(52, 63, 100);
        left: -12px;
        top: 10px;
    }
  }
  button {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: rgb(52, 63, 100);
    border: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
    &::after {
      width: 100%;
      border: none;
      height: 1px;
      background-color: rgb(52, 63, 100);
      bottom: 0;
      left: 0;
    }
  }
`;


export const ViewMoreFaqsHeroSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;
export const ViewMoreFaqsHeroButton = styled.a`
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    background: rgb(52, 63, 100);
    border: 1px solid rgb(52, 63, 100);
    border-radius: 4px;
    color: rgb(255, 255, 255);
    padding: 10px 40px;
    cursor: pointer;
    &:hover {
        background: rgb(49, 70, 143);
        color: rgb(255, 230, 167);
        border: 1px solid rgb(49, 70, 143);
        -webkit-transition-duration: 700ms;
        -moz-transition-duration: 700ms;
        -o-transition-duration: 700ms;
        transition-duration: 700ms;
    }
`;
export const DownloadFileButton = styled.button`
    display: block;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.2px;
    background: rgb(52, 63, 100);
    border: 1px solid rgb(52, 63, 100);
    border-radius: 4px;
    color: rgb(255, 255, 255);
    padding: 6px 24px;
    cursor: pointer;
    margin-top: 32px;
  &:hover {
    background: rgb(49, 70, 143);
    color: rgb(255, 230, 167);
    border: 1px solid rgb(49, 70, 143);
    -webkit-transition-duration: 700ms;
    -moz-transition-duration: 700ms;
    -o-transition-duration: 700ms;
    transition-duration: 700ms;
  }
`;