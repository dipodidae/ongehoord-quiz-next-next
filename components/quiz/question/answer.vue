<script setup lang="ts">
const props = defineProps<{
  answer: QuizAnswer
}>()

const { answerKey } = useQuestionStore()!

function onClick() {
  answerKey.value = props.answer.key
}
</script>

<template>
  <UButton @click="onClick">
    {{ props.answer.text }}
  </UButton>
</template>
