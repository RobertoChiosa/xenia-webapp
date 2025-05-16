<template>
  <div id="features" class="py-20 px-6 lg:px-20 mx-0 lg:mx-20">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h1 class="text-5xl text-semibold text-surface-900 dark:text-surface-0 mb-4">I Nostri Servizi</h1>
        <p class="text-xl text-surface-600 dark:text-surface-400">Scopri quale dei nostri servizi si adatta alle tue
          esigenze</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
            icon="pi pi-home"
            title="Gestione Completa"
            description="Gestione integrata della tua proprietà: manutenzione, pulizie e assistenza 24/7 per garantire il massimo comfort dei tuoi ospiti."
        />

        <FeatureCard
            icon="pi pi-calendar-times"
            title="Prenotazioni"
            description="Gestione centralizzata delle prenotazioni e comunicazione con gli ospiti per massimizzare l'occupazione e i ricavi."
        />

        <FeatureCard
            icon="pi pi-chart-bar"
            title="Analisi e Report"
            description="Report dettagliati e analisi delle performance per ottimizzare la gestione e aumentare la redditività."
        />

        <FeatureCard
            icon="pi pi-money-bill"
            title="Gestione Finanziaria"
            description="Gestione completa delle entrate, spese e pagamenti con report finanziari trasparenti e dettagliati."
        />

        <FeatureCard
            icon="pi pi-users"
            title="Supporto Clienti"
            description="Assistenza dedicata per gli ospiti e supporto continuo per i proprietari, disponibile 24/7."
        />

        <FeatureCard
            icon="pi pi-star"
            title="Ottimizzazione Prezzi"
            description="Strategie di pricing dinamico basate su analisi di mercato per massimizzare i ricavi in ogni stagione."
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import FeatureCard from './FeatureCard.vue';
</script>
