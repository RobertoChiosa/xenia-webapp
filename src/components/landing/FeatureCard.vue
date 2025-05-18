<template>
  <div class="feature-card">
    <div class="feature-card__header">
      <div class="feature-card__avatar" :style="{ background: gradient }">
        <Avatar :icon="icon" size="xlarge" />
      </div>
      <h3 class="feature-card__title">{{ title }}</h3>
    </div>
    <div class="feature-card__content">
      <p class="feature-card__description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  gradient: {
    type: String,
    default: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)'
  },
  buttonLabel: {
    type: String,
    default: 'Scopri di più'
  }
});
</script>

<style scoped>
.feature-card {
  border: 1px solid var(--surface-border);
  background: var(--surface-card);
  border-radius: 0;
  padding: 2rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.feature-card__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.feature-card__avatar {
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-card__avatar :deep(.p-avatar) {
  background: transparent;
  color: var(--surface-700);
}

.feature-card__title {
  color: var(--surface-900);
  text-align: center;
  margin: 0;
}

.dark .feature-card__title {
  color: var(--surface-0);
}

.feature-card__content {
  text-align: center;
}

.feature-card__description {
  color: var(--surface-600);
  margin: 0;
  line-height: 1.5;
}

.dark .feature-card__description {
  color: var(--surface-400);
}
</style>