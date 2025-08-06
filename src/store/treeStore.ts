import { items } from "@/constants/items";
import type { Item } from "@/types/item";
import { TreeStore } from "@/utils/treeStore";
import { defineStore } from "pinia";

export const useTreeStore = defineStore('tree', () => {
    const data = new TreeStore(items)

    const getItemsAll = (): Item[] => {
        return data.getAll()
    }

    const getItem = (id: Item['id']): void => {
        data.getItem(id)
    }

    

    return {
        data,
        getItemsAll,
        getItem,

    }

})