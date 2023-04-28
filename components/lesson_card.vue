<template>
  <div class="lesson_card">
    <nuxt-link :to="`/course/${course.id}`" class="img">
      <img :src="require(`@/assets/images/courses/${course.img}`)" alt="" />
    </nuxt-link>
    <div class="info">
      <nuxt-link :to="`/course/${course.id}`" class="top">
        <p class="card_title">{{ course.title }}</p>
        <p class="lessons_name">{{ course.lessons_name }}</p>
      </nuxt-link>
      <div class="star_levels">
        <div class="star" v-for="(i, j) in course.stars" :key="j">
          <img src="@/static/courses/star.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
