import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

const ToastContainer = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 50;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    /* display: flex;
    justify-content: center;
    align-items: flex-start; */
    padding-top: ${props => props.positionVertical ==='top' ? "100px" : ''};
    padding-bottom: ${props => props.positionVertical ==='bottom' ? "50px" : ''};
    /* margin:  0 auto; */
`

const ToastWrapper = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      align-items:  ${props => props.positionVertical ==='top'? "flex-start" : props.positionVertical ==='center' ? "center" : props.positionVertical === 'bottom' ? "flex-end" : '' };
      justify-content: ${props => props.positionHorizental ==='left'? "flex-start" : props.positionHorizental === "center" ? 'center' : props.positionHorizental ==='right' ? 'flex-end' : '' };   
`

const ToastWrap = styled.div`
      padding: 10px;
      background: linear-gradient(270deg, #6AA9FF 0%, #428BC1 100%);
      text-align: center;
      border-radius: 4px;
      width: fit-content;
      max-width: 50%;

      @media(max-width:768px) {
       max-width: 75%;
      }

      @media(max-width:425px) {
        max-width: 95%;
      }
      p {
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        line-height: 1.6em;
      }
`

const Toast = ({position}) => {
    const [positionHorizental,setpositionHorizental]=useState('center');
    const [positionVertical,setpositionVertical]=useState('top');

    ////// console.log(positionHorizental)
    ////// console.log(positionVertical)

    useEffect(()=>{
      if(position) {
        const positionArr = position.split('-');
        setpositionHorizental( (positionArr[1].toString()));
        setpositionVertical((positionArr[0].toString()));
      }
    
    },[position])
  return (
    <ToastContainer  positionVertical={positionVertical} positionHorizental={positionHorizental}>
     <ToastWrapper positionVertical={positionVertical} positionHorizental={positionHorizental} >
      <ToastWrap>
        <p>1 item added to cart. Check out now!1 item added to cart.</p>
      </ToastWrap>  
      </ToastWrapper>
    </ToastContainer>
  )
}

export default Toast