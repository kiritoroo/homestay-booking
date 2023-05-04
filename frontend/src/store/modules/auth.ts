import axios from '@util/axiosInstance'
import ILoginRequest from '@/types/ILoginRequest'
import ILoginResponse from '@/types/ILoginResponse'
import IUser from '@type/IUser'

interface IState {
  user: IUser | null
  isLoggingIn: boolean
}

const state: IState = {
  user: null,
  isLoggingIn: false
}

const getters = {
  isAuthenticated: (state: any) => !!state.user,
  stateUser: (state: any) => state.user,
  isLoggingIn: (state: IState) => state.isLoggingIn
}

const actions = {
  async checkAuth ({ commit }: any) {
    const cookie = document.cookie.match('(^|;)\\s*access_token\\s*=\\s*([^;]+)')?.pop() || ''
    if (cookie) {
      // const token = cookie.split('=')[1]
      console.log(cookie)
      try {
        const response = await axios.get('me', {
          headers: {
            Authorization: `Bearer ${cookie}`
          }
        })
        const user: IUser = response.data
        commit('setUser', user)
      } catch (error) {
        commit('logOut')
        console.error('Error:', error)
      }
    } else {
      commit('logOut')
    }
  },

  async register ({ dispatch }: any, form: any) {
    await axios.post('register', form)
    const UserForm = new FormData()
    UserForm.append('username', form.username)
    UserForm.append('password', form.password)
    await dispatch('LogIn', UserForm)
  },

  async logIn ({ commit }: any, userRequest: ILoginRequest) {
    commit('setLogging', true)

    await axios.post('login', {
      username: userRequest.username,
      password: userRequest.password
    }).then(response => {
      const userResponse: ILoginResponse = response.data
      document.cookie = `
        access_token=${userResponse.access_token};
        expires=${new Date(userResponse.access_token_expires_at).toUTCString()}; 
        path=/`

      const user: IUser = userResponse.user
      commit('setUser', user)
    }).catch(error => {
      console.error('Error:', error)
    }).finally(() => {
      commit('setLogging', false)
    })
  },

  async logOut ({ commit }: any) {
    const user = null
    document.cookie = 'access_token=;'
    commit('logOut', user)
  }
}

const mutations = {
  setUser (state: IState, user: IUser) {
    state.user = user
  },
  logOut (state: IState) {
    state.user = null
  },
  setLogging (state: IState, value: boolean) {
    state.isLoggingIn = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
