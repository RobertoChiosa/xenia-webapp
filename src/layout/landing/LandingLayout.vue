<script setup lang="ts">
import TopbarWidget from '@/components/landing/TopbarWidget.vue';
import FooterWidget from '@/components/landing/FooterWidget.vue';
import BannerWidget from '@/components/BannerWidget.vue';

defineSlots<{
  default(): any;
}>();
</script>

<template>
  <div class="bg-surface-0 dark:bg-surface-900">
    <BannerWidget />
    <div id="home" class="landing-wrapper overflow-hidden">
      <div class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static">
        <TopbarWidget />
      </div>
      <slot />
      <FooterWidget />
    </div>
  </div>
</template> 