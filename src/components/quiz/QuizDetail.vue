<template>
  <div
    class="bg-cover bg-center w-full h-60"
    :style="{ backgroundImage: getQuizImg() }"
  />
  <div class="w-full h-3 mb-2.5">
    <div
      v-if="quizStarted"
      class="h-full bg-teal-700 duration-300"
      :style="{ width: barPercentage }"
    ></div>
  </div>
  <div>
    <h3
      class="uppercase font-sans antialiased font-semibold text-2xl ml-5 mb-3"
    >
      {{ quizCategoryName.name }}
      <span v-if="!showResults && quizStarted">: question {{ questionStatus }}</span>
    </h3>
  </div>
  <div v-if="initialQuizPage">
    <p class="mx-10">{{ quizCategoryName.descr }}</p>
    <BasicButton @click-action="startTheQuiz">take the quiz </BasicButton>
  </div>
</template>

<script lang="ts">
import BasicButton from '../button/BasicButton.vue';
import { quizCategory } from '../../data/quizCategories.js';

type QuizCategoryName = {
  categoryNumber: string,
  name: string,
  descr: string,
  img: string,
}

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
      quizCategoryName: {} as QuizCategoryName,
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
      return `url('../../../public/img/${this.quizCategoryName.img}')`;
    },
  },
  created() {
    this.getQuizCategory();
  },
};
</script>
