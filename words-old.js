
// var finalArray = []

// var currentIteration = 0

// function allPossibleCombinations(input, length, currentString, filteredWords) {

//     if (currentString.length == length) {
//         return [currentString]
//     }

//     if (currentString.length > 2) {
//         for (let i = 0; i < currentString.length; i++) {
//             if (currentString[i] === currentString[i - 1] && currentString[i] === currentString[i + 1]) {
//                 return [currentString]
//             }
//         }
//     }

//     var result = []

//     for (let i = 0; i < input.length; i++) {
//         result.push.apply(result, allPossibleCombinations(input, length, currentString + input[i], filteredWords));
//         currentIteration++
//         console.log('currentIteration:', currentIteration)
//     }

//     if (currentString.length === length - 1) {
//         for (let j = 0; j < result.length; j++) {
//             const currentResult = result[j]
//             console.log('currentResult:', currentResult)
//             if (!finalArray.includes(currentResult)) {
//                 var varEqual = true
//                 for (let k = 0; k < currentResult.length; k++) {
//                     const amount1 = currentResult.split('').filter(letter => letter === currentResult[k]).length
//                     const amount2 = input.split('').filter(letter => letter === currentResult[k]).length
//                     if (amount1 > amount2) varEqual = false
//                 }
//                 if(varEqual) {
//                     if (filteredWords.includes(currentResult)) {
//                         finalArray.push(currentResult)
//                     }
//                 }
//             }
//         }
//     }

//     console.log('final Array:', finalArray)
    
//     return finalArray
// }