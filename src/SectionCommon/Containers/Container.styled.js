import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  max-width: 1366px;
  margin-right: auto;
  margin-left: auto;
  padding-right: .75rem;
  padding-left: .75rem;

  &.container-xl {
    width: 95%;
  }

  &.container-lg {
    width: 90%;
  }

  &.container-sm {
    width: 90%;
  }

  &.container-xs {
    width: 85%;
  }

  @media screen and (max-width: 1440px) {
    width: 80%;
  }
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
  @media screen and (max-width: 992px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;

  }
  @media screen and (max-width: 576px) {
    width: 90%;

  }
`
