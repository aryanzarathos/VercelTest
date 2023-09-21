import styled from "styled-components";

export const ProgressContainer = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    padding-top: ${({ item }) => item?.desktop?.paddingTop} ;
    align-items: ${({ item }) => item?.desktop?.alignItems};
    justify-content:  ${({ item }) => item?.desktop?.justifyContent};
    @media screen and (max-width: 700px){
        padding-top:  ${({ item }) => item?.mobile?.paddingTop};
    }
`;

export const ProcessSection = styled.div`
    width:  ${({ item }) => item?.desktop?.width};
    display: ${({ item }) => item?.desktop?.display};
    grid-template-columns:${({ item }) => item?.desktop?.gridTemplateColumns};
z-index: 1;
    /* @media screen and (max-width: 700px){
        grid-template-columns: auto;
        display: flex;
        flex-direction: column;
        gap: 25px;       
    } */
`;


export const CheckWrap = styled.div`
background:${({ item }) => item?.desktop?.background};
padding: 8px 6px;
border-radius: 50%;
`
export const Main = styled.div`
  position: ${({ item }) => item?.desktop?.position};
  display: ${({ item }) => item?.desktop?.display};
  justify-content:  ${({ item }) => item?.desktop?.justifyContent};
  &:last-child {
     & > div {
        &::after {
            border: none;
        }
      }
    }
  &:last-child {
     & > div >h6{
        &::after {
            content: none;
        }
      }

    }
  &:first-child {
     /* & > div p{
        &::after {
            content: '';
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 1px;
            border-width: 0 0 1px;
            border-style: solid;
        }
      } */
    }
  &:first-child {
     & > div >h6{
        /* color:${({ item }) => item?.desktop?.color2};
        background-color: ${({ item }) => item?.desktop?.backgroundColor}; */
      }

    }
`;


export const ProcessStep = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    align-items: ${({ item }) => item?.desktop?.alignItems};
    gap: ${({ item }) => item?.desktop?.gap};
    background-color: ${({ item }) => item?.desktop?.backgroundColor};
    padding:${({ item }) => item?.desktop?.padding};
    @media screen and (max-width: 700px){
       gap: ${({ item }) => item?.mobile?.gap};
    }
    
    &.active{
      &::after{
        border: ${({ item }) => item?.desktop?.active?.after?.border};
      }
    }
    &::after{
      border: ${({ item }) => item?.desktop.after?.border};
      width:  ${({ item }) => item?.desktop.after?.width};
        z-index:${({ item }) => item?.desktop.after?.zIndex};
        position: ${({ item }) => item?.desktop.after?.position};
        left: ${({ item }) => item?.desktop.after?.left};
    }
`;


export const StepNumWrap = styled.div``