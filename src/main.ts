import { createApp } from 'vue'
import './assets/style/main.scss'
import App from './App.vue'
import { createPinia } from 'pinia';
import { AllCommunityModule, ClientSideRowModelModule, CellStyleModule,  ModuleRegistry } from 'ag-grid-community'; 
import { RowGroupingModule } from 'ag-grid-enterprise';
import { TreeDataModule } from 'ag-grid-enterprise'; 
import 'ag-grid-enterprise';


ModuleRegistry.registerModules([
   AllCommunityModule, 
   CellStyleModule, 
   ClientSideRowModelModule,
   TreeDataModule, 
   RowGroupingModule
]);

const pinia = createPinia();

createApp(App).use(pinia).mount('#app')
