<template>
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
