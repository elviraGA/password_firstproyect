import { createApp } from 'vue'
import App from './App.vue'

import TheTimer from './components/TheTimer.vue'
import BaseButton from './UI/BaseButton.vue'
import BaseCard from './UI/BaseCard.vue'



const app = createApp(App);

app.component('the-timer', TheTimer);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);


app.mount('#app');
