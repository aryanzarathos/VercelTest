import Auth from '@/Classes/Auth'
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl'
import { isBrowser } from '@/CommonFunctions/isBrowser'
import React, { useEffect } from 'react'

const Logout = () => {
    
    if(isBrowser()){
        if (AppLinkUrl.subdomain()) {
            Auth.subdomainLogout()
        } else {
            Auth.logout();
        }
    }
   
    useEffect(() => {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event) {
            window.history.pushState(null, document.title, window.location.href);

        });
    }, [])

    if (isBrowser()) {
        window.location.href = "/";
    }
}
export default Logout