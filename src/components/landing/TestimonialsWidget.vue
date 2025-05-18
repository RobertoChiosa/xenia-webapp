<template>
    <div id="testimonials" class="w-full bg-white">
        <div class="py-20 max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <div class="text-center mb-16">
        <h1 class="text-2xl md:text-5xl mb-6 mt-2">I Nostri Servizi</h1>
        <p class="text-surface-600 dark:text-surface-400">Scopri quali sono i servizi inclusi nella nostra professionalità di gestione immobiliare</p>
      </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-surface-0 dark:bg-surface-900 rounded-xl p-8 shadow-sm">
                    <div class="flex items-center mb-6">
                        <Avatar icon="pi pi-user" size="large" class="mr-4" />
                        <div>
                            <h5 class="text-xl font-semibold text-surface-900 dark:text-surface-0">Marco Rossi</h5>
                            <span class="text-surface-600 dark:text-surface-400">Proprietario a Roma</span>
                        </div>
                    </div>
                    <p class="text-lg text-surface-600 dark:text-surface-400 mb-6">
                        "La gestione della mia proprietà è diventata molto più semplice grazie a Xenia. 
                        Il supporto è eccellente e i risultati sono straordinari. Consiglio vivamente i loro servizi."
                    </p>
                    <div class="flex">
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500"></i>
                    </div>
                </div>

                <div class="bg-surface-0 dark:bg-surface-900 rounded-xl p-8 shadow-sm">
                    <div class="flex items-center mb-6">
                        <Avatar icon="pi pi-user" size="large" class="mr-4" />
                        <div>
                            <h5 class="text-xl font-semibold text-surface-900 dark:text-surface-0">Laura Bianchi</h5>
                            <span class="text-surface-600 dark:text-surface-400">Proprietaria a Firenze</span>
                        </div>
                    </div>
                    <p class="text-lg text-surface-600 dark:text-surface-400 mb-6">
                        "Ho visto un aumento significativo delle prenotazioni da quando ho iniziato a utilizzare Xenia. 
                        La piattaforma è intuitiva e il team è sempre disponibile per qualsiasi necessità."
                    </p>
                    <div class="flex">
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500"></i>
                    </div>
                </div>

                <div class="bg-surface-0 dark:bg-surface-900 rounded-xl p-8 shadow-sm">
                    <div class="flex items-center mb-6">
                        <Avatar icon="pi pi-user" size="large" class="mr-4" />
                        <div>
                            <h5 class="text-xl font-semibold text-surface-900 dark:text-surface-0">Giuseppe Verdi</h5>
                            <span class="text-surface-600 dark:text-surface-400">Proprietario a Venezia</span>
                        </div>
                    </div>
                    <p class="text-lg text-surface-600 dark:text-surface-400 mb-6">
                        "La gestione automatica delle prenotazioni e delle pulizie ha rivoluzionato il mio business. 
                        Xenia ha trasformato completamente il modo in cui gestisco le mie proprietà."
                    </p>
                    <div class="flex">
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i class="pi pi-star-fill text-yellow-500"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
</script> 