// // [ 1, 2 ,3 , [2,4,5, [" asdasd", 2, [2,3,5]]]] to a new array and not by the reference 

// const array1 = [ 1, 2 , 3, [ 2, 4, 5, ["asdasd", 2, [ 2, 3, 5] ] ] ]

// //  copy the Value in array2 method 
// // const array2 = new Array(array1); not working 

// // using slice 
// const array2 = array1.slice(0, array1.length)
// // const array2  = JSON.parse(JSON.stringify(array1)); // this works really fine

// // need to travel recursively and check if its and array or not
// // if it is a array then i have to slice it their or need to 
// // spread it their

// function copyWithOutReference(array1, array2) {
//     // from the outer part -> inner part copy 
//     // in this i have to change the values with like 
//     // array2 = [...array1]
//     // if at i = 3 the array is subdividing then removing it or replacing it with array2[3] = [...array1[3]]
//     // base condition !! 
//     // if it reached the length in the array1 then 
//     // or
//     // from the inner part -> outer part copy
//     // 
// }


// // testing
// console.log("array1 before : ", array1);
// console.log("array2 before : ", array2);

// array1[2] = 1000;
// array1[3][2] = 100;
// array1[3][1] = ["helo"];
// array1[3][3][2][0] = 2000;

// console.log("array1 after : ", array1);
// console.log("array2 after : ", array2);

// // testing the Object.is
// const array3 = array1
// console.log(Object.is(array1, array2))

// --------------------length 

// const cats = [];
// cats[30] = ["Dusty"];
// console.log(cats.length); // 31

// const cats = ["Dusty", "Misty", "Twiggy"];
// console.log(cats.length); // 3
// console.log(cats); //[ 'Dusty', 'Misty', 'Twiggy' ]

// cats.length = 2;
// console.log(cats); // [ 'Dusty', 'Misty' ] - Twiggy has been removed

// cats.length = 5;
// console.log(cats); // [ 'Dusty', 'Misty', <3 empty items> ]

// cats.length = 3;
// console.log(cats); // [ 'Dusty', 'Misty', <1 empty items> ]
// cats.push('cat')
// cats.unshift("cattttt")

// console.log("------------- forEach loop")
// cats.forEach((item, index) => {
//     console.log(item, "=" ,index)
// })
// // cattttt = 0
// // Dusty = 1
// // Misty = 2
// // cat = 4

// console.log("------------- Simple for loop")
// for (let i = 0; i < cats.length; i++){
//     console.log(cats[i], i)
// }
// // cattttt 0
// // Dusty 1
// // Misty 2
// // undefined 3
// // cat 4

// console.log("------------- for ... in loop");
// for(const cat in cats){
//     console.log(cat, cats[cat])
// }
// // 0 cattttt
// // 1 Dusty
// // 2 Misty
// // 4 cat

// console.log("------------- for ... of")
// for(const cat of cats) {
//     console.log(cat)
// }
// // cattttt
// // Dusty
// // Misty
// // cat

// const letters = ["a", "b", "c"];
// const arr = [1 , [2, 3]]
// const alphaNumeric = letters.concat(arr);
// arr[0] = 100;
// arr[1][1] =1111;
// console.log(alphaNumeric);
// console.log(letters );
// // results in ['a', 'b', 'c', 1, 2, 3]



// const array1 = ['a', 'b', 'c', 'd', 'e'];

// // Copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 3, 4));
// // Expected output: Array ["d", "b", "c", "d", "e"]
// console.log(array1);
// array1[3] = 'z'
// // Copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 2, 3));
// // Expected output: Array ["d", "d", "e", "d", "e"]


// new practice

// creating empty array with different methods
// let arr = Array(5);
// // let arr = [,,,,]
// // let arr = [,,,2,,,,]
// console.log(typeof arr);
// console.log(arr.toString());
// console.log(arr.length);
// console.log(arr.constructor([1,2,2]));
// console.log(arr.length);
// console.log(arr)
// console.log(arr instanceof Array)

// let arr1 = [1, 2, 3];
// arr1.foo = 'barr';
// console.log(arr1.length);

// const arr = [12, 3, 4, 5, 4]

// console.log(arr);
// console.log(arr.length);

// arr[-1] = 1
// console.log(arr);
// console.log(arr.length);

// console.log(arr.includes(-1));
// console.log(0 in arr);
// arr.forEach(x => console.log(x))


// let largeArray = Array.from({ length: 1e6 }, (_, i) => i);
// console.log(largeArray);
// console.time('forEach');
// largeArray.forEach((num) => {
//   // Perform a simple operation
//   let result = num * 2;
// });
// console.timeEnd('forEach');

// // Output: 
// // forEach: 9.346923828125 ms

// console.time('for');
// for (let i = 0; i < largeArray.length; i++) {
//   // Perform a simple operation
//   let result = largeArray[i] * 2;
// }
// console.timeEnd('for');

// // Output: 
// // for: 2.3388671875 ms

// let processData = (data) => {
//     console.time('forEach');
//     data.forEach((item) => {
//       // Simulate a complex operation
//       item.processed = item.value * 2;
//     });
//     console.timeEnd('forEach');
  
//     console.time('for');
//     for (let i = 0; i < data.length; i++) {
//       // Simulate a complex operation
//       data[i].processed = data[i].value * 2;
//     }
//     console.timeEnd('for');
// };

// let largeDataset = Array.from({ length: 1e6 }, (_, i) => ({ value: i }));
// processData(largeDataset);

  // Output: 
  // forEach: 167.56103515625 ms
  // for: 6.554931640625 ms



// let fetchData = async (id) => {
// // Simulate an asynchronous API call
//     return new Promise((resolve) => setTimeout(() => resolve(`Data for ${id} ${new Date().toLocaleTimeString()}`), 1000));
// };

// let ids = [1, 2, 3, 4, 5];

// ids.forEach(async (id) => {
//     let data = await fetchData(id);
//     console.log(data);
// });
// // Output: Likely an empty array or undefined

// async function processIds() {
//     for (const id of ids) {
//         let data = await fetchData(id);
//         console.log(data);
//     }
// }
  
// processIds();
// Output: Data for 1, Data for 2, ..., Data for 5 (each logged after 1 second delay)

const arr = new Array(undefined)
console.log(arr);
const a = [1,2,3,4,5,56]

console.log(a.toString())
console.log(a.toLocaleString())
