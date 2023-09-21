import styled from "styled-components"

export const MainConatainer = styled.div`
padding: 72px 0 96px 0;
`
export const HeadingWrapper = styled.div`
   text-align: center;
   font-family: 'Gilroy-Bold',sans-serif;
h1{
    font-size: 40px;
    line-height: 47px;
    text-transform: capitalize;
    color: #003459;
    margin-bottom: 16px;
}
h3{
    font-size: 24px;
    line-height: 28px;
    color: #202020;
    margin-bottom: 9px;
}
p{
    font-family: 'Gilroy-Regular',sans-serif;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #202020;
}
`
export const FaqWrapper = styled.div`
margin-top: 72px;
`
export const FaqWrap = styled.div`
border-bottom: 1px solid rgba(32, 32, 32, 0.1);
cursor: pointer;


`
export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 12px 0;
h1{
    font-family: 'Gilroy-SemiBold',sans-serif;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
}
`

export const ToggleIcon = styled.div`
    cursor: pointer;
    `;
export const Description = styled.div`
p{
    font-family: 'Futura Md BT',sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: rgba(32, 32, 32, 0.6);

    margin-bottom: 0; 
    opacity: 0;
    transition: all 0.3s;
    height: 0;
}
.show{
    height: auto;
    margin-bottom: 18px;
    opacity: 1;
}


`