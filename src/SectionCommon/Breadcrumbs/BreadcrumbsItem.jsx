import Link from 'next/link'
import React from 'react'

const BreadcrumbsItem = ({ to, title }) => {
  return (
    <React.Fragment>
      <li><Link href={to}>{title}</Link></li>
    </React.Fragment>
  )
}

export default BreadcrumbsItem