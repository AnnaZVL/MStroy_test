export interface Item {
    id: string | number
    parent: string | number | null
    label: string
}

// export interface ColType {
//     field: string

// }
export enum CategoryType {
  Group = 'group',
  Elem = 'elem'
}

export const ModeTypeLabels: Record<CategoryType, string> = {
  [CategoryType.Group]: 'Группа',
  [CategoryType.Elem]: 'Элемент'
};