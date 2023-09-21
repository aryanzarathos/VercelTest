const { styled } = require("styled-components");


export const CuponMainContainer = styled.div`
  margin-bottom: ${({ item }) => item?.desktop?.marginBottom};
  cursor: ${({ item }) => item?.desktop?.cursor};
`;

export const HorizontalLine = styled.span`
  background:${({ item }) => item?.desktop?.background};
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
  display: ${({ item }) => item?.desktop?.display};
`;

export const CuponsubContainer = styled.div`
  margin: ${({ item }) => item?.desktop?.margin};
  display: ${({ item }) => item?.desktop?.display};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  align-items: ${({ item }) => item?.desktop?.alignItems};
`;

export const SubLeftContainer = styled.div`
  display: ${({ item }) => item?.desktop?.display};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  gap: ${({ item }) => item?.desktop?.gap};
`;

export const LeftContentContainer = styled.div`
  /* p{
    font-size: 16px;
    line-height: 24px;
    color: #000;
    margin-bottom: 6px;
    font-weight: 500;
  } */

  /* span{
    font-family: 'Poppins';
    font-style: normal;
    font-size: 14px;
    line-height: 21px;
    color: #4A9E42;
  } */
`;


export const SubRightContainer = styled.div`

`;



export const RightContainerButton = styled.button`
  /* background: transparent;
  border: none;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #428BC1;
  cursor: pointer; */
`;