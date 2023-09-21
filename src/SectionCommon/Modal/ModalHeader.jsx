import { bool, string } from "prop-types";
import React from "react";
import styled from "styled-components";

const HeaderWrapped = styled.div`
padding:16px 48px 16px 48px;
@media screen and (max-width: 768px) {
  padding: 16px;
}
h2{
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  font-family: 'Monsterret';
  font-style: normal;
  letter-spacing: inherit;
  text-align: inherit;
  color: #000;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
  }
  h3{
    
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    font-style: normal;
    font-family: 'Monsterret';
    letter-spacing: inherit;
    text-align: inherit;
    color: #000000;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
    }

    &.transparent {
      background: transparent;
    }
`;
const ModalHeader = ({
  title,
  subtitle,
  children,
  className,
  closeButton,
  onclose,
  TitleClass,
  SubTitleClass,
}) => {
  window.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
      onclose();
    }
  });
  return (
    <HeaderWrapped className={` ${className}`}>
      {title && <h2 className={TitleClass} title={title}>{title}</h2>}
      {subtitle && <h3 className={SubTitleClass} title={subtitle}>{subtitle}</h3>}
      {children}
    </HeaderWrapped>
  );
};

ModalHeader.defaultProps = {
  title: undefined,
  subtitle: undefined,
  closeButton: false,
};

ModalHeader.propTypes = {
  title: string,
  subtitle: string,
  closeButton: bool,
};

export default ModalHeader;
