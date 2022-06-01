import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'


import BaseButton from './UI/BaseButton.vue'
import BaseCard from './UI/BaseCard.vue'
import TheInstructions from './components/TheInstructions.vue'
import LasPalabras from './components/LasPalabras.vue'
import PantallaFinal from './components/PantallaFinal.vue'


const app = createApp(App);


app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('pantalla-final', PantallaFinal)


const router = createRouter({

    history: createWebHistory(),
    routes: [
        {path: '/', component: TheInstructions},
        {path: '/game', component: LasPalabras},
        {path: '/the-end', component: PantallaFinal}
    ]

});

app.use(router);


app.mount('#app');
