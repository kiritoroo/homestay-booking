import { useAxiosWrapper } from "src/api/axiosWrapper";
import { IPromotionGetAllRequestParams } from "./promotion.schema";

export { usePromotionActions }

function usePromotionActions() {
  const axiosWrapper = useAxiosWrapper();

  return {
    getAll,
    getByName
  }

  function getAll(params: IPromotionGetAllRequestParams) {
    return axiosWrapper.get('/promotions', null, params)
  }

  function getByName(name: string) {
    return axiosWrapper.get(`/promotions/${ name }`)
  }
}