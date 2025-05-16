<template>
  <Card>
    <template #title>
      <div class="flex flex-col items-center gap-4">
        <Avatar :icon="icon" size="large" class="bg-gradient" />
        <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0 text-center">{{ title }}</h3>
      </div>
    </template>
    <template #content>
      <p class="text-surface-600 dark:text-surface-400 line-clamp-3 text-center">
        {{ description }}
      </p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';

defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  buttonLabel: {
    type: String,
    default: 'Scopri di più'
  }
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

:deep(.p-card .p-card-body .p-card-content .p-card-title) {
  background: gray !important;
}

:deep(.p-card .p-card-content) {
  background: gray !important;
}
</style>