import { createApp } from 'vue'
import './assets/style/main.scss'
import App from './App.vue'
import { createPinia } from 'pinia';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 

ModuleRegistry.registerModules([AllCommunityModule]);
const pinia = createPinia();

createApp(App).use(pinia).mount('#app')
