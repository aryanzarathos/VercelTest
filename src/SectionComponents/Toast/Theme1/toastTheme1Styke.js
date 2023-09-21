import { styled } from "styled-components";

export const MessageToastContainer = styled.div`
  // width: 100vw;
    // height: 100vh;
    position: fixed;
    z-index: 9999999;
    top: 10%;
    left: 40%;
    box-shadow: 1px 1px 8px rgba(32,32,32, 0.1);
    // display: flex;
    // align-items: flex-start;
    // justify-content: center;
    transition: all 0.3s linear;

    @media(max-width:992px) {
        left: 50%;
        transform: translateX(-50%);
    }

`

export const ToastWrap = styled.div`
    background-color: #fff;
        width: fit-content;
        max-width: 40vw;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        padding: 12px;
        border-radius: 4px 4px 0 0;
        position: relative;
        padding-right: 70px;


        @media(max-width:768px) {
            max-width: 70vw;
        }

        @media(max-width:600px) {
            max-width: 90vw;
        }




        &.successBorder {
        border-bottom: 5px solid #1EBB1B;
    }

    &.errorBorder {
        border-bottom: 5px solid #C23934;
    }

    &.warningBorder {
        border-bottom: 5px solid #F2A544;
    }


`

export const ToastIcon = styled.div`
       margin-top: 3px;

`

export const ToastParaWrap = styled.div`

`

export const ToastParaText = styled.p`
   color: rgba(32,32,32, 0.6);
   line-height: 1.4em;
`

export const CrossSpan = styled.span`
position: absolute;
            top: 8px;
            right: 10px;
            cursor: pointer;
`