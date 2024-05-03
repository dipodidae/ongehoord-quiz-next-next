const [useProvideQuizStore, useQuizStore] = createInjectionState(() => {
  const score = ref(0)
  return { score }
})

export { useProvideQuizStore, useQuizStore }
