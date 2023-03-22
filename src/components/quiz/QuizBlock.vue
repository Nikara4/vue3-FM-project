<template>
  <div
    class="xsm:w-11/12 xsm:mx-auto xsm:my-5 xsm:h-block-sm
    2xl:mb-10 2xl:mx-24 2xl:w-9/12 2xl:h-80
    mb-5 mx-5 w-96 
    bg-cover bg-center border border-black m-10 shadow-md relative cursor-pointer "
    :style="{ backgroundImage: getQuizImg(quiz) }"
  >
    <RouterLink
      class="xsm:opacity-100 xsm:text-4xl xsm:font-bold xsm:bg-black/[.1] xsm:h-full-h
      2xl:opacity-100 2xl:text-5xl 2xl:font-bold
      block w-full text-center text-3xl uppercase text-white opacity-0 hover:opacity-100 hover:bg-black/[.3] duration-200 antialiased "
      :to="`/quiz-details/${quiz.categoryNumber}`"
      :style="{ paddingTop: '5rem', paddingLeft: '5px', paddingRight: '5px', }"
    >
      {{ quiz.name }}</RouterLink
    >
  </div>
</template>

<script lang="ts">
export default {
  props: ['quiz'],
  methods: {
    getQuizImg(quiz: any) {
      return `url('https://raw.githubusercontent.com/Nikara4/vue3-quiz-project/main/public/img/${quiz.img}')`;
    },
  },
};
</script>
