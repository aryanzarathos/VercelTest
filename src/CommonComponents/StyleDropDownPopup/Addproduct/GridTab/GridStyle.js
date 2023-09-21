import { styled } from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const WrapperSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .inputWidth{
    width:137px
  }  
  .color-plate-style{
    width: 137px;
  }

  .selectWrapper{
    width: 137px;
    
    .dropDownWidth{
      width: 100%;
      padding-top: 6.5px;
      padding-bottom: 6.5px;
    }
  }
        
`

export const Title = styled.div`
   font-weight: 500;
                font-size: 12px;
                line-height: 18px;
                font-family: "Poppins", sans-serif;
                color: #202020;
`