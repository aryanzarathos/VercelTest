import { useEffect, useLayoutEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import useAppNavigate from "@/CustomHooks/useAppNavigate";
import { clientGuestgetAllSubordersClient } from "@/store/actions/guestCart";
import { useRouter } from "next/router";
import { orderListReject } from "@/store/actions/cartOrder/cartOrder";


const useGuestOrderDetails = ()=>{
    const router = useRouter();
  const { index } = router.query;
  const dispatch = useDispatch();
  const history = useAppNavigate();

  const [openDeletePop, setOpenDeletePop] = useState(-1);
  const [openAllCancelPop, setOpenAllCancelPop] = useState(-1);
  const { user, subdomainuser, customerOrderListData, getGuestOrderBookingListSuccess, getGuestOrderBookingListLoading, getGuestOrderBookingListData, businessInfoData, businessInfoSuccess } = useSelector((state) => {
    return {
      user: state.user,
      subdomainuser: state.subdomainuser,
      customerOrderListData: state.orderCartList.customerOrderList.data,
      getGuestOrderBookingListData: state.guestCart.getGuestOrderBookingList.data,
      getGuestOrderBookingListSuccess: state.guestCart.getGuestOrderBookingList.success,
      getGuestOrderBookingListLoading: state.guestCart.getGuestOrderBookingList.loading,
      businessInfoSuccess: state.websiteTemplate.getTemplate.success,
      businessInfoData:state.websiteTemplate.getTemplate.data.business,
      currency: state.currencyList,
    }
  });

  useEffect(() => {
    // let guestuserId = localStorage.getItem("Guest_new_userId");
    (dispatch(clientGuestgetAllSubordersClient(index[0],businessInfoData)))
  }, [dispatch, index[0],businessInfoData]);


  const [contactPage, setContactPage] = useState(false)
  const [modalStateClose, setModalStateClose] = useState(true);

  const handle = () => {

    setContactPage(true)
    // history("/ecom-contactus")

    setModalStateClose(true);

  }
  // const dispatch = useDispatch()
  const closeModalState = () => {
    setModalStateClose(false);
    // setPersonalDetailShow(true)
    setContactPage(false)


  };



  const [productDetail, setProductDetails] = useState({})
  const [ShippingDetail, setShippingDetail] = useState({})

  // console.log(getGuestOrderBookingListData,"getGuestOrderBookingListData")

  useLayoutEffect(() => {
    if (getGuestOrderBookingListSuccess && getGuestOrderBookingListData) {
      setShippingDetail(getGuestOrderBookingListSuccess && getGuestOrderBookingListData && getGuestOrderBookingListData)
      setProductDetails(getGuestOrderBookingListSuccess && getGuestOrderBookingListData && getGuestOrderBookingListData?.suborders[0])
    }
  }, [getGuestOrderBookingListData, getGuestOrderBookingListSuccess])

// console.log(businessInfoData,"productDetailproductDetailproductDetail")

 
  const handleCancelProduct = async(id) => {
    const guestuserId = localStorage.getItem("Uuid_For_Guest_Login");
    dispatch(orderListReject(id, { Status: "Failed", isFailedByUser: true, order_failure_date: new Date() },ShippingDetail.suborders[0]._id, businessInfoData, guestuserId));
  }

  const orderInfoHandler = (item) => {
    setProductDetails(item)
  }

  return [productDetail,getGuestOrderBookingListLoading,getGuestOrderBookingListSuccess,getGuestOrderBookingListData,ShippingDetail,handleCancelProduct,orderInfoHandler]
}
export default useGuestOrderDetails