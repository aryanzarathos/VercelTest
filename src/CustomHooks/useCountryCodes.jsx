import { useSelector } from 'react-redux';
import { getCountryCode } from '../CommonFunctions/helperFunction';
import { useEffect } from 'react';
import { useState } from 'react';
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";

const useCountryCodes = () => {
    const {
        businessInfoSuccess, businessInfoData
    } = useSelector((state) => {
        return {
            businessInfoSuccess: state.websiteTemplate.getTemplate.success,
            businessInfoData: state.websiteTemplate.getTemplate.data?.businessData,
        };
    })
    const [countryCode, setCountryCode] = useState("")
    const [countryDialCode, setCountryDialCode] = useState("")
    const [countryName, setcountryName] = useState("")

    useEffect(() => {
        if (businessInfoSuccess) {
            if (AppLinkUrl.privateDomain() || AppLinkUrl.subdomain()) {
                setCountryCode(getCountryCode(businessInfoData?.business_country).country_code)
                setCountryDialCode(getCountryCode(businessInfoData?.business_country).dial_code)
                setcountryName(businessInfoData?.business_country)
            }
        }
    }, [businessInfoSuccess, businessInfoData])
    return [countryCode, countryDialCode, countryName]
}

export default useCountryCodes