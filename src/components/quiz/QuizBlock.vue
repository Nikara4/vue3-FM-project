<template>
  <div
    class="mb-5 mx-5 bg-cover bg-center w-96 h-56 border border-black m-10 shadow-md relative cursor-pointer"
    :style="{ backgroundImage: getQuizImg(quiz) }"
  >
    <RouterLink
      class="block h-full w-full text-center text-3xl uppercase text-white opacity-0 hover:opacity-100 hover:bg-black/[.3] duration-200 antialiased"
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
      return `url('public/img/${quiz.img}')`;
    },
  },
};
</script>
