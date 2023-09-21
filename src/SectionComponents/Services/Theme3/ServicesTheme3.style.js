import styled from "styled-components";

export const CollectionTopHeading = styled.p`
font-size: 48px;
line-height: 56px;
color: #1F3259;
display: flex;
justify-content: center;
align-items: center;
`;

export const CollectionsSubContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
margin-top: 70px;
gap: 44px;

@media (max-width: 1024px) {
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  margin-top: 35px;
}

@media (max-width: 425px) {
  grid-template-columns: 1fr;
}
`

export const SubContainerImg = styled.div`
  width: 100%;
  height: 261px;
  
  img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

@media (max-width : 1024px) {
  height: auto;
}
`;

export const SubImgContent = styled.p`
font-size: 18px;
line-height: 32px;
text-align: center;
color: #1F3259;
margin-top: 16px;
`;