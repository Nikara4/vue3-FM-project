<template>
  <div
    class="bg-cover bg-center w-full h-60 bg-black mb-5"
    :style="{ backgroundImage: getQuizImg() }"
  />

  <div>
    <h3
      class="uppercase font-sans antialiased font-semibold text-2xl ml-5 mb-3"
    >
      {{ quizCategoryName.name }}
    </h3>
    <p class="mx-10" v-if="!isQuizStarted">{{ quizCategoryName.descr }}</p>
    <BasicButton @click-action="startTheQuiz">
      {{ !isQuizStarted ? 'take the quiz' : 'go back'}}
      </BasicButton>
  </div>
</template>

<script lang="ts">
import BasicButton from '../button/BasicButton.vue';
import { quizCategory } from '../../data/quizCategories.js';

export default {
  components: {
    BasicButton,
  },
  props: ['isQuizStarted', 'categoryId'],
  emits: ['start-quiz'],
  data() {
    return {
      quizCategoryName: {},
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
