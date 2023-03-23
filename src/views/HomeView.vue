<template>
  <main>
    <div class="w-screen xl:w-10/12 xl:mx-auto">
      <div class="max-h-max">
        <ul class="grid xsm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <li v-for="quiz in quizCategory" :key="quiz.categoryNumber">
            <QuizBlock :quiz="quiz" />
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import QuizBlock from '../components/quiz/QuizBlock.vue';
import { quizzes } from '../composables/quizCategories';

export default {
  components: {
    QuizBlock,
  },
  data() {
    return {
      quizCategory: quizzes,
    };
  },
};
</script>
