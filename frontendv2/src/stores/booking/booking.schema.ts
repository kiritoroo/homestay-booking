import { IHomestaySchema } from "@store/homestay/homestay.schema";
import { IDetailPaymentSchema, IPaymentSchema } from "@store/payment/payment.schema";
import { IUserUpdateResponse } from "@store/user/user.schema";

export interface IBookingSchema {
  booking_date: string;
  booking_id: string;
  checkin_date: string;
  checkout_date: string;
  homestay_booking: number;
  number_of_guest: number;
  promotion_id: string;
  service_fee: number;
  status: string;
  tax: number;
  user_booking: string;
}

export interface IBookingCreateRequestBody {
  checkin_date: string;
  number_of_day: number;
  number_of_guest: number;
  promotion_id: string;
}

export interface IBookingCreateResponse {
  booking: IBookingSchema;
  detail_payment: IDetailPaymentSchema;
  homestay_booking: IHomestaySchema;
  payment: IPaymentSchema;
  user_booking: IUserUpdateResponse;
}

export interface IBookingGetAllRequestParam {
  page_id: number;
  page_size: number;
}

export interface IBookingGetAllResponse {
  list_booking: IBookingCreateResponse[];
}