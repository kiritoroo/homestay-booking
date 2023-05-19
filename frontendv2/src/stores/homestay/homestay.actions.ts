import { useAxiosWrapper } from "src/api/axiosWrapper";
import { IHomestayGetAllRequestParams, IHomestayGetAllResponse, IHomestaySchema } from "./homestay.schema";

export { useHomestayActions }

function useHomestayActions() {
  const axiosWrapper = useAxiosWrapper();

  return {
    getAll,
    getById
  }

  function getAll(params: IHomestayGetAllRequestParams) {
    return axiosWrapper.get('/homestays', null, params)
  }

  function getById(homestayId: string) {
    return axiosWrapper.get(`/homestays/${homestayId}`)
      .then((response: IHomestaySchema) => {
        console.log(response)
      })
  }
}