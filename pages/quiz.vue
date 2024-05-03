<script setup lang="ts">
import { useQuestionStore } from '~/store/question'

useProvideQuizStore()

const { questions } = useQuestionStore()

function navigateToFirstQuestion() {
  navigateTo(`/quiz/${convertPathToSlug(questions[0]._path!)}`)
}

watch(() => questions, () => {
  if (!questions.length)
    return

  navigateToFirstQuestion()
}, {
  immediate: true,
})
</script>

<template>
  <div class="h-[100dvh] flex flex-col bg-slate-950 flex-shrink">
    <QuizHeader />
    <div class="flex flex-grow p-4 items-center justify-center">
      <router-view />
    </div>
  </div>
</template>
