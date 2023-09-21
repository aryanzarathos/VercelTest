import Request from "../../../Classes/Request";

class AppointmentRequest extends Request {
  constructor() {
    super();
    this.AppointmentEndpoint = {
      getAllMainServiceList: super.url('/appointmentBooking/getservice/inst?type=__type__', "commonservices"),
      getSingleServiceDetail: super.url('/appointmentBooking/service?type=__type__', "commonservices"),
      getAllSlot: super.url('/appointmentBooking/getserviceSlots/serviceId/insID?date=_DATE_&type=__type__', "commonservices"),
      postAppointmentcart: super.url('/order/create-cart?type=__type__', "commonservices"),
      getAppointmentcart: super.url('/order/get-cart?user=__user__&business=__business__', "commonservices"),
      postAppointment: super.url('/appointmentBooking/createAppointment?type=__type__', "commonservices"),
      paymentcallback: super.url('/order/service-payment-razorpay', "commonservices"),

      getuserBookingList: super.url("/appointmentBooking/getUserAppointment/user?type=__type__", "commonservices"),
    }
  }
}
export default new AppointmentRequest(); 