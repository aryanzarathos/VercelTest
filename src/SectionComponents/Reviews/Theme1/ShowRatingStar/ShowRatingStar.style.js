import styled from 'styled-components';


export const ShowRatingstarContainer = styled.div`
background: ${({item})=>item?.desktop?.background};
`
export const StarWrap = styled.div`
  display: ${({item})=>item?.desktop?.display};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  gap: ${({ item }) => item?.desktop?.gap};
  svg{
    height: ${({itemStarSvg})=>itemStarSvg?.desktop?.height};
    width: ${({ itemStarSvg }) => itemStarSvg?.desktop?.height};
  }

  /* .starIcon-filled {
    background: #DCAE09;
  }

  .starIcon-empty {
    background: #8d8c8cb7
  } */
`

// export const StarIcon = styled.i`
//   display: block;
//   -webkit-mask: url(${({ itemProp }) => itemProp}) no-repeat center;
//   mask-image: url(${({ itemProp }) => itemProp}) no-repeat center;
//   width: 9px;
//   height: 9px;
// `
