import { useAxiosWrapper } from "src/api/axiosWrapper";
import { IBookingCreateRequestBody, IBookingGetAllRequestParam } from "./booking.schema";

export { useBookingActions }

function useBookingActions() {
  const axiosWrapper = useAxiosWrapper();

  return {
    create,
    getAll,
    abort
  }

  function create(username: string, homestayId: string, body: IBookingCreateRequestBody) {
    return axiosWrapper.post(`/users/${username}/bookings/${homestayId}`, body);
  }

  function getAll(username: string, params: IBookingGetAllRequestParam) {
    return axiosWrapper.get(`/users/${username}/list_booking`, null, params);
  }

  function abort(username: string, homestayId: string, bookingId: string) {
    return axiosWrapper.put(`/users/${username}/bookings/${homestayId}/${bookingId}/cancel`);
  }
}
