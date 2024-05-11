<script setup lang="ts">
const { question, isCorrect, nextQuestion, userAnswer, correctAnswer } = useQuestionStore()!

const isDone = computed(() => nextQuestion.value._dir !== question.value._dir)
</script>

<template>
  <div class="flex flex-col gap-8 items-center justify-center">
    <QuizQuestionFeedbackStatus v-if="isCorrect">
      Correct!
    </QuizQuestionFeedbackStatus>
    <QuizQuestionFeedbackStatus v-else class="bg-red-300 text-red-900">
      Incorrect!
    </QuizQuestionFeedbackStatus>
    <div v-if="!isCorrect && userAnswer" class="text-red-200 text-xl">
      Jouw antwoord: {{ userAnswer.text }}
    </div>
    <div v-if="correctAnswer" class="text-green-300 text-xl">
      Goeie antwoord: {{ correctAnswer.text }}
    </div>
    <div class="text-xl">
      {{ question.feedback }}
    </div>
    <div v-if="isDone">
      <quiz-keyboard-triggerable-button to="/quiz/score">
        Bekijk je score
      </quiz-keyboard-triggerable-button>
    </div>
    <div v-else>
      <quiz-keyboard-triggerable-button :to="nextQuestion._path">
        Volgende vraag
      </quiz-keyboard-triggerable-button>
    </div>
  </div>
</template>
