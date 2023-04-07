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
          <button class="account_login">
            {{ $t("nav.login") }}
          </button>
          <button class="account_register">
            {{ $t("nav.register") }}
          </button>
        </div>
        <DropdownLang />
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
import Trans from '@i18n/translation'
import DropdownLang from '@comp/DropdownLang.vue'
</script>
