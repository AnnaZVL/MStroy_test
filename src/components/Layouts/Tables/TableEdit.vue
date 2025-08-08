<script setup lang="ts">
import ButtonActions from '@/components/UI/Buttons/ButtonActions.vue';
import { AgGridVue } from 'ag-grid-vue3';
import { useTreeStore } from '@/store/treeStore';
import { computed, createApp, ref } from 'vue';
import 'ag-grid-enterprise';
import type { CellValueChangedEvent, ColDef } from 'ag-grid-enterprise';
import type { ItemTable } from '@/types/item';

const treeStore = useTreeStore();
const gridApi = ref();
const columnDefs = ref<ColDef<ItemTable>[]>([
    {
        field: 'count',
        headerName: '№ п/п',
        maxWidth: 100,
        lockPosition: 'left',
    },
    {
        field: 'label',
        headerName: 'Наименование',
        lockPosition: 'right',
        editable: true, 
        cellEditor: 'agTextCellEditor', 
        cellEditorParams: {
            useFormatter: true
        },
        singleClickEdit: true
    },
]);

const autoGroupColumnDef = ref({
    headerName: 'Категория',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
        suppressCount: true,
        cellClass: 'category',
        innerRenderer: (params: any ) => {
            const container = document.createElement('div');
            container.style.display = 'flex';
            container.style.alignItems = 'center';
            container.style.justifyContent = 'space-between'
            container.style.gap = '8px';
            
            const textSpan = document.createElement('span');
            textSpan.textContent = params.data?.parent || '';
            container.appendChild(textSpan);
            
            const buttonActions = document.createElement('div');
            const app = createApp(ButtonActions, {
                onAdd: () => handleAdd(params.node),
                onDelete: () => handleDelete(params.node),
            });
            app.mount(buttonActions);
            container.appendChild(buttonActions);            

            return container;
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
const suppressAutoGroupColumn = true;

const onCellValueChanged = (params: CellValueChangedEvent) => {
    if (params.column.getColId() === 'label') {
        treeStore.updateItem(params.data.id, params.newValue);
    }
};

const onGridReady = (params: { api: any }) => {
    gridApi.value = params.api;
};

const handleAdd = (node: any) => {    
    const newId = new Date()
    treeStore.addItem(+newId, node.data.id)

    gridApi.value?.ensureIndexVisible(
        rowData.value.findIndex(item => item.id === +newId)
    );    
    
    const rowNode = gridApi.value?.getRowNode(newId);
    if (rowNode) {
        gridApi.value?.startEditingCell({
            rowIndex: rowNode.rowIndex,
            colKey: 'label'
        });
    }    
};

const handleDelete = (node: any) => {    
    treeStore.removeItem(node.data.id)
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
        @cell-value-changed="onCellValueChanged"
        @grid-ready="onGridReady"
        style="height: 500px; width: 100%"
    ></ag-grid-vue>
</template>

<style lang="scss" scoped>
</style>
