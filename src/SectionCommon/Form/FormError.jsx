import React from 'react';
import ErrorIcon from '../../Assets/images/Icons/error-icon.svg'
import styled from 'styled-components'
import Image from 'next/image';

const FormErrorWrap = styled.div`
    width: 100%;
    font-size: ${({ item }) => item?.desktop?.fontSize ? item?.desktop?.fontSize : "12px"};
    text-align: left;
    line-height: ${({ item }) => item?.desktop?.lineHeight};
    color: #d93025;
    display: flex;
    align-items: center;
    gap: 5px;
`

const Icon = styled.img`
 width: 12px;
 height: 12px;
 object-fit: cover;
`

const FormError = ({ className, error, success, show = false, style }) => {
  return (
    show &&
    <FormErrorWrap item={style} >
      {
        success ? '' : <ErrorIcon />

      }
      {error}
    </FormErrorWrap>
  )
}

export default FormError