import Request from "@/Classes/Request";

class AppointmentRequest extends Request {
    constructor() {
        super()
        this.endpoint = {
            getAllServiceCollection: super.url("/appointmentBooking/getAllServiceCollection?type=_Type_&business=_buesinessid_&owner=_ownerID_&search=_value_", "commonservices"), //get collection list admin
            getAllMainCategoryList: super.url('/appointmentBooking/mainCategoryList?business=__bid__&owner=__ownerid__&type=__type__', "commonservices"), //get category list admin
            getServicesBycategories: super.url("/appointmentBooking/getAllService?business=_insID_&owner=_ownerID_&search=_VALUE_&type=__type__", "commonservices"), //get service list admin
        }
    }
}

export default new AppointmentRequest();