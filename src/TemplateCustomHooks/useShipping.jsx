// import { find } from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Request from "../Classes/Request";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";

const useShipping = (isApiHit) => {
  const { businessData } = useSelector((state) => state.websiteTemplate.getTemplate.data)
  const [shippingRate, setShippingRate] = useState(0)
  const { shippingDetailsSuccess, user, shippingDetails, subdomainuser, customerCartData,
    customerCartSuccess } = useSelector((state) => {
      return {
        shippingDetailsSuccess: state.cartOrder.shippingDetails.success,
        shippingDetails: state.cartOrder.shippingDetails.data,
        subdomainuser: state.subdomainuser,
        user: state.user,
        customerCartData: state.cartOrder.customerCart.data,
        customerCartSuccess: state.cartOrder.customerCart.success,
      }
    })

  const ShippingTypeRequest = new Request();
  const [currentActive, setcurrentActive] = useState(1);

  // const shippingRate=(fee)=>{
  //   return fee
  // }

  const handleCurrentActive = async (item, apiHit) => {
    setcurrentActive(item._id);
    ////// console.log("hihhihihihihi",apiHit,item,"joi")
    setShippingRate((item.rate) + (shippingDetails.deliveryCharges ? shippingDetails.deliveryCharges : 0))
    if (apiHit) {
      await ShippingTypeRequest.post(ShippingTypeRequest.url("/productService/updateshippingpricecart", "ecommerce"),
        {
          user: AppLinkUrl.privateDomain() ? user._id : subdomainuser._id,
          business: businessData._id,
          price: parseInt(parseInt(item.rate) + parseInt(shippingDetails.deliveryCharges ? shippingDetails.deliveryCharges : 0)),
        },
        (success) => {
        },
        (error) => {

        }
      );
    }
  }
  useEffect(() => {
    if (shippingDetailsSuccess && customerCartSuccess) {
      let FirstValue = shippingDetails && shippingDetails.available_shippings && shippingDetails?.available_shippings.length > 0 ? shippingDetails?.available_shippings.find((item) => item.rate === (customerCartData.shippingPrice - (shippingDetails.deliveryCharges ? shippingDetails.deliveryCharges : 0))) : ""
      if (FirstValue) {
        setShippingRate((FirstValue.rate) + (shippingDetails.deliveryCharges ? shippingDetails.deliveryCharges : 0))
        setcurrentActive(FirstValue._id)
        if (isApiHit) {
          handleCurrentActive(FirstValue, true)
        }
      } else {
        if (shippingDetails.available_shippings && shippingDetails.available_shippings.length > 0) {
          setShippingRate((shippingDetails.available_shippings[0].rate) + (shippingDetails.deliveryCharges ? shippingDetails.deliveryCharges : 0))
          setcurrentActive(shippingDetails.available_shippings[0]._id)
          if (isApiHit) {
            handleCurrentActive(shippingDetails.available_shippings[0], true)
          }

        }
      }

      // shippingRate(shippingDetails.deliveryCharges ? shippingDetails.deliveryCharges : 0)
    }

  }, [shippingDetails?.deliveryCharges, shippingDetailsSuccess, customerCartSuccess])
  return [shippingDetailsSuccess, shippingDetails, currentActive, handleCurrentActive, shippingRate]
}
export default useShipping