import type { Item, TreeNode } from "@/types/item";

export class TreeStore {
  private items: Item[];
  private itemsMap: Map<Item['id'], Item>;

  constructor(items: Item[]) {
    this.items = [...items];
    this.itemsMap = new Map();   
    
   this.setItems(items);
  }

  setItems(items: Item[]) {
    this.items = [...items];
    this.rebuildMap();
  }

   private rebuildMap() {
    this.itemsMap = new Map(this.items.map(item => [item.id, item]));
  }

  getAll(): Item[] {
    return [...this.items]; 
  }

  getItem(id: Item['id']): Item | undefined {
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

  updateItem(id: Item['id'], label: string): void {
    const index = this.items.findIndex(item => item.id === id);
  
    if (index !== -1) {        
      this.items[index].label = label;  
      this.itemsMap.set(id, this.items[index]);
    }      
   }

  getChildren(id: Item['id']): Item[] {
    return this.items.filter(item => item.parent === id);
  }

  getAllChildren(id: Item['id']): Item[] {
      const children = this.getChildren(id);
      return children.concat(
        children.flatMap(child => this.getAllChildren(child.id))
      );
  }

  getTree(): TreeNode[] {    
    const rootItems = this.items.filter(item => !item.parent);
    return rootItems.map(item => this.buildTreeNode(item));
  }

  private buildTreeNode(item: Item): TreeNode {
    const children = this.getChildren(item.id)
      .map(child => this.buildTreeNode(child));
    
    return {
      ...item,
      children: children.length ? children : undefined
    };
  }
    
    
}