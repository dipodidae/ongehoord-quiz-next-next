<script setup lang="ts">
import emitter from '@/utils/emitter'

const props = defineProps<{
  to: string
}>()

const button = ref<HTMLButtonElement | null>(null)

emitter.on('keydown-quiz-button', () => {
  button.value?.click()
})
</script>

<template>
  <UButton ref="button" :to="props.to">
    <slot />
  </UButton>
</template>
