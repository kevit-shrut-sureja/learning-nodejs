// [ 1, 2 ,3 , [2,4,5, [" asdasd", 2, [2,3,5]]]] to a new array and not by the reference 

const array1 = [ 1, 2 , 3, [ 2, 4, 5, ["asdasd", 2, [ 2, 3, 5] ] ] ]

//  copy the Value in array2 method 
// const array2 = new Array(array1); not working 

// using slice 
const array2 = array1.slice(0, array1.length)
// const array2  = JSON.parse(JSON.stringify(array1)); // this works really fine

// need to travel recursively and check if its and array or not
// if it is a array then i have to slice it their or need to 
// spread it their

function copyWithOutReference(array1, array2) {
    // from the outer part -> inner part copy 
    // in this i have to change the values with like 
    // array2 = [...array1]
    // if at i = 3 the array is subdividing then removing it or replacing it with array2[3] = [...array1[3]]
    // base condition !! 
    // if it reached the length in the array1 then 
    // or
    // from the inner part -> outer part copy
    // 
}


// testing
console.log("array1 before : ", array1);
console.log("array2 before : ", array2);

array1[2] = 1000;
array1[3][2] = 100;
array1[3][1] = ["helo"];
array1[3][3][2][0] = 2000;

console.log("array1 after : ", array1);
console.log("array2 after : ", array2);

// testing the Object.is
const array3 = array1
console.log(Object.is(array1, array2))