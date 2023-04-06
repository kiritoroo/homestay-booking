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
      <router-link :to="{ name: 'about' }">
        About
      </router-link>
    </section>

    <section>
      <div>Login</div>
    </section>
  </header>
</template>
