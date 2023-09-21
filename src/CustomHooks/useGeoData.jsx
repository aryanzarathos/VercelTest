import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppLinkUrl from "@/CommonComponents/AppLink/AppLinkUrl";
import Auth from "@/Classes/Auth";

const useGeoData = () => {
    const {
        businessInfoSuccess, businessInfoData
    } = useSelector((state) => {
        return {
            businessInfoSuccess: state.websiteTemplate.getTemplate.success,
            businessInfoData: state.websiteTemplate.getTemplate.data?.businessData,
        };
    })
    const [currencyData, setCurrencyData] = useState({})
    const [dashBoardLanguage, setdashBoardLanguage] = useState({})
    const [websiteLanguage, setwebsiteLanguage] = useState({})
    useEffect(() => {
        if (businessInfoSuccess) {
            if (AppLinkUrl.privateDomain() || AppLinkUrl.subdomain()) {
                setCurrencyData(businessInfoData?.primaryCurrency)
                setdashBoardLanguage(businessInfoData?.dashBoardLanguage)
                setwebsiteLanguage(businessInfoData?.websiteLanguage)
            }
        }

    }, [businessInfoSuccess, businessInfoData])
    return [currencyData, dashBoardLanguage, websiteLanguage]
}

export default useGeoData