<template>
    <div id="features" class="py-20 px-6 lg:px-20 mx-0 lg:mx-20">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-surface-900 dark:text-surface-0 mb-4">I Nostri Servizi</h2>
                <p class="text-xl text-surface-600 dark:text-surface-400">Scopri quale dei nostri servizi si adatta alle tue esigenze</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-surface-50 dark:bg-surface-800 rounded-xl p-8 shadow-sm">
                    <div class="flex items-center justify-center bg-primary-100 dark:bg-primary-900 mb-6 w-16 h-16 rounded-lg">
                        <i class="pi pi-fw pi-home text-2xl text-primary-700 dark:text-primary-300"></i>
                    </div>
                    <h3 class="text-2xl font-semibold text-surface-900 dark:text-surface-0 mb-4">Gestione Completa</h3>
                    <p class="text-surface-600 dark:text-surface-400 mb-6">
                        Offriamo una gestione completa della tua proprietà, dalla manutenzione alla pulizia, 
                        garantendo il massimo comfort per i tuoi ospiti e la massima tranquillità per te.
                    </p>
                    <Button label="Scopri di più" icon="pi pi-arrow-right" icon-pos="right" outlined class="w-full" />
                </div>

                <div class="bg-surface-50 dark:bg-surface-800 rounded-xl p-8 shadow-sm">
                    <div class="flex items-center justify-center bg-primary-100 dark:bg-primary-900 mb-6 w-16 h-16 rounded-lg">
                        <i class="pi pi-fw pi-calendar-times text-2xl text-primary-700 dark:text-primary-300"></i>
                    </div>
                    <h3 class="text-2xl font-semibold text-surface-900 dark:text-surface-0 mb-4">Prenotazioni</h3>
                    <p class="text-surface-600 dark:text-surface-400 mb-6">
                        Gestiamo tutte le prenotazioni e le comunicazioni con gli ospiti, 
                        ottimizzando il tasso di occupazione e massimizzando i tuoi ricavi.
                    </p>
                    <Button label="Scopri di più" icon="pi pi-arrow-right" icon-pos="right" outlined class="w-full" />
                </div>

                <div class="bg-surface-50 dark:bg-surface-800 rounded-xl p-8 shadow-sm">
                    <div class="flex items-center justify-center bg-primary-100 dark:bg-primary-900 mb-6 w-16 h-16 rounded-lg">
                        <i class="pi pi-fw pi-chart-bar text-2xl text-primary-700 dark:text-primary-300"></i>
                    </div>
                    <h3 class="text-2xl font-semibold text-surface-900 dark:text-surface-0 mb-4">Analisi e Report</h3>
                    <p class="text-surface-600 dark:text-surface-400 mb-6">
                        Forniamo report dettagliati e analisi delle performance, 
                        aiutandoti a prendere decisioni informate per migliorare i tuoi risultati.
                    </p>
                    <Button label="Scopri di più" icon="pi pi-arrow-right" icon-pos="right" outlined class="w-full" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from 'primevue/button';
</script>
