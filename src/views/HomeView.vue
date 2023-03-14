<template>
  <main>
    <div class="container mx-auto px-4">
      <QuizBlockComponent />
    </div>
  </main>
</template>

<script lang="ts">
import QuizBlockComponent from '../components/quiz/QuizBlock.vue';
import { useRoute } from 'vue-router';


export default {
  setup() {
    const route = useRoute();
  },
  components: {
    QuizBlockComponent,
  },
};
</script>
