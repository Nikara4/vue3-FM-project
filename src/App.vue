<template>
  <header>
    <div class="sm:w-screen flex w-9/12 px-5 2xl:w-11/12">
      <h1
        class="sm:text-6xl sm:mr-3 font-sans text-5xl antialiased font-semibold tracking-wider my-3 mr-5  2xl:text-8xl 2xl:mr-10"
        ><RouterLink to="/">Quizzes</RouterLink></h1
      >
      <input
        v-model.trim="search"
        class="sm:w-32 sm:my-7 sm:text-sm sm:p-2 sm:h-full-h
        border-black border mx-1 my-10 px-2 2xl:my-14 2xl:text-3xl"
        placeholder="Search..."
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        class="sm:opacity-0 sm:w-0 w-8 h-8 2xl:h-16 2xl:w-16 2xl:my-14"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <nav class="sm:my-6 sm:mx-2 list-none flex m-8 2xl:m-12">
        <li
        class=""
          v-for="link in navLinks"
          :key="link.name"
        >
          <BasicButton><RouterLink :to="{ path: link.path }">{{ link.name }}</RouterLink></BasicButton>
        </li>
      </nav>
    </div>
  </header>

  <Suspense
    ><RouterView /><template #pending
      >Loading...</template
  ></Suspense>
</template>

<script lang="ts">
import { ref, watch } from 'vue';

import { quizzes } from './composables/quizCategories';
import { quizCategory } from './data/quizCategories';
import BasicButton from './components/button/BasicButton.vue';

export default {
  setup() {
    const search = ref('');

    watch(search, () => {
      quizzes.value = quizCategory.filter((quiz: { name: string }) =>
        quiz.name.toLowerCase().includes(search.value.toLowerCase())
      );
    });

    return {
      search,
    };
  },
  components: {BasicButton},
  data() {
    return {
      navLinks: [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
      ],
    };
  },
};
</script>
