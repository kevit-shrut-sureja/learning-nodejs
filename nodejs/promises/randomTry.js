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


Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(x => log(x)); // 1


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