import { createApp } from 'vue'
import './style.css'
import { router } from './router'; /** index not necessary */
import App from './App.vue';

const app = createApp(App);

app.use(router); /** to use router */
app.mount('#app');
