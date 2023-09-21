import { styled } from "styled-components";

export const MyBookingWrapper = styled.div`
padding: ${({ item }) => item?.desktop?.padding};
overflow-x: ${({ item }) => item?.desktop?.overflowX};
width: 100%;
table{
    width: ${({ Table }) => Table?.desktop?.width};
    border-collapse:  ${({ Table }) => Table?.desktop?.borderCollapse};
    tbody{
        tr{
            border-bottom: ${({ TbodyTR }) => TbodyTR?.desktop?.borderBottom};
        }
        td{
            padding-top:  ${({ TbodyTD }) => TbodyTD?.desktop?.padding?.paddingTop};
            padding-right:  ${({ TbodyTD }) => TbodyTD?.desktop?.padding?.paddingRight};
            padding-bottom:  ${({ TbodyTD }) => TbodyTD?.desktop?.padding?.paddingBottom};
            padding-left:  ${({ TbodyTD }) => TbodyTD?.desktop?.padding?.paddingLeft};
            min-width: 140px;
            &:first-child{
                padding-left:  ${({ TbodyTD }) => TbodyTD?.desktop?.firstChild?.padding?.paddingLeft};
                min-width: 200px;
            }
            &:last-child{
                padding-right:  ${({ TbodyTD }) => TbodyTD?.desktop?.lastChild?.padding?.paddingRight};
            }
        }
    }

    thead{
        background:  ${({ Thead }) => Thead?.desktop?.background};
    tr{
        text-align:  ${({ trStyle }) => trStyle?.desktop?.textAlign};
        color: ${({ trStyle }) => trStyle?.desktop?.color};
        font-size:  ${({ trStyle }) => trStyle?.desktop?.fontSize};
        font-family: ${({ trStyle }) => trStyle?.desktop?.fontFamily};
        font-style: ${({ trStyle }) => trStyle?.desktop?.fontStyle};
        font-weight: ${({ trStyle }) => trStyle?.desktop?.fontWeight};
        line-height:  ${({ trStyle }) => trStyle?.desktop?.lineHeight};
    }
    th{
        padding-top:  ${({ thStyle }) => thStyle?.desktop?.padding?.paddingTop};
        padding-right:  ${({ thStyle }) => thStyle?.desktop?.padding?.paddingRight};
        padding-bottom:  ${({ thStyle }) => thStyle?.desktop?.padding?.paddingBottom};
        padding-left:  ${({ thStyle }) => thStyle?.desktop?.padding?.paddingLeft};
        &:first-child{
            padding-left:  ${({ thStyle }) => thStyle?.desktop?.firstChild?.padding?.paddingLeft};
        }
        &:last-child{
            padding-right:  ${({ thStyle }) => thStyle?.desktop?.lastChild?.padding?.paddingRight};
        }
    }
    }
}
`;


export const Table = styled.table`
width: ${({ item }) => item?.desktop?.width};
border-collapse:  ${({ item }) => item?.desktop?.borderCollapse};
tbody{


tr{
    border-bottom: ${({ TbodyTR }) => TbodyTR?.desktop?.borderBottom};
}
td{
    padding-top:  ${({ TbodyTD }) => TbodyTD?.desktop?.padding?.paddingTop};
    padding-right:  ${({ TbodyTD }) => TbodyTD?.desktop?.padding?.paddingRight};
    padding-bottom:  ${({ TbodyTD }) => TbodyTD?.desktop?.padding?.paddingBottom};
    padding-left:  ${({ TbodyTD }) => TbodyTD?.desktop?.padding?.paddingLeft};
    min-width: 140px;
    &:first-child{
        padding-left:  ${({ TbodyTD }) => TbodyTD?.desktop?.firstChild?.padding?.paddingLeft};
        min-width: 200px;
    }
    &:last-child{
        padding-right:  ${({ TbodyTD }) => TbodyTD?.desktop?.lastChild?.padding?.paddingRight};
    }
}
}
`
export const Thead = styled.thead`
background:  ${({ item }) => item?.desktop?.background};
    tr{
        text-align:  ${({ trStyle }) => trStyle?.desktop?.textAlign};
        color: ${({ trStyle }) => trStyle?.desktop?.color};
        font-size:  ${({ trStyle }) => trStyle?.desktop?.fontSize};
        font-family: ${({ trStyle }) => trStyle?.desktop?.fontFamily};
        font-style: ${({ trStyle }) => trStyle?.desktop?.fontStyle};
        font-weight: ${({ trStyle }) => trStyle?.desktop?.fontWeight};
        line-height:  ${({ trStyle }) => trStyle?.desktop?.lineHeight};
    }
    th{
        padding-top:  ${({ thStyle }) => thStyle?.desktop?.padding?.paddingTop};
        padding-right:  ${({ thStyle }) => thStyle?.desktop?.padding?.paddingRight};
        padding-bottom:  ${({ thStyle }) => thStyle?.desktop?.padding?.paddingBottom};
        padding-left:  ${({ thStyle }) => thStyle?.desktop?.padding?.paddingLeft};
        &:first-child{
            padding-left:  ${({ thStyle }) => thStyle?.desktop?.firstChild?.padding?.paddingLeft};
        }
        &:last-child{
            padding-right:  ${({ thStyle }) => thStyle?.desktop?.lastChild?.padding?.paddingRight};
        }
    }
`;
export const Tbody = styled.tbody`
/* tbody{


    tr{
        border-bottom: ${({ TbodyTR }) => TbodyTR?.desktop?.borderBottom};
    }
    td{
        padding-top:  ${({ TbodyTD }) => TbodyTD?.desktop?.padding?.paddingTop};
        padding-right:  ${({ TbodyTD }) => TbodyTD?.desktop?.padding?.paddingRight};
        padding-bottom:  ${({ TbodyTD }) => TbodyTD?.desktop?.padding?.paddingBottom};
        padding-left:  ${({ TbodyTD }) => TbodyTD?.desktop?.padding?.paddingLeft};
        min-width: 140px;
        &:first-child{
            padding-left:  ${({ TbodyTD }) => TbodyTD?.desktop?.firstChild?.padding?.paddingLeft};
            min-width: 200px;
        }
        &:last-child{
            padding-right:  ${({ TbodyTD }) => TbodyTD?.desktop?.lastChild?.padding?.paddingRight};
        }
    }
} */
    `;
export const Recordfound = styled.td`
    text-align: center;
    color: #a5a5a5;
`
export const Loading = styled.td`
    text-align: center;
    color: #000;
`
export const NameWrap = styled.div`
`
export const ServiceWrap = styled.div`
`
export const TimeWrap = styled.div`
        white-space: nowrap;
        .upcoming{
            color: #14A032;
        }
        .rejected{
            color: #EA0000;
        }
        .completed{
            color:var(--global-color-primary)
        }
`
export const ActionWrap = styled.div`
`
