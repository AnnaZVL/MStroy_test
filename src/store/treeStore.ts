import type { Item, ItemTable } from "@/types/item";
import { TreeStore } from "@/utils/treeStore";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTreeStore = defineStore('tree', () => {
const data = ref(new TreeStore([]));  
 
  const loadItems = (items: Item[]) => {
    data.value = new TreeStore(items);    
  };

  const getItemsAll = () => { return data.value.getAll()}

  const transformItems = (items: Item[]): ItemTable[] => {
    const itemsMap = new Map(items.map(item => [item.id, item]));
    let count = 1;  
    
    const rootItems = items.filter(item => item.parent === null);
  
    const buildTree = (item: Item) => {
      const children = items.filter(i => i.parent === item.id);
      const hasChildren = children.length > 0;
  
      const node: ItemTable = {
        count: count++,
        parent: hasChildren ? 'Группа' : 'Элемент',
        label: item.label,
        id: item.id,        
        originalParent: item.parent
      };
  
      if (hasChildren) {
        node['children'] = children.map(buildTree);        
        node['path'] = [item.id, ...children.map(c => c.id)];
      } else {        
        node['path'] = [item.id];
      }
  
      return node;
    };
  
    return rootItems.map(buildTree);
  }
  
  const getItem = (id: Item['id']) => data.value.getItem(id);

  const getChildren = (id: Item['id']) => data.value.getChildren(id);

  const addItem = (id: number, itemParent: Item['id']) => {
    
    const newItem: Item = {id: id, parent: itemParent, label: ''}

    const currentItems = [...data.value.getAll()];
    currentItems.push(newItem);
      
    data.value = new TreeStore(currentItems);    
  }

  const removeItem = (itemId: Item['id']) => {    
    data.value.removeItem(itemId)    
  }

  const updateItem = (id: Item['id'], label: string) => {
    
    data.value.updateItem(id, label)
  }

    return {
        data,
        loadItems,
        getItemsAll,
        getItem,
        getChildren,        
        transformItems, 
        addItem,
        removeItem,
        updateItem,
    }

})