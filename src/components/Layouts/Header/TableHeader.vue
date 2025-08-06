<script setup lang="ts">
import IconArrowBack from '@/components/UI/Icons/IconArrowBack.vue';
import IconsArrowNext from '@/components/UI/Icons/IconsArrowNext.vue';
import { ModeType, ModeTypeLabels } from '@/types/mode'
import { ref } from 'vue';

const emit = defineEmits<{
    (e: 'change:mode', value: ModeType): void;    
}>();

const currentMode = ref<ModeType>(ModeType.View)

const changeMode = () => {
   const newMode = currentMode.value === ModeType.View 
        ? ModeType.Edit 
        : ModeType.View;
    
    currentMode.value = newMode;
    emit('change:mode', newMode)

    console.log('CH mode', newMode);
}
</script>

<template>
    <div class="header">        
        <button class="btn mode" @click="changeMode">{{ ModeTypeLabels[currentMode] }}</button>
        <div class="actions" v-if="currentMode === ModeType.Edit">
            <button class="btn back"> <IconArrowBack/></button>
            <button class="btn next"> <IconsArrowNext/></button>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.header {
    display: flex;
    gap: 15px;

    .mode {
        color: #7d7df3;
    }

    .actions {
        display: flex;
        gap: 15px;
        align-items: center;

        .back, .next {
            padding: 0;
            width: 20px;
            height: 20px;
        }


        
    }
}
</style>