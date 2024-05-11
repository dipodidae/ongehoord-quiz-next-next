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
    correctAnswerKey: QuizAnswerKey
    feedback: string
    youtubeVideoId?: string
  }

  type QuizButtonColor = 'red' | 'green' | 'blue'

  interface QuizButton {
    color: QuizButtonColor
    quizAnswerKey: QuizAnswerKey
    eventCodes: number[]
  }
}

declare module 'constants/buttons.json' {
  const buttons: QuizButton[]
  export default buttons
}
