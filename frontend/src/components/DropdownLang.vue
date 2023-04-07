<template>
  <section class="dropdown-lang">
    <button class="btn" @click="mouseClickhandle">
      <span> {{ $t(`locale.${locale}.short`) }}</span>
    </button>
    <div class="dropdown" :class="{ show }"
      @mouseover="mouseOverHandle"
      @mouseleave="hideHandle"
    >
      <ul>
        <li v-for="sLocale in supportedLocales"
          ref="refLocales"
          :data-locale="sLocale"
          :key="`locale-${sLocale}`"
          @click="switchLangHandle(sLocale)"
        >
          <div>{{ $t(`locale.${sLocale}.lang`) }}</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Trans from '@i18n/translation'

const timeOutIds: Array<any> = []
const show = ref(false)
const isMouseOver = ref(false)
const supportedLocales = Trans.supportedLocales
const { locale } = useI18n()
const refLocales = ref(null)
const router = useRouter()

function mouseClickhandle () {
  if (show.value) {
    return
  }
  show.value = true
  isMouseOver.value = false
  timeOutIds.forEach((id) => clearTimeout(id))
}

function mouseOverHandle () {
  isMouseOver.value = true
}

function hideHandle () {
  isMouseOver.value = false
  setTimeout(() => {
    show.value = false
  }, 200)
}

async function switchLangHandle (_newLocale: any) {
  await Trans.switchLanguage(_newLocale)

  try {
    await router.replace({ params: { locale: _newLocale } })
  } catch {
    router.push('/')
  }
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

watchEffect(() => {
  const localeSelectedEl: [] = refLocales.value!
  if (localeSelectedEl) {
    localeSelectedEl.forEach((el: HTMLElement) => {
      if (el.getAttribute('data-locale') === locale.value) {
        el.classList.add('active')
      } else {
        el.classList.remove('active')
      }
    })
  }
})
</script>
