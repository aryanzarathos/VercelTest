import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import useAppNavigate from "@/CustomHooks/useAppNavigate";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";
import { getClientAllSuborders, updateClientOrderSuborderPage } from "@/store/actions/cartOrder/cartOrder";
import { useParams } from "react-router-dom";

const useMyOrders = () => {
  const dispatch = useDispatch();
  const history = useAppNavigate();
  const OrderId = useParams();
  const [ordersCount, setOrdersCount] = useState("")
  const [currentPage, setCurrentPage] = useState(1);

  const { user, subdomainuser, suborderlength, customerOrderListSuccess, businessData, customerOrderListData } = useSelector((state) => {
    return {
      user: state.user,
      subdomainuser: state.subdomainuser,
      customerOrderListData: state.orderCartList.getAllClientOrders.data,
      customerOrderListSuccess: state.orderCartList.getAllClientOrders.success,
      suborderlength: state.orderCartList.getAllClientOrders.suborderlength,
      statusUpdateSuccss: state.orderCartList.updateCustomerStatus.success,
      businessData: state.websiteTemplate.getTemplate.data?.businessData,

    }
  });

  const orderInfoHandler = (id, prdId) => {
    history(`/orders-details/${id}/${prdId}`);
  };
  let limit = 5

  // page scroll to top

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (currentPage === 1) {
    
      if (AppLinkUrl.privateDomain()) {
        user && user._id && dispatch(getClientAllSuborders(user.user_business, user._id))
      } else {
        subdomainuser && subdomainuser._id && dispatch(getClientAllSuborders(subdomainuser.user_business, subdomainuser._id));
      }
    } else {
      if (AppLinkUrl.privateDomain()) {
        user && user._id && dispatch(getClientAllSuborders(user.user_business, user._id, limit, (currentPage - 1) * limit, true))
      } else {
        subdomainuser && subdomainuser._id && dispatch(getClientAllSuborders(subdomainuser.user_business, subdomainuser._id, limit, (currentPage - 1) * limit, true));
      }
    }


  }, [dispatch, subdomainuser, user, currentPage, limit]);

  useEffect(() => {
    if (customerOrderListSuccess && customerOrderListData && customerOrderListData.count) {
      setOrdersCount(customerOrderListData.count);
    }
  }, [customerOrderListData, customerOrderListSuccess])

  const handleCancelProduct = (id, subId) => {
    dispatch(updateClientOrderSuborderPage(subId, id, "single", "cancel", true, limit, (currentPage - 1) * limit))
  }

  return [customerOrderListData, customerOrderListSuccess, handleCancelProduct, orderInfoHandler, ordersCount, setCurrentPage, currentPage, limit, suborderlength];
}

export default useMyOrders;

