<script setup lang="ts">
const { question } = useQuestionStore()!
</script>

<template>
  <div class="quiz-question-content">
    <video-youtube v-if="question.youtubeVideoId" :video-id="question.youtubeVideoId" />
    <QuizQuestionAnswers />
  </div>
</template>
