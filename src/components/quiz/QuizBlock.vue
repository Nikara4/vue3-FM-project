<template>
  <div class="home--div__quizes w-10/12 max-h-max mx-auto">
    <ul class="grid grid-cols-3">
      <li v-for="quiz in quizzes" :key="quiz.id"
        ><div class="w-96 h-72 border border-black m-10 shadow-md">
          <div class="image w-full h-3/5 bg-black mb-5"></div>
          <h3 class="uppercase font-sans font-semibold text-xl ml-3 mb-3">
            <RouterLink to="/quiz-details">{{
            quiz.name
          }}</RouterLink>
            </h3>
          <p class="ml-5">15 questions</p>
        </div></li
      >
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: ['quizzes'],
};
</script>
