<template>
  <div class="all_courses_page">
    <div class="content">
      <p class="page_title">Special <span>Courses</span> for you</p>
      <div class="sort_and_search">
        <div class="sort">
          <button class="sort_btn">All</button>
          <button class="sort_btn active">Top Ranking</button>
        </div>
        <div class="search">
          <input type="text" placeholder="search..." class="input_search" />
        </div>
      </div>
      <div class="all_lessons">
        <CardLesson v-for="(e, j) in courses" :key="j" :course="e" />
      </div>
    </div>
  </div>
</template>

<script>
import CardLesson from '@/components/lesson_card.vue'
export default {
  components: {
    CardLesson,
  },
  data() {
    const courses = [
      {
        id: 1,
        img: '1.png',
        title: 'Data analytics and business intelligense',
        lessons_name: 'Python, SQL, Tableau, ETL, Power BI',
        stars: 5,
      },
      {
        id: 2,
        img: '3.png',
        title: 'App development',
        lessons_name: 'Dart, Flutter',
        stars: 5,
      },
      {
        id: 3,
        img: '2.png',
        title: 'UI/UX design',
        lessons_name: 'Adobe XD, Figma',
        stars: 5,
      },
      {
        id: 1,
        img: '1.png',
        title: 'Data analytics and business intelligense',
        lessons_name: 'Python, SQL, Tableau, ETL, Power BI',
        stars: 5,
      },
      {
        id: 2,
        img: '3.png',
        title: 'App development',
        lessons_name: 'Dart, Flutter',
        stars: 5,
      },
      {
        id: 3,
        img: '2.png',
        title: 'UI/UX design',
        lessons_name: 'Adobe XD, Figma',
        stars: 5,
      },
      {
        id: 1,
        img: '1.png',
        title: 'Data analytics and business intelligense',
        lessons_name: 'Python, SQL, Tableau, ETL, Power BI',
        stars: 5,
      },
      {
        id: 2,
        img: '3.png',
        title: 'App development',
        lessons_name: 'Dart, Flutter',
        stars: 5,
      },
      {
        id: 3,
        img: '2.png',
        title: 'UI/UX design',
        lessons_name: 'Adobe XD, Figma',
        stars: 5,
      },
    ]

    return {
      courses,
    }
  },
}
</script>

<style></style>
