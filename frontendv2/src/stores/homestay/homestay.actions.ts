import { useAxiosWrapper } from "src/api/axiosWrapper";
import { IHomestayGetAllRequestParams, IHomestayGetAllResponse, IHomestayGetByIDRequestParams, IHomestaySchema } from "./homestay.schema";

export { useHomestayActions }

function useHomestayActions() {
  const axiosWrapper = useAxiosWrapper();

  return {
    getAll,
    getByID
  }

  function getAll(params: IHomestayGetAllRequestParams) {
    return axiosWrapper.get('/homestays', null, params)
  }

  function getByID(
    homestayId: string,
    params: IHomestayGetByIDRequestParams
  ) {
    return axiosWrapper.get(`/homestays/${homestayId}`, null, params)
  }
}