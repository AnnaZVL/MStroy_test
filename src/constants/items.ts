import type { Item } from "../types/item";

export const items: Item[] = [
    { id: 1, parent: null, label: 'Айтем 1'},

    { id: '2', parent: 1, label: 'Айтем 2'},
    { id: 3, parent: 1, label: 'Айтем 3'},

    { id: 4, parent: null, label: 'Айтем 4'},
    { id: 5, parent: '2', label: 'Айтем 5'},
    { id: 6, parent: '2', label: 'Айтем 6'},

    { id: 7, parent: 4, label: 'Айтем 7'},
    { id: 8, parent: 4, label: 'Айтем 8'},

    { id: 9, parent: null, label: 'Айтем 9'},

]


// const itemsres = [
//     { count: 1, parent: 'Группа', path: [1, '2', 3], label: 'Айтем 1', 
//         children: [ 
//             { id: '2', parent: 1, label: 'Айтем 2'},
//             { id: 3, parent: 1, label: 'Айтем 3'},
//     ]},

//     { count: 2, parent: 'Группа', path: ['2', 5, 6], label: 'Айтем 2', 
//         children: [
//             { id: 5, parent: '2', label: 'Айтем 5'},
//             { id: 6, parent: '2', label: 'Айтем 6'},
//         ]
//     },

//     { count: 3, parent: 'Группа', path: [4, 7, 8], label: 'Айтем 4', children: [
//         { id: 7, parent: 4, label: 'Айтем 7'},
//         { id: 8, parent: 4, label: 'Айтем 8'},
//     ]},

    
//     { count: 4, parent: 'Элемент', path: [9], label: 'Айтем 9'},

//     { count: 5, parent: 'Элемент', path: [7], label: 'Айтем 7'},

//     { count: 6, parent: 'Элемент', path: [8], label: 'Айтем 8'},

//     { count: 7, parent: 'Элемент', path: [5], label: 'Айтем 5'},

//     { count: 8, parent: 'Элемент', path: [6], label: 'Айтем 6'},

//     { count: 9, parent: 'Элемент', path: [3], label: 'Айтем 3'},
// ]
