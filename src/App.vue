<template>
  <header>
    <div class="flex w-9/12 mx-auto">
      <h1
        class="font-sans text-5xl antialiased font-semibold tracking-wider my-8 mr-5"
        ><RouterLink to="/">Quizzes</RouterLink></h1
      >
      <input
        v-model.trim="search"
        class="border-black border mx-1 my-10 p-2"
        placeholder="Search..."
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        class="my-11 w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
    <div class="h-10 w-9/12 mx-auto">
      <nav class="list-none flex">
        <li
          class="m-2 text-md border border-black py-1 px-4 hover:bg-black hover:text-white duration-200"
          v-for="link in navLinks"
          :key="link.name"
        >
          <RouterLink :to="{ path: link.path }">{{ link.name }}</RouterLink>
        </li>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script lang="ts">
import { ref, watch } from 'vue';
import { quizzes } from './composables/quizCategories.js';
import { quizCategory } from './data/quizCategories.js';

export default {
  setup() {
    const search = ref('');

    watch(search, () => {
      quizzes.value = quizCategory.filter((quiz: { name: string }) =>
        quiz.name.toLowerCase().includes(search.value.toLowerCase())
      );
      console.log(quizzes.value);
    });

    return {
      quizzes,
      search,
    };
  },

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
