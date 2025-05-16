import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import {definePreset} from '@primeuix/themes'
import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import '@/assets/styles.scss';

const app = createApp(App);


app.use(router);

const customPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#e6e9eb',
            100: '#cfd5da',
            200: '#a9b3bb',
            300: '#7b8c99',
            400: '#556776',
            500: '#203036', // base
            600: '#1c2a30',
            700: '#162229',
            800: '#111b22',
            900: '#0b1319',
            950: '#050a0e'
        }
    }
})

app.use(PrimeVue, {
    theme: {
        preset: customPreset,
        options: {
            prefix: 'p',
            darkModeSelector: 'light',
            cssLayer: false
        }
    }
})
app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app');
