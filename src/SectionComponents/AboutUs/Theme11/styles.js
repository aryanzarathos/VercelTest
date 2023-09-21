import styled from 'styled-components';
export const AboutHeroSection = styled.div`
padding: 32px 0;
`;
export const SectionGrid = styled.div`
background: transparent;
border: 1px solid #202020;
padding: 32px 42px;
border-radius: 24px;
`;
export const SectionGridLeft = styled.div`

`;

export const SectionHead = styled.div`
margin-bottom: 50px;
text-align: center;
h2{
font-family: 'Montserrat',sans-serif;
font-style: normal;
font-weight: 700;
font-size: 56px;
line-height: 68px;
text-align: center;
color: #343F64;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
word-break: break-all;
}
h3{
font-family: 'Montserrat',sans-serif;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;
text-align: center;
color: #4E616B;
position: relative;
display: inline-block;
&::after{
position: absolute;
width: 100%;
height: 2px;
background-color: rgb(78, 97, 107);
bottom: -8px;
}
}
`;
export const SectionDescription = styled.div`
p{
    text-align: center;
    font-family: 'Montserrat',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 170.9%;
    letter-spacing: 0.02em;
    color: #343F64;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.sun-editor-wrap {
    text-align: center !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 28px !important;
    color: rgb(32, 32, 32) !important;
    background-color: transparent !important;
    text-align: center;
  
}
`;
export const ViewMoreSection = styled.div`
display: flex;
justify-content: center;
margin-top: 53px;

`;
export const ViewMoreButton = styled.a`
background: #343F64;
box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 8px;
border: 1px solid  #343F64;
font-family: 'Montserrat',sans-serif;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
padding:10px 40px;
color: #FFFFFF;
cursor: pointer;
&:hover{
background: #31468f;
color: #ffe6a7;
border: 1px solid #31468f;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
`;