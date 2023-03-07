<template>
  <main>
    <div class="container mx-auto px-4">
      <div class="flex w-10/12 mx-auto">
        <h1
          class="font-sans text-5xl antialiased font-semibold tracking-wider my-8 mr-5"
          >Quizzes</h1
        >
        <input
          class="border-black border mx-1 my-10 p-2"
          placeholder="Search..."
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="my-11 w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

      </div>
    <QuizBlockComponent :quizzes="quizzesList"/>
    </div>
  </main>
</template>

<script lang="ts">
import QuizBlockComponent from '../components/quiz/QuizBlock.vue';

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
