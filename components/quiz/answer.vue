<script setup lang="ts">
const props = defineProps<{
  answer: QuizAnswer
}>()

const route = useRoute()

const to = `/quiz/${route.params.slug}/${props.answer.key}`
</script>

<template>
  <UButton :to class="w-full">
    {{ props.answer.text }}
  </UButton>
</template>
