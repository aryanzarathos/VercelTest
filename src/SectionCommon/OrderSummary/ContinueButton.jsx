import React from "react"


const ContinueButton = ({ page, disabled, shippingValid, addressPage, disabledButton, continueButton, getbusinessInfoData, codStatus, partialCod }) => {

  return (
    <React.Fragment>
      {page === "Cart" ?
        <React.Fragment>
          {
            addressPage ?
              <React.Fragment>
                {!disabled && shippingValid ?
                  continueButton
                  :
                  disabledButton
                }
              </React.Fragment>
              : <React.Fragment>
                {!disabled ?
                  continueButton
                  :
                  disabledButton
                }</React.Fragment>
          }

        </React.Fragment>
        :
        page === "PaymentMode" && getbusinessInfoData?.razorpay_acount_id ?
          <React.Fragment>
            {!disabled && shippingValid ?
              continueButton
              :
              disabledButton
            }
          </React.Fragment>
          :
          <React.Fragment>
            {page === "PaymentMode" && codStatus && codStatus.every((i) => i?.product?.cod === true) && !disabled && shippingValid ?
              continueButton
              :
              disabledButton
            }
          </React.Fragment>
      }
    </React.Fragment>
  )
}
export default ContinueButton