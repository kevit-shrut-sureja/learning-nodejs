const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

function delay(time){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time);
    })
}
// Basic
const getFruit = async name => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    };
    if(name === "peach")await delay(1000)
    else await delay(1000)
    return fruits[name];
};
  
// getFruit('peach').then(console.log);
  
  // Async + Await
  
const makeSmoothie = async () => {
    const a =  getFruit('pineapple');
    const b = await getFruit('strawberry');

    return Promise.any([a, b]);
};

const makeSmoothie2 = () => {
    let a;
    return getFruit('pineapple')
        .then(v => {
            a = v;
            return getFruit('strawberry');
        })
        .then(v => [a, v]);
};

makeSmoothie().then((data) => log(data))

// const fruits = ['peach', 'pineapple', 'strawberry'];

// const fruitLoop = async () => {
// //   for(const f of fruits) {
// //     const emoji = await getFruit(f);
// //     log(emoji);
// //   }
// // * squence does note change but this is sequence loading
//   fruits.forEach(async (fruit) =>{
//     const emoji = await getFruit(fruit);
//     log(emoji);
//   })
//   // * sequence changes in this one but this is parallel 
// };
// fruitLoop()

// const fruitInspection = async () => {
//   if ((await getFruit('peach')) === '🍑') {
//     console.log('looks peachy!');
//   }
// };

// const getTodo = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

//   const { title, userId, body } = await res.json();

//   console.log(title, userId, body);
// };