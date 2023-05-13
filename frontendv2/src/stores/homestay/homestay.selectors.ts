import { selector } from "recoil";
import { IHomestaySchema } from "./homestay.schema";
import { homestaysAtom } from "./homestay.atoms";

export const homestaysSelector = selector({
  key: 'homestaysSelector',
  get: ({get}) => {
    const data: IHomestaySchema[] = get(homestaysAtom);

    return {
      data
    }
  }
})