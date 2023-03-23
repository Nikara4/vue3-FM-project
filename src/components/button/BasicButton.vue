<template>
  <button @click="clickAction" class="xsm:text-md xsm:px-3 xsm:mx-1 xsm:my-0 xsm:py-1
  lg:text-xl lg:px-5
  border border-black px-3 py-1 m-4 mb-4 hover:bg-black hover:text-white duration-200"
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
