//import {domainName} from "./Constant";
import { userDetail } from "@/Constant/auth";
import { isBrowser } from "../CommonFunctions/isBrowser";
import Api from "./Api";
import Cookies from "./Cookies";

class Url extends Api {

    constructor() {
        super()
        this.url = isBrowser() && window;
        this.placeholder = "::SUB_DOMAIM_NAME::";
        //this.domainName = super.apiConfig.mode==="production"?`${this.getProtocol()}//localhost:3000`:`${this.getProtocol()}//edneed.com`;
    }

    getDomainName(hostName) {
        let host = hostName ? hostName : this.url?.location?.hostname;
        let domain;

        if (host?.includes('localhost')) {
            return 'localhost';
        }

        if (host?.split('.').length > 3) {
            let domainParts = host.split('.');

            // Subdomain with IP
            if (domainParts.length > 3) {

                if (domainParts[0] === "www") {
                    let afterRemoveWww = domainParts.slice(2, domainParts.length);
                    return afterRemoveWww.join('.');
                }
                else {
                    domainParts.shift();
                    domain = domainParts.join('.');
                    domain = host
                }

            }

            return domain
        }

        if (host?.split('.').length === 2) // only valid for example.com
        {
            // no "." in a domain - it's localhost or something similar
            return domain = `${host}`;
        }
        else {
            if (host?.split('.').length === 3) {
                let domainParts = host.split('.');
                if (domainParts[0] === "www") {
                    let afterRemoveWww = domainParts.slice(2, domainParts.length);
                    return afterRemoveWww.join('.');
                } else {
                    if (
                        domainParts.includes("edneed") ||
                        domainParts.includes("getmelight") ||
                        domainParts.includes("unicated") ||
                        domainParts.includes("my_app") ||
                        domainParts.includes("harneed") ||
                        domainParts.includes("nanakway") ||
                        domainParts.includes("gurneed") || domainParts.includes("webneed")
                    ) {
                        let revDomainPart = domainParts.reverse();
                        domain = `${revDomainPart[1]}.${revDomainPart[0]}`; //'.'+domainParts.join('.');
                        return domain;
                    } else {
                        return (domain = `${host}`);
                    }
                }
            }
            // let domainParts = host.split('.');
            // if (domainParts.length === 3) {
            //     domainParts.shift();
            //     domain = domainParts.join('.');
            // }
            // else {
            //     let revDomainPart = domainParts.reverse();
            //     domain = `${revDomainPart[1]}.${revDomainPart[0]}`; //'.'+domainParts.join('.');
            // }
        }

        return domain;

        //return this.apiConfig.mode==="production"?`edneed.com`:`my_app.com`
    }

    getHost(hostName) {
        if (this.subdomainWithWWW()) {
            return this.getHostWithWWW()
        }
        return hostName ? hostName : isBrowser() && this.url?.location?.hostname;
    }

    subdomainWithWWW(hostName) {

        let hostname = hostName ? hostName : isBrowser() && this.url?.location?.hostname.split(".")
        return hostname.length > 3;
    }

    getHostWithWWW(hostName) {
        let hostname = hostName
            ? hostName
            : isBrowser() && this.url?.location?.hostname.split(".");
        hostname.shift();
        return hostname.join(".")
    }

    getProtocol() {
        return this.url?.location?.protocol;
    }

    getPort() {
        return this.url?.location?.port;
    }

    /**
     * @param {*} extendUrl : you can pass the url to extend with base url
     */
    baseUrl(extendUrl = '') {
        var completeURL = this.url.location.protocol + '//' + this.url.location.hostname;
        completeURL = completeURL + (this.url.location.port > 0 ? ':' + this.url.location.port + '/' : '/');
        completeURL = completeURL + (extendUrl.length > 0 ? extendUrl + '/' : '');
        return completeURL;
    }
    /**
     * Get current url like https://yourdomain.com/user/profile
     */
    currenUrl() {

        var completeURL = this.url.location.protocol + '//' + this.url.location.hostname;
        completeURL = completeURL + (this.url.location.port > 0 ? ':' + this.url.location.port + '' : '/');
        completeURL = completeURL + (this.url.location.pathnam !== '' ? this.url.location.pathname + '/' : '');
        return completeURL;
    }

    httpBuildQuery(object) {
        return Object.keys(object).map((key) => { return (key + '=' + object[key]) }).join('&');
    }

    moveToTop() {

        window.scrollTo(0, 0);
    }

    createSlug(text) {
        return text.replace(/[^A-Za-z0-9-]+/g, '-').toLowerCase();
    }

    subdomain(hostName, previewCheck) {
        // this.getHost().replace(this.getDomainName(), '');
        let subDomainName = "";
        let serverSubdomain = ""
        if (!hostName && isBrowser()) {
            subDomainName = this.getHost().replace(this.getDomainName(), '')
        } else {
            serverSubdomain = hostName?.replace(this.getDomainName(hostName), '')
        }

        if (hostName) {
            if (!serverSubdomain || serverSubdomain === null || serverSubdomain === "." || serverSubdomain === "Undefined") {
                return false;
            }
            else {
                return serverSubdomain.slice(0, -1);
            }
        } else {
            if (!subDomainName || subDomainName === null || subDomainName === "." || subDomainName === "Undefined") {
                return false;
            }
            else {
                if (previewCheck) {
                    return subDomainName.slice(0, -1);
                } else if (subDomainName.slice(0, -1) === "preview") {
                    let subd = Cookies.has(userDetail)
                        ? Cookies.get(userDetail, Cookies.cokConfig.type.json)
                            ?.user_institute_institute_subdomain
                        : {};
                    return subd;
                } else {
                    return subDomainName.slice(0, -1);
                }

            }
        }


    }

    subdomainUrlGenerator() {
        return `${this.getProtocol()}//${this.placeholder}.${this.getDomainName()}${this.getPort() > 0 ? `:${this.getPort()}/` : `/`}`;
    }
    // switchToMain(){
    //     localStorage.setItem("Initial", JSON.stringify(this.url.location))
    //     //const tempHost = this.url.location.host;
    //     //alert(this.url.location.host.replace(`${this.subdomain()}.`,''))
    //     this.url.location.host = this.url.location.host.replace(`${this.subdomain()}.`,'')
    //     this.url.location.hostname = this.url.location.hostname.replace(`.${this.subdomain()}.`,'')
    //     localStorage.setItem("After change", JSON.stringify(this.url.location))
    // }
}

export default Url;