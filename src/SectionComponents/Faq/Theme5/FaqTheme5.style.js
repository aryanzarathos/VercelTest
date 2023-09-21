import styled from 'styled-components';
export const FaqsSection = styled.div`
padding: ${({ item }) => item.desktop.padding?.paddingTop};
background: ${({ item }) => item?.desktop?.background};
`;
export const FaqList = styled.ul`
padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
`;
export const FaqListItem = styled.li`
border: 0px;
border-bottom:${({ item }) => item?.desktop?.borderWidth};
border-style:${({ item }) => item?.desktop?.borderStyle};
border-color: ${({ item }) => item?.desktop?.borderColor};
padding-top:${({ item }) => item?.desktop?.padding?.paddingTop};
padding-right:${({ item }) => item?.desktop?.padding?.paddingRight};
padding-bottom:${({ item }) => item?.desktop?.padding?.paddingBottom};
padding-left:${({ item }) => item?.desktop?.padding?.paddingLeft};
background: ${({ item }) => item?.desktop?.background};
position: ${({ item }) => item?.desktop?.position};

&::before{
    width: ${({ item }) => item?.desktop?.before?.width};
    height: ${({ item }) => item?.desktop?.before?.height};
    border-radius: ${({ item }) => item?.desktop?.before?.borderRadius};
    background: ${({ item }) => item?.desktop?.before?.background};
    left: ${({ item }) => item?.desktop?.before?.left};
    top: ${({ item }) => item?.desktop?.before?.top};
}

`;