export interface Item {
    id: string | number
    parent: string | number | null
    label: string
}

interface TreeNode extends Item {
  children?: TreeNode[]
}

export enum CategoryType {
  Group = 'group',
  Elem = 'elem'
}

export const CategoryTypeLabels: Record<CategoryType, string> = {
  [CategoryType.Group]: 'Группа',
  [CategoryType.Elem]: 'Элемент'
} as const

export interface ItemTable {
    count: number
    id: Item['id']
    parent: Item['id']
    label: string
    originalParent: Item['parent']
    path?: Item['id'][]
    children?: Item[]
}