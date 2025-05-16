<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>
    <div id="faq" class="py-20 px-6 lg:px-20 mx-0 lg:mx-20">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-surface-900 dark:text-surface-0 mb-4">Domande Frequenti</h2>
                <p class="text-xl text-surface-600 dark:text-surface-400">Risposte alle domande più comuni sui nostri servizi</p>
            </div>

            <Accordion class="border-none">
                <AccordionTab>
                    <template #header>
                        <div class="flex items-center">
                            <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">Come funziona il processo di gestione?</span>
                        </div>
                    </template>
                    <div class="text-lg text-surface-600 dark:text-surface-400">
                        Il nostro processo di gestione è semplice e trasparente. Dopo un'analisi iniziale della tua proprietà, 
                        creiamo un piano personalizzato che include la gestione delle prenotazioni, la manutenzione, 
                        le pulizie e il supporto agli ospiti. Ti forniamo un dashboard completo per monitorare tutte le attività.
                    </div>
                </AccordionTab>

                <AccordionTab>
                    <template #header>
                        <div class="flex items-center">
                            <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">Quali sono i costi del servizio?</span>
                        </div>
                    </template>
                    <div class="text-lg text-surface-600 dark:text-surface-400">
                        I nostri costi sono strutturati in modo trasparente e competitivo. Offriamo diverse opzioni di gestione 
                        che si adattano alle tue esigenze specifiche. Il costo base include la gestione delle prenotazioni, 
                        il supporto agli ospiti e la manutenzione di base. Contattaci per un preventivo personalizzato.
                    </div>
                </AccordionTab>

                <AccordionTab>
                    <template #header>
                        <div class="flex items-center">
                            <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">Come gestite le emergenze?</span>
                        </div>
                    </template>
                    <div class="text-lg text-surface-600 dark:text-surface-400">
                        Disponiamo di un team di supporto 24/7 pronto a intervenire in caso di emergenze. 
                        Abbiamo una rete di professionisti qualificati per interventi rapidi e risolutivi, 
                        garantendo la massima tranquillità sia per te che per i tuoi ospiti.
                    </div>
                </AccordionTab>

                <AccordionTab>
                    <template #header>
                        <div class="flex items-center">
                            <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">Quali aree servite?</span>
                        </div>
                    </template>
                    <div class="text-lg text-surface-600 dark:text-surface-400">
                        Attualmente operiamo nelle principali città italiane, con particolare focus su Roma, 
                        Firenze, Venezia e Milano. Stiamo costantemente espandendo la nostra copertura, 
                        quindi contattaci per verificare la disponibilità nella tua zona.
                    </div>
                </AccordionTab>

                <AccordionTab>
                    <template #header>
                        <div class="flex items-center">
                            <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">Come posso monitorare le performance?</span>
                        </div>
                    </template>
                    <div class="text-lg text-surface-600 dark:text-surface-400">
                        Forniamo un dashboard personalizzato dove puoi monitorare in tempo reale tutte le metriche importanti: 
                        prenotazioni, ricavi, recensioni degli ospiti e performance complessive. 
                        Riceverai anche report mensili dettagliati con analisi e suggerimenti per ottimizzare i risultati.
                    </div>
                </AccordionTab>
            </Accordion>

            <div class="text-center mt-12">
                <p class="text-lg text-surface-600 dark:text-surface-400 mb-6">
                    Hai altre domande? Non esitare a contattarci
                </p>
                <Button
                    label="Contattaci"
                    class="!text-xl !px-8 !py-3"
                    severity="primary"
                />
            </div>
        </div>
    </div>
</template> 