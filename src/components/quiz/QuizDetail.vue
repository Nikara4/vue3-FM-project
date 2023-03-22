<template>
  <div
    class="xsm:h-block-sm g-cover bg-center w-full h-60 2xl:h-respnsive-detail-img"
    :style="{ backgroundImage: getQuizImg() }"
  />
  <div v-if="quizStarted" class="xsm:h-bar-sm w-full h-3 mb-2.5 2xl:h-14">
    <div
      class="h-full-h bg-teal-700 duration-300"
      :style="{ width: barPercentage }"
    />
  </div>
  <div>
    <h3
      class="xsm:text-3xl xsm:mt-10 uppercase font-sans antialiased font-semibold text-2xl ml-5 mb-3"
    >
      {{ quizCategoryName?.name }}
      <span v-if="!showResults && quizStarted"
        >: question {{ questionStatus }}</span
      >
    </h3>
  </div>
  <div v-if="initialQuizPage">
    <p class="xsm:text-xl xsm:my-5 mx-10">{{ quizCategoryName?.descr }}</p>
    <div class="xsm:m-5">
      <BasicButton @click-action="startTheQuiz"
        >take the quiz
      </BasicButton></div
    >
  </div>
</template>

<script lang="ts">
import BasicButton from '../button/BasicButton.vue';
import { quizCategory } from '../../data/quizCategories';
import type { Quiz } from '../../types/quizCategories';

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
  ],
  emits: ['start-quiz'],
  data() {
    return {
      quizCategoryName: {} as Quiz | undefined,
      quizCategory: quizCategory,
    };
  },
  methods: {
    startTheQuiz() {
      this.$emit('start-quiz');
    },
    getQuizCategory() {
      this.quizCategoryName = this.quizCategory.find(
        (category: { categoryNumber: any }) => {
          return category.categoryNumber === this.categoryId;
        }
      );
    },
    getQuizImg() {
      return `url('https://raw.githubusercontent.com/Nikara4/vue3-quiz-project/main/public/img/${this.quizCategoryName?.img}')`;
    },
  },
  created() {
    this.getQuizCategory();
  },
};
</script>
