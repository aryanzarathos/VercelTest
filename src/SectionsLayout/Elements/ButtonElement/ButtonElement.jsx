import React from "react";
import { ButtonElement, ButtonWrapper } from "./ButtonStyle";
import dynamic from "next/dynamic";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";
import StaticButtonEditor from "@/CommonComponents/StaticButtonEditor";
import useAppNavigate from "@/CustomHooks/useAppNavigate";
const ButtonEditor = dynamic(() => import("../../../CommonComponents/ButtonEditor"), { ssr: false });

const Button = ({ style, text, onClick, disabled, index, children, customButton, sliderKey, showBoth = false, sectionType = "custom",className, ...data }) => {
  const navigate = useAppNavigate()
  const handleClick = () => {
    let action = data.action
    switch (action) {
      case "Open Page":
        window.open(data.pathname)
        navigate(`/${data.pathname}`)
        break;
      case "Open web address":
        window.open(data.webUrl ? data.webUrl.includes("https://")?data.webUrl:`https://${data.webUrl}`:"", "_blank");
        break;
      case "Scroll to a block":
        const element = document.getElementById(data.scrollTo);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "Click to call":
        window.open(`tel:${data?.telNumber}`);
        break;
      case "Send an email":
        window.open(`mailto:${data.email}`);
        break;
      case "Download a file":
        window.open(data.file);
        break;
    }
  };
  return (
    // <button>{text}</button>


    <React.Fragment  >
      {/* <ButtonWrapper item={style}> */}
      {
        customButton ? (
          <React.Fragment>
            {
              AppLinkUrl.isEditor() ?
                sectionType === "static" ?
                  <StaticButtonEditor index={index} sliderKey={sliderKey} >
                    <ButtonWrapper item={style}>
                      <ButtonElement disabled={disabled} item={style}>

                        {
                          text ? text : children
                        }

                        {/* show text and children at once */}
                        {
                          showBoth ? children : ""
                        }
                      </ButtonElement>
                    </ButtonWrapper>
                  </StaticButtonEditor>
                  : <ButtonEditor index={index} >
                    <ButtonWrapper item={style}>
                      <ButtonElement disabled={disabled} item={style}>

                        {
                          text ? text : children
                        }
                        {/* show text and children at once */}
                        {
                          showBoth ? children : ""
                        }
                      </ButtonElement>
                    </ButtonWrapper>
                  </ButtonEditor>
                :
                <ButtonWrapper item={style}>
                  <ButtonElement  disabled={disabled} item={style} onClick={() => handleClick()}>

                    {
                      text ? text : children
                    }
                    {/* show text and children at once */}
                    {
                      showBoth ? children : ""
                    }
                  </ButtonElement>
                </ButtonWrapper>
            }
          </React.Fragment>
        ) :
          <ButtonWrapper item={style}>
            <ButtonElement disabled={disabled} item={style} onClick={onClick} className={className}>

              {
                text ? text : children
              }
              {/* show text and children at once */}
              {
                showBoth ? children : ""
              }
            </ButtonElement>
          </ButtonWrapper>
      }
      {/* </ButtonWrapper> */}
    </React.Fragment >

  );

};
export default Button;
