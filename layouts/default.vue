<template>
  <div class="main">
    <div>
      <Header />
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
}
</script>

<style></style>
