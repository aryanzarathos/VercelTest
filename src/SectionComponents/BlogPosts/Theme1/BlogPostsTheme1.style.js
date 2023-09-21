import styled from "styled-components";

export const LatestArticlesTopHeading = styled.div`
text-align: center;
h1{
    font-size: 48px;
    line-height: 56px;
    color: #1F3259;
}
h2{
}
`;

export const LatestArticlesSubHeading = styled.div`


`
export const LatestArticlesSubContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
margin-top: 70px;
gap: 108px;

@media (max-width:1024px) {
    column-gap: 60px;
}

@media (max-width:992px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 35px;
}

@media (max-width:600px) {
    grid-template-columns: 1fr;
}
`;