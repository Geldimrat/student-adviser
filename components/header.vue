<template>
  <div :class="[toggle_btn ? 'active_color' : '', 'header']">
    <div class="header_content">
      <div class="logo">
        <nuxt-link to="/">{{
          $tt('TalypMaslahatçysy', 'StudentAdviser')
        }}</nuxt-link>
      </div>
      <nav :class="[{ toggle_menu: toggle_btn }, 'nav_menu']">
        <ul>
          <li @click="toggle_fn" v-for="(e, i) in links" :key="i">
            <nuxt-link class="links" :to="e.href">{{
              $tt(e.name_tm, e.name_en)
            }}</nuxt-link>
          </li>
        </ul>
        <div class="lang">
          <button
            v-for="(l, i) in locales"
            :key="i"
            class="change_btn"
            :class="{ active_lang: lang == l.code }"
            @click="$i18n.setLocale(l.code)"
          >
            {{ l.name }}
          </button>
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
  </div>
</template>

<script>
export default {
  data() {
    const links = [
      {
        id: 1,
        name_tm: 'Baş sahypa',
        name_en: 'Home',
        href: '/#home',
      },
      {
        id: 2,
        name_tm: 'Kurslar',
        name_en: 'Courses',
        href: '/#courses',
      },
      {
        id: 3,
        name_tm: 'Şahsy klas',
        name_en: 'Individual Class',
        href: '/#individual_class',
      },
      {
        id: 4,
        name_tm: 'Biz barada',
        name_en: 'About Us',
        href: '/#about',
      },
    ]
    return {
      toggle_btn: false,
      links,
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
      // this.$emit('toggle_id', this.toggle_btn)
    },

    // updateScroll() {
    //   this.scrollPosition = window.scrollY
    // },
  },
  computed: {
    lang() {
      return this.$i18n.locale
    },
    locales() {
      return this.$i18n.locales
    },
  },
  mounted() {
    // window.addEventListener('scroll', this.updateScroll)
  },
}
</script>

<style></style>
