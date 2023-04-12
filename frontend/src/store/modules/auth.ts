import axios from '@util/axiosInstance'
import ILoginRequest from '@/types/ILoginRequest'
import ILoginResponse from '@/types/ILoginResponse'
import IUser from '@type/IUser'

interface IState {
  user: IUser | null
}

const state: IState = {
  user: null
}

const getters = {
  isAuthenticated: (state: any) => !!state.user,
  StateUser: (state: any) => state.user,
};

const actions = {
  async register({dispatch}: any, form: any) {
    await axios.post('register', form)
    let UserForm = new FormData()
    UserForm.append('username', form.username)
    UserForm.append('password', form.password)
    await dispatch('LogIn', UserForm)
  },
  async logIn({commit}: any, userRequest: ILoginRequest) {
    await axios.post('login', {
      username: userRequest.username,
      password: userRequest.password
    }).then(response => {
      const userResponse: ILoginResponse = response.data;
      document.cookie = `
        access_token=${userResponse.access_token}; 
        expires=${new Date(userResponse.access_token_expires_at).toUTCString()}; 
        path=/`

      const user: IUser = userResponse.user;
      commit('setUser', user)
    }).catch(error => {
      console.error('Error:', error);
    })
  },
  async logOut({commit}: any){
    let user = null
    commit('logOut', user)
  }
}

const mutations = {
  setUser(state: IState, user: IUser){
    state.user = user
  },
  logOut(state: IState){
    state.user = null
  },
};

export default {
  state,
  getters,
  actions,
  mutations
}