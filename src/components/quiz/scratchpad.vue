<template>
  <div v-if="isQuizStarted">
    <ul v-for="(question, index) in normalisedQuestions" :key="question">
      <h3 class="uppercase font-sans font-semibold text-xl m-3">
        {{ question }}
      </h3>
      <li
        class="font-sans m-5"
        v-for="(answer, key) in answers()[index]"
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
      normalisedQuestions: [],
      answers: this.getAllAnswers,
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
      this.normaliseQuestions();
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
    normaliseQuestions() {
      this.normalisedQuestions = this.quizQuestions.results.map(
        (question: any) => {
          return question.question
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'");
        }
      );
    },
    normaliseAnswers(allAnswers: []) {
      return allAnswers.map((answer: any) => {
        return answer
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'")
          .replace(/&rsquo;/g, "'")
          .replace(/&eacute;/g, 'é')
          .replace(/&amp;/g, '&');
      });
    },
    getAllAnswers() {
      const questionLetters = ['A', 'B', 'C', 'D'];

      const arrayWithAllAnswers = this.quizQuestions.results.map(
        (_quizQuestion: any) => {
          let allAnswers = _quizQuestion.incorrect_answers.concat(
            _quizQuestion.correct_answer
          );

          this.shuffleArray(allAnswers);
          allAnswers = this.normaliseAnswers(allAnswers);

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
