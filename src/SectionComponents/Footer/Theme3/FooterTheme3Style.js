import styled from 'styled-components'

export const Footer = styled.footer`
/* background: rgba(32, 32, 32, 0.8); */
padding: ${({ item }) => item.desktop.padding} ;
`

export const FooterRow = styled.div`
   display: ${({ item }) => item.desktop.display} ;
    column-gap: ${({ item }) => item.desktop.columnGap} ;
    row-gap: ${({ item }) => item.desktop.rowGap} ;
    justify-content: ${({ item }) => item.desktop.justifyContent} ;
    flex-wrap: ${({ item }) => item.desktop.flexWrap} ;
    /* div >:nth-child(2) {
       margin-left :auto ;
    } */


`

export const FooterColumn = styled.div`
    width:${({ item }) => item.desktop.width};
    display: ${({ item }) => item.desktop.display};
    flex-direction: ${({ item }) => item.desktop.flexDirection};
    /* padding: 0 2em; */
    /* &::nth-child(1) {
       background: red;
    } */

    @media(max-width:768px) {
        width:${({ item }) => item.mobile.width};
    }

`

export const LogoContainer = styled.div`
display: ${({ item }) => item.desktop.display};
grid-template-columns: ${({ item }) => item.desktop.gridTemplateColumns};
gap: ${({ item }) => item.desktop.gap};
/* justify-items: ${({ item }) => item.desktop.justifyItems}; */
align-items: ${({ item }) => item.desktop.alignItems};
`

export const LogoWrapper = styled.div`
    max-width: ${({ item }) => item.desktop.maxWidth};
    max-height: ${({ item }) => item.desktop.maxHeight};
    min-height: ${({ item }) => item.desktop.minHeight};
    height: ${({ item }) => item.desktop.height};
    min-width: ${({ item }) => item.desktop.minWidth};
    width: ${({ itemLogo }) => itemLogo?.logo_size};
    /* border-radius: 50%; */
    position: ${({ item }) => item.desktop.position};
    overflow: ${({ item }) => item.desktop.overflow};
   
   /* img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
   } */

`
export const CompanyNameWrapper = styled.div`

/* h3 {
    width: 100%;
    text-align: left;
    color: white;
    font-size: 1.4em;
    white-space: nowrap;
} */
`

export const ComapnyDescription = styled.div`
margin-top: ${({ item }) => item.desktop.marginTop};
max-width: ${({ item }) => item.desktop.maxWidth};

/* p {
    width: 100%;
    color: white;
    font-size: 1em;
} */

`


export const SocialMediaWrapper = styled.div`
   margin-top: ${({ item }) => item.desktop.marginTop};
    display: ${({ item }) => item.desktop.display};
    justify-content: ${({ item }) => item.desktop.justifyContent};
    gap: ${({ item }) => item.desktop.gap};


/* svg {
    width: 17px;
    height: 17px;
    fill: red;
} */
`


export const FooterLinkWrapper = styled.div`
     width: ${({ item }) => item.desktop.width};
    display: ${({ item }) => item.desktop.display};
    flex-direction: ${({ item }) => item.desktop.flexDirection};
    align-items: ${({ item }) => item.desktop.alignItems};
    text-align-last: ${({ item }) => item.desktop.textAlignLast};
    /* padding: 0 2em; */
    &:nth-child(2) {
       margin-left: auto;

       @media(max-width:768px) {
        margin-left: unset;
       }
    }
    
    flex-wrap:  ${({ item }) => item.desktop.flexWrap}; 

    /* @media(max-width:1024px) {
       width: auto;
       justify-content: space-between;
       align-items: flex-start;
       flex: 1;

    } */
  @media(max-width:768px) {
    width: ${({ item }) => item.mobile.width};
    align-items: ${({ item }) => item.mobile.alignItems};
  }

`
export const ColumnLinkHeadingWrap = styled.div`
margin-bottom:  ${({ item }) => item.desktop.marginBottom};
/* h3 {
    font-size: 18px;
    font-weight: 500;
    color: white;
} */
`

export const LinkWrapper = styled.ul` 
    list-style: none;
    
  
    `


export const LinkWrapperLi = styled.li`
 /* color: #a7a7a7;
 text-decoration: none; */
 display: ${({ item }) => item.desktop.display};
 flex-direction: ${({ item }) => item.desktop.flexDirection};
 padding: ${({ item }) => item.desktop.padding};
`




