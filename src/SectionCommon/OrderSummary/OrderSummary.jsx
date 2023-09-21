import React from 'react';
import { CartIconMain, LayoutSectionRt, OrderButton, OrderSumaryText, OrderSummaryContainer, Shipping, Subtotal, TotalAmmount, } from './OrderSummaryStyle';
import Text from '../../SectionsLayout/Elements/TextElement/Text';
import CartSvg from '../../SectionCommon/../Assets/SectionComponent/Images/Cart/cartsvg.svg'
import { useSelector } from 'react-redux';
import usePriceDifference from '@/CustomHooks/usePriceDifference';
import ButtonElement from '../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import ContinueButton from './ContinueButton';
import Modals from '@/CommonComponents/Modal';
import ModalBody from '@/CommonComponents/Modal/ModalBody';
import CuponPage from './CuponPage'
import { useLocation } from 'react-router-dom';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';

const OrderSummary = ({ submitCart, shippingValid, deliveryFees, handleUsaEpay, paymentMode, codStatus, page, disabled, addressPage, partialCod, getPartialChargesSuccess, getPartialChargesData, handlePartialCod, orderSummaryStyle }) => {
  const { customerCartData, customerCartSuccess, business } = useSelector((state) => {
    return {
      business: state.websiteTemplate.getTemplate.data?.businessData,
      customerCartData: state.cartOrder.customerCart?.data,
      customerCartSuccess: state.cartOrder.customerCart.success,
    };

  })


  const [, , , getPrice] = usePriceDifference();
  console.log(paymentMode, "paymentMode")
  return (
    <>
      <LayoutSectionRt item={orderSummaryStyle?.layoutSectionRt?.style} >

        {window.location.pathname.includes("/cart") ?
          <CuponPage customerCartSuccess={customerCartSuccess} customerCartData={customerCartData} CuponPage={orderSummaryStyle?.CuponPage} />
          : ""
        }
        <OrderSummaryContainer item={orderSummaryStyle?.orderSummaryContainer.style} aria-disabled={shippingValid ? false : true}>
          <OrderSumaryText item={orderSummaryStyle?.orderSumaryText.style}>
            <Text tagType={orderSummaryStyle?.orderText.tagType} text={orderSummaryStyle?.orderText.text} style={orderSummaryStyle?.orderText.style} />
            {/* <h2>Order Summary</h2> */}
          </OrderSumaryText>
          <Subtotal item={orderSummaryStyle?.subtotal.style}>
            <Text tagType={orderSummaryStyle?.subTotalHeading.tagType} text={orderSummaryStyle?.subTotalHeading.text} style={orderSummaryStyle?.subTotalHeading.style} />
            {/* <h2>Subtotal :</h2> */}
            <Text tagType={orderSummaryStyle?.subTotalPara.tagType} text={customerCartSuccess && customerCartData?.afterdiscount ? getPrice(customerCartData?.afterdiscount) : 0} style={orderSummaryStyle?.subTotalPara.style} />
            {/* <p>Rs. 980 .00</p> */}
          </Subtotal>
          <Subtotal item={orderSummaryStyle?.subtotal.style}>
            <Text tagType={orderSummaryStyle?.subTotalHeading.tagType} text={"Tax :"} style={orderSummaryStyle?.subTotalHeading.style} />
            {/* <h2>Subtotal :</h2> */}
            <Text tagType={orderSummaryStyle?.subTotalPara.tagType} text={getPrice(customerCartData?.taxamount)} style={orderSummaryStyle?.subTotalPara.style} />
            {/* <p>Rs. 980 .00</p> */}
          </Subtotal>
          <Shipping item={orderSummaryStyle?.shipping.style}>
            <Text tagType={orderSummaryStyle?.shippingHeading.tagType} text={orderSummaryStyle?.shippingHeading.text + " :"} style={orderSummaryStyle?.shippingHeading.style} />
            {/* <h2>Shipping :</h2> */}
            <Text tagType={orderSummaryStyle?.shippingPara.tagType} text={
              shippingValid ?
                deliveryFees === 0 ? getPrice(0) : getPrice(deliveryFees ? deliveryFees : 0) : getPrice(0)
            } style={orderSummaryStyle?.shippingPara.style} />
            {/* <p>Rs. 0</p> */}
          </Shipping>
          {customerCartSuccess && customerCartData && customerCartData?.couponDiscount ?
            <>
              <Shipping item={orderSummaryStyle.shipping.style}>
                <Text tagType={orderSummaryStyle.shippingHeading.tagType} text={"Discount :"} style={orderSummaryStyle.shippingHeading.style} />
                {/* <h2>Shipping :</h2> */}
                <Text tagType={orderSummaryStyle.shippingPara.tagType} text={`- ${getPrice(customerCartData?.couponDiscount)}`} style={orderSummaryStyle.shippingPara.style} />
                {/* <p>Rs. 0</p> */}
              </Shipping>
            </>
            : ""
          }
          {partialCod ?
            <React.Fragment>
              <Shipping>
                <Shipping item={orderSummaryStyle?.shipping.style}>
                  <Text tagType={orderSummaryStyle?.shippingHeading.tagType} text={"Advance Payment :"} style={orderSummaryStyle?.shippingHeading.style} />
                  {/* <h2>Shipping :</h2> */}
                  <Text tagType={orderSummaryStyle?.shippingPara.tagType} text={getPartialChargesSuccess && getPartialChargesData && getPartialChargesData?.refundable ? "Refundable" : "Non-refundable"} style={orderSummaryStyle?.shippingPara.style} />
                  <Text tagType={orderSummaryStyle?.shippingPara.tagType} text={getPartialChargesSuccess && getPartialChargesData && getPartialChargesData?.partial_amount ?
                    ` ${getPrice(getPartialChargesData?.partial_amount)} ` : ""} style={orderSummaryStyle?.shippingPara.style} />
                  {/* <p>Rs. 0</p> */}
                </Shipping>
              </Shipping>
              <Shipping item={orderSummaryStyle?.shipping.style}>
                <Text tagType={orderSummaryStyle?.shippingHeading.tagType} text={"Pay at Delivery :"} style={orderSummaryStyle?.shippingHeading.style} />
                <Text tagType={orderSummaryStyle?.shippingHeading.tagType} text={getPrice((customerCartData?.TotalPrice + (deliveryFees ? deliveryFees : 0)) - getPartialChargesData?.partial_amount)} style={orderSummaryStyle?.shippingHeading.style} />
              </Shipping>

            </React.Fragment>
            : ""
          }
          <TotalAmmount item={orderSummaryStyle?.totalAmmount.style}>
            <Text tagType={orderSummaryStyle?.totalHeading.tagType} text={orderSummaryStyle?.totalHeading.text} style={orderSummaryStyle?.totalHeading.style} />
            {/* <h2>Total :</h2> */}
            <Text tagType={orderSummaryStyle?.totalPara.tagType} text={customerCartSuccess && customerCartData?.TotalPrice ? getPrice(customerCartData?.TotalPrice + (deliveryFees ? deliveryFees : 0)) : 0} style={orderSummaryStyle?.totalPara.style} />
            {/* <p>Rs. 980 .00</p> */}
          </TotalAmmount>
          <OrderButton item={orderSummaryStyle?.OrderButton?.style}>
            <ContinueButton
              page={page}
              disabled={disabled}
              shippingValid={shippingValid}
              disabledButton={
                <ButtonElement style={orderSummaryStyle?.button.style}>
                  <CartIconMain>
                    <CartSvg fill={orderSummaryStyle?.cartSvg.style.desktop.fill} height={orderSummaryStyle?.cartSvg.style.desktop.height} width={orderSummaryStyle?.cartSvg.style.desktop.width} />
                  </CartIconMain>
                  Continue
                </ButtonElement>
              }
              continueButton={
                partialCod ?
                  <ButtonElement style={orderSummaryStyle?.button.style} onClick={handlePartialCod}>
                    Continue to Pay
                    {getPartialChargesSuccess && getPartialChargesData && getPartialChargesData?.partial_amount ?
                      ` ₹${getPartialChargesData?.partial_amount} ` : ""}
                  </ButtonElement>
                  :
                  <ButtonElement style={orderSummaryStyle?.button.style} onClick={paymentMode == "UsaEpay" ? () => handleUsaEpay() : paymentMode == "Mojo" ? () => submitCart({ gateway: "Mojo", redirect_url: ` http://${AppLinkUrl.getHost()}/mojo-order-success` }) : () => submitCart({ gateway: "razorpay" })}>
                    <CartIconMain>
                      <CartSvg fill={orderSummaryStyle?.cartSvg.style.desktop.fill} height={orderSummaryStyle?.cartSvg.style.desktop.height} width={orderSummaryStyle?.cartSvg.style.desktop.width} />
                    </CartIconMain>
                    Continue
                  </ButtonElement>
              }
              getbusinessInfoData={business}
              codStatus={codStatus}
              addressPage={addressPage}
              partialCod={partialCod}
            />
            {/* <Button style={orderSummaryStyle?.button.style}>
            <CartIconMain item={orderSummary.cartIconMain.style}>
              <CartSvg fill={orderSummary.cartSvg.style.desktop.fill} height={orderSummary.cartSvg.style.desktop.height} width={orderSummary.cartSvg.style.desktop.width} />
            </CartIconMain>
            Continue
          </Button> */}
          </OrderButton>
        </OrderSummaryContainer>
      </LayoutSectionRt>
    </>
  )
}

export default OrderSummary