// import { useState } from "react";
import AppLinkUrl from "../CommonComponents/AppLink/AppLinkUrl";
import Auth from "../Classes/Auth";
import { postCartForGuest } from "../store/actions/guestCart";
import { Postcart } from "../store/actions/cartOrder/cartOrder";
// import useAppNavigate from "../CustomHooks/useAppNavigate";
import { useDispatch, useSelector } from "react-redux";
import useAppNavigate from "@/CustomHooks/useAppNavigate";
import useWishList from "./useWishList";
import { v4 as uuidv4 } from 'uuid';
const useAddToCart = () => {
    // const navigate = useAppNavigate();
    // const unique_id = randomUUID();
    // const small_id = unique_id.slice(0, 15);
    const randomUUID = uuidv4();
    const [itemList, handleMoveButton, handleRemoveButton, wishlistPopupRef, prodDetails, varDetails,
        handleOnCloseWishlistPopup, variationValueSeletced, VariationChange, showProductDetails, changeQtyHandler, quantity, AddToCartHandler, handleChildParent, active, setActive] = useWishList();

    const history = useAppNavigate();
    const small_id = randomUUID;
    const dispatch = useDispatch();
    const { user, subdomainuser } = useSelector((state) => {
        return {
            user: state.user,
            subdomainuser: state.subdomainuser,
        }
    });

    const addToCartHandler = (value, item, quantityValue, fromWhere) => {


        // //// console.log(value, item, quantityValue,"valuitemquantityValue")
        if (value === "GuestLogin") {
            let guestUuidData = localStorage.getItem("Uuid_For_Guest_Login");
            if (guestUuidData === null || guestUuidData === "") {
                localStorage.setItem("Uuid_For_Guest_Login", small_id);
                if (AppLinkUrl.privateDomain()) {
                    let body = {
                        guestUserId: small_id,
                        productId: item._id,
                        quantity: quantityValue,
                        business: item.businessShopId
                    }
                    dispatch(postCartForGuest(body, "dynamic"));
                } else {
                    let body = {
                        guestUserId: small_id,
                        productId: item._id,
                        quantity: quantityValue,
                        business: item.businessShopId
                    }
                    dispatch(postCartForGuest(body, "dynamic"));
                }
            } else {
                if (AppLinkUrl.privateDomain()) {
                    let guestUuidData = localStorage.getItem("Uuid_For_Guest_Login");
                    let body = {
                        guestUserId: guestUuidData,
                        productId: item._id,
                        quantity: quantityValue,
                        business: item.businessShopId
                    }
                    dispatch(postCartForGuest(body, "dynamic"));
                } else {
                    let body = {
                        guestUserId: guestUuidData,
                        productId: item._id,
                        quantity: quantityValue,
                        business: item.businessShopId
                    }
                    dispatch(postCartForGuest(body, "dynamic"));
                }
            }
        }
        else {
            if (AppLinkUrl.privateDomain() && Auth.isLogin()) {
                let body = {
                    "productId": [
                        {
                            "_id": item._id,
                            "quantity": quantityValue
                        }
                    ],
                    "userId": user._id,
                    "business": user.user_business
                }
                dispatch(Postcart(body));
                handleRemoveButton(item._id);
                fromWhere !== "home" && history('/cart');
            } else if (AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) {
                let body = {
                    "productId": [
                        {
                            "_id": item._id,
                            "quantity": quantityValue
                        }
                    ],
                    "userId": subdomainuser._id,
                    "business": subdomainuser.user_business
                }
                dispatch(Postcart(body));
                handleRemoveButton(item._id);
                fromWhere !== "home" && history('/cart');
            } else {
                history('/login-signup', "reload");
            }

        }
    }

    return [addToCartHandler]
}

export default useAddToCart