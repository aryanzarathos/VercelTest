import styled from "styled-components";

export const CategoriesSectionHeading = styled.h3`
    background: rgba(106, 169, 255, 0.1);
    font-family: "Gilroy-Bold";
    font-size: 36px;
    line-height: 36px;
    color: #003459;
    text-align: center;
    padding: 48px;
`;
export const SectionSubContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px;
    margin-top: 56px;

@media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 36px;
    margin-top: 35px;
}
`;