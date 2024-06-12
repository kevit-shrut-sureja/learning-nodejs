// forEach Method 
// only can be used for the array
// const array = [ 1, 2, 4, 6, "das", ["sda" , "shrut", [2000, 144444]]];

// array.forEach((value , index, arr) => {
//     console.log(`value : ${value}, index : ${index} , arr ${arr}`);
//     // console.log(value)
// })


// const obj2 = {
//     multiplier : 5
// }
// const obj = {
//     multiplier: 2,
//     numbers: [1, 2, 3, 4, 5],
//     multiply: function() {
//         this.numbers.forEach(function(number) {
//             console.log(number * this.multiplier);
//         }, obj2); // passing 'this' as the third argument
//     }
// };

// obj.multiply();

// const arr = [];
// arr[1] = 0;
// arr[100] = 100;
// arr.forEach((value , index) => {
//     console.log("value : ", value);
//     console.log("index : ", index);
// })

// ---------------------------------map

// const array = ["dasda", "asdasd", "dsfsdaf"]
// const obj2 = {
//     multiplier : 5
// }
// array.map(function(value, index, arr){
//     console.log("value : ", value);
//     console.log("index : ", index);
//     console.log("array : ", arr);
//     console.log(this.multiplier)
// }, obj2 )

// ------------------------- for ... in

var obj = {a: 1, b: 2, c: 3, shrut : "sureja"};    
for (let prop in obj) {
    console.log('obj.'+prop+'='+obj[prop]);
};