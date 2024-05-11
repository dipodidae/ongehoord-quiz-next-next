import mitt from 'mitt'

const emitter = mitt<{
  'keydown-quiz-button': QuizButton
}>()

export default emitter
