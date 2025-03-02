// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuePrototypes from './vuePrototypes';

const app = createApp(App);

for (let key in vuePrototypes) {
  app.config.globalProperties[key] = vuePrototypes[key];
}
app.use(createPinia());
app.use(router);

app.mount('#app');
