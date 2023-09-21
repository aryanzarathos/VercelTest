const { styled } = require("styled-components");


export const Overlaydropdown = styled.div`
position: fixed;
left: 0;
right: 0;
top: 115px;
bottom: 0;
background: rgba(32, 32, 32, 0.30);
z-index: 99;
`

export const SearchDroDownWrapper = styled.div`
/* position: absolute; */
background: #fff;
width: 100vw;
top: 100%;
max-height:316px;
min-height: auto;
z-index: 999;
overflow-y: auto;

@media(max-width:768px)
{
    max-height: 80vh;
}
`

export const LoaderWrap = styled.div`
display: flex; 
align-items: center;
justify-content: center;

img{
    height: 30px;
    width: 100%;
    display: block;
    object-fit: contain;
    mix-blend-mode: multiply;
}
`
export const SearchDroDownList = styled.div`
display: flex; 
gap: 6px;
border-bottom: 1px solid rgba(32, 32, 32, 0.20);
padding: 16px 0;
&:last-child{
    border-bottom: none;
}
`
export const SearchDroDownContainer = styled.div`
position: relative;
    width: 1340px;
    max-width: 90%;
    margin: 0 auto;
`

export const ProductName = styled.span`
    color: #000;
    font-size: var(--global-typography-fontSizeP);
    font-family: var(--global-typography-fontFamilyP);
    line-height: var(--global-typography-lineHeightP);
    font-weight: var(--global-typography-fontWightLight);
    /* word-spacing: 0.3rem; */
`

export const CategoryName = styled.span`
    color: #727272;
    font-size: calc(var(--global-typography-fontSizeP) - 2px);
    font-family: var(--global-typography-fontFamilyP);
    line-height: var(--global-typography-lineHeightP);
    font-weight: var(--global-typography-fontWightLight);
`
