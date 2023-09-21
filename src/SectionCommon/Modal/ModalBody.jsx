import React from "react";
import styled from 'styled-components';

const BodyWrapped = styled.div`
padding: 16px 48px 16px 48px;
min-height: auto;
max-height: 75vh;
overflow: hidden;
overflow-y: auto;
@media screen and (max-width: 768px) {
  padding: 16px;
max-height: 100vh;
min-height: 100vh;

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
    }
  p{
    
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    font-style: normal;
    font-family: 'Monsterret';
    letter-spacing: inherit;
    text-align: inherit;
    color: #000;
    }
`;


const ModalBody = ({ children, className }) => {
  return <BodyWrapped className={className}>{children}</BodyWrapped>;
};

export default ModalBody;
