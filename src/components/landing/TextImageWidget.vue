<template>
  <div class="w-full bg-white">
    <div class="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-8 sm:gap-12" :class="{ 'lg:flex-row-reverse': reverse }">
        <!-- Text Content -->
        <div class="flex-1 w-full px-2 sm:px-0" :class="{ 'lg:text-right': reverse }">
            <div class="text-sm sm:text-base text-surface-600 dark:text-surface-400">
            {{ body }}
          </div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 mt-2">
            {{ title }}
          </h2>
          <p class="text-sm sm:text-base text-surface-600 dark:text-surface-400 mb-6 sm:mb-8">
            {{ description }}
          </p>
          <Button 
            :label="buttonLabel" 
            severity="primary" 
            class="w-full sm:w-auto" 
            :class="{ 'lg:ml-auto': reverse }"
            @click="$emit('button-click')"
          />
        </div>

        <!-- Image -->
        <div class="flex-1 w-full px-2 sm:px-0">
          <img 
            :src="imageSrc"
            :alt="imageAlt" 
            class="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  body: {
    type: String,
    default: 'GESTIONE IMMOBILIARE'
  },
  title: {
    type: String,
    default: 'La Tua Proprietà in Mani Sicure'
  },
  description: {
    type: String,
    default: 'Ci occupiamo di ogni aspetto della gestione del tuo immobile: dalla cura degli spazi alla comunicazione con gli ospiti. Un servizio completo che ti permette di godere dei benefici dell\'affitto breve con la massima serenità.'
  },
  buttonLabel: {
    type: String,
    default: 'Scopri di più'
  },
  imageSrc: {
    type: String,
    default: '/demo/images/landing/Photos-Apartment-HD.jpg'
  },
  imageAlt: {
    type: String,
    default: 'Description'
  },
  reverse: {
    type: Boolean,
    default: false
  }
})

defineEmits(['button-click'])
</script> 