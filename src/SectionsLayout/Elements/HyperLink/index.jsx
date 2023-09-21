import React from 'react'
import { HyperLink } from './hyperLinkStyle'

const Hyperlink = ({style, text, link, target, children, ...props}) => {
  return (
    <React.Fragment>
       <HyperLink href={link} target={target} {...props} >
          {
             text ? text : children
          }
       </HyperLink>
    </React.Fragment>
  )
}

export default Hyperlink
