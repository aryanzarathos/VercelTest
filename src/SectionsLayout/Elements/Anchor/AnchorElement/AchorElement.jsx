import React from 'react'
import { Anchor, Button } from "./AnchorTextStyled"
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl'
import useTemplateId from '@/CustomHooks/useTemplateId';
// import Link from 'next/link';

const AnchorElement = ({ style, text, link, target, children, ...props }) => {
  const templateId = useTemplateId();
  const LinkTo = () => {
    if (target === "_blank") {
      return link ? link.includes("https://") ? link : `https://${link}` : ""
    } else {
      if (AppLinkUrl.isEditor()) {
        return `/editor/${templateId}${link}`
      } else if (AppLinkUrl.isPreview()) {
        return `/preview/${templateId}${link}`
      } else {
        return link ? link : ""
      }
    }

  }
  return (
    (LinkTo() !== "") ?
      <Anchor item={style} href={`${LinkTo()}`} target={target === "_blank" ? "_blank" : "_self"} {...props}>
        {
          text ? text : children
        }
      </Anchor > :
      <Button item={style} {...props}>
        {
          text ? text : children
        }
      </Button>
  )
}

export default AnchorElement