<template>
  <button @click="clickAction" class="border border-black px-3 py-1 m-4 mb-4 hover:bg-black hover:text-white duration-200"
    ><slot /></button
  >
</template>

<script lang="ts">
export default {
  emits: ['click-action'],
  methods: {
    clickAction() {
      this.$emit('click-action');
    },
  },
};
</script>
