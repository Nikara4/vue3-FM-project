<template>
  <div>
    <h3 class="uppercase font-sans font-semibold text-2xl ml-3 mb-3">
      <pre>{{ quizCategoryName.name }}</pre>
    </h3>
    <p class="ml-5" v-if="!isQuizStarted">tekst</p>
    <BasicButton @click-action="startTheQuiz"> take the quiz </BasicButton>
  </div>
</template>

<script lang="ts">
import BasicButton from '../button/BasicButton.vue';

export default {
  components: {
    BasicButton,
  },
  props: ['isQuizStarted', 'categoryId'],
  emits: ['start-quiz'],
  data() {
    return {
      quizCategoryName: {},
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
  methods: {
    startTheQuiz() {
      this.$emit('start-quiz');
    },
    getQuizCategory() {
      this.quizCategoryName = this.quizCategory.find((category) => {
        return category.categoryNumber === this.categoryId;
      });
    },
  },
  created() {
    this.getQuizCategory();
  },
};
</script>
