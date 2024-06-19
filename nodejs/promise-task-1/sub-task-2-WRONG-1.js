// const tick = Date.now();
// const log = (message) => console.log(`${message} \nElapsed: ${Date.now() - tick}ms`);

const time = {
    A : 1000,
    D : 2000,
    B : 1000,
    C : 1000
}

async function executeWithTimeout(letter, time){
    console.log(`Executed at: ${new Date().toString()} with the letter: ${letter} and time: ${time}`);
    setTimeout(() => {
        console.log(`SetTimeout executed at: ${new Date().toString()} with the letter: ${letter}`)
    }, time);
}

async function execution(){
    const a = executeWithTimeout('A',time.A);
    const d = executeWithTimeout('D',time.D);
    const c = Promise.all([a,d]);
    c.then(() => executeWithTimeout('C', time.C));
    a.then(() => executeWithTimeout('B', time.B));
}

const main = async () => {
    console.log('Starting at:', new Date().toString());
    await execution();
    console.log('Completed at:', new Date().toString());
};
main();

// Starting at: Wed Jun 19 2024 18:28:56 GMT+0530 (India Standard Time)
// Executed at: Wed Jun 19 2024 18:28:56 GMT+0530 (India Standard Time) with the letter: A and time: 1000
// Executed at: Wed Jun 19 2024 18:28:56 GMT+0530 (India Standard Time) with the letter: D and time: 2000
// Executed at: Wed Jun 19 2024 18:28:56 GMT+0530 (India Standard Time) with the letter: B and time: 1000
// Completed at: Wed Jun 19 2024 18:28:56 GMT+0530 (India Standard Time)
// Executed at: Wed Jun 19 2024 18:28:56 GMT+0530 (India Standard Time) with the letter: C and time: 1000
// SetTimeout executed at: Wed Jun 19 2024 18:28:57 GMT+0530 (India Standard Time) with the letter: A
// SetTimeout executed at: Wed Jun 19 2024 18:28:57 GMT+0530 (India Standard Time) with the letter: B
// SetTimeout executed at: Wed Jun 19 2024 18:28:57 GMT+0530 (India Standard Time) with the letter: C
// SetTimeout executed at: Wed Jun 19 2024 18:28:58 GMT+0530 (India Standard Time) with the letter: D


// Doubt 
// const tick = Date.now()
// function getTime(){
//     return ((Date.now() - tick)/1000 === 0 ? "0.000" : (Date.now() - tick)/1000)
// }
// // const log = (message) => console.log(`${message} \nElapsed: ${Date.now() - tick}ms`);

// // Set - 1
// // const time = {
// //     A : 1000,
// //     D : 2000,
// //     B : 1000,
// //     C : 1000
// // }

// // Set - 2
// const time = {
//     A : 1000,
//     D : 800,
//     B : 1000,
//     C : 1000
// }

// function executeWithTimeout(letter, time){
//     return new Promise((resolve, reject) => {
//         console.log(`Executed at: ${getTime()}\t with the letter: ${letter} and time: ${time}`);
//         setTimeout(() => {
//             console.log(`Executed at: ${getTime()}\t with the letter: ${letter} and time: ${time}\t --executed`);
//             // console.log(`SetTimeout executed at: ${getTime()} with the letter: ${letter}`)
//             resolve()
//         }, time);
//     })
// }

// const execution = async () => {

//     const a = executeWithTimeout('A',time.A);
//     const d = executeWithTimeout('D',time.D);
//     Promise.all([a,d]).then(() =>  executeWithTimeout('C', time.C));
//     a.then(() =>  executeWithTimeout('B', time.B));

// }

// const main = async () => {
//     // console.log('Starting at:', new Date().getTime());
//     // await execution();

//     const promiseA = executeWithTimeout('A',time.A);
//     const promiseD = executeWithTimeout('D',time.D);

//     promiseA.then(() =>  executeWithTimeout('B', time.B));

//     Promise.all([promiseA,promiseD]).then(() =>  executeWithTimeout('C', time.C));
    
//     // console.log('Completed at:', new Date().getTime());
// };
// main();