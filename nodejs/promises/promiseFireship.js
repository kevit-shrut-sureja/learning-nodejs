// // L1
// console.log('🥪 Synchronous 1');

// // L2
// setTimeout(_ => console.log(`🍅 Timeout 2`), 0);

// // L3
// // 
// Promise.resolve().then(_ => console.log('🍍 Promise 3'));

// // L4
// console.log('🥪 Synchronous 4');
// /*
// 🥪 Synchronous 1
// 🥪 Synchronous 4
// 🍍 Promise 3
// 🍅 Timeout 2
// */

// const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

// promise
//   .then(res => res.json())
//   .then(todo => {
//     // throw new Error('uh oh');
//     return todo;
//   })
//   .then(todo => console.log('😛', todo.title))
//   .catch(err => console.error('😭', err));

// console.log('🥪 Synchronous');



const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const codeBlocker = () => {

    // Blocking

    // let i = 0;
    // while(i < 1000000000) { i++;}

    // return '🐷 billion loops done';


    // Async blocking

    // return new Promise((resolve, reject) => {

    //     let i = 0;
    //     while(i < 1000000000) { i++;}
 
    //     resolve('🐷 billion loops done');
    // })


    // Non-blocking

    return Promise.resolve().then(v =>  {
        let i = 0;
        while(i < 1000000000) { i++; }
        return '🐷 billion loops done';
    })

}

log('🥪 Synchronous 1');


codeBlocker().then(log)


log('🥪 Synchronous 2');
