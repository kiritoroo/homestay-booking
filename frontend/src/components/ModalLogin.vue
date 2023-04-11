<template>
  <section class="modal-login">
    <div class="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="btn-close" @click="$emit('close')">
            <v-icon icon="mdi-close" medium dark></v-icon>
          </div>

          <div class="modal-container">
            <div class="welcome">
              {{$t("login.welcome") }}&nbsp;
              <div class="name">
                <span>To</span>
                <span>to</span>
                <span>ro.</span>
              </div>
              <div class="inc">
                &nbsp;Homestay
              </div>
            </div>

            <div class="login-option">
              <button type="button" class="login-google">
                <img src="@asset/icons/ico_google.png">
                <div>{{$t("login.google") }}</div>
              </button>
              <button type="button" class="login-apple">
                <img src="@asset/icons/ico_apple.png">
                <div>{{$t("login.apple") }}</div>              </button>
            </div>

            <div class="divide">{{$t("login.or") }}</div>

            <div class="input-group">
              <input type="text" required>
              <div class="hint">
                <v-icon class="icon" icon="mdi-account-circle"></v-icon>
                <label>{{$t("login.username") }}</label>
              </div>
            </div>

            <div class="input-group">
              <input type="text" required>
              <div class="hint">
                <v-icon class="icon" icon="mdi-lock"></v-icon>
                <label>{{$t("login.password") }}</label>
              </div>
            </div>

            <div class="forgot">{{$t("login.forgot") }}</div>

            <button type="button" class="btn-signin">
              {{$t("login.signin") }}
            </button>

            <div class="signup">
              <div>{{$t("login.signup1") }}</div>
              <div class="link">&nbsp;{{$t("login.signup2") }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
