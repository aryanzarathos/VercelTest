import React from 'react'
import { styled } from 'styled-components'

const RecordNotFoundWrap = styled.div`
    width: 100%;
    min-width: 100%;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    p{
        color: rgba(32, 32, 32, 0.30);
        text-align: center;
        font-family: 'poppins',sans-serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`
const RecordNotFound = ({ text }) => {
    return (
        <RecordNotFoundWrap>
            <p>{text ? text : 'No Records Found.'}</p>
        </RecordNotFoundWrap>
    )
}

export default RecordNotFound
