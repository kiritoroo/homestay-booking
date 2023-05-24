export interface IPaymentSchema {
  amount: number;
  booking_id: string;
  id: number;
  pay_date: string;
  pay_method: string;
  status: string;
}

export interface IDetailPaymentSchema {
  checkin_date: string;
  discount: number;
  homestay_booking: number;
  homestay_fee: number;
  number_of_day: number;
  number_of_guest: number;
  service_fee: number;
  surchange_capacity: number;
  tax: number;
  total_amount: number;
  user_booking: string;
}