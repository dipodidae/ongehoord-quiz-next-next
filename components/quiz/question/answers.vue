<script setup lang="ts">
const { question } = useQuestionStore()!

const answers = computed(() => question.value.answers)
</script>

<template>
  <ul class="flex flex-col gap-2">
    <li>
      <QuizQuestionAnswer :answer="answers[0]" class="bg-blue-700" />
    </li>
    <li>
      <QuizQuestionAnswer :answer="answers[1]" class="bg-yellow-700" />
    </li>
    <li>
      <QuizQuestionAnswer :answer="answers[2]" class="bg-red-700" />
    </li>
  </ul>
</template>
