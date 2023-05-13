import { useAxiosWrapper } from "src/api/axiosWrapper";
import { IHomestayGetAllRequestParams, IHomestaySchema } from "./homestay.schema";
import { useSetRecoilState } from "recoil";
import { homestaysAtom } from "./homestay.atoms";

export { useHomestayActions }

function useHomestayActions() {
  const axiosWrapper = useAxiosWrapper();
  const setHomestays = useSetRecoilState(homestaysAtom);

  return {
    getAll
  }

  function getAll(homestayGetAllRequestParams: IHomestayGetAllRequestParams) {
    return axiosWrapper.get('/homestays', null, homestayGetAllRequestParams)
      .then((response: IHomestaySchema[]) => {
        setHomestays(response);
      })
  }
}