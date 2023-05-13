import { selector } from "recoil";
import { authTokenAtom, userAtom } from "./user.atoms";
import { IUserSchema } from "./user.schema";

export const authSelector = selector({
  key: 'authSelector',
  get: ({get}) => {
    const token: string | null = get(authTokenAtom)
    const user: IUserSchema | null = get(userAtom)
    const isAuth: boolean = (token && user) ? true : false
    
    return {
      isAuth,
      token,
      user
    }
  }
})