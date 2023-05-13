import { useAxiosWrapper } from "src/api/axiosWrapper";
import { IHomestayFeedbackSchema, IHomestayGetAllRequestParams, IHomestayGetFeedbackParams, IHomestaySchema } from "./homestay.schema";
import { useSetRecoilState } from "recoil";
import { homestaysAtom, selectedHomestayAtom, selectedHomestayFeedbackAtom } from "./homestay.atoms";

export { useHomestayActions }

function useHomestayActions() {
  const axiosWrapper = useAxiosWrapper();
  const setHomestays = useSetRecoilState(homestaysAtom);
  const setSelectedHomestay = useSetRecoilState(selectedHomestayAtom);
  const setSelectedHomestayFeedback = useSetRecoilState(selectedHomestayFeedbackAtom);

  return {
    getAll,
    get,
    getFeedback
  }

  function getAll(homestayGetAllRequestParams: IHomestayGetAllRequestParams) {
    return axiosWrapper.get('/homestays', null, homestayGetAllRequestParams)
      .then((response: IHomestaySchema[]) => {
        setHomestays(response);
      })
  }

  function get(homestayId: string) {
    return axiosWrapper.get(`/homestays/${homestayId}`)
      .then((response: IHomestaySchema) => {
        setSelectedHomestay(response);
      })
  }

  function getFeedback(homestayId: string, homestayGetFeedbackParams: IHomestayGetFeedbackParams) {
    return axiosWrapper.get(`/homestays/${homestayId}/feedbacks`, null, homestayGetFeedbackParams)
      .then((response: IHomestayFeedbackSchema[]) => {
        setSelectedHomestayFeedback(response);
      })
  }
}