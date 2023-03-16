<template>
  <main>
    <div class="container mx-auto">
      <div class="max-h-max mx-auto">
        <div class="h-auto border border-black mx-10">
          <div>
            <QuizDetail
              :quizStarted="isQuizStarted"
              @start-quiz="startTheQuiz"
              :categoryId="routeParams"
              :questionStatus="questionStatus"
              :barPercentage="barPercentage"
              :showResults="showResults"
              :initialQuizPage="isInitialQuizPage"
            />
          </div>
          <div v-if="isQuizStarted">
            <QuizQuestion
              :question="quizQuestions.results[currentQuestionIndex].question"
              :answers="arrayWithMappedAnswers[currentQuestionIndex]"
              @selectAnswer="onAnswerSelected"
              :selected="selected"
            />
            <BasicButton
              v-if="isAnswerSelected || isQuizFinished"
              @click-action="
                isQuizFinished ? getQuizResults() : getNextQuestion()
              "
            >
              {{ isQuizFinished ? 'finish quiz' : 'next question' }}
            </BasicButton>
            <div v-else class="mb-5"></div>
          </div>
          <div v-else-if="showResults && !isQuizStarted">
            <QuizResult
            :numberOfCorrectAnswers="numberOfCorrectAnswers"
            :numberOfQuestions="quizQuestions.results.length"
            :isQuizFinished="isQuizFinished" />
            <BasicButton v-if="!isInitialQuizPage" @click-action="startTheQuiz">
              retake the quiz
            </BasicButton>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import QuizDetail from '../components/quiz/QuizDetail.vue';
import QuizQuestion from '../components/quiz/QuizQuestion.vue';
import BasicButton from '../components/button/BasicButton.vue';
import QuizResult from '@/components/quiz/QuizResult.vue';

const BASE_URL = 'https://opentdb.com/api.php?';

const route = useRoute();
const routeParams: string | string[] = route.params.id;

const isAnswerSelected = ref(false);
const isQuizFinished = ref(false);
const isQuizStarted = ref(false);
const showResults = ref(false);
const isInitialQuizPage = ref(true);
const selected = ref(false);

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

const getAllMappedAnswers = () => {
  const questionLetters = ['A', 'B', 'C', 'D'];

  arrayWithMappedAnswers = quizQuestions.results.map((_quizQuestion: any) => {
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
  });

  return arrayWithMappedAnswers;
};

const startTheQuiz = () => {
  showResults.value = false;
  isInitialQuizPage.value = false;
  isQuizStarted.value = true;
  isQuizFinished.value = false;

  numberOfCorrectAnswers.value = 0;
  currentQuestionIndex.value = 0;
};

const getNextQuestion = () => {
  currentQuestionIndex.value++;
  isAnswerSelected.value = false;
};

const onAnswerSelected = (answer: any) => {
  const correctAnswer =
    quizQuestions.results[currentQuestionIndex.value].correct_answer;

  if (answer === correctAnswer) numberOfCorrectAnswers.value++;

  if (quizQuestions.results.length - 1 === currentQuestionIndex.value) {
    isQuizFinished.value = true;
    isAnswerSelected.value = false;
  } else {
    isAnswerSelected.value = true;
    isQuizFinished.value = false;
  }

  selected.value = true;
  console.log(selected.value)
};

const getQuizResults = () => {
  showResults.value = true;
  isQuizStarted.value = false;
  isQuizFinished.value = true;
};

quizQuestions = await fetchTrivia(routeParams);
arrayWithMappedAnswers = getAllMappedAnswers();

const questionStatus = computed(
  () => `${currentQuestionIndex.value + 1}/${quizQuestions.results.length}`
);

const barPercentage = computed(
  () =>
    `${
      ((currentQuestionIndex.value + 1) / quizQuestions.results.length) * 100
    }%`
);
</script>
