<template>
  <section class="dropdown-lang">
    <button class="btn" @click="mouseClickhandle">
      <span>EN</span>
    </button>
    <div class="dropdown" :class="{ show }"
      @mouseover="mouseOverHandle"
      @mouseleave="hideHandle"
    >
      <ul>
        <li v-for="option in options" :key="option.title">
          <div>{{ option.title }}</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const options = [
  {
    title: 'English (EN)',
    short: 'EN'
  },
  {
    title: 'Việt Nam (VN)',
    short: 'VN'
  },
  {
    title: '日本 (JP)',
    short: 'JP'
  }
]

const timeOutIds: Array<any> = []
const show = ref(false)
const isMouseOver = ref(false)

const mouseClickhandle = () => {
  if (show.value) {
    return
  }
  show.value = true
  isMouseOver.value = false
  timeOutIds.forEach((id) => clearTimeout(id))
}

const mouseOverHandle = () => {
  isMouseOver.value = true
}

const hideHandle = () => {
  isMouseOver.value = false
  setTimeout(() => {
    show.value = false
  }, 200)
}

watch(
  () => show.value, () => {
    timeOutIds.push(setTimeout(() => {
      if (!isMouseOver.value) {
        show.value = false
        isMouseOver.value = false
      }
    }, 800))
  }
)
</script>
