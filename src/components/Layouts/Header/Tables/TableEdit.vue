<script setup lang="ts">
import { AgGridVue } from 'ag-grid-vue3';
import { items, colValue } from '@/constants/items';
import { ref } from 'vue';

const rowData = ref(items);

const colDefs = ref(colValue);
</script>

<template>
    <ag-grid-vue :rowData="rowData" :columnDefs="colDefs" style="height: 500px; width: 100%">
        </ag-grid-vue>
</template>

<style lang='scss' scoped>
</style>