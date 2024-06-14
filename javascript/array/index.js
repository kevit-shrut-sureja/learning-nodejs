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

const cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats.length); // 3
console.log(cats); //[ 'Dusty', 'Misty', 'Twiggy' ]

cats.length = 2;
console.log(cats); // [ 'Dusty', 'Misty' ] - Twiggy has been removed

cats.length = 5;
console.log(cats); // [ 'Dusty', 'Misty', <3 empty items> ]

cats.length = 3;
console.log(cats); // [ 'Dusty', 'Misty', <1 empty items> ]
cats.push('cat')
cats.unshift("cattttt")

console.log("------------- forEach loop")
cats.forEach((item, index) => {
    console.log(item, "=" ,index)
})
// cattttt = 0
// Dusty = 1
// Misty = 2
// cat = 4

console.log("------------- Simple for loop")
for (let i = 0; i < cats.length; i++){
    console.log(cats[i], i)
}
// cattttt 0
// Dusty 1
// Misty 2
// undefined 3
// cat 4

console.log("------------- for ... in loop");
for(const cat in cats){
    console.log(cat, cats[cat])
}
// 0 cattttt
// 1 Dusty
// 2 Misty
// 4 cat

console.log("------------- for ... of")
for(const cat of cats) {
    console.log(cat)
}
// cattttt
// Dusty
// Misty
// cat

const letters = ["a", "b", "c"];
const arr = [1 , [2, 3]]
const alphaNumeric = letters.concat(arr);
arr[0] = 100;
arr[1][1] =1111;
console.log(alphaNumeric);
console.log(letters );
// results in ['a', 'b', 'c', 1, 2, 3]



const array1 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]
console.log(array1);
array1[3] = 'z'
// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 2, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
