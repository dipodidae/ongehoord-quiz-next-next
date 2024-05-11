import buttons from '@/constants/buttons.json'
import emitter from '@/utils/emitter'

function getButtonFromKey(eventCode: number) {
  return buttons.find(button => button.eventCodes.includes(eventCode))
}

export default function useQuizButtons() {
  useEventListener('keydown', (event: KeyboardEvent) => {
    const button = getButtonFromKey(Number.parseInt(event.eventCode))

    if (button)
      emitter.emit('keydown-quiz-button', button as QuizButton)
  })
}
