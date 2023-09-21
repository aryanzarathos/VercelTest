import React from 'react'
import CartIcon from "../../../../Assets/SectionComponent/Icons/cartMenuIcon.svg";
import styled from 'styled-components';
import useCart from '@/TemplateCustomHooks/useCart';

const CartWrap = styled.div`
    position:relative
`;
const Badge = styled.span`
    background: var(--global-color-secondary);
    width: 16px;
    height: 16px;
    position: absolute;
    font-size: 8px;
    display: flex;
    line-height: 9px;
    color: var(--global-color-penitentiary);
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    top: -7px;
    left: inherit;
    right: -5px;
`;

const CartMenuIcon = () => {
    const [customerCartSuccess, customerCartData, removefromCartHandler, transferToWishlistHandler, changeQtyHandler, cartLoading, history, orderFromCartHandler, shippingRoute, guestLoginModalState, setGuestLoginModalState] = useCart();

    return (
        <CartWrap>
            <CartIcon />
            {
                customerCartSuccess && customerCartData && customerCartData?.length > 0 && (
                    <Badge>{customerCartSuccess && customerCartData ? customerCartData?.length : ""}</Badge>
                )
            }
        </CartWrap>
    )
}

export default CartMenuIcon