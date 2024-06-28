// // -----------Rest Operator---------------
// // Testing with the rest 
// // this is rest operator because it is concatinating the things

// import { log } from "console";

// // values one by one jode ne appe che 
// const sum = (...args) => {
//     // const args = [x, y, z];
//     let total = 0;
//     for (let i = 0; i < args.length; i++) {
//       total += args[i];
//     }
//     return total;
// }

// console.log("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 => ", sum(1,2,3,4,5,6,7,8,9,10)); // 55
// console.log("1 + 2 + 3 + 4 => ", sum(1,2,3,4)); // 10

// console.log("----------------------------");

// function myBio ( firstName, lastName, ...otherDetails) {
//     return otherDetails;
// }

// console.log(myBio("shrut", "sureja", "Marwadi University", [1,2,3,4,5,6], 9.22));
// // [ 'Marwadi University', [ 1, 2, 3, 4, 5, 6 ], 9.22 ]



// // -----------Spread Operator---------------

// const arr = [1,2,3,4,5];

// console.log("Printing the arr = [1,2,3,4,5] like ...arr")
// // this is the spread operator because it is not concatinating the things
// // but it is spreading the array values => values ne one by one open kari ne aape che 
// console.log(...arr);//


// // -------------Aruguments Object in JS-----------------

// // Declare a function with two parameters:
// function myName(firstName, lastName) {
//     return arguments;
// }
// // This does not work in the Arrow function
// // const myName = (firstName, lastName) => {
// //     return arguments;
// // }  
// // Invoke myName() function with two arguments:
// console.log("Arguments Object Output :");
//   console.log(myName("Oluwatobi", "Sofela"));


// hoisting questions  
// a;
// console.log(a);
// var a;
// for (let i = 0; i <3 ; i++) {
//   setTimeout(()=>{
//     console.log(i)
//   }, 100)
// }


// console.log(this)
// "use strict"
// function logThis(){
//     function logThisInsideLogThis1() {
//         "use strict"
//         console.log(this);// undefined 
//     }
//     function logThisInsideLogThis2(){
//         console.log(this); // global Object
//     }
//     logThisInsideLogThis1()
//     logThisInsideLogThis2()
// }
// logThis()

// const logThis = () => { 
//     function logThisInsideLogThis (){ console.log(this);}
//     logThisInsideLogThis();
// }
// logThis ();

// TODO 
// [ 1, 2 ,3 , [2,4,5, [" asdasd", 2, [2,3,5]]]] // convert this too a new reference in the memory not the copy of the memory
// using spread operator 

// map , set

// console.log(a)  

// a = 0;
// function fun(){
//     console.log("in the function");
// }

// const a = {
//     name : "asdasd",
//     pname(){
//         console.log("asdasdsadasdad");
//     },
//     b : {
//         c : {
//             z : "asdasdasd"
//         }
//     }
// }

// const p = JSON.stringify(a);
// console.log(p);
// console.log(JSON.parse(p));

// const s = [1,2.3,4,4,5,6]
// console.log(s)

// console.log(x = 123)

// const myPromise = () => Promise.resolve('I have resolved!');

// function firstFunction() {
//   myPromise().then(res => console.log(res));
//   console.log('second');
// }

// async function secondFunction() {
//   console.log(await myPromise());
//   console.log('second');
// }

// firstFunction();
// secondFunction();

function compareMembers(person1, person2 = person) {
    if (person1 !== person2) {
      console.log('Not the same!');
    } else {
      console.log('They are the same!');
    }
}

const person = { name: 'Lydia' };

compareMembers(person);