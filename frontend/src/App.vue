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
</script>
