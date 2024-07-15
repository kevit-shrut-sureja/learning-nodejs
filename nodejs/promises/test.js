// const { readFile } = require('fs').promises;

// function fakePromise(ms, state){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (state) resolve()
//             else reject();
//         }, ms * 1000);
//     })
// }


// const p1 = Promise.all([fakePromise(1,1),fakePromise(0,1),fakePromise(2,1),fakePromise(1,0)]);
// p1.then(data => console.log(data))
// .catch(error => console.log(error))

// const p2 = Promise.resolve("Hello");

// p2
//     .then(res => {
//         console.log(res);
//         return "World"
//     })
//     .finally(() => console.log("Finally"))
//     .then((res) => console.log(res))

// const p3 = Promise.reject(new Error("this is error"));

// p3
//     .then(res => console.log(res))
//     .catch(error => console.log(error.message))

// const p4 = new Promise((res, rej) => {
//     res("Hello")
// });

// p4
//     .then(res => {
//         throw new Error('Error')
//     })
//     .catch(err => console.log(err.message))
//     .then(() => console.log("Here"))

// const p5a =  Promise.resolve(2);
// const p5b = "asdasdasd"
// const p5c = new Promise((res, rej) => {
//     setTimeout(rej, 100, "foo")
// });

// Promise.all([p5a, p5b, p5c])
// .then(val => {
//     console.log(val)
// })
// .catch(err => console.log(err))


const p6 = Promise.reject(new Error('Project'))

p6.then(res => console.log(res))
.catch(err => console.log(err.message))