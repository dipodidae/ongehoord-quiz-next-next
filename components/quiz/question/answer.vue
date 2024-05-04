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
  <a block href="#" class="flex rounded-sm px-10 py-2" @click="onClick">
    {{ props.answer.text }}
  </a>
</template>
