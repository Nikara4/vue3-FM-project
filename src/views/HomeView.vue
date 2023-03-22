<template>
  <main>
    <div class="w-screen">
      <div class="max-h-max">
        <ul class="xsm:grid-cols-1 grid grid-cols-3 2xl:grid-cols-2">
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
