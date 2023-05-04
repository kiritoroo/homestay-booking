<template>
  <header id="navbar">
    <section class="logo">
      <Transition name="logo_appear_eff" appear>
        <RouterLink class="logo_link" :to="Trans.i18nRoute({ name: 'home' })">
          <div class="logo_link_name">
            <Transition name="logo_link_name_appear_eff1" appear>
              <span>To</span>
            </Transition>
            <Transition name="logo_link_name_appear_eff2" appear>
              <span>to</span>
            </Transition>
            <Transition name="logo_link_name_appear_eff3" appear>
              <span>ro.</span>
            </Transition>
          </div>
          <div class="logo_link_inc">
            &nbsp;Homestay
          </div>
        </RouterLink>
      </Transition>
    </section>

    <section>
      <div class="menu">
        <RouterLink :to="Trans.i18nRoute({ name: 'about' })">
          {{ $t("nav.about") }}
        </RouterLink>
        <RouterLink :to="Trans.i18nRoute({ name: 'news' })">
          {{ $t("nav.news") }}
        </RouterLink>
        <RouterLink :to="Trans.i18nRoute({ name: 'contact' })">
          {{ $t("nav.contact") }}
        </RouterLink>
      </div>
    </section>

    <section>
      <div class="user">
        <div class="account">
          <button v-show="!stateUser" class="account_login" @click="handleShowModalLogin">
            {{ $t("nav.login") }}
          </button>
          <button v-show="!stateUser" class="account_register">
            {{ $t("nav.register") }}
          </button>

          <button v-show="stateUser" @click="handlelogOut" class="account_logout">
            Log Out
          </button>
        </div>
        <DropdownLang />
      </div>

      <Transition name="modal_show_eff">
        <ModalLogin v-show="showModalLogin && !stateUser" @closeModal="handleHideModalLogin" @openModalFogot="handleShowModalForgot"/>
      </Transition>

      <Transition name="modal_show_eff">
        <ModalForgotPassword v-show="showModalForgotPassword" @closeModal="handleHideModalForgot"/>
      </Transition>
    </section>
  </header>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Trans from '@i18n/translation'
import DropdownLang from '@comp/DropdownLang.vue'
import ModalLogin from '@/components/ModalLogin.vue'
import ModalForgotPassword from '@/components/ModalForgotPassword.vue'
import { useStore } from 'vuex'

const store = useStore()
const stateUser = computed(() => store.getters.stateUser)

const showModalLogin = ref(false)
const showModalForgotPassword = ref(false)

const handleShowModalLogin = () => {
  showModalLogin.value = true
}

const handleHideModalLogin = () => {
  showModalLogin.value = false
}

const handleShowModalForgot = () => {
  showModalLogin.value = false
  showModalForgotPassword.value = true
}

const handleHideModalForgot = () => {
  showModalForgotPassword.value = false
}

const handlelogOut = async () => {
  await store.dispatch('logOut')
}

watch(
  () => stateUser.value, () => {
    if (stateUser.value) showModalLogin.value = false
  }
)

</script>
