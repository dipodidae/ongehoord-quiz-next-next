<script setup lang="ts">
const props = defineProps<{
  videoId: string
}>()

const src = computed(() => `https://www.youtube.com/embed/${props.videoId}?&autoplay=1`)
</script>

<template>
  <iframe width="560" height="315" :src frameborder="0" allowfullscreen />
</template>
