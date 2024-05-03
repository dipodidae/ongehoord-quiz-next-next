<script setup lang="ts">
const props = defineProps<{
  question: QuizQuestion
}>()
</script>

<template>
  <ul class="flex flex-col gap-2">
    <li v-for="answer in props.question.answers" :key="answer.key">
      <QuizAnswer :answer="answer" />
    </li>
  </ul>
</template>
