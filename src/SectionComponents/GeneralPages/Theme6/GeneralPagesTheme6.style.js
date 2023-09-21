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
export const TittleText = styled.p`
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
  color: #202020;
  font-family: "Poppins",sans-serif;
  text-align: center;
  margin-bottom: 25px;
`
export const TittleTextSecond = styled.p`
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
  color: #202020;
  font-family: "Poppins",sans-serif;
  text-align: center;
  margin-bottom: 8px;
`
export const BlockTXTItem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 68px;
  margin-bottom: 102px;
  @media screen and (max-width: 900px) {
    grid-template-columns: auto;
    }
`
export const BlogTxt = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(32, 32, 32, 0.6);
  font-family: "Poppins",sans-serif;
  margin-bottom: -32px;
`
export const BlogParaItem = styled.p`
   display: grid;
   grid-template-columns: auto;
  margin-bottom: 24px;
`
export const BlogPara = styled.p`
   font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(32, 32, 32, 0.6);
  font-family: "Poppins",sans-serif;
  margin-bottom: 20px;
  text-align: center;
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
  text-align: center;
`
export const ButtonItem = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`

