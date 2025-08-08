<script setup lang="ts">
const emit = defineEmits<{
    (e: 'add'): void;
    (e: 'delete'): void;
}>();

const onAddClick = () => {
    emit('add');    
};

const onDeleteClick = () => {
    emit('delete');    
};
</script>

<template>
    <div class="actions">
        <button class="btn btn-action btn-action--add" @click.stop="onAddClick">
            +
        </button>
        <button class="btn btn-action btn-action--del" @click.stop="onDeleteClick">
            x
        </button>
    </div>
</template>

<style lang="scss" scoped>
.actions {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: space-between;

    .btn-action {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        color: #fff;
        font-size: 16px;
        line-height: 1; 
        border: none; 
        
        &--add {
            background-color: rgb(48, 48, 245);
        }

        &--del {
            background-color: rgb(238, 101, 101);
        }
        
    }
}
</style>
