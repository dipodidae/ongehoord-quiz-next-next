<script setup lang="ts">
const { questions } = useQuizStore()!

watch(questions, () => {
  if (!questions.value?.length)
    return

  navigateTo(questions.value[0]._path)
}, { immediate: true })
</script>

<template>
  <div />
</template>
