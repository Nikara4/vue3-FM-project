<template>
  <div v-if="isQuizStarted">
    <ul v-for="(question, index) in quizQuestions.results" :key="question">
      <h3 class="uppercase font-sans font-semibold text-xl ml-3 mb-3">
        {{ question.question }}
      </h3>
      <li
        class="font-sans m-5"
        v-for="(answer, key) in getAllAnswers()[index]"
        :key="answer"
      >
        {{ key }}: {{ answer }}
      </li>
    </ul>
    <BasicButton @click-action="startTheQuiz"> next question </BasicButton>
  </div>
</template>

<script lang="ts">
import BasicButton from '../button/BasicButton.vue';

const BASE_URL =
  'https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple';

export default {
  components: {
    BasicButton,
  },
  props: ['isQuizStarted'],
  emits: ['start-quiz'],
  data() {
    return {
      quizQuestions: {},
      arrayWithAllAnswers: this.getAllAnswers,
    };
  },
  methods: {
    startTheQuiz() {
      this.$emit('start-quiz');
    },
    async fetchTrivia() {
      this.quizQuestions = await fetch(BASE_URL).then((response) =>
        response.json()
      );
      this.getAllAnswers();
    },
    shuffleArray(array: []) {
      let currentIndex = array.length,
        randomIndex;

      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    },

    getAllAnswers() {
      const questionLetters = ['A', 'B', 'C', 'D'];

      const arrayWithAllAnswers = this.quizQuestions.results.map(
        (_quizQuestion: any) => {
          const allAnswers = _quizQuestion.incorrect_answers.concat(
            _quizQuestion.correct_answer
          );

          this.shuffleArray(allAnswers);

          const allAnswersList = Object.assign(
            {},
            ...Object.entries({ ...questionLetters }).map(([a, b]: any) => ({
              [b]: allAnswers[a],
            }))
          );

          return allAnswersList;
        }
      );
      return arrayWithAllAnswers;
    },
  },
  created() {
    this.fetchTrivia();
  },
};
</script>
