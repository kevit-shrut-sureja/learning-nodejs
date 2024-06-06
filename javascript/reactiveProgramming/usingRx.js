// const  Observable = require( "rxjs" ); 
const myPromise = new Promise( resolve => {
    setTimeout(() => {
        resolve("shrut");
    }, 100);
});

myPromise.then((data) => console.log("Promise : ",data));

// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 1000);
// });

// myObservable.subscribe(result => {
//     console.log('Observable :', result);
// })