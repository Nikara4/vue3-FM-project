<template>
  <div v-if="isQuizStarted">
    <ul>
      <h3 class="uppercase font-sans font-semibold text-xl mx-10 my-8">
        {{ normaliseQuestions(question) }}
      </h3>
      <li
        class="font-sans mx-10 cursor-pointer hover:bg-gray-200 duration-200 active:bg-gray-300 flex"
        v-for="(answer, key) in answers"
        :key="answer"
        @click="emitSelectedAnswer(answer)"
      >
        <!-- :style="answer === answerSelected && {backgroundColor: 'rgb(156 163 175)'}" -->
        <span class="block border-r border-black p-3 basis-12 text-center">{{
          key
        }}</span>
        <span class="p-3 block">{{ normaliseAnswers(answer) }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: ['isQuizStarted', 'question', 'answers'],
  emits: ['start-quiz', 'selectAnswer'],
  methods: {
    startTheQuiz() {
      this.$emit('start-quiz');
    },
    emitSelectedAnswer(answer: any) {
      this.$emit('selectAnswer', answer)
    },
    normaliseAnswers(answer: string) {
      return answer
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'")
          .replace(/&rsquo;/g, "'")
          .replace(/&eacute;/g, 'é')
          .replace(/&amp;/g, '&')
          .replace(/&amp;/g, 'ü');
      },
      normaliseQuestions(question: string) {
      return question
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'")
          .replace(/&eacute;/g, "é")
      },
    }
};
</script>
