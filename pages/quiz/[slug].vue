<script lang="ts" setup>
const route = useRoute()

const question = await queryContent<QuizQuestion>(`questions/${route.params.slug}`).findOne()
</script>

<template>
  <div>
    <router-view :question="question" />
  </div>
</template>
