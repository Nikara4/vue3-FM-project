<template>
  <div class="home--div__quizes w-10/12 max-h-max mx-auto">
    <ul class="grid grid-cols-3">
      <li v-for="quiz in quizCategory" :key="quiz.categoryNumber">
        <div class="w-96 h-72 border border-black m-10 shadow-md">
          <div class="image w-full h-3/5 bg-black mb-5"></div>
          <h3 class="uppercase font-sans font-semibold text-xl ml-3 mb-3">
            <RouterLink :to="`/quiz-details/${quiz.categoryNumber}`">
              {{ quiz.name }}</RouterLink
            >
          </h3>
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
        { name: 'Entertainment: Books', categoryNumber: '10' },
        { name: 'Entertainment: Video Games', categoryNumber: '15' },
        { name: 'Entertainment: Japanese Anime & Manga', categoryNumber: '31' },
        { name: 'Celebrities', categoryNumber: '26' },
        { name: 'Animals', categoryNumber: '27' },
        { name: 'Geography', categoryNumber: '22' },
      ],
    };
  },
};
</script>
