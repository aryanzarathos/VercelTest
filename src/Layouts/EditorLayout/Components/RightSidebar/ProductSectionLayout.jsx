import React, { Children } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const ProductSectionWrapper = styled.div`
    position: absolute;
    z-index: 0;
    bottom: 0;
    display:none;
    right: 272px;
    left: auto;
    background: #FFFFFF;
    border: 1px solid rgba(32,32,32,0.1);
    -webkit-transition: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    height: calc(100vh - 57px);
    width: 0;
    border-right:0;
    border-top:0;
    overflow:auto;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }

    &.activeSectionLayout{
        width: 100%;
        display:block;
    }
    // @media screen and (max-width: 1440px) {
    //     right: 272px;
    // }
`
const ProductSectionLayout = ({activeSectionLayout,Children}) => {
  return (
    <ProductSectionWrapper className={activeSectionLayout ? "activeSectionLayout" : ""}>
        {Children}hellloooooo
    </ProductSectionWrapper>
  )
}

ProductSectionLayout.propTypes = {
    activeSectionLayout: PropTypes.isRequired,
    activeSectionLayout: PropTypes.bool,
    Children: PropTypes.element.isRequired
};

export default ProductSectionLayout;

