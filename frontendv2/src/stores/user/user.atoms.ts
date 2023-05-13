import { atom } from "recoil";
import { IUserSchema } from "./user.schema";

export const authTokenAtom = atom<string | null>({
  key: 'authAtom',
  default: localStorage.getItem('access_token')
})

export const userAtom = atom<IUserSchema | null>({
  key: 'userAtom',
  default: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null
})
