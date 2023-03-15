<!-- eslint-disable vue/valid-v-for -->
<template>
  <main>
    <div class="container mx-auto">
      <div class="max-h-max mx-auto">
        <div class="h-auto border border-black mx-10 shadow-md">
          <QuizDetail
            :isQuizStarted="isQuizStarted"
            @start-quiz="startTheQuiz"
            :categoryId="routeParams"
            :questionStatus="questionStatus"
            :barPercentage="barPercentage"
          />

          <QuizQuestion
            :isQuizStarted="isQuizStarted"
            @start-quiz="startTheQuiz"
            :question="quizQuestions.results[currentQuestionIndex].question"
            :answers="arrayWithMappedAnswers[currentQuestionIndex]"
            @selectAnswer="onAnswerSelected"
          />
          <BasicButton
            v-if="isQuizStarted"
            @click-action="currentQuestionIndex++"
          >
            next question
          </BasicButton>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import QuizDetail from '../components/quiz/QuizDetail.vue';
import QuizQuestion from '../components/quiz/QuizQuestion.vue';
import BasicButton from '../components/button/BasicButton.vue';

export default {
  async setup() {
    const route = useRoute();
    const routeParams: string | string[] = route.params.id;

    const BASE_URL = 'https://opentdb.com/api.php?';

    const currentQuestionIndex = ref(0);
    const numberOfCorrectAnswers = ref(0);
    let quizQuestions: any[];
    let arrayWithMappedAnswers: any[] = [];

    const fetchTrivia = async (categoryId: string | string[]) => {
      return await fetch(
        `${BASE_URL}amount=10&category=${categoryId}&difficulty=easy&type=multiple`
      ).then((response) => response.json());
    };

    const shuffleArray = (array: []) => {
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
    };

    const getAllAnswers = () => {
      const questionLetters = ['A', 'B', 'C', 'D'];

      arrayWithMappedAnswers = quizQuestions.results.map(
        (_quizQuestion: any) => {
          let allAnswers = _quizQuestion.incorrect_answers.concat(
            _quizQuestion.correct_answer
          );

          shuffleArray(allAnswers);

          const allAnswersList = Object.assign(
            {},
            ...Object.entries({ ...questionLetters }).map(([a, b]: any) => ({
              [b]: allAnswers[a],
            }))
          );

          return allAnswersList;
        }
      );

      return arrayWithMappedAnswers;
    };

    const onAnswerSelected = (answer: any) => {
      const correctAnswer = quizQuestions.results[currentQuestionIndex.value].correct_answer

      if(answer === correctAnswer) numberOfCorrectAnswers.value++

      console.log(numberOfCorrectAnswers.value)
      console.log(correctAnswer)

      currentQuestionIndex.value++
    }

    quizQuestions = await fetchTrivia(routeParams);
    arrayWithMappedAnswers = getAllAnswers();

    const questionStatus = computed(
      () => `${currentQuestionIndex.value + 1}/${quizQuestions.results.length}`
    );

    const barPercentage = computed(
      () => `${((currentQuestionIndex.value + 1)/ quizQuestions.results.length) * 100}%`
    );

    return {
      routeParams,
      currentQuestionIndex,
      quizQuestions,
      arrayWithMappedAnswers,
      questionStatus,
      barPercentage,
      onAnswerSelected
    };
  },
  components: {
    QuizDetail,
    QuizQuestion,
    BasicButton,
  },
  data() {
    return {
      isQuizStarted: false,
    };
  },
  methods: {
    startTheQuiz() {
      this.isQuizStarted = !this.isQuizStarted;
    },
  },
};
</script>
