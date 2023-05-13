import { atom } from "recoil";
import { IHomestaySchema } from "./homestay.schema";

export const homestaysAtom = atom<IHomestaySchema[]>({
  key: 'homestaysAtom',
  default: []
})