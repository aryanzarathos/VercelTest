import { styled } from "styled-components";

export const SettingDropdownWrapper = styled.div`
    position:absolute;
    top:40px;
    left:0;
    background: #FFFFFF;
    border: 1px solid rgba(32, 32, 32, 0.2);
    border-radius: 8px;
    width:351px;
    height:auto;
    z-index: 99;
    padding: 16px 16px 12px;


`;


export const SettingBody = styled.ul`
    display:flex;
    flex-direction: column;
    gap: 12px;

    .externalPageTabBtn {
        background: #F3F4F6;
             
                display: flex;
                grid-template-columns: 1fr 1fr 1fr;
                align-items: center;
                gap: 19px;
                flex-wrap: wrap;
                padding: 4px;
                justify-content: space-between;
            }

            .externalPagesTabButton {
                background-color: transparent;

                color: #202020;
               flex-grow: 1;
                border-radius: 68px;

             
            }

            .Active {
                    background: #3758F9;
                    color: #FFFFFF;
                    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.08);
                }
`

// export const SettingItems = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     gap:8px;
//     p{
//         font-weight: 500;
//         font-size: 12px;
//         line-height: 18px;
//         color: #202020;
//         font-family:"Poppins", sans-serif;
//     }
//     .select_dropdown{
//         width:152.23px;
//     }

//     button{
//         width:100%;
//     }
// `