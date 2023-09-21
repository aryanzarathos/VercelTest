import { styled } from "styled-components";


export const SettingItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:8px;
    p{
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: #202020;
        font-family:"Poppins", sans-serif;
    }
    .select_dropdown{
        width:152.23px;
    }

    button{
        width:100%;
    }
`
export const SettingItemWrap = styled.li`
    display:flex;
    flex-direction: column;
    gap: 12px;
    
    &:not(:last-child){
        padding-bottom: 12px;
        border-bottom: 1px solid #EAEAEA;
    }
`