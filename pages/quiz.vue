<script setup lang="ts">
useProvideQuizStore()

const route = useRoute()

useQuizButtons()
</script>

<template>
  <div class="h-[100dvh] flex flex-col bg-slate-950 flex-shrink">
    <QuizHeader />
    <div class="flex flex-grow p-4 items-center justify-center">
      <router-view :key="route.fullPath" />
    </div>
  </div>
</template>
