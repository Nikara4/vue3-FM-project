<template>
  <div>
    <h3 class="uppercase font-sans font-semibold text-2xl ml-3 mb-3">
      quiz name
    </h3>
    <p class="ml-5" v-if="!isQuizStarted"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.</p
    >
    <BasicButton @click-action="startTheQuiz"> take the quiz </BasicButton>
  </div>
</template>

<script lang="ts">
import BasicButton from '../button/BasicButton.vue';

export default {
  components: {
    BasicButton,
  },
  props: ['isQuizStarted'],
  emits: ['start-quiz'],
  methods: {
    startTheQuiz() {
      this.$emit('start-quiz');
    },
  },
};
</script>
