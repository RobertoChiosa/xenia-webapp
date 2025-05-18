<template>
  <div id="features" class="w-full bg-gray-50 dark:bg-gray-900">
    <div class="py-20 px-6 lg:px-20 mx-auto max-w-6xl">
      <div class="text-center mb-16">
        <h1 class="text-2xl md:text-5xl mb-6 mt-2">I Nostri Servizi</h1>
        <p class="text-surface-600 dark:text-surface-400">Scopri quali sono i servizi inclusi nella nostra professionalità di gestione immobiliare</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
            icon="pi pi-home"
            title="Profilo e Annuncio"
            description="Pubblichiamo il tuo immobile sulle migliori piattaforme, descrivendo in maniera precisa regole e caratteristiche dell'appartamento."
            gradient="linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)"
        />

        <FeatureCard
            icon="pi pi-camera"
            title="Fotografia professionale"
            description="Valorizziamo il tuo appartamento con fotografie professionali, illustrando le sue caratteristiche e i punti di forza."
            gradient="linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)"
        />

        <FeatureCard
            icon="pi pi-chart-line"
            title="Prezzo giornaliero"
            description="Modifichiamo quotidianamente i prezzi al fine di massimizzare il tasso di occupazione e redditività dell'appartamento."
            gradient="linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)"
        />

        <FeatureCard
            icon="pi pi-truck"
            title="Servizi di pulizia"
            description="Assicuriamo alti standard qualitativi in termini di pulizia ed igiene. Forniamo asciugamani, lenzuola e welcome kit."
            gradient="linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)"
        />

        <FeatureCard
            icon="pi pi-headphones"
            title="Supporto Clienti"
            description="Assistenza dedicata per gli ospiti e supporto continuo per i proprietari, disponibile 24/7."
            gradient="linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)"
        />

        <FeatureCard
            icon="pi pi-calendar"
            title="Check-in & Check-out"
            description="Assicuriamo alti standard qualitativi in termini di pulizia ed igiene. Forniamo asciugamani, lenzuola e welcome kit."
            gradient="linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%)"
        />

        <FeatureCard
            icon="pi pi-file-edit"
            title="Amministrazione e Fiscalità"
            description="Operiamo con contratti ad H.O.C. , offriamo consulenza fiscale, riscuotiamo la tassa di soggiorno e versiamo la ritenuta d'acconto."
            gradient="linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)"
        />

        <FeatureCard
            icon="pi pi-wrench"
            title="Manutenzione"
            description="Forniamo un servizio base di manutenzione, al fine di evitare problemi durante il pernottamento dell'ospite."
            gradient="linear-gradient(135deg, #fae8ff 0%, #f5d0fe 100%)"
        />

        <FeatureCard
            icon="pi pi-shield"
            title="Pagamenti sicuri"
            description="Riceviamo pagamenti dei nostri clienti tramite bonofici bancari e carte di credito. Tutte le nostre transazioni sono tracciabili."
            gradient="linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import FeatureCard from './FeatureCard.vue';
</script>
