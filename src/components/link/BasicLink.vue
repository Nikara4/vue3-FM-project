<template>
    <a class="text-teal-700 href:text-teal-100 href:bg-teal-700" href="{ link }"><slot /></a>.
</template>

<script lang="ts">
export default {
    props: ['link']
}
</script>