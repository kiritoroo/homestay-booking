import { atom } from "recoil";
import { IHomestayFeedbackSchema, IHomestaySchema } from "./homestay.schema";

export const homestaysAtom = atom<IHomestaySchema[]>({
  key: 'homestaysAtom',
  default: []
})

export const selectedHomestayAtom = atom<IHomestaySchema | null>({
  key: 'selectedHomestayAtom',
  default: null
})

export const selectedHomestayFeedbackAtom = atom<IHomestayFeedbackSchema[]>({
  key: 'selectedHomestayFeedbackAtom',
  default: []
})