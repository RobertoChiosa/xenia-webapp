<script setup lang="ts">
import FooterWidget from '@/components/landing/FooterWidget.vue';
import TopbarWidget from '@/components/landing/TopbarWidget.vue';
</script>

<template>
    <div class="bg-surface-0 dark:bg-surface-900">
        <div class="landing-wrapper overflow-hidden">
            <div class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static">
                <TopbarWidget />
            </div>
            
            <div class="py-12 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20">
                <div class="text-center mb-12">
                    <h1 class="text-5xl font-bold text-surface-900 dark:text-surface-0 mb-6">La Nostra Storia Familiare</h1>
                    <p class="text-xl text-surface-600 dark:text-surface-400 max-w-3xl mx-auto">
                        Tre generazioni di dedizione, innovazione e impegno per l'eccellenza
                    </p>
                </div>
                
                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div class="p-8 bg-surface-50 dark:bg-surface-800 rounded-xl shadow-sm">
                            <h2 class="text-3xl font-semibold text-surface-900 dark:text-surface-0 mb-6">La Nostra Storia</h2>
                            <p class="text-lg text-surface-600 dark:text-surface-400 leading-relaxed">
                                Fondata nel 1985 dalla famiglia Rossi, la nostra attività è iniziata come un piccolo negozio locale con grandi sogni. 
                                Quello che è iniziato come un progetto di passione familiare è cresciuto fino a diventare un'impresa rispettata, 
                                mantenendo il tocco personale e i valori che ci hanno reso vincenti fin dall'inizio.
                            </p>
                        </div>
                        
                        <div class="p-8 bg-surface-50 dark:bg-surface-800 rounded-xl shadow-sm">
                            <h2 class="text-3xl font-semibold text-surface-900 dark:text-surface-0 mb-6">Valori Familiari</h2>
                            <p class="text-lg text-surface-600 dark:text-surface-400 leading-relaxed">
                                Integrità, qualità e soddisfazione del cliente non sono solo principi aziendali per noi - sono valori familiari 
                                tramandati attraverso le generazioni. Ogni decisione che prendiamo riflette il nostro impegno verso questi valori fondamentali.
                            </p>
                        </div>
                    </div>

                    <div class="p-8 bg-surface-50 dark:bg-surface-800 rounded-xl shadow-sm mb-16">
                        <h2 class="text-3xl font-semibold text-surface-900 dark:text-surface-0 mb-6">Il Nostro Percorso</h2>
                        <div class="space-y-6">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-primary-700 dark:text-primary-300 text-xl font-bold">1</span>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-surface-900 dark:text-surface-0 mb-2">Gli Inizi (1985)</h3>
                                    <p class="text-lg text-surface-600 dark:text-surface-400">
                                        Il nostro nonno, Mario Rossi, ha aperto la nostra prima sede con la visione di offrire un servizio eccezionale 
                                        e prodotti di qualità alla nostra comunità.
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-primary-700 dark:text-primary-300 text-xl font-bold">2</span>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-surface-900 dark:text-surface-0 mb-2">Crescita e Innovazione (2000)</h3>
                                    <p class="text-lg text-surface-600 dark:text-surface-400">
                                        Sotto la guida di nostro padre, abbiamo ampliato le nostre operazioni mantenendo il nostro impegno per 
                                        la qualità e i valori familiari.
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span class="text-primary-700 dark:text-primary-300 text-xl font-bold">3</span>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-surface-900 dark:text-surface-0 mb-2">Il Successo di Oggi</h3>
                                    <p class="text-lg text-surface-600 dark:text-surface-400">
                                        Ora alla nostra terza generazione, continuiamo a crescere e innovare rimanendo fedeli alle nostre radici 
                                        e alle tradizioni familiari.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div class="p-8 bg-surface-50 dark:bg-surface-800 rounded-xl shadow-sm text-center">
                            <h3 class="text-2xl font-semibold text-surface-900 dark:text-surface-0 mb-4">Qualità</h3>
                            <p class="text-surface-600 dark:text-surface-400">
                                Non scendiamo mai a compromessi sulla qualità dei nostri prodotti e servizi
                            </p>
                        </div>
                        <div class="p-8 bg-surface-50 dark:bg-surface-800 rounded-xl shadow-sm text-center">
                            <h3 class="text-2xl font-semibold text-surface-900 dark:text-surface-0 mb-4">Integrità</h3>
                            <p class="text-surface-600 dark:text-surface-400">
                                Pratiche commerciali oneste sono la base del nostro successo
                            </p>
                        </div>
                        <div class="p-8 bg-surface-50 dark:bg-surface-800 rounded-xl shadow-sm text-center">
                            <h3 class="text-2xl font-semibold text-surface-900 dark:text-surface-0 mb-4">Comunità</h3>
                            <p class="text-surface-600 dark:text-surface-400">
                                Siamo orgogliosi di essere una parte attiva della nostra comunità locale
                            </p>
                        </div>
                    </div>

                    <div class="p-8 bg-surface-50 dark:bg-surface-800 rounded-xl shadow-sm mb-16">
                        <h2 class="text-3xl font-semibold text-surface-900 dark:text-surface-0 mb-6">La Nostra Promessa</h2>
                        <p class="text-lg text-surface-600 dark:text-surface-400 leading-relaxed">
                            Come azienda familiare, comprendiamo l'importanza della fiducia e delle relazioni. Ci impegniamo a continuare 
                            a servire i nostri clienti con la stessa dedizione e cura che abbiamo dimostrato per oltre tre decenni. 
                            Il patrimonio della nostra famiglia è costruito sulla soddisfazione dei nostri clienti, e siamo determinati a mantenere 
                            questa tradizione per le generazioni a venire.
                        </p>
                    </div>
                </div>
            </div>
            
            <FooterWidget />
        </div>
    </div>
</template> 