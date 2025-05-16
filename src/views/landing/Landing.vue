<script setup lang="ts">
import FAQWidget from '@/components/landing/FAQWidget.vue';
import FeaturesWidget from '@/components/landing/FeaturesWidget.vue';
import HeroWidget from '@/components/landing/HeroWidget.vue';
import HighlightsWidget from '@/components/landing/HighlightsWidget.vue';
import TestimonialsWidget from '@/components/landing/TestimonialsWidget.vue';
import LandingLayout from '@/layout/landing/LandingLayout.vue';
</script>

<template>
  <LandingLayout>
    <HeroWidget />
    <FeaturesWidget />
    <TestimonialsWidget />
    <HighlightsWidget />
    <!-- <PricingWidget /> -->
    <FAQWidget />
  </LandingLayout>
</template>
