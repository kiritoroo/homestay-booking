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