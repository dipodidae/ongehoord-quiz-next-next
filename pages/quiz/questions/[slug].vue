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
  <div class="flex flex-col justify-center items-center gap-12 max-w-[100ch]">
    <header>
      <h1 class="text-balance font-bold text-pink-200 text-4xl text-center">
        {{ question.question }}
      </h1>
    </header>
    <video-youtube v-if="question.youtubeVideoId" :video-id="question.youtubeVideoId" />
    <quiz-question-feedback v-if="answerKey" />
    <quiz-question-answers v-else />
  </div>
</template>
