<script lang="ts" setup>
useProvideQuestionStore()

const { score } = useQuizStore()!

const { answerKey, question, isCorrect } = useQuestionStore()!

watch(isCorrect, (value) => {
  if (value)
    score.value += 1
})
</script>

<template>
  <div>
    <header>{{ question.question }}</header>
    <quiz-question-feedback v-if="answerKey" :correct="isCorrect" />
    <quiz-question-answers v-else />
  </div>
</template>
