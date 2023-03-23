<template>
  <header>
    <div class="flex justify-start xsm:w-full w-9/12 px-5 2xl:w-11/12">
      <h1
        class="xsm:text-4xl xsm:mr-5 
        lg:text-5xl lg:my-8
        font-sans text-5xl antialiased font-semibold tracking-wider my-3 mr-5"
        ><RouterLink to="/">Quizzes</RouterLink></h1
      >
      <input
        v-model.trim="search"
        class="xsm:basis-2/4 xsm:w-24 xsm:my-5 xsm:text-sm xsm:p-2 xsm:h-full-h
        lg:text-xl lg:my-9
        border-black border mx-1 my-10 px-2"
        placeholder="Search..."
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        class="xsm:opacity-0 xsm:w-0 lg:opacity-100 lg:basis-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
    <nav class="xsm:my-0 lg:m-5 xl:mx-32 list-none  flex m-8">
        <div
        class=""
          v-for="link in navLinks"
          :key="link.name"
        >
          <BasicButton><RouterLink :to="{ path: link.path }">{{ link.name }}</RouterLink></BasicButton>
      </div>
      </nav>
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
