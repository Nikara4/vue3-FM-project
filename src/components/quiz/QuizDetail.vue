<template>
  <div  class="xsm:h-bar-sm w-full h-3 mb-2.5">
    <div
    v-if="quizStarted"
      class="h-full-h bg-teal-700 duration-300 "
      :style="{ width: barPercentage }"
    />
  </div>
  <div>
    <h3
      class="xsm:text-xl xl:text-3xl uppercase font-sans antialiased font-semibold ml-5 mb-1"
    >
      {{ quizCategoryName?.name }}
      <span v-if="!showResults && quizStarted"
        >: question {{ questionStatus }}</span
      >
    </h3>
  </div>
  <div v-if="initialQuizPage">
    <p class="xsm:text-sm xl:text-xl mx-10">{{ quizCategoryName?.descr }}</p>
    <div class="xsm:m-5">
      <BasicButton @click-action="startTheQuiz"
        >take the quiz
      </BasicButton></div
    >
  </div>
</template>

<script lang="ts">
import BasicButton from '../button/BasicButton.vue';

export default {
  components: {
    BasicButton,
  },
  props: [
    'initialQuizPage',
    'quizStarted',
    'showResults',
    'categoryId',
    'questionStatus',
    'barPercentage',
    'quizCategoryName'
  ],
  emits: ['start-quiz'],
  methods: {
    startTheQuiz() {
      this.$emit('start-quiz');
    },
  },
};
</script>
