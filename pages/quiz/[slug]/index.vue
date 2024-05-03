<script setup lang="ts">
const props = defineProps<{
  question: QuizQuestion
}>()
const to = `/quiz/${convertPathToSlug(props.question._path)}`
</script>

<template>
  <div>
    <header class="mb-12">
      <h1>{{ props.question.question }}</h1>
    </header>
    <QuizAnswers :question="props.question" />
  </div>
</template>
