<template>
  <main>
    <div class="container mx-auto px-4">
      <QuizBlockComponent />

    </div>
  </main>
</template>

<script lang="ts">
import QuizBlockComponent from '../components/quiz/QuizBlock.vue';
import { useRoute } from 'vue-router';



export default {
  setup() {
    const route = useRoute();
  },
  components: {
    QuizBlockComponent,
  },
  // data() {
  //   return {
  //     quizCategory: [
  //       { name: 'Entertainment: Books', categoryNumber: '10' },
  //       { name: 'Entertainment: Video Games', categoryNumber: '15' },
  //       { name: 'Japanese Anime & Manga', categoryNumber: '31' },
  //       { name: 'Celebrities', categoryNumber: '26' },
  //       { name: 'Animals', categoryNumber: '27' },
  //       { name: 'Geography', categoryNumber: '22' },
  //     ],
  //     quizFullList: [],
  //   };
  // },
  // methods: {
  //   async fetchTrivia(index: number) {
  //     return await fetch(
  //       `${BASE_URL}amount=10&category=${this.quizCategory[index].categoryNumber}&difficulty=medium&type=multiple`
  //     ).then((response) => response.json());
  //   },
  //   async getQuizFullList() {
  //     let category;
  //     for (let i = 0; i < this.quizCategory.length; i++) {
  //       category = await this.fetchTrivia(i);

  //       this.quizFullList.push(category.results);
  //     }
  //     console.log(this.quizFullList);
  //   },
  // },
  // created() {
  //   this.getQuizFullList();
  // },
};
</script>
