import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import styled from "styled-components";
import TextEditorLayout from "@/CommonComponents/TextEditor";
// import ViewOnlyTextEditor from "@/CommonComponents/TextEditor/ViewOnlyTextEditor"
// const TextEditorLayout = dynamic(
//   () => import("@/CommonComponents/TextEditor"),
//   { ssr: false }
// );
const ViewOnlyTextEditor = dynamic(
  () => import("@/CommonComponents/TextEditor/ViewOnlyTextEditor"),
  { ssr: false }
);

const TextElement = styled.p`
  color: ${({ item }) => item?.desktop?.color};
  font-size: ${({ item }) => item?.desktop?.fontSize};
  font-weight: ${({ item }) => item?.desktop?.fontWeight};
  font-family: ${({ item }) => item?.desktop?.fontFamily};
  line-height: ${({ item }) => item?.desktop?.lineHeight};
  background: ${({ item }) => item?.desktop?.background};
  text-align: ${({ item }) => item?.desktop?.textAlign};
  padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop ? item?.desktop?.padding?.paddingTop : ""};
  padding-bottom: ${({ item }) =>
    item?.desktop?.padding?.paddingBottom
      ? item?.desktop?.padding?.paddingBottom
      : ""};
  padding-left: ${({ item }) =>
    item?.desktop?.padding?.paddingLeft
      ? item?.desktop?.padding?.paddingLeft
      : ""};
  padding-right: ${({ item }) =>
    item?.desktop?.padding?.paddingRight
      ? item?.desktop?.padding?.paddingRight
      : ""};
  margin-top: ${({ item }) => item?.desktop?.margin?.marginTop ? item?.desktop?.margin?.marginTop : 0};
  margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom ? item?.desktop?.margin?.marginBottom : 0};
  margin-left: ${({ item }) => item?.desktop?.margin?.marginLeft ? item?.desktop?.margin?.marginLeft : 0};
  margin-right: ${({ item }) => item?.desktop?.margin?.marginRight ? item?.desktop?.margin?.marginRight : 0};
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
  border: ${({ item }) => item?.desktop?.border};
  border-bottom: ${({ item }) => item?.desktop?.borderBottom};
  border-right: ${({ item }) => item?.desktop?.borderRight};
  border-radius: ${({ item }) => item?.desktop?.borderRadius};
  letter-spacing: ${({ item }) => item?.desktop?.letterSpacing};
  position: ${({ item }) => item?.desktop?.position};
  top: ${({ item }) => item?.desktop?.top};
  right: ${({ item }) => item?.desktop?.right};
  bottom: ${({ item }) => item?.desktop?.bottom};
  left: ${({ item }) => item?.desktop?.left};
  max-width: ${({ item }) => item?.desktop?.maxWidth};
  min-width: ${({ item }) => item?.desktop?.minWidth};
  -webkit-line-clamp: ${({ item }) => item?.desktop?.webkitLineClamp};
  -webkit-box-orient: ${({ item }) => item?.desktop?.webkitBoxOrient};
  line-clamp: ${({ item }) => item?.desktop?.lineClamp};
  overflow: ${({ item }) => item?.desktop?.overflow};
  display: ${({ item }) => item?.desktop?.display};
  list-style: ${({ item }) => item?.desktop?.listStyle};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  white-space: ${({ item }) => item?.desktop?.whiteSpace};
  text-decoration: ${({ item }) => item?.desktop?.textDecoration};
  font-style: ${({ item }) => item?.desktop?.fontStyle};
  z-index: ${({ item }) => item?.desktop?.zIndex};
  text-transform: ${({ item }) => item?.desktop?.textTransform};
  order: ${({ item }) => item?.desktop?.order};
  word-break: ${({ item }) => item?.desktop?.wordBreak};
  &:hover {
    color: ${({ item }) => item?.desktop?.hover?.color};
  }

  @media (max-width: 1024px) {
    color: ${({ item }) => item?.tablet?.color};
    font-size: ${({ item }) => item?.tablet?.fontSize};
    font-weight: ${({ item }) => item?.tablet?.fontWeight};
    line-height: ${({ item }) => item?.tablet?.lineHeight};
    background: ${({ item }) => item?.tablet?.background};
    text-align: ${({ item }) => item?.tablet?.textAlign};
    width: ${({ item }) => item?.tablet?.width};
    position: ${({ item }) => item?.tablet?.position};
    top: ${({ item }) => item?.tablet?.top};
    right: ${({ item }) => item?.tablet?.right};
    bottom: ${({ item }) => item?.tablet?.bottom};
    left: ${({ item }) => item?.tablet?.left};
    max-width: ${({ item }) => item?.tablet?.maxWidth};
    order: ${({ item }) => item?.tablet?.order};
    -webkit-line-clamp: ${({ item }) => item?.tablet?.webkitLineClamp};
    -webkit-box-orient: ${({ item }) => item?.tablet?.webkitBoxOrient};
    overflow: ${({ item }) => item?.tablet?.overflow};
    display: ${({ item }) => item?.tablet?.display};
  }

  @media (max-width: 767px) {
    color: ${({ item }) => item?.mobile?.color};
    font-size: ${({ item }) => item?.mobile?.fontSize};
    font-weight: ${({ item }) => item?.mobile?.fontWeight};
    line-height: ${({ item }) => item?.mobile?.lineHeight};
    background: ${({ item }) => item?.mobile?.backgroundColor};
    text-align: ${({ item }) => item?.mobile?.textAlign};
    width: ${({ item }) => item?.mobile?.width};
    height: ${({ item }) => item?.mobile?.height};
    position: ${({ item }) => item?.mobile?.position};
    top: ${({ item }) => item?.mobile?.top};
    right: ${({ item }) => item?.mobile?.right};
    bottom: ${({ item }) => item?.mobile?.bottom};
    left: ${({ item }) => item?.mobile?.left};
    max-width: ${({ item }) => item?.mobile?.maxWidth};
    order: ${({ item }) => item?.mobile?.order};
    display: ${({ item }) => item?.mobile?.display};
    border-right: ${({ item }) => item?.mobile?.borderRight};
  }


`;

