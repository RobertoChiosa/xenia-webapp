<script setup lang="ts">
import Button from 'primevue/button';
</script>

<template>
  <div
    id="hero"
    class="flex flex-col justify-center px-6 lg:px-20 min-h-[80vh] overflow-hidden text-surface-900 dark:text-surface-0"
    style="
      background-image:
        linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),
        linear-gradient(30deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2)),
        url('demo/images/landing/Photos-Apartment-HD.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    "
  >
    <div class="max-w-4xl mx-auto text-center py-12">
      <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">
        Il tuo partner di fiducia per la gestione immobiliare di qualità
      </h1>
      <p class="text-xl md:text-2xl mt-6 text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
        Xenia offre servizi di gestione immobiliare esperti, creando spazi belli e funzionali con una cura meticolosa per i dettagli.
      </p>
      <div class="mt-12 flex gap-4 justify-center">
        <Button
          label="Lavora con noi"
          class="!text-xl !px-8 !py-3"
          severity="primary"
        />
        <Button
          label="Scopri di più"
          class="!text-xl !px-8 !py-3"
          outlined
        />
      </div>
    </div>
  </div>
</template>
