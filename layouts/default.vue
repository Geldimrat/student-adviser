<template>
  <div class="main">
    <div :class="[toggle_btn ? 'active_color' : '', 'header']">
      <Header @toggle_id="p_info" />
    </div>
    <nuxt />
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      toggle_btn: false,
    }
  },
  methods: {
    p_info(id) {
      this.toggle_btn = id
    },
  },
}
</script>

<style></style>
