<template>
  <div
    class="xsm:my-5 xsm:mx-auto xsm:w-5/6 xsm:h-block-sm xl:h-block-xl bg-cover bg-center border border-black shadow-md relative xl:cursor-pointer"
    :style="{ backgroundImage: getQuizImg(quiz) }"
  >
    <RouterLink
      class="xsm:opacity-100 xsm:text-2xl xsm:font-bold xsm:bg-black/[.1] xsm:h-full-h block w-full text-center text-3xl uppercase text-white xl:opacity-0 xl:hover:opacity-100 xl:hover:bg-black/[.3] xl:text-4xl duration-200 antialiased xl:font-normal"
      :to="`/quiz-details/${quiz.categoryNumber}`"
      :style="{ paddingTop: '5rem', paddingLeft: '5px', paddingRight: '5px' }"
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
