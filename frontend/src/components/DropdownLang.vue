<template>
  <section class="dropdown-lang">
    <button class="btn" @click="show = !show">
      <span>EN</span>
    </button>
    <div class="dropdown" :class="{ show }">
      <ul>
        <li v-for="option in options" :key="option.title">
          <div>{{ option.title }}</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const options = [
  {
    title: 'English',
    short: 'EN'
  },
  {
    title: 'VietNam',
    short: 'VN'
  },
  {
    title: 'Japan',
    short: 'JP'
  }
]

const show = ref(false)
</script>
