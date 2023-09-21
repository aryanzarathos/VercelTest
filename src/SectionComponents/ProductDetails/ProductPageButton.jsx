import React from "react";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";
import Auth from "@/Classes/Auth";


const ProductPageButton = ({ loadingButton, viewBagButton, outOfStockButton, addToCartButton, guestGoToBagButton, guestOutofStockButton, guestAddtoCartButton, postLoading, customerCartSuccess, customerCartData, showProductDetails, postGuestAddCartLoading, guestCustomerCartSuccess, guestCustomerCartData, ...props }) => {
  return (
    <React.Fragment>
      {(Auth.isLogin() && AppLinkUrl.privateDomain()) || (Auth.isSubdomainLogin() && AppLinkUrl.subdomain()) ?
        (
          postLoading ?
            loadingButton :
            <>{

              customerCartSuccess && customerCartData &&customerCartData.length&& customerCartData.find((item) => item.product._id === showProductDetails._id) ? (

                viewBagButton

              ) :
                (showProductDetails && !showProductDetails?.sellOutofStock && (!showProductDetails.stock || showProductDetails.stock <= 0)) ||
                  (showProductDetails && !showProductDetails?.sellOutofStock && showProductDetails?.outOfStock)
                  ?
                  // <button className={`buttonTrue btnTrue red`}>OUT OF STOCK</button> 
                  outOfStockButton
                  :
                  (
                    addToCartButton
                    // <button className={`buttonTrue btnTrue-primary  `} onClick={() => { addToCartHandler() }}><i className={`icon icon-bag i-s`}></i> ADD TO CART</button>
                  )
            }
            </>
        )
        :
        (postGuestAddCartLoading ?
          // <button className={`buttonTrue btnTrue-primary  `} > Loading...</button>
          loadingButton
          :
          <>{

            guestCustomerCartSuccess && guestCustomerCartData?.find((item) => item.product._id === showProductDetails._id) ? (

              guestGoToBagButton
            ) :
              (showProductDetails && (!showProductDetails.stock || showProductDetails.stock <= 0)) ||
                (showProductDetails && showProductDetails?.outOfStock)
                ?
                // (<button className={`buttonTrue btnTrue red  `}>OUT OF STOCK</button>
                guestOutofStockButton
                :
                (
                  guestAddtoCartButton
                  // <button className={`buttonTrue btnTrue-primary  `} onClick={() => { addToCartHandler("GuestLogin") }}><i className={`icon icon-bag i-s`}></i> ADD TO CART </button>
                )
          }
          </>
        )
      }
    </React.Fragment>
  )
}
export default ProductPageButton