import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import { getClientSingleOrder, orderListReject, resetCancelUpdateStatus, updateClientOrderSuborder } from '../store/actions/ecommerce/action/cartOrder';
import { convertToIndianFormat } from '../CommonFunctions/helperFunction';
import { priceCalculator } from '../CommonFunctions/PriceCalculator';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import { getClientSingleOrder, resetCancelUpdateStatus, updateClientOrderSuborder } from '@/store/actions/cartOrder/cartOrder';
import { useRouter } from 'next/router';

const useOrderDetail = () => { 
  const router = useRouter();
  const { index } = router.query;

  const [selectedOrder, setSelectedOrder] = useState("")
  const [elseSubOrder, setElseSubOrder] = useState("") 

  const { getSingleOrderData, getSingleOrderSuccess, customerOrderDetail: detail, currency, statusUpdateSuccss, business,statusUpdateLoading } = useSelector((state) => {
    return {
      getSingleOrderData: state.orderCartList.getClientSingleOrder.data,
      getSingleOrderSuccess: state.orderCartList.getClientSingleOrder.success,
      statusUpdateSuccss: state.orderCartList.updateCustomerStatus.success,
      statusUpdateLoading: state.orderCartList.updateCustomerStatus.loading,
      detail: state.orderCartList,
      currency: state.currencyList,
      business:state.websiteTemplate.getTemplate.data.businessData
    }
  });

  

  const dispatch = useDispatch();
  const history = useAppNavigate();

  useEffect(() => {
    dispatch(getClientSingleOrder(index[0],business._id));
  }, [business._id, dispatch, index[0]]);

  useEffect(() => {
    if (getSingleOrderSuccess && getSingleOrderData?.suborders?.length) {
      setSelectedOrder(getSingleOrderData.suborders.find((item)=>item._id===index[1]));
      setElseSubOrder(getSingleOrderData.suborders.filter((item)=>item._id!==index[1]));
    }
  }, [getSingleOrderData, getSingleOrderSuccess, index[1]]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    if (statusUpdateSuccss) {
      dispatch((resetCancelUpdateStatus()))
    }
  }, [dispatch, statusUpdateSuccss])
 
  // // console.log(index,"getSingleOrderSuccess && getSingleOrderData?.suborders")
 
  const getPrice = (val) => {
    if (currency) {
      if (currency.selectedCurrency && currency.selectedCurrency.data.rate) return `${currency.selectedCurrency.data.symbol ? currency.selectedCurrency.data.symbol : 'Rs'} ${convertToIndianFormat(priceCalculator(val, currency.selectedCurrency.data.commision, currency.selectedCurrency.data.rate))}`;
      else return `${currency.primaryCurrency.data.symbol ? currency.primaryCurrency.data.symbol : 'Rs'} ${convertToIndianFormat(priceCalculator(val, currency.primaryCurrency.data.commision, currency.primaryCurrency.data.rate))}`;
    }
    return val;
  }


  const handleCancelProduct = (id, subId) => {
    if(subId){
      dispatch(updateClientOrderSuborder(subId,id,"single","cancel",false))
    }else{
    dispatch(updateClientOrderSuborder("",id,"whole","cancel",false))
    }
  }
 
  return [
    getPrice, getSingleOrderData, getSingleOrderSuccess,
    selectedOrder, elseSubOrder,
    index[0],handleCancelProduct,
  ]
};

export default useOrderDetail;