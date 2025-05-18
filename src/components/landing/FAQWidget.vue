<script setup>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
</script>

<template>
    <div id="faq" class="w-full bg-white-50">
        <div class="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-12 lg:gap-20">
                <!-- Left side - Text content -->
                <div class="flex-1 lg:max-w-[500px]">
                    <div class="text-sm sm:text-base text-surface-600 dark:text-surface-400 mb-4">
                        DOMANDE FREQUENTI
                    </div>
                    <h1 class="text-2xl sm:text-4xl md:text-5xl mb-6 mt-2">
                        Siamo a vostra disposizione
                    </h1>
                    <p class="mb-8">
                        Abbiamo raccolto le domande più comuni sui nostri servizi. Se non trovi la risposta che cerchi, 
                        non esitare a contattarci direttamente.
                    </p>
                    <div class="flex gap-4">
                            <a href="mailto:info@xeniapm.it">
                                <Button
                                    label="Contattaci"
                                    severity="primary"
                                />
                            </a>
                            <a href="mailto:info@xeniapm.it">
                                <Button
                                    label="Contattaci"
                                    outlined
                                />
                            </a>
                    </div>
                </div>

                <!-- Right side - FAQ List -->
                <div class="flex-1">
                    <Accordion class="border-none">
                        <AccordionTab>
                            <template #header>
                                <div class="flex items-center">
                                    <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">Come funziona il processo di gestione?</span>
                                </div>
                            </template>
                            <p>
                                Il nostro processo di gestione è semplice e trasparente. Dopo un'analisi iniziale della tua proprietà, 
                                creiamo un piano personalizzato che include la gestione delle prenotazioni, la manutenzione, 
                                le pulizie e il supporto agli ospiti.
                            </p>
                        </AccordionTab>

                        <AccordionTab>
                            <template #header>
                                <div class="flex items-center">
                                    <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">Quali sono i costi del servizio?</span>
                                </div>
                            </template>
                            <p>
                                I nostri costi sono strutturati in modo trasparente e competitivo. Offriamo diverse opzioni di gestione 
                                che si adattano alle tue esigenze specifiche. Il costo base include la gestione delle prenotazioni, 
                                il supporto agli ospiti e la manutenzione di base. Contattaci per un preventivo personalizzato.
                            </p>
                        </AccordionTab>

                        <AccordionTab>
                            <template #header>
                                <div class="flex items-center">
                                    <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">Come gestite le emergenze?</span>
                                </div>
                            </template>
                            <p>
                                Disponiamo di un team di supporto 24/7 pronto a intervenire in caso di emergenze. 
                                Abbiamo una rete di professionisti qualificati per interventi rapidi e risolutivi, 
                                garantendo la massima tranquillità sia per te che per i tuoi ospiti.
                            </p>
                        </AccordionTab>

                        <AccordionTab>
                            <template #header>
                                <div class="flex items-center">
                                    <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">Quali aree servite?</span>
                                </div>
                            </template>
                            <p>
                                Attualmente operiamo in Piemonte ed in Toscana, con particolare focus su Torino, 
                                Firenze, Empoli e Piombino.
                            </p>
                        </AccordionTab>

                    </Accordion>
                </div>
            </div>
        </div>
    </div>
</template>
