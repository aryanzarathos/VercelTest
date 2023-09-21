import React from 'react'
import styled from 'styled-components'

const Divider = ({ClassName, Direction}) => {
  const Divider = styled.div`
  height: 1px;
  width: 100%;
  margin: 8px 0;
  background-color: #f6f6f6;
  &.Vertical{
  margin: 0 8px;
  height: 100%;
  width: 1px;
  }
  `;
  return (
    <Divider className={`${ClassName} ${Direction}`}></Divider>
  )
}

export default Divider