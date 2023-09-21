import Request from "../../../Classes/Request";

class sendRequest extends Request {

    constructor() {
        super()
        this.contactusEndpoint = {
            contactusUrl: super.url("contact-customize/usercontactus", "commonservices"),
            contactusCreate: super.url("contact-customize/EditorCreateContactForm", "commonservices"),
            getContactFields: super.url("contact-customize/getBusinessContactForm/_Id_", "commonservices"),
            patchContactFields: super.url("contact-customize/updateContactForm/_Id_", "commonservices"),
            getContacts: super.url("contact-customize/getEditorBusinessContactForm/_Id_", "commonservices"),
            downloadExcelSheet: super.url("/contact-customize/downloadExcel", "commonservices"),
            sendOtp:super.url("/contact-customize/sendOtp",'commonservices')
        }
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new sendRequest();