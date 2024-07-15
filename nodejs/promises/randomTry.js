const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);
// const func = async () => {
//     return new Promise((resolve ,reject) => {
//         console.log("hi");
//         resolve("hdddddd");
//     })
//     return "Hello";
// }

// const a = func();
// console.log(a);
// a.then((x) => console.log(a,x))
// console.log(a);/*  */


// Promise.race([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
//   ]).then(x => log(x)); // 1


// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
//   ]).then(x => log(x)); // 1


// Promise.allSettled([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 4000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
//   ]).then(x => log(x)); // 1

// Promise.any([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 4000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
//   ]).then(x => log(x)); // 1

// const timer1 = setTimeout(() => {
//   console.log(113);
// }, 1);

// const p = new Promise(function (resolve, reject){
//   console.log(12344);
// })

// Promise.resolve(2).then((data) => {}).then(console.log)

// function preo(){
//   return new Promise((res, rej) => {
//     rej("123")
//     res(1);
//     res(3)
//     console.log("Hello from here");
//   })
// }

// function init(){
//   preo()
//     .then(v => console.log(v+1))
//     .catch(err => console.log(err))
// }
// init()

const p = new Promise((resolve, reject) => {
  resolve("!23")
});

p.then(console.log).then(p => console.log("asdasdads", p))

p.catch(error => console.log(error))