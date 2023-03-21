<template>
  <main>
    <div class="container mx-auto">
      <div class="max-h-max mx-auto">
        <ul class="grid grid-cols-3">
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
