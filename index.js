import bubbleSort from './sorting/bubbleSort'
import selectionSort from './sorting/selectionSort'
import {quickSortRecursive, quickSortIterative} from './sorting/quickSort'
import mergeSort from './sorting/mergeSort'

const array = [5, 1, 3, 4, 8, 2]
console.log(bubbleSort([...array]))
console.log(selectionSort([...array]))
console.log(quickSortRecursive([...array]))
console.log(quickSortIterative([...array]))
console.log(mergeSort([...array]))
