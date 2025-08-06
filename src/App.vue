<script setup lang="ts">
import { AgGridVue } from 'ag-grid-vue3';
import { ModeType, ModeTypeLabels } from '@/types/mode';
import TableHeader from './components/Layouts/Header/TableHeader.vue';
import items from '@/constants/items';
import { ref } from 'vue';

const rowData = ref(items);

const colDefs = ref([{ field: 'id' }, { field: 'parent' }, { field: 'label' }]);

const currentMode = ref<ModeType>(ModeType.View);

const changeMode = (mode: ModeType) => {
    console.log('APP', mode);
};
</script>

<template>
    <main class="main">
        <TableHeader @change:mode="changeMode" />
        <ag-grid-vue :rowData="rowData" :columnDefs="colDefs" style="height: 500px; width: 100%">
        </ag-grid-vue>
    </main>
</template>

<style scoped></style>
