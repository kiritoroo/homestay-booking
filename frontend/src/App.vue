<template>
  <Navbar />
  <main id="content">
    <router-view v-slot="{ Component }">
      <Suspense v-if="Component">
        <component :is="Component" />
        <template #fallback>
          <h1>Loading...</h1>
        </template>
      </Suspense>
    </router-view>
  </main>
</template>

<script setup lang="ts">
import Navbar from '@layout/NavBar.vue'
import router from './router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

router.afterEach((to) => {
  const _baseTitle = 'Totoro'
  document.title = to.name ? `${_baseTitle} | ${t(`title.${String(to.name)}`)}` : _baseTitle
})
</script>
