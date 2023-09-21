import styled from "styled-components";
import image2 from '../../../Assets/SectionComponent/Images/Pagination/right.svg'


export const PaginationContainer = styled.div`
    display: flex;
    /* gap: 50px; */
    margin: 50px 0 50px 0;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:600px){
        gap: 15px;
    }
`;
export const PrivButton = styled.div`
    overflow: hidden;
    height: 64px;
    width: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-radius: 50%;
    border: 2px solid rgba(0, 52, 89, 0.4); */
    @media screen and (max-width:600px){
        padding: 10px 10px;
        height: 20px;
        width: 20px;
    }
`;
// export const Prev = styled.i`
//     width: 6px;
//     height: 12px;
//     z-index: 999;
//     padding: 30px;
//     background: rgba(32, 32, 32, 0.3);
//     -webkit-mask: url(${image1}) no-repeat center ;
//     mask-image: url(${image1}) no-repeat center ;
//     transform: rotate(180deg);
//     &:hover{
//         cursor: pointer;
//         background: rgba(32, 32, 32, 0.8);
//     }
//     @media screen and (max-width:600px){
//         padding: 10px 10px;
//     }
// `;
export const PaginationNumber = styled.ul`
    display: flex;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: rgba(32, 32, 32, 0.8);
   
    .active{
        color: #fff;
        font-weight: 600;
        background: #093251;
        box-shadow: 0px 1px 4px rgba(26, 26, 67, 0.1);
        border-radius: 4px;
    }
    @media screen and (max-width:600px){
        gap: 15px;
    }
`;
export const Number = styled.li`
    padding: 8px;
    &:hover{
        cursor: pointer;
    }
    @media screen and (max-width:600px){
        gap: 15px;
    }
`;
// export const NextButton = styled.div`
//     overflow: hidden;
//     height: 64px;
//     width: 64px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     /* border-radius: 50%;
//     border: 2px solid rgba(0, 52, 89, 0.4); */
//     @media screen and (max-width:600px){
//         padding: 10px 10px;
//         height: 20px;
//         width: 20px;
//     }
// `;

export const Next = styled.i`
    width: 6.93px;
    height: 12px;
    background: rgba(32, 32, 32, 0.8);
    -webkit-mask: url(${image2}) no-repeat center;
    mask-image: url(${image2}) no-repeat center;
    padding: 30px 30px;
    &:hover{
        cursor: pointer;
        background: rgba(32, 32, 32, 0.8);
    }  
    @media screen and (max-width:600px){
        padding: 10px 10px;
    }
`;

