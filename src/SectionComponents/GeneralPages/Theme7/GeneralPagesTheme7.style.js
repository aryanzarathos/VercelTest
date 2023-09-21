import styled from "styled-components"

export const HeaderText = styled.div`
    padding: 48px 56px 56px 56px;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 600px) {
      padding: 48px 0 56px 0;
    }
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
    width: 65%;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
`
export const Wrap = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 19px;
    margin-bottom: 72px;

    @media screen and (max-width: 1200px) {
        grid-template-columns: auto auto auto;
    }
    @media screen and (max-width: 1000px) {
        grid-template-columns: auto auto;
    }
    @media screen and (max-width: 600px) {
        grid-template-columns: auto;
    }
`
export const ImgTxtItem = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #EEEEEE;
`
export const ImgItem = styled.figure`
    height: 235px;
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
`
export const InnerImg = styled.img`
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
`
export const ImgTxt = styled.div`
    padding: 43px 16px 26px 16px;
`
export const BlogHeading = styled.h2`
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
    color: #202020;
    font-family: "Poppins",sans-serif;
    margin-bottom: 9px;
`
export const BlogTxt = styled.h2`
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    color: #202020;
    font-family: "Poppins",sans-serif;
    
`
export const TittleText = styled.p`
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
  color: #202020;
  font-family: "Poppins",sans-serif;
  text-align: start;
  margin-bottom: 8px;
`
export const BlogPara = styled.p`
   font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(32, 32, 32, 0.6);
  font-family: "Poppins",sans-serif;
  margin-bottom: 24px;
  text-align: start ;
`
export const Buton = styled.button`
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  color: #FFFFFF;
  font-family: "Poppins",sans-serif;
  height: 40px;
  width: 120px;
  background-color: #000000;
  border: transparent;
`
export const ButtonItem = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
`

