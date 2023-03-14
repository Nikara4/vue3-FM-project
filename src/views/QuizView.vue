<!-- eslint-disable vue/valid-v-for -->
<template>
  <main>
    <div class="container mx-auto px-4">
      <div class="flex w-10/12 mx-auto my-8">
        <h1 class="font-sans text-4xl antialiased font-semibold tracking-wider"
          >Quiz Details</h1
        >
      </div>
      <div class="w-10/12 max-h-max mx-auto">
        <div class="w-10/12 h-auto border border-black my-5 mx-10 shadow-md">
          <QuizDetail
            :isQuizStarted="isQuizStarted"
            @start-quiz="startTheQuiz"
            :categoryId="routeParams"
          />
          <Suspense>
            <QuizQuestion
              :isQuizStarted="isQuizStarted"
              @start-quiz="startTheQuiz"
              :categoryId="routeParams"
            />
            <template v-slot:fallback>halo</template>
          </Suspense>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import QuizDetail from '../components/quiz/QuizDetail.vue';
import QuizQuestion from '../components/quiz/QuizQuestion.vue';

import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const routeParams: string | string[] = route.params.id;

    return {
      routeParams,
    };
  },
  components: {
    QuizDetail,
    QuizQuestion,
  },
  data() {
    return {
      isQuizStarted: false,
    };
  },
  methods: {
    startTheQuiz() {
      this.isQuizStarted = !this.isQuizStarted;
    },

  },
};
</script>
