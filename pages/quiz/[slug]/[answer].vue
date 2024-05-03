<script setup lang="ts">
const props = defineProps<{
  question: QuizQuestion
}>()

const isCorrect = props.question.correctAnswer === useRoute().params.answer

const { isLastQuestion } = useQuestionStore()
</script>

<template>
  <div>
    <div v-if="isCorrect" class="text-green-500">
      Correct!
    </div>
    <div v-else class="text-red-500">
      Incorrect!
    </div>
    <div>{{ props.question.feedback }}</div>
    <div />
  </div>
</template>
