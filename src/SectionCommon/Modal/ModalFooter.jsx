import React from "react";
import styled from "styled-components";

const FooterWrapped = styled.div`
padding: 16px 48px 16px 48px;
min-height: 10vh;
max-height: 10vh;
@media screen and (max-width: 768px) {
  padding: 16px;
}
`;

const ModalFooter = ({ children, className }) => {
  return <FooterWrapped className={` ${className}`}>{children}</FooterWrapped>;
};

export default ModalFooter;
