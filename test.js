// create a function that accept single parameter. the parameter will be an array of integer
// your function should be able to count the unique value inside the array
// examples:
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) => 7
// countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6])) => 4
// countUniqueValues([])) => 0

function countUnique(array) {
    
    const unique = new Map()
    for (let i = 0; i < array.length; i++) {
        if (unique.get(array[i]) == undefined) {
            unique.set(array[i],  1)
        }
        unique.set(array[i],  (unique.get(array[i])) + 1)
    }
    
    return unique.size
    
    // let count = 0
    // for (let i = 0; i < array.length; i++){
    //     array[i] == array[i + 1] ? null : count += 1
    //     }
    //  return count
}

console.log(countUnique([1, 2, 3, 4, 4, 1, 7, 2, 12, 12, 13, 13, 13, 13,7, 7,1 ,4,2,3]))
// console.log(countUnique([1, 2, 2, 2, 2, 2, 2, 2, 4, 6]))
// console.log(countUnique([]))






