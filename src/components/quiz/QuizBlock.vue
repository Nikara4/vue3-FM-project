<template>
  <div class="home--div__quizes w-10/12 max-h-max mx-auto">
    <ul class="grid grid-cols-3">
      <li v-for="quiz in quizCategory" :key="quiz.categoryNumber">
        <div
          class="mb-5 mx-5 bg-cover bg-center w-96 h-56 border border-black m-10 shadow-md cursor-pointer relative -z-50"
          :style="{ backgroundImage: getQuizImg(quiz) }"
        >
          <div
            class="text-white font-medium uppercase antialiased font-sans font-semibold text-xl m-5 w-full h-full absolute hidden hover:block"
          >
            <RouterLink :to="`/quiz-details/${quiz.categoryNumber}`">
              {{ quiz.name }}</RouterLink
            >
            </div>
        </div>

      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      quizCategory: [
        {
          name: 'Entertainment: Books',
          categoryNumber: '10',
          img: 'pexels-books-1472841.jpeg',
        },
        {
          name: 'Entertainment: Video Games',
          categoryNumber: '15',
          img: 'pexels-games-442576.jpeg',
        },
        {
          name: 'Entertainment: Japanese Anime & Manga',
          categoryNumber: '31',
          img: 'pexels-anime-manga-9334944.jpeg',
        },
        {
          name: 'Celebrities',
          categoryNumber: '26',
          img: 'pexels-celebrities-3394310.jpeg',
        },
        {
          name: 'Animals',
          categoryNumber: '27',
          img: 'pexels-animals-39627.jpeg',
        },
        {
          name: 'Geography',
          categoryNumber: '22',
          img: 'pexels-geography-5008436.jpeg',
        },
      ],
    };
  },
  methods: {
    getQuizImg(quiz: any) {
      return `url('public/img/${quiz.img}')`;
    },
  },
};
</script>
