import React from 'react';
import styled from 'styled-components';

const BreadcrumbsContainer = styled.div`
width: 100%;
`
const BreadcrumbsListWrap = styled.ul`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 2px;




li {
   font-size: 14px;
   font-weight: 400;
   font-family: 'Gilroy-Medium', sans-serif;
   line-height: 20px;
   color:  #00171F;
   position: relative;

   &::after{
    content: '>';
    position: relative;
    margin: 0 3px;
    color:  #00171F;
 
   }

   &:last-child {
    color:  #00171F;
    font-weight: 600;
   }
   &:last-child::after {
    content: '';
   }

   a {
    color: #00171F;
   }
}
`


const Breadcrumbs = ({ children, classname }) => {
  return (
    <BreadcrumbsContainer className={classname ? classname : ''}>
      <BreadcrumbsListWrap>
        {children}
      </BreadcrumbsListWrap>
    </BreadcrumbsContainer>

  )
}

export default Breadcrumbs