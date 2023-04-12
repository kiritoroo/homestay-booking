import axios from '@util/axiosInstance'
import IUserRequest from '@type/IUserRequest'
import IUserResponse from '@type/IUserResponse'
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
  async logIn({commit}: any, userRequest: IUserRequest) {
    await axios.post('login', {
      username: userRequest.username,
      password: userRequest.password
    }).then(response => {
      const userResponse: IUserResponse = response.data;
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