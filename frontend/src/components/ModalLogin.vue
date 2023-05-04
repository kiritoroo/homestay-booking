<template>
  <section class="modal-login">
    <div class="mask">
      <div class="wrapper">
        <div class="container" v-show="!isLoggingIn">
          <div class="btn-close" @click="handleCloseModal">
            <v-icon icon="mdi-close" medium dark></v-icon>
          </div>

          <div class="welcome">
            {{$t("login.welcome") }}&nbsp;
            <div class="name">
              <span>To</span>
              <span>to</span>
              <span>ro.</span>
            </div>
            <div class="inc">
              &nbsp;Homestay
            </div>
          </div>

          <div class="login-option">
            <button type="button" class="login-google">
              <img src="@asset/icons/ico_google.png">
              <div>{{$t("login.google") }}</div>
            </button>
            <button type="button" class="login-apple">
              <img src="@asset/icons/ico_apple.png">
              <div>{{$t("login.apple") }}</div>
            </button>
          </div>

          <div class="divide">{{$t("login.or") }}</div>

          <form @submit.prevent="handleLogInSubmit" class="login-form">
            <div class="input-group">
              <input ref="usernameInputRef" v-model="userDataRef.username" type="text" required>
              <div class="hint">
                <v-icon class="icon" icon="mdi-account-circle"></v-icon>
                <label>{{$t("login.username") }}</label>
              </div>
            </div>

            <div class="input-group">
              <input ref="passwordInputRef" v-model="userDataRef.password" type="password" required>
              <div class="hint">
                <v-icon class="icon" icon="mdi-lock"></v-icon>
                <label>{{$t("login.password") }}</label>
              </div>
            </div>
          </form>

          <div class="forgot" @click="$emit('openModalFogot')">{{$t("login.forgot") }}</div>

          <button @click="handleLogInSubmit" type="button" class="btn-signin">
            {{$t("login.signin") }}
          </button>

          <div class="signup">
            <div>{{$t("login.signup1") }}</div>
            <div class="link">&nbsp;{{$t("login.signup2") }}</div>
          </div>

          <div v-show="isShowMessageRef && !stateUser" class="message">Login failed!</div>
        </div>

        <div class="load-login" v-show="isLoggingIn">
          Waitting...
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import ILoginRequest from '@/types/ILoginRequest'

const instance = getCurrentInstance()
const store = useStore()
const isLoggingIn = computed(() => store.getters.isLoggingIn)
const stateUser = computed(() => store.getters.stateUser)
const usernameInputRef = ref(null)
const passwordInputRef = ref(null)
const isShowMessageRef = ref(false)
const userDataRef = ref({
  username: '',
  password: ''
})

const handleLogInSubmit = async () => {
  if (usernameInputRef.value && userDataRef.value.username === '') {
    (usernameInputRef.value as HTMLInputElement).focus()
    return
  }

  if (passwordInputRef.value && userDataRef.value.password === '') {
    (passwordInputRef.value as HTMLInputElement).focus()
    return
  }

  isShowMessageRef.value = true

  const userRequest: ILoginRequest = {
    username: userDataRef.value.username,
    password: userDataRef.value.password
  }
  await store.dispatch('logIn', userRequest)
}

const handleCloseModal = () => {
  instance?.emit('closeModal')
  userDataRef.value = {
    username: '',
    password: ''
  }
  isShowMessageRef.value = false
}

</script>
