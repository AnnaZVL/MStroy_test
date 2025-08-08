<script setup lang="ts">
import { ModeType } from '@/types/mode';
import TableHeader from './components/Layouts/Header/TableHeader.vue';
import TableView from './components/Layouts/Tables/TableView.vue';
import TableEdit from './components/Layouts/Tables/TableEdit.vue';
import { items } from '@/constants/items';
import { onMounted, ref } from 'vue';
import { useTreeStore } from './store/treeStore';

const treeStore = useTreeStore();

const currentMode = ref<ModeType>(ModeType.Edit);

const changeMode = (mode: ModeType) => {    
    currentMode.value = mode;
};

onMounted(() => {
    treeStore.loadItems(items);
});
</script>

<template>
    <main class="main">
        <TableHeader @change:mode="changeMode" />
        <TableView v-if="currentMode === ModeType.View" />
        <TableEdit v-else />
    </main>
</template>

<style scoped></style>
