<script setup lang="ts">
import { AgGridVue } from 'ag-grid-vue3';
import { colValue } from '@/constants/items';
import { useTreeStore } from '@/store/treeStore';
import { onMounted, ref } from 'vue';
import type { Item } from '@/types/item';

const treeStore = useTreeStore();

const rowData = ref<Item[]>([])

const colDefs = ref(colValue);

onMounted(() => {
   rowData.value = treeStore.getItemsAll()
    console.log('object', rowData.value);
})
</script>

<template>
    <ag-grid-vue :rowData="rowData" :columnDefs="colDefs" style="height: 500px; width: 100%">
        </ag-grid-vue>
</template>

<style lang='scss' scoped>
</style>