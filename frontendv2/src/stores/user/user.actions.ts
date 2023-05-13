import { useAxiosWrapper } from "src/api/axiosWrapper";
import { IUserLoginRequestBody, IUserLoginResponse, IUserRegisterRequestBody, IUserRegisterResponse, IUserUpdateRequestBody, IUserUpdateResponse } from "./user.schema";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authTokenAtom, userAtom } from "./user.atoms";
import { authSelector } from "./user.selectors";

export { useUserActions }

function useUserActions() {
  const axiosWrapper = useAxiosWrapper();
  const auth = useRecoilValue(authSelector);
  const setUser = useSetRecoilState(userAtom);
  const setAuthToken = useSetRecoilState(authTokenAtom);

  return {
    login,
    register,
    logout,
    update
  }

  function login(userLoginRequest: IUserLoginRequestBody) {
    return axiosWrapper.post('/login', userLoginRequest)
      .then((response: IUserLoginResponse) => {
        setUser(response.user);
        setAuthToken(response.access_token);
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('access_token', response.access_token);
      })
  }

  function register(userRegisterRequest: IUserRegisterRequestBody) {
    console.log(userRegisterRequest)
    return axiosWrapper.post('/register', userRegisterRequest)
      .then((response: IUserRegisterResponse) => {
      })
  }

  function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    setUser(null);
    setAuthToken(null);
  }

  function update(userUpdateRequest: IUserUpdateRequestBody) {
    const username = auth.user?.username ?? '';
    return axiosWrapper.put(`/users/${username}`, userUpdateRequest)
      .then((response: IUserUpdateResponse) => {
        const user = {
          ...auth.user!, 
          full_name: response.full_name,
          email: response.email,
          phone: response.phone
        }
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user));
      })
  }
}