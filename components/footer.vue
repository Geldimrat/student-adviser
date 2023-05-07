<template>
  <div class="footer_component">
    <div class="content">
      <div class="about">
        <p class="logo">LOGO</p>
        <p class="info_text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div class="web_site_link">
          <a href="https://student-adviser.vercel.app/" target="_blank">student-adviser.vercel.app</a>
        </div>
      </div>
      <div class="nav_links">
        <p class="title">Website</p>
        <ul>
          <li>
            <nuxt-link to="/#home">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/#courses">Courses</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/#individual_class">Individual class</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/#">About us</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="contact_us">
        <p class="title">Contact Us</p>
        <p class="description">
          You can contact with us and making advice related to your courses
          everytime.
        </p>
        <p class="phone_num">+993 64 870262</p>
      </div>
      <div class="sosial_media">
        <p class="title">Social media accounts</p>
        <ul class="social_links">
          <li>
            <a href="https://www.ebilim.com.tm/" target="_blank">
              <img src="@/static/social-media-icons/e-bilim.png" alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://e.gov.tm/services/ahli-bolumler/bilim-ulgamy"
              target="_blank"
            >
              <img src="@/static/social-media-icons/e-gov.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="https://horjuntv.com.tm/tm/channel/bm" target="_blank">
              <img src="@/static/social-media-icons/horjun.svg" alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://turkmenportal.com/tm/blog/tazelikler/bilim"
              target="_blank"
            >
              <img src="@/static/social-media-icons/logo-tp.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="web_licence">
      <p class="text">Copyright ® 2022 Student Advisor All rights Rcerved</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
