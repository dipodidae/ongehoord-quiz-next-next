<script setup lang="ts">
const { question } = useQuestionStore()!
</script>

<template>
  <ul class="flex flex-col gap-2">
    <li v-for="answer in question.answers" :key="answer.key">
      <QuizQuestionAnswer :answer="answer" />
    </li>
  </ul>
</template>
