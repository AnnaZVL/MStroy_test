<script setup lang="ts">
import { AgGridVue } from 'ag-grid-vue3';
import { useTreeStore } from '@/store/treeStore';
import { computed, ref } from 'vue';
import 'ag-grid-enterprise';
import type { ColDef } from 'ag-grid-enterprise';
import type { ItemTable } from '@/types/item';

const treeStore = useTreeStore();
const gridApi = ref();
const columnDefs = ref<ColDef<ItemTable>[]>([
    {
        field: 'count',
        headerName: '№ п/п',
        maxWidth: 100,        
        lockPosition: 'left'
    },  
    {
        field: 'label',
        headerName: 'Наименование',
        lockPosition: 'right'
    },
]);
 
const autoGroupColumnDef = ref({
    headerName: 'Категория',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
        suppressCount: true,
        innerRenderer: (params: { data: { parent: any } }) => {
            return params.data?.parent || '';
        },
    },
    minWidth: 250,
    valueGetter: (params) => {
        return params.data?.parent || '';
    },
    
});
const rowData = computed(() => treeStore.transformItems(treeStore.getItemsAll()));

const groupDefaultExpanded = ref(-1);
const getDataPath = ref((data): string[] => data.path);
const treeDataChildrenField = 'children';
const isGroupOpenByDefault = () => true;
const suppressAutoGroupColumn = true
const onGridReady = (params: { api: any; }) => {
    gridApi.value = params.api;
};
</script>

<template>
    <ag-grid-vue
        :columnDefs="columnDefs"      
        :autoGroupColumnDef="autoGroupColumnDef"  
        :isGroupOpenByDefault="isGroupOpenByDefault"
        :rowData="rowData"
        :treeData="true"
        :groupDefaultExpanded="groupDefaultExpanded"
        :treeDataChildrenField="treeDataChildrenField"
        :getDataPath="getDataPath"
        :suppressAutoGroupColumn="suppressAutoGroupColumn"        
        @grid-ready="onGridReady"
        style="height: 500px; width: 100%"
    ></ag-grid-vue>
</template>

<style lang="scss" scoped></style>
