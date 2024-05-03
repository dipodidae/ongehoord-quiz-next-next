import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export { }

declare global {

  type QuizAnswerKey = 'a' | 'b' | 'c'

  interface QuizAnswer {
    key: QuizAnswerKey
    text: string
  }

  interface QuizQuestion extends ParsedContent {
    image: string
    title: string
    question: string
    answers: QuizAnswer[]
    correctAnswer: QuizAnswerKey
    feedback: string
  }
}
