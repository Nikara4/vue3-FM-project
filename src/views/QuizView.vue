<!-- eslint-disable vue/valid-v-for -->
<template>
  <main>
    <div class="container mx-auto px-4">
      <div class="flex w-10/12 mx-auto">
        <h1
          class="font-sans text-5xl antialiased font-semibold tracking-wider my-8"
          >Quiz Details</h1
        >
      </div>
      <div class="w-10/12 max-h-max mx-auto">
        <div class="w-10/12 h-auto border border-black m-10 shadow-md">
          <div class="image w-full h-44 bg-black mb-5"></div>
          <h3 class="uppercase font-sans font-semibold text-2xl ml-3 mb-3">
            quiz name
          </h3>
          <p class="ml-5" v-if="!isQuizStarted"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</p
          >
          <button
            @click="startTheQuiz"
            class="border border-black px-3 py-1 m-5"
            >take the quiz</button
          >

          <div v-if="isQuizStarted">
            <h3 class="uppercase font-sans font-semibold text-xl ml-3 mb-3">
              {{ quizQuestion.question }}
            </h3>
            <ul>
              <li class="m-5" v-for="(answer, key) in quizQuestion.answers" :key="answer">
                {{ key }}: {{ answer }}</li
              >
            </ul>
            <button
            class="border border-black px-3 py-1 m-5"
            >next question</button
          >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isQuizStarted: false,
      quizQuestion: {
        id: '1',
        question: 'question?',
        answers: { A: '1', B: '2', C: '3', D: '4' },
      },
    };
  },
  methods: {
    startTheQuiz() {
      this.isQuizStarted = !this.isQuizStarted;
    },
  },
};
</script>
