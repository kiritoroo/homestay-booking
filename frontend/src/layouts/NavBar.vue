<template>
  <header id="navbar">
    <section class="logo">
      <Transition name="logo_appear_eff" appear>
        <router-link class="logo_link" :to="{ name: 'home' }">
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
        </router-link>
      </Transition>
    </section>

    <section>
      <div class="menu">
        <router-link :to="{ name: 'about' }">
          About
        </router-link>
        <router-link :to="{ name: 'news' }">
          News
        </router-link>
        <router-link :to="{ name: 'contact' }">
          Contact
        </router-link>
      </div>
    </section>

    <section>
      <div class="user">
        <div class="account">
          <button class="account_login">Login</button>
          <button class="account_register">Register</button>
        </div>
        <DropdownLang />
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
import DropdownLang from '@comp/DropdownLang.vue'
</script>
