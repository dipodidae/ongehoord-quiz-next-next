export const useQuestionStore = defineStore('question', () => {
  const questions = computedAsync(
    () => queryContent<QuizQuestion>('questions').find(),
  )

  const route = useRoute()

  const isLastQuestion = computed<boolean>(() => {
    const lastQuestion = questions.value.at(-1)

    if (!lastQuestion)
      return false

    return lastQuestion._path === convertSlugToPath(route.path)
  })

  return { questions, isLastPage: isLastQuestion }
})
