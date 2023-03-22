<template>
  <button @click="clickAction" class="xsm:text-lg xsm:px-3 xsm:m-1 xsm:py-1 xsm:py-0 border border-black px-3 py-1 m-4 mb-4 hover:bg-black hover:text-white duration-200 2xl:px-10 2xl:py-3 2xl:text-3xl"
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
