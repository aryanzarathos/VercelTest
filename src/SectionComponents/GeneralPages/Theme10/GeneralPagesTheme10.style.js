import styled from "styled-components"

export const HeaderText = styled.div`
    padding: 48px 0px 56px 0px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
`
export const HeadingTxt = styled.h1`
  font-size: 40px;
  line-height: 60px;
  font-weight: 500;
  color: #202020;
  font-family: "Poppins",sans-serif;
  margin-bottom: 8px;
`
export const Text = styled.h1`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #202020;
    font-family: "Poppins",sans-serif;
    
`
export const WrapContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    width: 100%;
    margin-bottom: 36px;
    @media screen and (max-width: 767px) {
        flex-wrap: wrap;
    }
`
export const WrapLt = styled.figure`
    width: 300px;
    height: 200px;
    display: block;
    object-fit: cover;
    object-position: center;
    @media screen and (max-width: 767px) {
        width: 100%;
        height: auto;
    }
    img{
         height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    @media screen and (max-width: 767px) {
        width: 100%;
    }
    }
`
export const WrapRt = styled.div`
    width: calc(100% -300px);
    height: auto;
    @media screen and (max-width: 767px) {
        width: 100%;
        
    }

`
// export const InnerImg = styled.img`
//     height: 100%;
//     display: block;
//     object-fit: cover;
//     object-position: center;
//     @media screen and (max-width: 767px) {
//         width: 100%;
//     }
// `
export const TittleText = styled.p`
  font-size: 18px;
  line-height: 27px;
  font-weight: 600;
  color: #000000;
  font-family: "Poppins",sans-serif;
  text-align: start;
  margin-bottom: 8px;
`
export const BlogTxt = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(32, 32, 32, 0.6);
  font-family: "Poppins",sans-serif;
  margin-bottom: 16px;
`
export const Button = styled.button`
    width: 122.16px;
    height: 36px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    color: #000000;
    font-family: "Poppins",sans-serif;
    border: 1px solid #000000;
    background-color: #FFFFFF;

`
export const Wrap = styled.div`
    display: grid;
    grid-template-columns: auto;
`