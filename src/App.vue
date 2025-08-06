<script setup lang="ts">
import { ModeType } from '@/types/mode';
import TableHeader from './components/Layouts/Header/TableHeader.vue';
import TableView from './components/Layouts/Header/Tables/TableView.vue';
import TableEdit from './components/Layouts/Header/Tables/TableEdit.vue';
import { items } from '@/constants/items';
import { ref } from 'vue';
import { TreeStore } from '@/utils/treeStore';
import { useTreeStore } from './store/treeStore';

const treeStore = useTreeStore()
//const treeStore = new TreeStore(items);

const currentMode = ref<ModeType>(ModeType.View);

const changeMode = (mode: ModeType) => {
    console.log('APP', mode);
    currentMode.value = mode
    const a = treeStore.getItemsAll()
    console.log('ALL', a);
   // treeStore.updateItem({id: 1, parent: null, label: '232323'})
};
</script>

<template>
    <main class="main">
        <TableHeader @change:mode="changeMode" />
        <TableView v-if="currentMode === ModeType.View"/>
        <TableEdit v-else />
    </main>
</template>

<style scoped></style>