const Text = ({
  tagType = "p",
  style,
  text,
  dangerouslySetInnerHTML,
  index,
  contenteditable,
  CustomText,
  ref,
  DataCheck,
  slider,
  ContextChange,
  children,
  sliderKey,
  sliderId,
  ...props
}) => {

  // console.log(style, "style")
  return (
    <React.Fragment>
      {CustomText ? (
        // false ?
        <>
          {
            AppLinkUrl.isEditor() ? (
              // true ? (
              DataCheck?.data ? (

                <TextEditorLayout
                  index={index}
                  sliderKey={sliderKey}
                  data={DataCheck?.data}
                  slider={slider}
                  style={style}
                  sliderId={sliderId}
                  ContextChange={ContextChange}
                ></TextEditorLayout>
              ) : (
                <TextElement
                  ref={ref}
                  contentEditable={contenteditable}
                  item={style}
                  dangerouslySetInnerHTML={dangerouslySetInnerHTML}
                  {...props}
                  as={tagType}
                >
                  {text ? text : children}
                </TextElement>
              )
            ) : DataCheck?.data ? (
              <ViewOnlyTextEditor data={DataCheck?.data} style={style} />
            ) : (
              <TextElement
                ref={ref}
                contentEditable={contenteditable}
                item={style}
                dangerouslySetInnerHTML={dangerouslySetInnerHTML}
                {...props}
                as={tagType}
              >
                {text ? text : children}
              </TextElement>
            )}
        </>
      ) : (
        <TextElement
          ref={ref}
          contentEditable={contenteditable}
          item={style}
          dangerouslySetInnerHTML={dangerouslySetInnerHTML}
          {...props}
          as={tagType ? tagType : "p"}
        >
          {text ? text : children}
        </TextElement>
      )}
    </React.Fragment>
  );
};
export default Text;
