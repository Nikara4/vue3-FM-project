<template>
  <div v-if="isQuizStarted">
    <ul v-for="(question, index) in normalisedQuestions" :key="question">
      <h3 class="uppercase font-sans font-semibold text-xl mx-10 my-8">
        {{ question }}
      </h3>
      <li
        class="font-sans mx-10 cursor-pointer hover:bg-gray-200 duration-200 active:bg-gray-300 flex"
        v-for="(answer, key) in arrayWithMappedAnswers[index]"
        :key="answer"
      >
        <!-- :style="answer === answerSelected && {backgroundColor: 'rgb(156 163 175)'}" -->
        <span class="block border-r border-black p-3 basis-12 text-center">{{
          key
        }}</span
        ><span class="p-3 block">{{ answer }}</span>
      </li>
    </ul>
    <BasicButton @click-action="startTheQuiz"> next question </BasicButton>
  </div>
</template>

<script lang="ts">
import BasicButton from '../button/BasicButton.vue';

export default {
  async setup(props) {
    const BASE_URL = 'https://opentdb.com/api.php?';

    let quizQuestions: any[];
    let arrayWithAllAnswers: any[] = [];
    let arrayWithMappedAnswers: any[] = [];
    let normalisedQuestions: any[];

    const normaliseQuestions = () => {
      normalisedQuestions = quizQuestions.results.map((question: any) => {
        return question.question
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'");
      });

      return normalisedQuestions;
    };

    const normaliseAnswers = (allAnswers: []) => {
      return allAnswers.map((answer: any) => {
        return answer
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'")
          .replace(/&rsquo;/g, "'")
          .replace(/&eacute;/g, 'é')
          .replace(/&amp;/g, '&')
          .replace(/&amp;/g, 'ü');
      });
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
          allAnswers = normaliseAnswers(allAnswers);

          arrayWithAllAnswers.push(allAnswers);

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

    const fetchTrivia = async (index: string | string[]) => {
      return await fetch(
        `${BASE_URL}amount=10&category=${index}&difficulty=medium&type=multiple`
      ).then((response) => response.json());
    };

    quizQuestions = await fetchTrivia(props.categoryId);
    normalisedQuestions = normaliseQuestions();
    arrayWithMappedAnswers = getAllAnswers();

    return {
      quizQuestions,
      arrayWithAllAnswers,
      arrayWithMappedAnswers,
      normalisedQuestions,
    };
  },
  components: {
    BasicButton,
  },
  props: ['isQuizStarted', 'categoryId'],
  emits: ['start-quiz'],
  data() {
    return {
      arrayWithUserAnswers: [] as any[],
      // answerSelected: null,
    };
  },
  methods: {
    startTheQuiz() {
      this.$emit('start-quiz');
    },
  },
};
</script>
