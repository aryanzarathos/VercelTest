import styled from 'styled-components';
export const CategoryPageSection = styled.div`
margin:  72px 0;
`;
export const CategoryPageHead = styled.div`
h2{
    font-family: 'Open Sans',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    color: #1F2B6C;
  }
  h3{
    font-family: 'Open Sans',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.06em;
    color: #159EEC;
    position: relative;
    text-transform: uppercase;
    }
`;


export const CategoryPageGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 32px;
  margin-top: 72px;
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;


export const CategoryItem = styled.figure`
position: relative;
cursor: pointer;
`;
export const CategoryImage = styled.div`
width: 100%;
height: 251px;
img{
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
`;
export const CategoryCaption = styled.figcaption`
position: absolute;
width: 100%;
bottom: 0;
height: 100%;
display: flex;
align-items: flex-end;
justify-content: flex-start;
border-radius: 5px;
background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #1F2B6C 100%);
padding: 32px;
h6{
    font-family: 'Open Sans',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;

    color: #FFFFFF;
}
`;