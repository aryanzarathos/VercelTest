import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "@/Classes/Auth";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";
import { cartOperations } from "@/store/actions/cartOrder/cartOrder";
import Storage from "@/Classes/Storage";
import useAppNavigate from "@/CustomHooks/useAppNavigate";
import { getWishList } from "@/store/actions/wishlist";
const useShopPage = () => {
  const dispatch = useDispatch();

  const { customerWishList } = useSelector((state) => state.wishlist);
  const [wishListBody, setWishlistBody] = useState({})
  const [itemList, setItemList] = useState("");
  const navigate = useAppNavigate()
  const {
    user,
    subdomainuser,
  } = useSelector((state) => {
    return {
      user: state.user,
      subdomainuser: state.subdomainuser,
    };
  });

  const WishListHandle = (e, id) => {
    e.stopPropagation();
    let body = {};
    setWishlistBody({
      status: "add to wishList",
      productId: id,
      quantity: 1,
      fromProdPage: true
    })

    if (
      (AppLinkUrl.privateDomain() && Auth.isLogin()) ||
      (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())
    ) {
      const userId = AppLinkUrl.privateDomain() ? user._id : subdomainuser._id;
      body = {
        status: "add to wishList",
        productId: id,
        userId,
        quantity: 1,
        fromProdPage: true,
      };
      dispatch(cartOperations(body, "apiHit"));
    } else {
      body = {
        status: "add to wishList",
        productId: id,
        quantity: 1,
        fromProdPage: true
      };
      Storage.setJson("wishlistAdd", body);
      navigate("/login-signup")
    }
  };

  const RemoveWishListHandle = (e, id) => {
    e.stopPropagation();
    let body = {};
    const userId = AppLinkUrl.privateDomain() ? user._id : subdomainuser._id;
    body = {
      status: "remove from wishList",
      productId: id,
      userId,
      quantity: 1,
      fromProdPage: true,
    };
    dispatch(cartOperations(body, "apiHit"));
  };

  useEffect(() => {
    if (AppLinkUrl.privateDomain() && Auth.isLogin()) {
      dispatch(getWishList({ userId: user._id, status: "readWishList" }));
    } else if (AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) {
      dispatch(
        getWishList({ userId: subdomainuser._id, status: "readWishList" })
      );
    }
  }, [dispatch, subdomainuser, user]);

  useEffect(() => {
    if (customerWishList.success === true) {
      setItemList([...customerWishList.data]);
    }
  }, [customerWishList]);

  const wishListActive = (id) => {
    if (customerWishList.success === true) {
      if (
        ((AppLinkUrl.privateDomain() && Auth.isLogin()) ||
          (!AppLinkUrl.privateDomain() && Auth.isSubdomainLogin())) &&
        customerWishList.success === true &&
        itemList.length > 0
      ) {
        let a = itemList.some(function (element) {
          return element.productId === id;
        });
        return a;
      }
    } else {
      if (
        ((AppLinkUrl.privateDomain() && Auth.isLogin()) ||
          (!AppLinkUrl.privateDomain() && Auth.isSubdomainLogin())) &&
        itemList.length > 0
      ) {
        let a = itemList.some(function (element) {
          return element.productId === id;
        });
        return a;
      }
    }
  };

  return [
    wishListActive, RemoveWishListHandle, WishListHandle, wishListBody
  ];
};

export default useShopPage;
