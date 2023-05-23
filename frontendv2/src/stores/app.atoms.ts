import { atom } from "recoil";

export const isShowLoginModalAtom = atom<boolean>({
  key: 'isShowLoginModalAtom',
  default: false
})

export const isShowRegisterModalAtom = atom<boolean>({
  key: 'isShowRegisterModalAtom',
  default: false
})

export const editingIdAtom = atom<string | null>({
  key: 'editingIdAtom',
  default: null
})  

export const isShowCalendarModalAtom = atom<boolean>({
  key: 'isShowCalendarModalAtom',
  default: false
})

export const startDatePickedAtom = atom<Date | null>({
  key: 'startDatePickedAtom',
  default: null
})

export const endDatePickedAtom = atom<Date | null>({
  key: 'endDatePickedAtom',
  default: null
})