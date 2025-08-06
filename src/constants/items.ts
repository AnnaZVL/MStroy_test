import type { Item } from "../types/item";

const items: Item[] = [
    { id: 1, parent: null, label: 'Айтем 1'},

    { id: '2', parent: 1, label: 'Айтем 2'},
    { id: 3, parent: 1, label: 'Айтем 3'},

    { id: 4, parent: '2', label: 'Айтем 4'},
    { id: 5, parent: '2', label: 'Айтем 5'},
    { id: 6, parent: '2', label: 'Айтем 6'},

]

export default items;