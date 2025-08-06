import type { Item } from "@/types/item";

export class TreeStore {
  private items: Item[];
  private itemsMap: Map<number | string, Item>;

  constructor(items: Item[]) {
    this.items = [...items];
    this.itemsMap = new Map();   
    
    items.forEach(item => {
      this.itemsMap.set(item.id, item);
    });
  }

  getAll(): Item[] {
    return [...this.items]; 
  }

  getItem(id: number | string): Item | undefined {
    return this.itemsMap.get(id);
  }

  addItem(item: Item): void {
    this.items.push(item);
    this.itemsMap.set(item.id, item);
  }

  removeItem(id: Item['id']): void {
    this.items = this.items.filter((item: Item) => item.id !== id);
    this.itemsMap.delete(id);
  }

  updateItem(newItem: Item): void {
    const index = this.items.findIndex(item => item.id === newItem.id);
  
  if (index !== -1) {    
    this.items[index] = { ...this.items[index], ...newItem };    
    
    this.itemsMap.set(newItem.id, this.items[index]);
  }
    console.log('UPDATE');
   }

   getChildren(id: Item['id']): Item[] {
    return this.items.filter(item => item.parent === id);
  }
}