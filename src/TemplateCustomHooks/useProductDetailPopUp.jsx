import Auth from '@/Classes/Auth';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import useAppLocation from '@/CustomHooks/useLocation';
import { Postcart, cartOperations } from '@/store/actions/cartOrder/cartOrder';
import { postCartForGuest } from '@/store/actions/guestCart';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const useProductDetailPopUp = () => {
  const [showProductDetails, setShowProductDetails] = useState(null);
  const [variationValueSeletced, setVariationValueSeletced] = useState([]);
  const [quantity, setQuantityLimit] = useState(1);
  const navigate = useAppNavigate();
  const dispatch = useDispatch()
  const [pathname, getCurrentLocation] = useAppLocation();

  // const navigate = useAppNavigate();
  // const unique_id = randomUUID();
  // const small_id = unique_id.slice(0, 15);

  const randomUUID = uuidv4();
  const small_id = randomUUID
  const setQuantity = (value, maxLimit) => {
    if (value >= 1) {
      if (maxLimit) {
        if (value < maxLimit) {
          setQuantityLimit(value)
        }
      } else {
        setQuantityLimit(value)
      }
    }
  }

  const { data } = useSelector((state) => state.websiteTemplate.getTemplate)
  const { user, subdomainuser, productDetails, customerproductDetailLoading, customerCart, customerproductDetailSuccess, variationDetails, customerWishList,
    customerWishListSuccess } = useSelector((state) => {
      return {
        user: state.user,
        subdomainuser: state.subdomainuser,
        customerproductDetailLoading: state.productList.customerproductDetail.loading,
        customerproductDetailSuccess: state.productList.customerproductDetail.success,
        variationDetails: state.productList.customerproductDetail.data.variation,
        productDetails: state.productList.customerproductDetail.data.product,
        customerWishList: state.wishlist.customerWishList.data,
        customerWishListSuccess: state.wishlist.customerWishList.success,
      }
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const VariationSelect = (value) => {
    for (let i = 0; i < variationDetails.length; i++) {
      let allFound = 0
      for (let j = 0; j < variationDetails[i].variant_scheme.length; j++) {
        if (value.includes(variationDetails[i].variant_scheme[j].value)) {
          allFound = allFound + 1
        }
      }
      if (allFound === variationDetails[i].variant_scheme.length) {
        setShowProductDetails(variationDetails[i])
        break
      }
    }
  }

  useEffect(() => {
    if (!customerproductDetailLoading &&
      customerproductDetailSuccess && productDetails) {
      let AllTitle = []
      let firstValue = []
      let imgSetData = []
      for (let i = 0; i < productDetails.variant.length; i++) {
        if (productDetails.variant[i].isConnectImg === true) {
          for (let j = 0; j < productDetails.variant[i].imageSet.length; j++) {
            let data = {
              title: productDetails.variant[i].imageSet[j].variant_value,
              images: productDetails.variant[i].imageSet[j].images
            }
            imgSetData.push(data)
          }
          // setImgSetVariation(imgSetData)
        }

        AllTitle.push(productDetails.variant[i].title)
        firstValue.push(productDetails.variant[i].value[0])

      }
      setVariationValueSeletced(firstValue)
      VariationSelect(firstValue)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerproductDetailLoading, customerproductDetailSuccess, productDetails])

  useEffect(() => {
    if (!customerproductDetailLoading &&
      customerproductDetailSuccess) {
      VariationSelect(variationValueSeletced)

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productDetails, customerproductDetailLoading, customerproductDetailSuccess, variationValueSeletced])

  // eslint-disable-next-line react-hooks/exhaustive-deps

  const VariationChange = (Item, value) => {
    for (let j = 0; j < Item.value.length; j++) {
      if (variationValueSeletced.includes(Item.value[j])) {
        let index = variationValueSeletced.indexOf(Item.value[j])
        let finalData = variationValueSeletced
        finalData.splice(index, 1, value)
        setVariationValueSeletced([...finalData])
      }
    }
  }

  const checkWishListed = () => {
    if (customerWishListSuccess) {
      if (((AppLinkUrl.privateDomain() && Auth.isLogin()) || (!AppLinkUrl.privateDomain() && Auth.isSubdomainLogin())) && customerWishListSuccess && customerWishList.length > 0) {
        let a = customerWishList.some(function (element) {
          return element.slug === getCurrentLocation()
        });
        return a
      }
    }
    else {
      return false
    }
  }

  useEffect(() => {
    checkWishListed()
  }, []);

  const PushToBag = () => {
    navigate('/cart');
  }

  const addToCartHandler = (value) => {
    if (value === "GuestLogin") {
      let guestUuidData = localStorage.getItem("Uuid_For_Guest_Login");
      if (guestUuidData === null || guestUuidData === "") {
        localStorage.setItem("Uuid_For_Guest_Login", small_id);
        if (AppLinkUrl.privateDomain()) {
          let body = {
            guestUserId: small_id, productId: showProductDetails._id, quantity: quantity, business: data?.businessData?._id
          }
          dispatch(postCartForGuest(body, "dynamic"));
        } else {
          let body = {
            guestUserId: small_id, productId: showProductDetails._id, quantity: quantity, business: data?.businessData?._id
          }
          dispatch(postCartForGuest(body, "dynamic"));
        }
        // }
      } else {
        if (AppLinkUrl.privateDomain()) {
          let guestUuidData = localStorage.getItem("Uuid_For_Guest_Login");
          let body = {
            guestUserId: guestUuidData,
            productId: showProductDetails._id,
            quantity: quantity,
            business: data?.businessData._id
          }
          dispatch(postCartForGuest(body, "dynamic"));
        } else {
          let body = {
            guestUserId: guestUuidData,
            productId: showProductDetails?._id,
            quantity: quantity,
            business: data?.businessData?._id
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
              "_id": showProductDetails._id,
              "quantity": quantity
            }
          ],
          "userId": user._id,
          "business": user.user_business
        }
        dispatch(Postcart(body));
      } else if (AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) {
        let body = {
          "productId": [
            {
              "_id": showProductDetails._id,
              "quantity": quantity
            }
          ],
          "userId": subdomainuser._id,
          "business": subdomainuser.user_business
        }

        dispatch(Postcart(body));
      } else {
        navigate('/login-signup');
      }

    }
  }

  const addToWishListHandler = (removeFromWishlist) => {
    if ((Auth.isLogin() && AppLinkUrl.privateDomain()) || (Auth.isSubdomainLogin() && AppLinkUrl.subdomain())) {
      if (showProductDetails && showProductDetails._id) {
        const userId = AppLinkUrl.privateDomain() ? user._id : subdomainuser._id;
        if ((Auth.isLogin() && AppLinkUrl.privateDomain()) || (Auth.isSubdomainLogin() && AppLinkUrl.subdomain())) {
          let body = {}
          if (removeFromWishlist) {
            body = { status: "remove from wishList", productId: showProductDetails._id, userId, quantity: 1, fromProdPage: false };
          } else {
            body = { status: "add to wishList", productId: showProductDetails._id, userId, quantity: 1, fromProdPage: false };
          }
          dispatch(cartOperations(body, "apiHit"));
          if (customerCart && customerCart.success) {
            navigate('/my-wishlist');
          }
        } else {
          navigate('/login-signup');
        }
      } else {
        setPopupMessage('Please select all the variationDetails');
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      }
    } else {
      navigate('/login-signup');
    }

  }

  return [showProductDetails, quantity, variationValueSeletced, setQuantity, VariationChange, checkWishListed, PushToBag, addToCartHandler, addToWishListHandler]
}

export default useProductDetailPopUp
