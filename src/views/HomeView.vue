<template>
  <main>
    <div class="container mx-auto px-4">
      <div class="flex w-10/12 mx-auto">
        <h1
          class="font-sans text-5xl antialiased font-semibold tracking-wider my-8"
          >Quizzes</h1
        >
        <input
          class="border-black border mx-5 my-10 p-2"
          placeholder="Search..."
        />
      </div>
    <QuizBlockComponent :quizzes="quizzesList"/>
    </div>
  </main>
</template>

<script lang="ts">
import QuizBlockComponent from '../components/quiz-component/QuizBlockComponent.vue';

export default {
  components: {
    QuizBlockComponent
  },
  data() {
    return {
      quizzesList: [
      { id: '1', name: 'Books' },
      { id: '2', name: 'Video Games' },
      { id: '3', name: 'Anime & Manga' },
      { id: '4', name: 'Celebrities' },
      { id: '5', name: 'Animals' },
      { id: '6', name: 'Computers' },
    ],
    }
  },
};
</script>
