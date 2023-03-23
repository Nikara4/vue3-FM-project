<template>
  <div>
    <ul>
      <h3 class="xsm:text-lg xsm:m-3 xl:text-xl antialiased uppercase font-sans font-semibold xl:mx-10 xl:my-8">
        {{ normaliseQuestions(question) }}
      </h3>
      <li
        class="xsm:text-md font-sans xsm:mx-1 xl:mx-10 xl:text-lg cursor-pointer hover:bg-teal-500 duration-200 active:bg-teal-600 flex"
        :class="`${answer}-${key}` === answerSelected && 'clicked-answer'"
        v-for="(answer, key) in answers"
        :key="`${answer}-${key}`"
        @click="onAnswerClick(answer, key)"
      >
        <span class="xsm:basis-1/4 xl:basis-24 block border-r border-black p-3 basis-12 text-center">{{
          key
        }}</span>
        <span class="xsm:basis-3/4 xl:px-10 p-3 block">{{ normaliseAnswers(answer) }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: ['question', 'answers', 'selected'],
  emits: ['selectAnswer'],
  data() {
    return {
      answerSelected: '',
    };
  },
  methods: {
    emitSelectedAnswer(answer: any) {
      this.$emit('selectAnswer', answer);
    },
    onAnswerClick(answer: any, key: any) {
      this.answerSelected = `${answer}-${key}`;
      this.emitSelectedAnswer(answer);
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
        .replace(/&eacute;/g, 'é');
    },
  },
};
</script>

<style scoped>
  .clicked-answer {
    background-color: rgb(20 184 166)
  }
</style>
