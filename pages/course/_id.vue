<template>
  <div class="course_details">
    <div class="content">
      <div class="information">
        <div class="sides">
          <div class="left">
            <p class="course_name">App Development</p>
            <p class="course_description">
              Learn how to create IOS and Android mobile applications in
              Bootcamp with qualified teachers.
            </p>
            <div class="advantages">
              <p class="title">
                After completing this course you will able to:
              </p>
              <div class="adv_text">
                <svg
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6 11.9999C21.6 17.3018 17.302 21.5999 12 21.5999C6.69809 21.5999 2.40002 17.3018 2.40002 11.9999C2.40002 6.69797 6.69809 2.3999 12 2.3999C13.5062 2.3999 14.9314 2.74677 16.2 3.36498M19.8 5.9999L11.4 14.3999L9.00002 11.9999"
                    stroke="#0BCB07"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>
                  Make pretty much any Android app you like (your only limit is
                  your imagination)</span
                >
              </div>
              <div class="adv_text">
                <svg
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6 11.9999C21.6 17.3018 17.302 21.5999 12 21.5999C6.69809 21.5999 2.40002 17.3018 2.40002 11.9999C2.40002 6.69797 6.69809 2.3999 12 2.3999C13.5062 2.3999 14.9314 2.74677 16.2 3.36498M19.8 5.9999L11.4 14.3999L9.00002 11.9999"
                    stroke="#0BCB07"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span
                  >Submit your apps to Google Play and generate revenue with
                  Google Pay and Google Ads</span
                >
              </div>
              <div class="adv_text">
                <svg
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6 11.9999C21.6 17.3018 17.302 21.5999 12 21.5999C6.69809 21.5999 2.40002 17.3018 2.40002 11.9999C2.40002 6.69797 6.69809 2.3999 12 2.3999C13.5062 2.3999 14.9314 2.74677 16.2 3.36498M19.8 5.9999L11.4 14.3999L9.00002 11.9999"
                    stroke="#0BCB07"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span
                  >Become a professional app developer, take freelance gigs and
                  work from anywhere in the world</span
                >
              </div>
              <div class="adv_text">
                <svg
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.6 11.9999C21.6 17.3018 17.302 21.5999 12 21.5999C6.69809 21.5999 2.40002 17.3018 2.40002 11.9999C2.40002 6.69797 6.69809 2.3999 12 2.3999C13.5062 2.3999 14.9314 2.74677 16.2 3.36498M19.8 5.9999L11.4 14.3999L9.00002 11.9999"
                    stroke="#0BCB07"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span
                  >Bored with the same old, same old? Apply for a new job in a
                  software company as an Android developer</span
                >
              </div>
            </div>
          </div>
          <div class="right">
            <div class="img">
              <img :src="require(`@/assets/images/courses/3.png`)" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="lessons_in_course">
        <p class="name">Lessons in this course</p>
        <div class="drop_down_menus">
          <div class="drop_down" v-for="(e, i) in details" :key="i">
            <button
              @click="toggle_drop_fn(i)"
              :class="[{ drop_down_opened: e.toggle_drop_menu }, 'drop_btn']"
            >
              <span>Introduction</span>
              <svg
                v-if="!e.toggle_drop_menu"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.73715 7.19583C6.34082 7.6282 5.65918 7.6282 5.26285 7.19583L0.393087 1.88337C-0.402039 1.01596 0.693342 -0.273491 1.67789 0.370934L5.45246 2.84154C5.78511 3.05926 6.21514 3.05926 6.54778 2.84153L10.3219 0.371187C11.3064 -0.273252 12.4018 1.0162 11.6067 1.88361L6.73715 7.19583Z"
                  fill="#D9D9D9"
                />
              </svg>
              <svg
                v-else
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.26285 0.804168C5.65918 0.371801 6.34082 0.371801 6.73715 0.804168L11.6069 6.11663C12.402 6.98404 11.3067 8.27349 10.3221 7.62907L6.54754 5.15846C6.21489 4.94074 5.78486 4.94074 5.45222 5.15847L1.67813 7.62881C0.69358 8.27325 -0.40182 6.9838 0.393309 6.11639L5.26285 0.804168Z"
                  fill="#D9D9D9"
                />
              </svg>
            </button>
            <div
              :class="[
                { show_drop_menu: e.toggle_drop_menu },
                'drop_menu_content',
              ]"
            >
              <a href="" class="course_data">Flutter.zip</a>
              <a href="" class="course_data">Android Studio.zip</a>
              <a href="" class="course_data">udemy.com/learn-flutter.html</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const details = [
      {
        id: 1,
        toggle_drop_menu: false,
      },
      {
        id: 2,
        toggle_drop_menu: false,
      },
      {
        id: 3,
        toggle_drop_menu: false,
      },
      {
        id: 4,
        toggle_drop_menu: false,
      },
    ]
    return {
      details,
    }
  },
  methods: {
    toggle_drop_fn(e) {
      for (const i in this.details) {
        if (i == e) {
          this.details[i].toggle_drop_menu ^= true
        }
      }
      // this.toggle_drop_menu ^= true
    },
  },
}
</script>

<style></style>
