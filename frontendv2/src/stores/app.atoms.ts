import { atom } from "recoil";
import { IHomestaySchema } from "./homestay/homestay.schema";
import { IPromotionSchema } from "./promotion/promotion.schema";

export const isShowUserPopupAtom = atom<boolean>({
  key: 'isShowUserPopupAtom',
  default: false
})

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

export const isShowCalendarPopupAtom = atom<boolean>({
  key: 'isShowCalendarPopupAtom',
  default: false
})

export const isShowGuestPickPopupAtom = atom<boolean>({
  key: 'isShowGuestPickPopupAtom',
  default: false
})

export const startDatePickedAtom = atom<Date | null>({
  key: 'startDatePickedAtom',
  default: new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()+1,
    0
  )
})

export const endDatePickedAtom = atom<Date | null>({
  key: 'endDatePickedAtom',
  default: new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()+3,
    23
  )
})

export const guestPickedAtom = atom<number>({
  key: 'guestPickedAtom',
  default: 1
})

export const homestayPickedAtom = atom<IHomestaySchema | null>({
  key: 'homestayPickedAtom',
  default: null
})

export const promotionPickedAtom = atom<IPromotionSchema | null>({
  key: 'promotionPickedAtom',
  default: null
})


export const promotionCopyAtom = atom<string | null>({
  key: 'promotionCopyAtom',
  default: null
})

export const isShowCalendarModalAtom = atom<boolean>({
  key: 'isShowCalendarModalAtom',
  default: false
})

export const isShowGuestPickModalAtom = atom<boolean>({
  key: 'isShowGuestPickModalAtom',
  default: false
})

export const isShowCancelPolicyModalAtom = atom<boolean>({
  key: 'isShowCancelPolicyModalAtom',
  default: false
})

export const isShowBookPolictyModalAtom = atom<boolean>({
  key: 'isShowBookPolictyModalAtom',
  default: false
})

export const selectedBookingIdAtom = atom<string | null>({
  key: 'selectedBookingIdAtom',
  default: null
})