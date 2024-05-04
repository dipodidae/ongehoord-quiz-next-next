const [useProvideQuizStore, useQuizStore] = createInjectionState((): {
  score: Ref<number>
  questions: Ref<QuizQuestion[] | null>
  scorePercentage: ComputedRef<number>
  scorePercentageRounded: ComputedRef<number>
} => {
  const score = ref(0)

  const { data: questions } = useAsyncData('questions', async () => {
    return await queryContent<QuizQuestion>('quiz', 'questions').find()
  })

  const scorePercentage = computed<number>(() => {
    if (!questions.value)
      return 0
    return (score.value / questions.value.length) * 100
  })

  const scorePercentageRounded = useRound(scorePercentage)

  return { score, questions, scorePercentage, scorePercentageRounded }
})

export { useProvideQuizStore, useQuizStore }
