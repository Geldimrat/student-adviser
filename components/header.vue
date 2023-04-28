<template>
  <div class="header_content">
    <div class="logo">
      <nuxt-link to="/">LOGO</nuxt-link>
    </div>
    <nav :class="[{ toggle_menu: toggle_btn }, 'nav_menu']">
      <ul>
        <li @click="toggle_fn">
          <nuxt-link class="links" to="/#home">Home</nuxt-link>
        </li>
        <li @click="toggle_fn">
          <nuxt-link class="links" to="/#courses">Courses</nuxt-link>
        </li>
        <li @click="toggle_fn">
          <nuxt-link class="links" to="/#individual_class"
            >Individual Class</nuxt-link
          >
        </li>
        <li @click="toggle_fn">
          <nuxt-link class="links" to="/#about">About Us</nuxt-link>
        </li>
      </ul>
      <div class="lang">
        <button class="change_btn" @click="toggle_fn">TM</button>
        <button class="change_btn active_lang" @click="toggle_fn">EN</button>
      </div>
    </nav>
    <div class="humburger_menu">
      <svg
        width="35"
        height="22"
        viewBox="0 0 35 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="toggle_fn"
        :class="{ hide_btn: toggle_btn }"
      >
        <rect width="34.7368" height="3.47368" rx="1.73684" fill="#D9D9D9" />
        <rect
          x="5.78946"
          y="9.26318"
          width="28.9474"
          height="3.47368"
          rx="1.73684"
          fill="#D9D9D9"
        />
        <rect
          x="17.3684"
          y="18.5264"
          width="17.3684"
          height="3.47368"
          rx="1.73684"
          fill="#D9D9D9"
        />
      </svg>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="toggle_fn"
        :class="{ hide_btn: !toggle_btn }"
      >
        <path
          d="M24 8L8 24M24 24L8 8"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle_btn: false,
      // scrollPosition: null,
    }
  },
  methods: {
    toggle_fn() {
      let s_width = screen.width
      if (s_width < 600) {
        this.toggle_btn ^= true
        // console.log(s_width)
      }

      let body = document.getElementsByTagName('html')[0]
      if (this.toggle_btn) {
        body.classList.add('nav_menu_scoll_none')
      } else {
        body.classList.remove('nav_menu_scoll_none')
      }
      this.$emit('toggle_id', this.toggle_btn)
    },

    // updateScroll() {
    //   this.scrollPosition = window.scrollY
    // },
  },
  mounted() {
    // window.addEventListener('scroll', this.updateScroll)
  },
}
</script>

<style></style>
