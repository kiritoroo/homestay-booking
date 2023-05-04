<template>
  <section class="modal-forgot-password">
    <div class="mask">
      <div class="wrapper">
        <div class="btn-close" @click="$emit('closeModal')">
          <v-icon icon="mdi-close" medium dark></v-icon>
        </div>

        <div class="container">
          <div class="label">Forgot password</div>
          <div class="desc">Lost your password? Please enter your phone number. You will receive a Verification to create a new password.</div>
          <form class="form">
            <div class="input-group">
              <input v-model="userData.phone" type="text" required>
              <div class="hint">
                <v-icon class="icon" icon="mdi-account-circle"></v-icon>
                <label>Phone</label>
              </div>
            </div>
          </form>

          <button @click="handleForgotPasswordSubmit" type="button" class="btn">
            Forgot Password
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userData = ref({
  phone: ''
})

const handleForgotPasswordSubmit = () => {

}

</script>
