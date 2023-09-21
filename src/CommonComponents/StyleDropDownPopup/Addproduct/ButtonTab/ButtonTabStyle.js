import { styled } from "styled-components"

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .externalPageTabBtn {
        background: #F3F4F6;
             
                display: flex;
                grid-template-columns: 1fr 1fr 1fr;
                align-items: center;
                gap: 19px;
                flex-wrap: wrap;
                padding: 4px;
                justify-content: space-between;
                margin-top: 16px;
            }

            .externalPagesTabButton {
                background-color: transparent;
                padding: 2px 22px;
                color: #202020;
               flex-grow: 1;
                border-radius: 6px;

             
            }
            .Active {
                    background: #3758F9;
                    color: #FFFFFF;
                    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.08);
                }

`
export const WrapperSection = styled.div`
  display: flex;
            align-items: center;
            justify-content: space-between;

            .inputWidth{
           width:127px
     }  
            .dropDownWidth {
                width: 127px;
            }  
        
`

export const Title = styled.div`
   font-weight: 500;
                font-size: 12px;
                line-height: 18px;
                font-family: "Poppins", sans-serif;
                color: #202020;
`