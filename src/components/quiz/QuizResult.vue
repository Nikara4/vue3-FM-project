<template>
  <div v-if="isQuizFinished">
    <h3 class="xsm:text-md xsm:m-5 uppercase font-sans font-semibold text-xl mx-10 my-8">
      Congrats, you have finished the quiz!
    </h3>
    <p class="xsm:text-md xl:text-xl font-sans mx-10">Your Results:</p>
    <h4 class="xsm:text-md xl:text-xl font-sans mx-10 mb-5 font-semibold antialiased">{{
      `${numberOfCorrectAnswers}/${numberOfQuestions}`
    }}</h4>

    <p class="xsm:text-sm text-md xl:text-lg font-sans mx-10"
      >You can try again and retake the quiz:</p
    >
  </div>
</template>

<script lang="ts">
export default {
  props: ['isQuizFinished', 'numberOfCorrectAnswers', 'numberOfQuestions'],
};
</script>
