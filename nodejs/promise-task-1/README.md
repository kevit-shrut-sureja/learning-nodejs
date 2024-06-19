# Promise Task - 1

## Sub task - 1

### Method - 1

```javascript
const timeoutPromise = (interval, intervalName) => {...}; // No changes here so hidden this in readme

let main = () => {
    ...
    Promise.all([
        timeoutPromise(1000,"IN1"),
        timeoutPromise(3000,"iN2"),
        timeoutPromise(2000,"iN3"),
        timeoutPromise(4000,"IN4"),
        timeoutPromise(2000,"iN5"),
    ]).then(() => console.log('Completed at:', new Date().toString()))
};
```

### Method - 2
```javascript
const timeoutPromise = (interval, intervalName) => {...}; // No changes here so hidden this in readme

let main = async () => {
    ...
    await Promise.all([
        timeoutPromise(1000,"IN1"),
        timeoutPromise(3000,"iN2"),
        timeoutPromise(2000,"iN3"),
        timeoutPromise(4000,"IN4"),
        timeoutPromise(2000,"iN5"),
    ]) 
    ...
};
```

### Output 
![image](https://github.com/kevit-shrut-sureja/learning-nodejs/assets/171539656/e71d6534-65d6-49c6-b737-f3a2dc45751e)


## Sub task - 2

```javascript
const tick = Date.now()
function getTime(){
    return ((Date.now() - tick)/1000 === 0 ? "0.0" : ((Date.now() - tick)/1000).toFixed(2))
}

const time = {
    A : 1000,
    B : 1000,
    C : 1000,
    D : 1000,
}

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
```

### Set - 1 
``` javascript
const time = {
    A : 1000,
    B : 1000,
    C : 1000,
    D : 2000,
}

```
![image](https://github.com/kevit-shrut-sureja/learning-nodejs/assets/171539656/83f4ebaf-0f5a-4c33-81f8-ef3ebc67f915)

### Set - 2 
``` javascript
const time = {
    A : 2000,
    B : 3000,
    C : 1000,
    D : 1000,
}

```
![image](https://github.com/kevit-shrut-sureja/learning-nodejs/assets/171539656/14ca9821-7372-4018-8bd7-0aec50f47df9)

### Set - 3
``` javascript
const time = {
    A : 1000,
    B : 1000,
    C : 1000,
    D : 1000,
}

```
![image](https://github.com/kevit-shrut-sureja/learning-nodejs/assets/171539656/9bdd8dfe-e417-43ca-8500-f03994f5022c)
