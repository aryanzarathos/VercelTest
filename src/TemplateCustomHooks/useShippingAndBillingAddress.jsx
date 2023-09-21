import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Auth from '../Classes/Auth';
import Storage from '../Classes/Storage';
// import AppLinkUrl from '../Common/AppLink/AppLinkUrl';
import { changeSelectedAddress, deleteBillingAddressDetails, deleteShippingAddressDetails, getCustomerAddressList, getShippingDetails } from '../store/actions/cartOrder/cartOrder';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';

const useShippingAndBillingAddress = () => {

  const dispatch = useDispatch();
  // const history = useNavigate();
  const addAddressRef = useRef(null);

  const [guestEmail, setGuestEmail] = useState("")
  const changeAddressRef = useRef(null);
  const { user, subdomainuser, AddressListData, AddressListSuccess, ShippingAddressData,
    BillingAddressData, patchAddressStatus, deleteSuccess } = useSelector((state) => {
      return {
        user: state.user,
        subdomainuser: state.subdomainuser,
        AddressListData: state.cartOrder.getShippingBillingAddressList.data,
        ShippingAddressData: state.cartOrder.getShippingBillingAddressList.ShippingAddressData,
        BillingAddressData: state.cartOrder.getShippingBillingAddressList.BillingAddressData,
        AddressListSuccess: state.cartOrder.getShippingBillingAddressList.success,
        patchAddressStatus: state.cartOrder.patchActiveAddress.success,
        deleteSuccess: state.cartOrder.deleteAddresses.success
      }
    })
  const { businessData } = useSelector((state) => state.websiteTemplate.getTemplate.data);

  // const history=useNavigate()
  const [BillingAddressCheckbox, setBillingAddressCheckbox] = useState(
    (AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin()) ?
      AppLinkUrl.privateDomain() ?
        user.user_billing_address_same :
        subdomainuser.user_billing_address_same : true
  );
  const [activeAddress, setActiveAddress] = useState({});
  const [activeBillingAddress, setActiveBillingAddress] = useState({});
  const [addNewAddressPopup, setAddNewAddressPopup] = useState("Shipping");
  const [activeTab, setActiveTab] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [editData, SetEditData] = useState("");
  const [editState, setEditState] = useState(false)
  useEffect(() => {
    if ((AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
      if (AppLinkUrl.privateDomain()) {
        if (user && user._id) {
          dispatch(getCustomerAddressList(user._id));
        }
      } else {
        if (subdomainuser && subdomainuser._id) {
          dispatch(getCustomerAddressList(subdomainuser._id));
        }
      }
    } else {
      dispatch(getCustomerAddressList(user._id, true))
    }
  }, [subdomainuser, user, dispatch]);

  // useEffect(() => {
  //   if (patchAddressStatus) {
  //     SetEditData("");
  //   }
  // }, [patchAddressStatus])

  useEffect(() => {
    if ((AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
      if (AddressListSuccess && ShippingAddressData && ShippingAddressData.length > 0) {
        ShippingAddressData.forEach((v, i) => {
          if (v?.activeAddress) {
            setActiveAddress(v)
            setActiveTab(v._id)
          }
        });
      } else {
        setActiveAddress({})
      }
    } else {
      if (ShippingAddressData && ShippingAddressData.length > 0) {
        ShippingAddressData.forEach((v, i) => {
          if (v?.activeAddress) setActiveAddress(v);
        });
      }
    }

  }, [ShippingAddressData, AddressListSuccess, dispatch]);

  useEffect(() => {
    if ((AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
      if (AddressListSuccess && BillingAddressData && BillingAddressData.length > 0) {
        BillingAddressData.forEach((v, i) => {
          if (v?.activeBillingAddress) {
            setActiveBillingAddress(v)
            setSelectedAddress(v._id);
          }
        });
      } else {
        setActiveBillingAddress({})
      }
    } else {
      if (BillingAddressData && BillingAddressData.length > 0) {
        BillingAddressData.forEach((v, i) => {
          if (v?.activeBillingAddress) setActiveBillingAddress(v);
        });
      }
    }

  }, [BillingAddressData, AddressListSuccess]);


  useEffect(() => {
    if (Storage.alive("guestEmail")) {
      setGuestEmail(localStorage.getItem("guestEmail"))
    }
  }, [])

  const handleAddAddress = (state) => {
    addAddressRef.current.open();
    setAddNewAddressPopup(state);
  }

  const closeAddAddress = () => {
    addAddressRef.current.close();
    SetEditData("");
    setEditState(false)
  }

  const handleEditAddress = (state, item) => {
    addAddressRef.current.open();
    setAddNewAddressPopup(state);
    SetEditData(item);
    setEditState(true)
  }

  const changeStep = (route) => {
    // history(route)
  }
  const handleChangeAddress = (state) => {
    changeAddressRef.current.open();
    setAddNewAddressPopup(state);
  }

  const handleCloseChangeAddress = () => {
    changeAddressRef.current.close();
    setActiveTab("");
    setSelectedAddress("");
  }

  const handleCheckbox = (e) => {
    let inputChecked = e.target.checked;
    if (inputChecked) {
      setBillingAddressCheckbox(true);
    }
    else {
      setBillingAddressCheckbox(false);
    }
    if ((AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {
      localStorage.setItem("billingAddressSame", inputChecked)
    }
  }
  const handleGuestEmail = (e) => {
    setGuestEmail(e.target.value)
    localStorage.setItem("guestEmail", e.target.value)
  }
  useEffect(() => {
    if (activeAddress && activeAddress._id) {
      setActiveTab(activeAddress._id);
    }
  }, [activeAddress])

  useEffect(() => {
    if (ShippingAddressData?.length === 1) {
      setActiveTab(ShippingAddressData[0]._id);
    }
  }, [setActiveTab, ShippingAddressData]);

  useEffect(() => {
    if (activeBillingAddress && activeBillingAddress._id) {
      setSelectedAddress(activeBillingAddress._id);
    }
  }, [activeBillingAddress])

  const handleActive = (id, state) => {
    if (state === "Shipping") {
      setActiveTab(id);
    }
    else {
      setSelectedAddress(id);
    }
  }

  const handleChangeActiveAddress = (id) => {
    dispatch(changeSelectedAddress(id, "Shipping"));
    setActiveTab(id);
  }


  const activeAddressHandler = (state) => {
    if (state === "Shipping") {
      dispatch(changeSelectedAddress(activeTab, "Shipping"));
    }
    else {
      dispatch(changeSelectedAddress(selectedAddress, "Billing"));
    }
  }


  const deleteAddress = (id, state) => {

    if (state === "Shipping") {
      dispatch(deleteShippingAddressDetails(id));
    }
    else {
      dispatch(deleteBillingAddressDetails(id));
    }
  }

  const handleEditButton = (item) => {
    SetEditData(item);
    setEditState(true)
  }

  useEffect(() => {
    if ((AppLinkUrl.privateDomain() && Auth.isLogin()) || (AppLinkUrl.subdomain() && Auth.isSubdomainLogin())) {

    } else {
      let billingAddressSame = Storage.alive("billingAddressSame") ? localStorage.getItem("billingAddressSame") : {}
      if (Storage.alive("billingAddressSame")) {
        if (billingAddressSame === "true" || billingAddressSame === true) {
          setBillingAddressCheckbox(true)
        } else {
          setBillingAddressCheckbox(false)
        }
      }
    }

  }, [])
  useEffect(() => {
    if (changeAddressRef?.current?.isOpen) {
      if (addNewAddressPopup === "Shipping") {
        if (ShippingAddressData?.length === 0) {
          handleAddAddress(addNewAddressPopup)
          handleCloseChangeAddress()
        }
      } else if (addNewAddressPopup === "Billing") {
        if (BillingAddressData?.length === 0) {
          handleAddAddress(addNewAddressPopup)
          handleCloseChangeAddress()
        }
      }

    }
  }, [BillingAddressData, ShippingAddressData, addNewAddressPopup])
  useEffect(() => {
    if (activeAddress?.pinCode && activeAddress?.country && activeAddress?.state) {
      dispatch(getShippingDetails(businessData._id, activeAddress?.pinCode, activeAddress?.country, activeAddress?.state))
    }
  }, [activeAddress, activeAddress?.country, activeAddress?.pinCode, activeAddress?.state, dispatch, businessData])

  return [AddressListData, AddressListSuccess, handleAddAddress, closeAddAddress, handleChangeAddress,
    handleCloseChangeAddress, addAddressRef, changeAddressRef, BillingAddressCheckbox, handleCheckbox,
    deleteAddress, activeAddress, activeAddressHandler, addNewAddressPopup, ShippingAddressData,
    BillingAddressData, activeBillingAddress, activeTab, selectedAddress, handleActive, handleEditAddress,
    editData, changeStep, guestEmail, handleGuestEmail, handleChangeActiveAddress, handleEditButton, SetEditData, editState, setActiveTab
  ]
}

export default useShippingAndBillingAddress
