<script setup lang="ts">
useProvideQuizStore()
</script>

<template>
  <div class="h-[100dvh] flex flex-col bg-slate-950 flex-shrink">
    <QuizHeader />
    <div class="flex flex-grow p-4 items-center justify-center">
      <router-view />
    </div>
  </div>
</template>
