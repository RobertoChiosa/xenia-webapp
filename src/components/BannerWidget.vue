<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref(true);

const dismissBanner = () => {
  isVisible.value = false;
};
</script>

<template>
  <div v-if="isVisible" class="bg-surface-0 dark:bg-surface-950">
    <div class="bg-surface-900 text-surface-100 px-6 lg:px-20 flex justify-between items-center flex-wrap">
      <div class="font-bold">🔥 Hot Deals!</div>
      <div class="inline-flex gap-1 items-center">
          <span
              class="hidden lg:flex leading-normal">Libero voluptatum atque exercitationem praesentium provident odit.</span>
        <a class="text-surface-0 underline font-bold" href="#">Learn More</a>
      </div>
      <Button icon="pi pi-times" text rounded severity="secondary" class="!text-surface-0 hover:!bg-surface-500/20"
              @click="dismissBanner"/>
    </div>
  </div>

</template>