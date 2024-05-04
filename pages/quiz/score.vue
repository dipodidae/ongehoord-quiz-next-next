<script lang="ts" setup>
const { scorePercentage, scorePercentageRounded } = useQuizStore()!

const { page } = useContent() as { page: Ref<{
  body: {
    withinPercentage: number
    feedback: string
  }[]
}> }

const scoreFeedback = computed(() => {
  if (!page.value?.body.length)
    return

  return page.value.body.find(({ withinPercentage }) => {
    return scorePercentage.value <= withinPercentage
  })?.feedback
})
</script>

<template>
  <div>
    <div class="rounded-full w-[10ch] h-[10ch] text-2xl text-slate-700 bg-slate-100 font-bold flex justify-center items-center">
      {{ scorePercentageRounded }}%
    </div>
    <div>{{ scoreFeedback }}</div>
    <div>
      <UButton to="/">
        Close
      </UButton>
    </div>
  </div>
</template>
