import { styled } from "styled-components";

export const AddressItem = styled.div`  
  display: ${({ item }) => item?.desktop?.display};
  gap: ${({ item }) => item?.desktop?.gap};
`;
export const PopMainWrapper = styled.div` 
max-height: 43vh;
overflow-y: auto;
`
export const Label = styled.label` 
 margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom};
 display: inline-block;
 width: 100%;
 &:last-child{
    margin-bottom: 2px;
 }
`
export const AddressItemPop = styled.div`  
  display: ${({ item }) => item?.desktop?.display};
  gap: ${({ item }) => item?.desktop?.gap};
  padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
  padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
  padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
  padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
 
  &.active{
      border-style: ${({ item }) => item?.desktop?.active?.borderStyle};
      border-width: ${({ item }) => item?.desktop?.active?.borderWidth};
      border-color: ${({ item }) => item?.desktop?.active?.borderColor};
      border-radius: ${({ item }) => item?.desktop?.active?.borderRadius};
  }
`;
export const InputRadio = styled.input`
    width: ${({ item }) => item?.desktop?.width};
    height: ${({ item }) => item?.desktop?.height};
    accent-color: ${({ item }) => item?.desktop?.accentColor};
    &:hover{
        cursor: ${({ item }) => item?.desktop?.hover?.cursor};
    }
`;
export const Detail = styled.div`
    display: ${({ item }) => item?.desktop?.display};
    flex-direction: ${({ item }) => item?.desktop?.flexDirection};
    `;
export const MobileWrap = styled.div`
    display: flex;
    align-items: center;
    gap:5px;
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
`
export const MobileWrapPop = styled.div`
    display: flex;
    align-items: center;
    gap:5px;
    margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
`
export const Name = styled.p``


export const AddAddressBtn = styled.button`
`;
export const EditRmvBtn = styled.div`
    display: flex;
    align-items: center;
    gap:20px;
    margin-top: 12px;
`;
export const AddAddressBtnWrap = styled.div`
    display: flex;
    align-items: center;
    gap:15px;
    margin-top: 24px;
    div{
        width: 100%;
    }
`;