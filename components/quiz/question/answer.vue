<script setup lang="ts">
import emitter from '@/utils/emitter'

const props = defineProps<{
  answer: QuizAnswer
}>()

const { answerKey } = useQuestionStore()!

function setAnswerKey() {
  answerKey.value = props.answer.key
}

emitter.on('keydown-quiz-button', (button: QuizButton) => {
  if (button.quizAnswerKey !== props.answer.key)
    return

  setAnswerKey()
})
</script>

<template>
  <a block href="#" class="flex rounded-sm px-10 py-2" @click="setAnswerKey">
    {{ props.answer.text }}
  </a>
</template>
