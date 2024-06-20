const tick = Date.now()
function getTime(){
    return ((Date.now() - tick)/1000 === 0 ? "0.0" : ((Date.now() - tick)/1000).toFixed(2))
}

// Set - 1
// const time = {
//     A : 1000,
//     B : 1000,
//     C : 1000,
//     D : 2000,
// }

// Set - 2
const time = {
    A : 2000,
    B : 3000,
    C : 1000,
    D : 1000,
}

// Set - 3
// const time = {
//     A : 1000,
//     B : 1000,
//     C : 1000,
//     D : 1000,
// }

function executeWithTimeout(letter, time){
    return new Promise((resolve, reject) => {
        console.log(`Executed at: ${getTime()}\t with the letter: ${letter} and time: ${time}`);
        setTimeout(() => {
            console.log(`Executed at: ${getTime()}\t with the letter: ${letter} and time: ${time}\t --executed`);
            resolve()
        }, time);
    })
}

const main = async () => {
    console.log('Starting at:', new Date().toTimeString());

    const promiseA = executeWithTimeout('A',time.A);
    const promiseD = executeWithTimeout('D',time.D);
    // after a ends starts
    const promiseB = promiseA.then(() =>  executeWithTimeout('B', time.B));
    // after a and d ends
    const promiseC = Promise.all([promiseA,promiseD]).then(() =>  executeWithTimeout('C', time.C));
    
    Promise.all([promiseC, promiseB]).then(() => console.log('Completed at:', new Date().toTimeString()));
};
main();