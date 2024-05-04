<script lang="ts" setup>
const { score } = useQuizStore() ?? { score: 0 }
</script>

<template>
  <div class="flex gap-2 p-4 border-b border-slate-800 bg-slate-900">
    <div>Score: {{ score }}</div>
    <div class="ml-auto">
      <UButton to="/">
        <Icon name="fa-solid:window-close" />
      </UButton>
    </div>
  </div>
</template>
