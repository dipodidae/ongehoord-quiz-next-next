const [useProvideQuestionStore, useQuestionStore] = createInjectionState(() => {
  const { page: question, next: nextQuestion } = useContent()

  const answerKey = ref<QuizAnswerKey | null >(null)

  function getAnswerFromQuestionByAnswerKey(answerKey: QuizAnswerKey): QuizAnswer | null {
    return question.value?.answers.find((answer: QuizAnswer) => answer.key === answerKey) || null
  }

  const correctAnswer = computed<QuizAnswer | null>(() => {
    if (!question.value?.correctAnswerKey)
      return null

    return getAnswerFromQuestionByAnswerKey(question.value.correctAnswerKey)
  })

  const userAnswer = computed(() => {
    if (!answerKey.value)
      return null

    return getAnswerFromQuestionByAnswerKey(answerKey.value)
  })

  const isCorrect = computed<boolean>(() => {
    if (!answerKey.value || !correctAnswer.value?.key)
      return false

    return answerKey.value === correctAnswer.value.key
  })

  return { answerKey, isCorrect, question, correctAnswer, userAnswer, nextQuestion }
})

export { useProvideQuestionStore, useQuestionStore }
