<script setup lang="ts">
import Button from 'primevue/button';
</script>

<template>
  <div
    id="hero"
    class="flex flex-col justify-center px-6 lg:px-20 min-h-[90vh] overflow-hidden text-surface-900 dark:text-surface-0 relative"
    style="
      background-image:
        linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.5)),
        linear-gradient(30deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1)),
        url('demo/images/landing/Photos-Apartment-HD.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    "
  >
    <div class="max-w-4xl mx-auto text-center py-20">
      <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-10 tracking-tight animate-fade-in">
        Il tuo partner di fiducia per la gestione immobiliare di qualità
      </h1>
      <p class="text-xl md:text-2xl mt-10 text-surface-600 dark:text-surface-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
        Affidati a Xenia per gestire il tuo immobile per affitti brevi in maniera professionale e personalizzata. 
        Noi gestiamo, tu ci guadagni.
      </p>
      <div class="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-2">
        <a href="mailto:info@xeniapm.it">
          <Button
            label="Contattaci"
            class="!text-xl px-10 shadow-lg hover:shadow-xl transition-all duration-300"
            severity="primary"
          />
        </a>
        <Button
          label="Scopri di più"
          class="!text-xl px-10 hover:bg-surface-100 transition-all duration-300"
          outlined
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.3s both;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 1s ease-out 0.6s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
