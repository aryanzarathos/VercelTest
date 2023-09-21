import Request from '@/Classes/Request';
import AppLink from '@/CommonComponents/AppLink';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import SubdomainLoader from '@/CommonComponents/Loader/SubdomainLoader/SubdomainLoader';
import TemplateLoader from '@/CommonComponents/Loader/Template';
import useAppNavigate from '@/CustomHooks/useAppNavigate';
import cartOrderRequest from '@/store/actions/cartOrder/cartOrderRequest';
import { activateProfile } from '@/store/actions/myprofile';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const MojoOrderSuccess = () => {
    const { customerCartData, customerCartSuccess, business } = useSelector((state) => {
        return {
            business: state.websiteTemplate.getTemplate.data?.businessData,
            customerCartData: state.cartOrder.customerCart?.data,
            customerCartSuccess: state.cartOrder.customerCart.success,
        };

    })
    const router = useRouter();
    const history = useAppNavigate();
    const dispatch = useDispatch()

    console.log(business, "businessbusiness")
    useEffect(() => {
        let path = router.asPath.split("/");
        path = path[1]
        path = path.split("&")
        path = path[2]
        path = path.split("=")
        path = path[1]
        console.log(path, "pathpath")
        let data = {
            "subdomainName": AppLinkUrl.subdomain(),
            "clinetid": "test_qQFZAxNpQqf838w27iy673OVB9MeM425RsO",
            "clientsercet": "test_oYfPPAfONSkPhULPO9iPcQpVR3KRJ0Fe5ErXuywXZMMI55z0vLZg5WMT8aCNFkBNAgVTRcmc41KlQfhSIjmSlm19COg8v6sZTvxrR0BVcIZwiUo0g0OL1yQIoL4",
            "id": path
        }
        async function getResp() {
            cartOrderRequest.post(
                cartOrderRequest.endpoint.getPaymentRequest,
                data,
                (resp3) => {
                    if (resp3.data.status === "Completed") {
                        history("/my-orders")
                    } else {
                    }
                }
            )
        }
        getResp()
    }, [])
    return (
        <>
            <SubdomainLoader text={'Fetching your Payment Details'} />
        </>
    )
}

export default MojoOrderSuccess