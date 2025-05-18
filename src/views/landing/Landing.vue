<script setup lang="ts">
import FAQWidget from '@/components/landing/FAQWidget.vue';
import FeaturesWidget from '@/components/landing/FeaturesWidget.vue';
import HeroWidget from '@/components/landing/HeroWidget.vue';
import HighlightsWidget from '@/components/landing/HighlightsWidget.vue';
import TestimonialsWidget from '@/components/landing/TestimonialsWidget.vue';
import LandingLayout from '@/layout/landing/LandingLayout.vue';
import TextImageWidget from '@/components/landing/TextImageWidget.vue';

const propertyManagementContent = {
  body: 'GESTIONE IMMOBILIARE',
  title: 'La Tua Proprietà in Mani Sicure',
  description: 'Ci occupiamo di ogni aspetto della gestione del tuo immobile: dalla cura degli spazi alla comunicazione con gli ospiti. Un servizio completo che ti permette di godere dei benefici dell\'affitto breve con la massima serenità.',
  buttonLabel: 'Scopri di più',
  imageSrc: '/demo/images/landing/Photos-Apartment-HD.jpg',
  imageAlt: 'Appartamento gestito da Xenia'
};

const guestExperienceContent = {
  body: 'ESPERIENZA OSPITI',
  title: 'Un Soggiorno Indimenticabile',
  description: 'Offriamo ai tuoi ospiti un\'esperienza di soggiorno di qualità, con servizi premium e attenzione ai dettagli. Dalla prenotazione al check-out, ogni momento è curato per garantire la massima soddisfazione.',
  buttonLabel: 'Scopri i servizi',
  imageSrc: '/demo/images/landing/Photos-Apartment-HD.jpg',
  imageAlt: 'Esperienza ospiti Xenia'
};
</script>

<template>
  <LandingLayout>
    <HeroWidget />
    <TextImageWidget
      v-bind="propertyManagementContent"
      @button-click="() => {}"
    />
    <TextImageWidget
      v-bind="guestExperienceContent"
      :reverse="true"
      @button-click="() => {}"
    />
    <FeaturesWidget />
    <!-- <TestimonialsWidget /> -->
    <!-- <HighlightsWidget /> -->
    <!-- <PricingWidget /> -->
    <FAQWidget />
  </LandingLayout>
</template>
