import UsaEpay from '@/CommonComponents/UsaEpay/UsaEpay'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux';

const TestUsaCommmon = () => {
    const mainRef = useRef();
    let { business } = useSelector((state) => {
        return {
            business: state.websiteTemplate.getTemplate.data?.businessData
        }
    })
    business = {
        "_id": "6486aee6819a4b06d5fe17e6",
        "featured": false,
        "isDeleted": false,
        "business_is_pwa": false,
        "servicing_days": [],
        "cash_on_delivery_enabled": true,
        "cash_on_delivery_price_limit": 0,
        "cod_price_limitation": false,
        "show_shop_on_footer": true,
        "show_shop_on_header": true,
        "showBusinessName": true,
        "custom_smtp": false,
        "defaultCategoryCheck": false,
        "has_razorpay": false,
        "featuresUIDOwned": [],
        "write_review": "anyone",
        "template_type": "dynamic",
        "trialAccount": true,
        "header_layout": "Header_Layout1",
        "shipping_aggregator_exists": false,
        "business_name": "Muskaan ",
        "business_category": "Ecommerce",
        "business_subdomain": "mysite16tvt",
        "owner": "6486aeda819a4b06d5fe17db",
        "trialDateStart": "2023-06-12T05:36:38.033Z",
        "trialPeriodDays": 14,
        "dynamic_header_button": "",
        "business_owner_details": [],
        "banners": [],
        "dynamic_header": [],
        "currencyList": [],
        "defaultCategory": [],
        "featureOwned": [],
        "createdAt": "2023-06-12T05:36:38.044Z",
        "updatedAt": "2023-07-18T07:19:26.912Z",
        "__v": 0,
        "business_email": "rajatkumar1510@gmail.com",
        "business_phone": "9953050921",
        "business_phone_country_code": "91",
        "latitude": "28.6139391",
        "location_url": "https://maps.google.com/maps?q=28.6139391,77.2090212&hl=es;z=14&output=embed",
        "longitude": "77.2090212",
        "place_Name_Map": "New Delhi, Delhi, India",
        "business_address": "House no. 2, Block no. 111\nPushp vihar Sector 1 , Saket",
        "business_address_line2": "House no. 2, Block no. 111\nPushp vihar Sector 1 , Saket",
        "business_city": "New Delhi",
        "business_country": "United States",
        "business_state": "Alaska",
        "business_zipcode": "11001",
        "contact_support": "9953050921",
        "has_usaepay": true,
        "usaepay_api_key": "_20G457TwCt04844Tzi4O8uBWFHI4FOb",
        "usaepay_api_pin": "99999"
    }
    const Closeazlit = () => {
        mainRef.current.close();
    }
    function handleTransactionApi(data) {
        // all api hitting logic
    }
    return (
        <>
            <div>TestUsaCommmon</div>
            <button onClick={() => mainRef.current.open()}>Open Popup</button>
            <UsaEpay
                getbusinessInfoData={business}
                ref={mainRef}
                closeModal={() => Closeazlit()}
                handleDataSuccess={(data) => handleTransactionApi(data)}
                totalPrice={100}
                addressTab={true}
            />
        </>
    )
}

export default TestUsaCommmon