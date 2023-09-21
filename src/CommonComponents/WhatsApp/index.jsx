import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import IconWhatsappSupport from "./edneed-whatsapp-customer-support.png";
import AppLinkUrl from "../AppLink/AppLinkUrl";
import { useRouter } from "next/router";
import styles from "./whatsaap.module.scss"
import Image from "next/image";

const WhatsappChat = () => {
    const { getTemplateData, success } = useSelector((state) => {
        return {
            getTemplateData: state.websiteTemplate.getTemplate.data,
            success: state.websiteTemplate.getTemplate.success,
        }
    })

    let contact_support = success && getTemplateData?.businessData?.contact_support;


    return (
        <React.Fragment>
            {
                (AppLinkUrl.privateDomain() || AppLinkUrl.subdomain()) && !AppLinkUrl.isEditor() && (
                    <React.Fragment>
                        {success && contact_support && contact_support !== "" &&
                            <div className={styles.whatsappChat} >
                                <a
                                    href={`https://api.whatsapp.com/send?phone=${contact_support}&text=Hi, There!`}
                                    target="Edneed Chat"
                                >
                                    <Image src={IconWhatsappSupport} alt="Whatsapp Support" />
                                </a>
                            </div>
                        }
                    </React.Fragment>
                )
            }
        </React.Fragment >
    );
};

export default WhatsappChat;
