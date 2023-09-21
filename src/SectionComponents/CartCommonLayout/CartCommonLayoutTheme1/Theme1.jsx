import React from 'react'
import CartSvg from '../../../Assets/SectionComponent/Images/Cart/cartsvg.svg'
import { ButtonContinue, CartIconMain, LayoutSectionRt, Line, LineDot, OrderSumaryText, OrderSummaryContainer, Row, Shipping, Subtotal, TotalAmmount } from './CartCommonLayoutTheme1.style';


const CommonLayoutTheme1 = ({ children }) => {
    return (

        <Row>
            {/* <LayoutSectionLt>
                {children}
            </LayoutSectionLt> */}
            <LayoutSectionRt>
                <OrderSummaryContainer>
                    <OrderSumaryText>
                        <h2>Order Summary</h2>
                    </OrderSumaryText>
                <Line />
                    <Subtotal>
                        <h2>Subtotal :</h2>
                        <p>Rs. 980 .00</p>
                    </Subtotal>
                <LineDot />
                    <Shipping>
                        <h2>Shipping :</h2>
                        <p>Rs. 0</p>
                    </Shipping>
                <LineDot />
                    <TotalAmmount>
                        <h2>Total :</h2>
                        <p>Rs. 980 .00</p>
                    </TotalAmmount>
                    <ButtonContinue> <CartIconMain> <CartSvg fill={'#fff'} height={24} width={24} /> </CartIconMain>Continue</ButtonContinue>
                </OrderSummaryContainer>
            </LayoutSectionRt>
        </Row>

    )
}

export default CommonLayoutTheme1;