<script setup lang="ts">
const { question, isCorrect, nextQuestion, userAnswer, correctAnswer } = useQuestionStore()!

const isDone = computed(() => nextQuestion.value._dir !== question.value._dir)
</script>

<template>
  <div>
    <QuizQuestionFeedbackStatus v-if="isCorrect">
      Correct!
    </QuizQuestionFeedbackStatus>
    <QuizQuestionFeedbackStatus v-else class="bg-red-300 text-red-900">
      Incorrect!
    </QuizQuestionFeedbackStatus>
    <div v-if="!isCorrect && userAnswer">
      Your Answer: {{ userAnswer.text }}
    </div>
    <div v-if="correctAnswer">
      Correct answer: {{ correctAnswer.text }}
    </div>
    <div>
      {{ question.feedback }}
    </div>
    <div v-if="isDone">
      <UButton to="/quiz/score">
        View score!
      </UButton>
    </div>
    <div v-else>
      <UButton :to="nextQuestion._path">
        Next Question
      </UButton>
    </div>
  </div>
</template>
