import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getWishList, wishlistToCart } from '../store/actions/wishlist';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import { cartOperations } from '@/store/actions/cartOrder/cartOrder';
import { getCustomerProductDetail, ResetCustomerProductDetail } from '@/store/actions/productList';
import useAppNavigate from '@/CustomHooks/useAppNavigate';

const useWishList = () => {

  let history = useAppNavigate();
  let dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const subdomainuser = useSelector((state) => state.subdomainuser);
  const { customerWishList } = useSelector((state) => state.wishlist);
  const [active, setActive] = useState(false)
  const [itemList, setItemList] = useState('');
  const [prodDetails, setProdDetails] = useState("");
  const [varDetails, setVarDetails] = useState([]);
  const [variationValueSeletced, setVariationValueSeletced] = useState([]);
  const [showProductDetails, setShowProductDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const wishlistPopupRef = useRef();

  const child = useRef(false);
  const { customerproductDetailLoading, customerproductDetailSuccess, variationDetails, productDetails } = useSelector((state) => {
    return {
      customerproductDetailLoading: state.productList.customerproductDetail?.loading,
      customerproductDetailSuccess: state.productList.customerproductDetail?.success,
      variationDetails: state.productList.customerproductDetail.data?.variation,
      productDetails: state.productList.customerproductDetail.data?.product,
    }
  });

  // useLayoutEffect(() => {
  //   if ((AppLinkUrl.privateDomain() && user._id) || (!AppLinkUrl.privateDomain() && subdomainuser._id)) {
  //     dispatch(getWishList({ userId: AppLinkUrl.privateDomain() ? user._id : subdomainuser._id, status: "readWishList" }));
  //   }
  //   else {
  //     history('/login-signup');
  //   }
  // }, [subdomainuser, user]);

  useEffect(() => {
    if (customerWishList.success && customerWishList.data && customerWishList.data.length) {
      setItemList([...customerWishList.data]);
    }
  }, [customerWishList]);

  const handleMoveButton = (id, slug, link) => {
    if (link === "moveToBagDesktop") {
      wishlistPopupRef.current.open();
    } else {
      wishlistPopupRef.current.open();
      setActive(true)
    }
    if (AppLinkUrl.privateDomain()) {
      dispatch(getCustomerProductDetail("domain", AppLinkUrl.getHost(), slug));
    } else {

      dispatch(getCustomerProductDetail("subdomain", AppLinkUrl.subdomain(), slug));
    }
  }

  const AddToCartHandler = () => {
    const body = {
      userId: AppLinkUrl.privateDomain() ? user._id : subdomainuser._id,
      variationId: showProductDetails._id,
      quantity: quantity,
      business: AppLinkUrl.privateDomain() ? user.user_business : subdomainuser.user_business
    }
    dispatch(wishlistToCart(body));
    history('/ecom-cart');
  }

  const handleChildParent = (selector, link, id, url) => {
    if (selector === 'child') {
      child.current = true;
      if (link === "remove") {
        handleRemoveButton(id)
      } else if (link === "outOfStock") {
        history('#');
      } else {
        handleMoveButton(id, url, link);

        console.log(selector, link, id, url,"selectorselector")
      }
    } else {
      if (!child.current) {
        history(link);
        // dispatch(storeCurrentPage(currentPage));
      }
      child.current = false;
    }
  }
  const handleOnCloseWishlistPopup = () => {
    wishlistPopupRef.current.close();
    dispatch(ResetCustomerProductDetail());
  }

  useEffect(() => {
    if (customerproductDetailSuccess && productDetails && variationDetails) {
      setProdDetails(productDetails);
      setVarDetails([...variationDetails]);
    }
  }, [customerproductDetailSuccess, productDetails, variationDetails])

  useEffect(() => {
    if (!customerproductDetailLoading &&
      customerproductDetailSuccess) {
      VariationSelect(variationValueSeletced)

    }

  }, [variationValueSeletced, customerproductDetailLoading,
    customerproductDetailSuccess])

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

  useEffect(() => {
    if (!customerproductDetailLoading &&
      customerproductDetailSuccess && productDetails) {
      let AllTitle = []
      let firstValue = []
      for (let i = 0; i < productDetails.variant.length; i++) {
        AllTitle.push(productDetails.variant[i].title)
        firstValue.push(productDetails.variant[i].value[0])
      }
      setVariationValueSeletced(firstValue)
      VariationSelect(firstValue)
    }

  }, [customerproductDetailLoading,
    customerproductDetailSuccess, productDetails])

  const changeQtyHandler = (action) => {
    if (action === 'plus') {
      setQuantity(quantity + 1);
    }
    else {
      setQuantity(quantity - 1);
    }
  }

  const handleRemoveButton = (id) => {
    const userId = AppLinkUrl.privateDomain() ? user._id : subdomainuser._id;
    let body = {}
    body = { status: "remove from wishList", productId: id, userId, quantity: 1 };

    dispatch(cartOperations(body));
    let array = itemList
    array = array.filter((item) => item._id !== id)
    setItemList([...array])
  }

  return [itemList, handleMoveButton, handleRemoveButton, wishlistPopupRef, prodDetails, varDetails,
    handleOnCloseWishlistPopup, variationValueSeletced, VariationChange, showProductDetails, changeQtyHandler, quantity, AddToCartHandler, handleChildParent, active, setActive]
}

export default useWishList
